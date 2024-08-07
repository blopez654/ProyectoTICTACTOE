const cont = document.getElementsByClassName("cont");

for (let index = 0; index < cont.length; index++) {

    cont [index].addEventListener("click", function () {

       if (cont[index].textContent== "") {
         cont[index].textContent= "X";
         
       
       let listaVacia = [];
   
       for (let index = 0; index < cont.length; index++) {
         if (cont[index].textContent === "") {
            listaVacia.push(cont[index]);
      
         }

        }
   
         
        if ( listaVacia.length > 0 ) {  
          let numeroA = Math.floor(Math.random()*listaVacia.length)
          listaVacia[numeroA].textContent="O";
          
        }
         
      }
    let win

   })
};
    





