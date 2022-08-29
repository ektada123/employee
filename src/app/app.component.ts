import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ekta1';
  ekta : boolean =true;
  yadav: boolean=true;
ekta1 = { name:"ekta", sname : "yadav"};
ekta2 : boolean=false;
tax =10;
color ="black";
textcolor = 'red'
style = 'c3';
style1 ="c5";
img1="assets/download.jpg";
ekta3(){
  console.log("this is my new event binding")
};
style11= "red";
contact = [
  {name:"ekta" ,sname : "yadava", id :52 },
  {name:"yoginder" ,sname : "yadava", id :53 },
  {name:"jasram" ,sname : "yadava", id :54 },
  {name:"santosh" ,sname : "yadava", id :55 },
  {name:"papa" ,sname : "yadava", id :56 },
];
colval=2;
month =2;
today  = new Date();
 username = "this is ekta yadav";
 num = 58;
 num1 = 0.25624;

}
