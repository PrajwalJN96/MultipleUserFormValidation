let name1 = document.getElementById("name");
let phone = document.getElementById("number");
let email = document.getElementById("email");
let passwordEle = document.querySelector("#password");
let confirmPasswordv = document.querySelector("#confirm-password");
let submit = document.querySelector("#submit");
let reset = document.getElementById("reset");
let removeData = document.getElementById("removedata");

let nameOut = document.querySelector("#nameout")
let emailOut = document.getElementById("emailout")
let emailEle = document.getElementById("email");
let numOut = document.getElementById("numout")
let numberEle = document.getElementById("number");
let passOut = document.querySelector("#passout")
let confpassOut = document.querySelector("#confpassout")


let checkName = () =>{
    let names = name1.value 
    let nameFlag = true;
for(let i = 0; i<names.length; i++){
    if(names[i].charCodeAt() >= 48 && names[i].charCodeAt() <= 57){
        nameFlag = false
    }
}
    if(nameFlag){
        nameOut.classList.add("valid")
        nameOut.innerText = "Valid input"
        return true;
    }else{
        nameOut.classList.remove("valid")
        nameOut.innerText = "Invalid input,(Number should not be present)"
    }
}



let checkNumber = () =>{
    let number = numberEle.value;
if(number.length == 10){
    numOut.classList.add("valid")
    numOut.innerText = "Valid input"
    return true;
}else{
    numOut.classList.remove("valid")
    numOut.innerText = "Invalid input, ( 10-digit number)"
}
}



let cheackEmail = () =>{
    let email = emailEle.value;
    let at = false
    for(let i = 0; i<email.length; i++){
        if(email[i].charCodeAt() == 64){
            at = true
        }
    }
    let com = email.slice(-4);
    if(at && com === '.com'){
        emailOut.classList.add("valid")
        emailOut.innerText = "Valid email"
        return true;
    }else{
        emailOut.classList.remove("valid")
        emailOut.innerText = "Invalid email address"
    }
}



let passwordCheck= () => {
    let password = passwordEle.value;
    let Pcount = password.length;
    console.log(password)
    let PUcount = false
    let PLcount = false
    let PNcount = false
    let PScount = false

for(let i =0; i<password.length; i++){
    if((password[i].charCodeAt() >= 65 && password[i].charCodeAt() <= 90)){
        PUcount = true       
    }
    if(password[i].charCodeAt() >= 97 && password[i].charCodeAt() <= 122){
        PLcount = true
    }
    if(password[i].charCodeAt() >= 48 && password[i].charCodeAt() <= 57){
        PNcount = true
    }
    if((password[i].charCodeAt() < 65 || password[i].charCodeAt() > 90)
    && (password[i].charCodeAt() < 97 || password[i].charCodeAt() > 122)
    && (password[i].charCodeAt() < 48 || password[i].charCodeAt() > 57)
    ){
        PScount = true
    }
}
console.log(Pcount)
if(PUcount && PLcount && PNcount  && PScount && Pcount>=8){
    console.log("valid")
    passOut.classList.add("valid")
    passOut.innerText = "valid input";
    return true;
}else{
    passOut.classList.remove("valid")
    passOut.innerText = "(Must contain 1 Upper Case,1 Lower Case,1 Number, 1 Special Character and 8 characters long)";
}
}

let checkCofirmPassword = (password) =>{
    let confirmPassword = confirmPasswordv.value;
    if(confirmPassword === passwordEle.value){
        confpassOut.classList.add("valid")
        confpassOut.innerText = "valid input"
        return true;
    }else{
        confpassOut.classList.remove("valid")
        confpassOut.innerText = "invalid input"
    }
}


submit.addEventListener("click",(e)=>{
    e.preventDefault()
    let ps = passwordCheck();
    let cps = checkCofirmPassword(password)   
    let cna = checkName()
    let cnm = checkNumber()
    let ce = cheackEmail()
    if(ps && cps && cna && cnm && ce){
        let count;
        if((localStorage.getItem('count')) == null){
         count = 0;
        }
        count = localStorage.getItem('count') 
        e.preventDefault()
        count ++;
        localStorage.setItem('count',`${count}`);
        localStorage.setItem(`name${count}`,name1.value);
        localStorage.setItem(`email${count}`,email.value);
        localStorage.setItem(`phone${count}`,phone.value);
        localStorage.setItem(`password${count}`,passwordEle.value);
    }
})

reset.addEventListener("click",(e)=>{
    e.preventDefault()
   name1.value = "";
   email.value = "";
   phone.value = "";
   password.value = "";
   confirmPasswordv.value = "";
})



removeData.addEventListener("click",(e)=>{
    e.preventDefault()
    localStorage.clear();
})
