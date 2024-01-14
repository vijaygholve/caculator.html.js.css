let str="";
let btn=document.querySelectorAll(".button1");
Array.from(btn).forEach((btn1)=>{
   
btn1.addEventListener("click",(c)=>{
    if(c.target.innerHTML == "="){
    str=eval(str);
    document.querySelector("input").value=str;
    }
else if(c.target.innerHTML=="C"){
str="";
document.querySelector("input").value=str;

}
    
    else{
console.log(c.target);
str=str+c.target.innerHTML;
document.querySelector("input").value=str;
    }
});


});



