// let userData = document.querySelector('.inputbox input');
// let addBtn = document.querySelector('.inputbox button');
// let list = [];
// let listItem = document.querySelector('.list');

// addBtn.addEventListener('click', ()=>{
//     let data = userData.value;
//     list.push(data)
//     setVal()
// })
// function setVal(){
//     list.forEach((val)=>{
//         let li = document.createElement('li')
//         li.innerHTML =`<li><span>${val}</span> <span>X</span></li>`
//         listItem.appendChild(li)
//     })
// }

const entry = document.querySelector(".inputbox input");
const add_button = document.querySelector(".inputbox button");
const task_list = document.querySelector(".list");
const err = document.querySelector(".err");


add_button.onclick = () => {
    let taskText = entry.value.trim();
    if (taskText !== "") {
        let li = document.createElement("li");

        entry.value = "";



        // validation 
        err.style.display = "none";
        entry.style.border = "none";

    } else {


        
         // validation 
        err.style.display = "block";
        entry.style.border = "1px solid red";
        err.innerText = "Value can't be empty !";
    }


};


