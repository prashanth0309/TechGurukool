import { Component,ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LoadingController, ToastController,PopoverController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Quizzr } from '../../models/quizzr';
import { Quizz } from '../../pages/quizz/quizz';
import { Quizq } from '../../pages/quizq/quizq';



@Component({
    templateUrl: 'quizsel.html',
    selector: 'quizsel-page'
})
export class QuizSel {


    constructor(public navCtrl: NavController, navParams: NavParams,public alertCtrl: AlertController,
        public toastController: ToastController, public loadingController: LoadingController){





        }

}