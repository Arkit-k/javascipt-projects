
function toggleNewsLetter(){

    const newsLetter = document.getElementById("newsLetter");

    newsLetter.classList.toggle("active");
}

const button = document.getElementsByid("button");
button.addEventListener("click", () => {
  button.classList.toggle("active");
});

 function changecolor(newColor){
    document.body.style.backgroundColor=newColor;
 }
 changecolor("yellow");

 const newsLet= document.getElementById("newsLetter");

 function pickcolor(newColor){
    newsLet.style.backgroundColor=newColor;
 }
 pickcolor("white");

