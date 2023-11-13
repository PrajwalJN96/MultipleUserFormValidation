// let name1 = document.getElementById("name");

// let passwordEle = document.getElementById("password");

// let submit  = document.getElementById("submit");
// let reset  = document.getElementById("reset");

// let checkName = () =>{
//     let countS = Number(localStorage.getItem("count"));
//     for(let i = 1; i<=countS; i++){
//         let oriName = localStorage.getItem(`name${i}`);
//         let names = name1.value ;
//         console.log(oriName,names)
//     if(oriName === names){
//         return true;
//     }
// }
// }

// let passwordCheck= () => {
//     let countS = Number(localStorage.getItem("count"));

//     for(let i = 1; i<=countS; i++){
//     let oriPassword = localStorage.getItem(`password${i}`);
//     let password = passwordEle.value;
   
  
//     if(oriPassword === password){
//         return true;
//     }
// }
// }

// submit.addEventListener("click",(e)=>{
//     e.preventDefault()
//    let rightName = checkName();
//    let rightPassword = passwordCheck();
//    if(rightPassword && rightName){
//     window.location.href = "./indexh.html"
//    }
// })

// reset.addEventListener("click",(e)=>{
//     e.preventDefault()
//    name1.value = "";
//    password.value = "";
// })