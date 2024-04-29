let ddc = document.getElementsByClassName("accordion");
console.log(ddc);
var  i;
for(i=0; i<=ddc.length; i++){
 ddc[i].addEventListener("click" , function(e){
    console.log(e);
e.forEach( function() {
     ddc.child.classLisnt.remove("active")
});
    
})


}