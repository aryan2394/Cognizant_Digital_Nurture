let chips=document.querySelector(".d1");
let burger=document.querySelector(".d2");
let choco=document.querySelector(".d3");
let c=0;
let b=0;
let ch=0;
document.querySelector(".addChips").addEventListener("click",()=>
{
    chips.textContent=++c;
})
document.querySelector(".addBurger").addEventListener("click",()=>
{
    burger.textContent=++b;
})
document.querySelector(".addChoco").addEventListener("click",()=>
{
    choco.textContent=++ch;
})