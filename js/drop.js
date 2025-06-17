var dropDown = document.querySelector(".dropbtn");
var dropDownDiv = document.querySelector(".dropdown");
dropDown.addEventListener("click", function(){
  dropDownDiv.classList.toggle('show_menu');
});