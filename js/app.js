var value=document.querySelector(".value");
var decrease=document.querySelector(".decrease");
var reset=document.querySelector(".reset");
var increase=document.querySelector(".increase");

var counter=0;
decrease.addEventListener("click",function(){
    counter--;
    value.innerHTML=counter;
    value.style.color="red";
})


reset.addEventListener("click",function(){
    counter=0;
    value.innerHTML=counter;
    value.style.color="#102a42";
})

increase.addEventListener("click",function(){
    counter++;
    value.innerHTML=counter;
    value.style.color="green";
})