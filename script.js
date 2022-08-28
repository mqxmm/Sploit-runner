let btngo = document.querySelector("#btngo"); //Переменная btngo прикрепляется к html объекту btngo
//btngo.addEventListener("click", fun); //Добавить евент к btngo чтобы по клику делать fun


     let ipatk = document.querySelector("#ipatk").value;
     let portatk = document.querySelector("#portatk").value;

//Функция fun где в переменные ipatk и portatk закидывается значение из html ipatk и portatk
function fun() {
     let ddl = document.getElementById("selectsystem");
     let selectedValue = ddl.options[ddl.selectedIndex].value;
    if (selectedValue == "viberite") {
        alert("Пожалуйста, выберите тип атаки из списка");
    }
   else if (selectedValue == "xp")
   {
   eel.winxp(ipatk,portatk);
   alert("Атака началась. Не закрывайте окно терминала.");
   }

   else if (selectedValue == "w7")
   {
   eel.w7(ipatk,portatk);
   alert("Атака началась. Не закрывайте окно терминала.");
   }

   else if (selectedValue == "w10")
   {
   eel.w10(ipatk,portatk);
   alert("Атака началась. Не закрывайте окно терминала.");
   }
    else if (selectedValue == "dos")
   {
   eel.dos(ipatk,portatk);
   alert("Атака началась. Не закрывайте окно терминала.");
   }
  else  if (selectedValue == "scan")
   {
   eel.scan(ipatk,portatk);
   alert("Атака началась. Не закрывайте окно терминала.");
   }
}

/*window.onresize = function (){
    if (window.outerWidth < 720 || window.outerHeight < 800){
        window.resizeTo(720, 800);
    }
}*/