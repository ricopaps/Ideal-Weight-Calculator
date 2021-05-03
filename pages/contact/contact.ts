import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
  styleUrls:['contact.css']
})
export class ContactPage {

 feet: number;
  inch: number;
  weight1: number;
  weight2: number;
  weight3: number;
  weight4: number;
  gender: string;
 
  calculateM(){
    this.weight1 = 52+1.9*((this.feet-5)+this.inch);
    this.weight1 = parseFloat(this.weight1.toFixed(2));
    
    this.weight2 = 56.2+1.41*((this.feet-5)+this.inch);
    this.weight2 = parseFloat(this.weight2.toFixed(2));
 
    this.weight3 = 48+2.7*((this.feet-5)+this.inch);
    this.weight3 = parseFloat(this.weight3.toFixed(2));
 
    this.weight4 = 50+2.3*((this.feet-5)+this.inch);
    this.weight4 = parseFloat(this.weight4.toFixed(2));
  }
 
  calculateF(){
    this.weight1 = 49+1.7*((this.feet-5)+this.inch);
    this.weight1 = parseFloat(this.weight1.toFixed(2));
    
    this.weight2 = 53.1+1.36*((this.feet-5)+this.inch);
    this.weight2 = parseFloat(this.weight2.toFixed(2));
 
    this.weight3 = 45.5+2.2*((this.feet-5)+this.inch);
    this.weight3 = parseFloat(this.weight3.toFixed(2));
 
    this.weight4 = 45.5+2.3*((this.feet-5)+this.inch);
    this.weight4 = parseFloat(this.weight4.toFixed(2));
  }
  constructor(public navCtrl: NavController) {
 
  }
 
}

