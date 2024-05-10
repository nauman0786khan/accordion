const ddc = document.querySelectorAll(".accordion");
console.log(ddc);
   for(let i=0; i < ddc.length; i++){
    
     
      ddc[i].addEventListener("click" , function(){
console.log()

 ddc.forEach((e)=> {
 e.classList.remove("active") 
});
this.classList.add("active");

})
   }