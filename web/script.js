let btngo = document.querySelector("#btngo");
//btngo.addEventListener("click", fun);


     let ipatk = document.querySelector("#ipatk").value;
     let portatk = document.querySelector("#portatk").value;


function fun() {
     let ddl = document.getElementById("selectsystem");
     let selectedValue = ddl.options[ddl.selectedIndex].value;
    if (selectedValue == "viberite") {
        alert("Please, choose the type of attack");
    }
   else if (selectedValue == "xp")
   {
   eel.winxp(ipatk,portatk);
   alert("Attack is started. Dont close the terminal.");
   }

   else if (selectedValue == "w7")
   {
   eel.w7(ipatk,portatk);
   alert("Attack is started. Dont close the terminal.");
   }

   else if (selectedValue == "w10")
   {
   eel.w10(ipatk,portatk);
   alert("Attack is started. Dont close the terminal.");
   }
    else if (selectedValue == "dos")
   {
   eel.dos(ipatk,portatk);
   alert("Attack is started. Dont close the terminal.");
   }
  else  if (selectedValue == "scan")
   {
   eel.scan(ipatk,portatk);
   alert("Attack is started. Dont close the terminal.");
   }
}

/*window.onresize = function (){
    if (window.outerWidth < 720 || window.outerHeight < 800){
        window.resizeTo(720, 800);
    }
}*/
