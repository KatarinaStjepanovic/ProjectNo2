const btn1=document.getElementById("opt1");
const btn2=document.getElementById("opt2");
const btn3=document.getElementById("opt3");
const options=document.getElementsByClassName("buttons");
let currentQuestion=0;
let score=0;

const buttons=[btn1,btn2,btn3];
const rightQuestion=[1,0,2,0,2,0];

btn1.addEventListener("click",qf);
btn2.addEventListener("click",qf);
btn3.addEventListener("click",qf);

const image=document.getElementById("image");

const next=document.getElementById("next");
next.addEventListener("click",np);

const opt =[
    ["Idris Elba","Barack Obama","Will Smith"],
    ["Beyonce","Rihanna","Solange Knowles"],
    ["Robert Downey Jr.","Tom Hardy","Elon Musk"],
    ["Dwayne Johnson","John Cena","Dave Bautista"],
    ["Christiano Ronaldo","Sergio Aguero","Lionel Messi"],
    ["Serena Williams","Naomi Osaka","Coco Gauf"]



];
const srcKid=[
    "./materials/obama.kid.png",
    "./materials/beyonce.kid.png",
    "./materials/elon.kid.png",
    "./materials/rock.kid.png",
    "./materials/messi.kid.png",
    "./materials/serena.kid.png"




]

const srcOld=[
    "./materials/obama.old.png",
    "./materials/beyonce.old.png",
    "./materials/elon.old.png",
    "./materials/rock.old.png",
    "./materials/messi.old.png",
    "./materials/serena.old.png"





]
    

    
   



function showQuestion(){
    for(let i = 0; i < options.length; i++){
        const buttonElements = options[i].getElementsByTagName("button");
    
        for(let j = 0; j < buttonElements.length; j++){
            buttonElements[j].textContent = opt[currentQuestion][j];
            
        }
    }
    
}

window.onload=showQuestion;




let userClickIndex;


function qf(){
    userClickIndex = buttons.indexOf(this);
    this.style.backgroundColor="#8b5cf6";
    var newElement=document.createElement('i');
    newElement.style.color="#29175e";
    newElement.style.margin="10px";
    newElement.className="fa-solid fa-xmark";
  if(!isCorrect()){ 
    this.appendChild(newElement);

  }
  
   
    
  
        
    image.src=srcOld[currentQuestion];
    buttons[rightQuestion[currentQuestion]].style.backgroundColor="#2e1065";
    buttons[rightQuestion[currentQuestion]].style.color="white";
    var correct=document.createElement("i");
    correct.style.color="white";
    correct.style.margin="10px";
    correct.className="fa-solid fa-check";

    buttons[rightQuestion[currentQuestion]].appendChild(correct);
   
    
}


function np(){
    currentQuestion++;
    const page=document.getElementById("number");
    page.textContent=currentQuestion+1;
    const heading=document.querySelector("h1");
    if(currentQuestion===6){
        next.remove();
        image.remove();
        btn1.remove();
        btn2.remove();
        btn3.remove();
        
       let displayScore=document.createElement("p");
       displayScore.textContent="Your score is " + score +"/6!";
       displayScore.style.marginRight="400px";
       displayScore.style.marginLeft="400px";
       displayScore.style.fontWeight="bold";
       displayScore.style.color="#1c103d";
       displayScore.style.fontSize="large";
       displayScore.style.fontFamily="Poetsen One";

       
       const gifUrl="./materials/giphy.gif";
       const gif=document.createElement("img");
       gif.src=gifUrl;
      heading.insertAdjacentElement("afterend",displayScore);

      displayScore.insertAdjacentElement("afterend",gif);




    }
    else{
        image.src=srcKid[currentQuestion];
   
        buttons.forEach(color);
         showQuestion();
    }
   
 
    
}

function color(button){
    button.style.backgroundColor="#ebeaf3";
    button.style.color="#2e1065";

}

function isCorrect(){
   if(userClickIndex===rightQuestion[currentQuestion]) {
    score++;
    return 1;
   }
   else{
    
    return 0;
   }
}




