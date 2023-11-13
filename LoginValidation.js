let name1 = document.getElementById("name");
let nameOut = document.querySelector("#nameout")

let passwordEle = document.getElementById("password");
let passOut = document.querySelector("#passout")

let submit  = document.getElementById("submit");
let reset  = document.getElementById("reset");

let checkName = () =>{
    let countS = Number(localStorage.getItem("count"));
    for(let i = 1; i<=countS; i++){
        let oriName = localStorage.getItem(`name${i}`);
   let names = name1.value 

    if(oriName === names){
        nameOut.classList.add("valid")
        nameOut.innerText = "Valid input"
        return true;
    }else{
        nameOut.classList.remove("valid")
        nameOut.innerText = "Wrong Name"
    }
}
}

let passwordCheck= () => {
    let countS = Number(localStorage.getItem("count"));

    for(let i = 1; i<=countS; i++){
    let oriPassword = localStorage.getItem(`password${i}`);
    let password = passwordEle.value;
   
  
    if(oriPassword === password){
        passOut.classList.add("valid")
        passOut.innerText = "Valid input"
        return true;
    }else{
        passOut.classList.remove("valid")
        passOut.innerText = "Wrong Password"
    }
}
}

submit.addEventListener("click",(e)=>{
    e.preventDefault()
   let rightName = checkName();
   let rightPassword = passwordCheck();
   if(rightPassword && rightName){
    window.location.href = "./indexh.html"
   }
})

reset.addEventListener("click",(e)=>{
    e.preventDefault()
   name1.value = "";
   password.value = "";
})