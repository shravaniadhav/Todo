let btn=document.querySelector("button");
let ul=document.querySelector("ul");
let inp=document.querySelector("input");

btn.addEventListener("click", function(){
     if(inp.value.trim() === ""){
        alert("Please enter a task");
        return;
    }

    let item = document.createElement("li");
    item.innerText = inp.value;

    let delBtn = document.createElement("button");
    delBtn.innerText="delete";
    delBtn.classList.add("delete");

    item.appendChild(delBtn);
    ul.appendChild(item);
    inp.value="";
});

let delBtns = document.querySelectorAll(".delete");

for(delBtn of delBtns){
    delBtn.addEventListener("click", function(){
        let par = this.parentElement;
        par.remove();
    })
}

ul.addEventListener("click",function(event){
    if(event.target.nodeName=="BUTTON"){
        let listItem = event.target.parentElement;
        listItem.remove();
        console.log("deleted");
    }
})