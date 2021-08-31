//like buttons:
var likes = document.querySelectorAll(".like-btn");
for (let i = 0; i < likes.length; i++) 
{ likes[i].addEventListener("click", function ()
{
    if (likes[i].style.color === "black") {
    likes[i].style.color = "red";
    } else {
    likes[i].style.color = "black";
    }
});
}
//delete buttons:
var del_ete = document.querySelectorAll(".delete-btn")
for (let i=0; i<del_ete.length;i++){

    del_ete[i].addEventListener('click', function(){
        del_ete[i].parentElement.parentElement.parentElement.remove()
        sum()
    })
}
//plus buttons:
var plusbtn = document.querySelectorAll(".plus-btn");
for (let i = 0; i < plusbtn.length; i++) {
  plusbtn[i].addEventListener("click", function () {
     var number = parseInt(plusbtn[i].nextElementSibling.innerHTML);
     number = number + 1;
     plusbtn[i].nextElementSibling.innerHTML++
     plusbtn[i].nextElementSibling.innerHTML = number;
    sum()
  });
}
//minus buttons:
var minusbtn = document.querySelectorAll(".minus-btn");
for (let i = 0; i < minusbtn.length; i--) {
  minusbtn[i].addEventListener("click", function () {
     var number = parseInt(plusbtn[i].nextElementSibling.innerHTML);
     number = number - 1;
     plusbtn[i].nextElementSibling.innerHTML--
     plusbtn[i].nextElementSibling.innerHTML = number;
    sum()
  });
}
// total price function
function sum(){
    var prices=document.querySelectorAll('.price')
    var quantity=document.querySelectorAll('.number-items')
    var somme=0
    for (let i=0; i<prices.length;i++){
      
      somme= somme + prices[i].innerHTML *quantity[i].innerHTML
      console.log(somme)
      document.getElementById("total").innerHTML = somme;
    }
}





