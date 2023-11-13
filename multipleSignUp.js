// let name1 = document.getElementById("name");
// let phone = document.getElementById("number");
// let email = document.getElementById("email");
// let passwordEle = document.querySelector("#password");
// let confirmPasswordv = document.querySelector("#confirm-password");
// let submit = document.querySelector("#submit");
// let reset = document.getElementById("reset");
// let removeData = document.getElementById("removedata");

// reset.addEventListener("click",(e)=>{
//     e.preventDefault()
//    name1.value = "";
//    email.value = "";
//    phone.value = "";
//    passwordEle.value = "";
//    confirmPasswordv.value = "";
// })
// console.log(localStorage.getItem('count'))

// submit.addEventListener("click",(e)=>{
//     let count;
//     if((localStorage.getItem('count')) == null){
//      count = 0;
//     }
//     count = localStorage.getItem('count') 
//     e.preventDefault()
//     count ++;
//     localStorage.setItem('count',`${count}`);
//     localStorage.setItem(`name${count}`,name1.value);
//     localStorage.setItem(`email${count}`,email.value);
//     localStorage.setItem(`phone${count}`,phone.value);
//     localStorage.setItem(`password${count}`,passwordEle.value);
// })


// removeData.addEventListener("click",(e)=>{
//     e.preventDefault()
//     localStorage.clear();
// })