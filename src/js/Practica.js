const cont = document.getElementsByClassName("cont");
const etiquetaP = document.getElementById("etiquetaP")
const boton = document.getElementById("boton")

let registro = (localStorage.getItem("registro"))||[]; 


for (let index = 0; index < cont.length; index++) {

    cont [index].addEventListener("click", function () {

       if (cont[index].textContent== "") {
         cont[index].textContent= "❤️";
         
       
       let listaVacia = [];   
   
       for (let index = 0; index < cont.length; index++) {
         if (cont[index].textContent === "") {
            listaVacia.push(cont[index]);
      
         }

        }
   
         
        if ( listaVacia.length > 0 ) {  
          let numeroA = Math.floor(Math.random()*listaVacia.length)
          listaVacia[numeroA].textContent="🖤";
          
        }
         
      }

 
   if (cont[0].textContent==="❤️" && cont[1].textContent==="X" && cont[2].textContent==="X")  {
      etiquetaP.textContent = "¡Ganaste!"
     
   }
    
   if (cont[3].textContent==="❤️" && cont[4].textContent==="X" && cont[5].textContent==="X") {
    etiquetaP.textContent = "¡Ganaste!"
    
   }
 
   if (cont[6].textContent==="❤️" && cont[7].textContent==="X" && cont[8].textContent==="X") {
    etiquetaP.textContent = "¡Ganaste!"
    
   }

   if (cont[0].textContent==="❤️" && cont[3].textContent==="X" && cont[6].textContent==="X") {
    etiquetaP.textContent = "¡Ganaste!"
    
   }

   if (cont[1].textContent==="❤️" && cont[4].textContent==="❤️" && cont[7].textContent==="❤️") {
   etiquetaP.textContent = "¡Ganaste!"
   }
 
   if (cont[2].textContent==="❤️" && cont[5].textContent==="❤️" && cont[8].textContent==="❤️") {
   etiquetaP.textContent = "¡Ganaste!"
   }

   if (cont[0].textContent==="❤️" && cont[4].textContent==="❤️" && cont[8].textContent==="❤️") {
    etiquetaP.textContent = "¡Ganaste!"
   }
   

   if (cont[2].textContent==="❤️" && cont[4].textContent==="❤️" && cont[6].textContent==="❤️") {
    etiquetaP.textContent = "¡Ganaste!"
   };
    
   if (cont[0].textContent==="🖤" && cont[1].textContent==="🖤" && cont[2].textContent==="🖤") {
    etiquetaP.textContent = "¡Perdiste!"
   };

   if (cont[3].textContent==="🖤" && cont[4].textContent==="🖤" && cont[5].textContent==="🖤") {
    etiquetaP.textContent = "¡Perdiste!"
   };
  
   if (cont[6].textContent==="🖤" && cont[7].textContent==="🖤" && cont[8].textContent==="🖤") {
    etiquetaP.textContent = "¡Perdiste!"
   };

   if (cont[0].textContent==="🖤" && cont[3].textContent==="🖤" && cont[6].textContent==="🖤") {
    etiquetaP.textContent = "¡Perdiste!"
   };

   if (cont[1].textContent==="🖤" && cont[4].textContent==="🖤" && cont[7].textContent==="🖤") {
    etiquetaP.textContent = "¡Perdiste!"
   }
 
   if (cont[2].textContent==="🖤" && cont[5].textContent==="🖤" && cont[8].textContent==="🖤") {
    etiquetaP.textContent = "¡Perdiste!"
   }

   if (cont[0].textContent==="🖤" && cont[4].textContent==="🖤" && cont[8].textContent==="🖤") {
    etiquetaP.textContent = "¡Perdiste!"
   }
 
   if (cont[2].textContent==="🖤" && cont[4].textContent==="🖤" && cont[6].textContent==="🖤") {
    etiquetaP.textContent = "¡Perdiste!"
    
   }
   
})
 

}
    





