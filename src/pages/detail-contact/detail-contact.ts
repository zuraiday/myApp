import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import { DetailContactPage} from '../../pages/detail-contact/detail-contact';
/**
 * Generated class for the DetailContactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail-contact',
  templateUrl: 'detail-contact.html',
})

export class DetailContactPage {
  public user = this.navParams.data
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

pushPerson(user){
  this.navCtrl.push(DetailContactPage, user)
}
  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad DetailContactPage');
  // }

}
