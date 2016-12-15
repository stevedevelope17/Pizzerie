import { Component } from '@angular/core';
import { AlertController, NavController, NavParams, ToastController } from 'ionic-angular';
import { UserSettings } from '../../shared/shared';

/*
  Generated class for the Detail page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html'
})
export class DetailPage {

pizza: any={};
isFollowing = false;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public alertController: AlertController,
              private toastController: ToastController,
              private userSettings: UserSettings) {}

  ionViewDidLoad() {
    
    this.pizza = this.navParams.data;
    this.userSettings.isFavoriteTeam(this.pizza.id).then(value => this.isFollowing = value);

  }
toggleFollow(){
    if (this.isFollowing) {
      let confirm = this.alertController.create({
        title: 'Unfollow?',
        message: 'Are you sure you want to unfollow?',
        buttons: [
          {
            text: 'Yes',
            handler: () => {
              this.isFollowing = false;
              this.userSettings.unfavoriteTeam(this.pizza);

              let toast = this.toastController.create({
                message: 'You have unfollowed this team.',
                duration: 2000,
                position: 'bottom'
              });
              toast.present(); 
            }
          },
          { text: 'No' }
        ]
      });
      confirm.present();
    } else {
      this.isFollowing = true;
      this.userSettings.favoriteTeam(this.pizza); 

    }
  } 
}
