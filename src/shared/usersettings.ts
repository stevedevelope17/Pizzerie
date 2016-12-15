import { Injectable } from '@angular/core';
import { Events } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { SQLite } from 'ionic-native';
import { SqlStorage } from './shared';


const win: any = window;

@Injectable()
export class UserSettings {
    //storage = new Storage(SqlStorage);
    public db: SQLite;
    public sql: SqlStorage;

    constructor(public events: Events, public storage: Storage) {
        if (win.sqlitePlugin) {
            this.sql = new SqlStorage();
        } else {
            console.warn('SQLite plugin not installed. Falling back to regular Ionic Storage.');
        }
    }

    favoriteTeam(pizza) {
        let item = { pizza:pizza};

        if (this.sql){
            this.sql.set(pizza.id.toString(), JSON.stringify(item)).then(data => {
                this.events.publish('favorites:changed');
            });
        } else {
            return new Promise(resolve => {
                this.storage.set(pizza.id.toString(), JSON.stringify(item)).then(() => {
                    this.events.publish('favorites:changed');
                    resolve();
                });
            });
        }
    }

    unfavoriteTeam(pizza) {
        if (this.sql){
            this.sql.remove(pizza.id.toString()).then(data => {
                this.events.publish('favorites:changed');
            });
        } else {
            return new Promise(resolve => {
                this.storage.remove(pizza.id.toString()).then(() => {
                    this.events.publish('favorites:changed');
                    resolve();
                });
            });
        }
    }

    isFavoriteTeam(pizzaId) {
        if (this.sql){
            return this.sql.get(pizzaId.toString()).then(value => value ? true : false);
        } else {
            return new Promise(resolve => resolve(this.storage.get(pizzaId.toString()).then(value => value ? true : false)));
        }
    }

    getAllFavorites(){
        if (this.sql){
            return this.sql.getAll();
        } else {
            return new Promise(resolve => {
                let results = [];
                this.storage.forEach(data => {
                    results.push(JSON.parse(data));
                });
                return resolve(results);
            });
        }
    }

    initStorage(){
        if (this.sql){
            return this.sql.initializeDatabase();
        } else {
            return new Promise(resolve => resolve());
        }
    }
}
