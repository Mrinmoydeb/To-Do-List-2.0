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
    var doneButton = document.createElement("input");
    var showval = document.createElement("p");
    if (taskText !== "") {
        let li = document.createElement("li");
        task_list.appendChild(li);
        let span_two = document.createElement("span");
        let span_one = document.createElement("span");

        span_one.onclick = completeTask;
        showval.textContent = taskText;
      
        doneButton.type = "checkbox";
        span_one.appendChild(doneButton);
        span_one.appendChild(showval);
        span_two.innerText = "Delete";
        span_two.onclick = onDelete;
        li.appendChild(span_one);
        li.appendChild(span_two);
        err.style.display = "none";
        entry.style.border = "none";
        entry.value = "";
    } else {
        err.style.display = "block";
        entry.style.border = "1px solid red";
        err.innerText = "Value can't be empty !";
    }

    function completeTask(e) {
     
        let t = e.target;
        t.onclick = () => {
            if (doneButton.checked) {
                showval.classList.add("done");
            } else {
                showval.classList.remove("done");
            };
        }

    }
};

function onDelete(e) {
    let task = e.target
    task.parentElement.remove();
}
 
