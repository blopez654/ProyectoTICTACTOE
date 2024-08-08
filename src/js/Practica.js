const cont = document.getElementsByClassName("cont");
const etiquetaP = document.getElementById("etiquetaP")

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

 

   if (cont[0].textContent==="X" && cont[1].textContent==="X" && cont[2].textContent==="X")  {
      etiquetaP.textContent = "¡Ganaste!"
   }
    
   if (cont[3].textContent==="X" && cont[4].textContent==="X" && cont[5].textContent==="X") {
    etiquetaP.textContent = "¡Ganaste!"
   }
 
   if (cont[6].textContent==="X" && cont[7].textContent==="X" && cont[8].textContent==="X") {
    etiquetaP.textContent = "¡Ganaste!"
   }

   if (cont[0].textContent==="X" && cont[3].textContent==="X" && cont[6].textContent==="X") {
    etiquetaP.textContent = "¡Ganaste!"
   }

   if (cont[1].textContent==="X" && cont[4].textContent==="X" && cont[7].textContent==="X") {
   etiquetaP.textContent = "¡Ganaste!"
   }
 
   if (cont[2].textContent==="X" && cont[5].textContent==="X" && cont[8].textContent==="X") {
   etiquetaP.textContent = "¡Ganaste!"
   }

   if (cont[0].textContent==="X" && cont[4].textContent==="X" && cont[8].textContent==="X") {
    etiquetaP.textContent = "¡Ganaste!"
   }

   if (cont[2].textContent==="X" && cont[4].textContent==="X" && cont[6].textContent==="X") {
    etiquetaP.textContent = "¡Ganaste!"
   };
    
   if (cont[0].textContent==="O" && cont[1].textContent==="O" && cont[2].textContent==="O") {
    etiquetaP.textContent = "¡Perdiste!"
   };

   if (cont[3].textContent==="O" && cont[4].textContent==="O" && cont[5].textContent==="O") {
    etiquetaP.textContent = "¡Perdiste!"
   };
  
   if (cont[6].textContent==="O" && cont[7].textContent==="O" && cont[8].textContent==="O") {
    etiquetaP.textContent = "¡Perdiste!"
   };

   if (cont[0].textContent==="O" && cont[3].textContent==="O" && cont[6].textContent==="O") {
    etiquetaP.textContent = "¡Perdiste!"
   };

   if (cont[1].textContent==="O" && cont[4].textContent==="O" && cont[7].textContent==="O") {
    etiquetaP.textContent = "¡Perdiste!"
   }
 
   if (cont[2].textContent==="O" && cont[5].textContent==="O" && cont[8].textContent==="O") {
    etiquetaP.textContent = "¡Perdiste!"
   }

   if (cont[0].textContent==="O" && cont[4].textContent==="O" && cont[8].textContent==="O") {
    etiquetaP.textContent = "¡Perdiste!"
   }
 
   if (cont[2].textContent==="O" && cont[4].textContent==="O" && cont[6].textContent==="O") {
    etiquetaP.textContent = "¡Perdiste!"
    
   }







   })
};
    





