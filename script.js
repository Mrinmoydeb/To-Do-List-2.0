const entry = document.querySelector(".inputbox input");
const add_button = document.querySelector(".inputbox button");
const add_button_innerTxt = add_button.innerText;
const task_list = document.querySelector(".list");
const countValue = document.querySelector(".pending-task");
const err = document.querySelector(".err");
let taskCount = 0;

add_button.onclick = () => {
  add_button.innerText = add_button_innerTxt;
  let taskText = entry.value.trim();
  if (taskText !== "") {
    const task = `<li class="li-list">
       <input type="checkbox" class="check-box">
       <span class="task-name">${taskText}</span>
       <button class="editBtn">Edit</button>
       <button class="dltBtn">Delete</button>
       </li>`;
    task_list.insertAdjacentHTML("beforeend", task);
    let dltButtos = document.querySelectorAll(".dltBtn");

    function checkDelete(chck) {
      dltButtos.forEach((dButtons) => {
        dButtons.onclick = () => {
          if (!chck.checked) {
            dButtons.parentElement.remove();
            taskCount -= 1;
            displayCount(taskCount);
          } else {
            dButtons.parentElement.remove();
          }
        };

      });
    }


      let editButton = document.querySelectorAll(".editBtn");
      editButton.forEach((editbutton, index) => {

        editbutton.onclick = (e) => {
          let targerEl = e.target.previousElementSibling.innerText;
          console.log(index);
           entry.value = targerEl;
           add_button.innerText = 'Save';
        };
      });
    

 

    let check_list = document.querySelectorAll('.check-box');
    check_list.forEach((chck) => {
      checkDelete(chck);
      chck.onchange = () => {
        chck.nextElementSibling.classList.toggle('done');
        if (chck.checked) {
          taskCount -= 1
        } else {
          taskCount += 1
        }
        displayCount(taskCount);
      }
    });
    taskCount += 1
    displayCount(taskCount);
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

function displayCount(taskCount) {
  countValue.innerText = taskCount;
}


//configure the bug on edit button,
