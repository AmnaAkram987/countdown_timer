import inquirer from 'inquirer'
import chalkAnimation from 'chalk-animation'
import boxen from 'boxen'
//import * as clear from 'clear';
//import {clear} from console;
import { differenceInMilliseconds } from "date-fns";
import chalk from 'chalk';

class countdowntimer{
  public enddate:string=''

 public newdate =new Date();

 async getdifference(){
   const displaytext:string='We will be  right back soon ';

   const newdate= new Date()
    let difference = differenceInMilliseconds(this.enddate,newdate)
    
    if(difference<0){
      return
    }
    else{
        const seconds:number=Math.floor(difference/1000);
        const minutes:number=Math.floor(seconds/60);
        const hours:number=Math.floor(minutes/60);
        const days:number=Math.floor(hours/24);
        const remainingsec:number=Math.floor(seconds%60)
        const remainingmin:number=Math.floor(minutes%60)
        const remaininghours:number=Math.floor(hours%24);
    
    

    const displaytimedifference=    ` ${chalk.magenta.bold(
       days
       )} Days | ${chalk.green.bold(remaininghours)} Hours | ${chalk.blue.bold(
       remainingmin
       )} Minutes | ${chalk.red.bold(remainingsec)} Seconds `;
     
     //clear()

     console.log(boxen(`

       ${chalk.bold.cyan(displaytext)}
       
       ${ 
          boxen(displaytimedifference)}
          `
       ,
        { title:'Countdown Timer Project ',
         titleAlignment:'center',
         padding:1,
         margin:1,
         textAlignment:'center',
         borderStyle:'double',
         borderColor:'magenta'
       }
       ))
 }
}
 startcountdown(){
  setTimeout( ()=>{
   this.getdifference()
  },1000)
}

async getenddate(){
const  userresponse=await inquirer.prompt([{
     type:'input',
     name:'date',
     message:`Enter Countdown enddate in this format --->${chalk.bold.green('1 February 2024 12:00:00 PM')}`
}])
 this.enddate=userresponse.date;
 this.startcountdown();

}
} 


const timer=new countdowntimer()

timer.getenddate()