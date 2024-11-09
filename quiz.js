
let count=0;
let out=document.getElementById("output");


question1();
function question1(){
    let atm=0;

  one.onclick = function(){ 
    if(atm===0){  
    out.textContent= `not correct ,  correct answer is Blue Whale`;
    console.log(atm);
    atm=1;
    }
}

    two.onclick=function(){
        if(atm===0){
         out.textContent=`correct`;
        count++;
        atm=1;
        }
    }

    three.onclick=function(){
    if(atm===0){
    out.textContent= `not correct ,  correct answer is Blue Whale`;
    atm=1;
    }
}
    
    four.onclick=function(){
    if(atm===0){
    out.textContent= `not correct ,  correct answer is Blue Whale`;
   atm= 1;
    }
}
  next.onclick = function(){
    question2();
  }


}



function question2(){
const que=document.getElementById("question");
que.textContent= `2) which one is not a nighbouring country to india ?`;
 const one=document.getElementById("one");
one.textContent=`Pakistan`;
const two=document.getElementById("two");
two.textContent=`brazil`;
const three=document.getElementById("three");
three.textContent=`Nepal`;
const four=document.getElementById("four");
four.textContent=`bhutan`;


    let atm=0;

  one.onclick = function(){ 
    if(atm===0){  
    out.textContent= `not correct ,  correct answer is brazil`;
    console.log(atm);
    atm=1;
    }
}

    two.onclick=function(){
        if(atm===0){
         out.textContent=`correct`;
        count++;
        atm=1;
        }
    }

    three.onclick=function(){
    if(atm===0){
    out.textContent= `not correct ,  correct answer is brazil`;
    atm=1;
    }
}
    
    four.onclick=function(){
    if(atm===0){
    out.textContent= `not correct ,  correct answer is brazil`;
   atm= 1;
    }
}
  next.onclick = function(){
    question3();
  }


}
function question3(){
    const que=document.getElementById("question");
    que.textContent= `3) What is the capital city of india ?`;
     const one=document.getElementById("one");
    one.textContent=`Hyderabad`;
    const two=document.getElementById("two");
    two.textContent=`Banglore`;
    const three=document.getElementById("three");
    three.textContent=`New Delhi`;
    const four=document.getElementById("four");
    four.textContent=`Chennai`;
    
    
        let atm=0;
    
      one.onclick = function(){ 
        if(atm===0){  
        out.textContent= `not correct ,  correct answer is New Delhi`;
        console.log(atm);
        atm=1;
        }
    }
    
        three.onclick=function(){
            if(atm===0){
             out.textContent=`correct`;
            count++;
            atm=1;
            }
        }
    
        two.onclick=function(){
        if(atm===0){
        out.textContent= `not correct ,  correct answer is New Delhi`;
        atm=1;
        }
    }
        
        four.onclick=function(){
        if(atm===0){
        out.textContent= `not correct ,  correct answer is New Delhi`;
       atm= 1;
        }
    }
      next.onclick = function(){
        resultcard();
      }
    
    
    }
     
    function resultcard(){
       /* const title=document.getElementById("question");
        title.textContent=`Your Score is ${count} out of 3`;
        const one=document.getElementById("one");
    one.textContent=``;
    const two=document.getElementById("two");
    two.textContent=``;
    const three=document.getElementById("three");
    three.textContent=``;
    const four=document.getElementById("four");
    four.textContent=``;
      const next=document.getElementById("next");
      next.textContent=``;

     
    let out=document.getElementById("output");
    out.textContent=``;
    
        */
       const final=document.getElementById("box");
       final.textContent= `Your Score is ${count} out of 3`;

    }