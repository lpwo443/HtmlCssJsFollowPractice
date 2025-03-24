let clickpic=document.getElementsByClassName("panel");
let clickpiarry=Array.from(clickpic);
clickpiarry.forEach(function(element){
    element.addEventListener("click",function(){
        moveclass()
        element.classList.add("active")
    })
})
function moveclass(){
    clickpiarry.forEach((item)=>{
        item.classList.remove("active")
    })
    }
