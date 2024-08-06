
const cont = document.getElementsByClassName("cont");

for (let index = 0; index < cont.length; index++) {

    cont [index].addEventListener("click", function () {
       cont[index].innerHTML= "X"
   
       let listaVacia = []
   
       for (let index = 0; index < listaVacia.length; index++) {
          
         if (cont[index].textContent === "") {
            listaVacia.push(index)
      
         }
            
       };
       
       let numeroA = Math.floor(Math.random()*listaVacia.length)
       listaN = listaVacia[numeroA]
       cont[numeroA].innerHTML="O"
       
})};
    





