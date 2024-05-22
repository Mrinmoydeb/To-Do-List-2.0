const entry = document.querySelector(".inputbox input");
const add_button = document.querySelector(".inputbox button");
const task_list = document.querySelector(".list");
const countValue = document.querySelector(".pending-task");
const err = document.querySelector(".err");
let taskCount = 0;

add_button.onclick = () => {
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
    dltButtos.forEach((dButtons) => {
      dButtons.onclick = (e) => {
        dButtons.parentElement.remove();
        console.log(e);
        taskCount -= 1;
        displayCount(taskCount);
      };
    });

    let editButton = document.querySelectorAll(".editBtn");
    editButton.forEach((editbutton) => {
      editbutton.onclick = (e) => {
        let targetElements = e.target;
        if (!(e.target.className == 'edit')) {
          targetElements = targetElements.parentElement;
        }
        entry.value = targetElements.previousElementSibling?.innerText;
        targetElements.parentElement.remove();
        taskCount -= 1;
        displayCount(taskCount)
      };
    });

    let check_list = document.querySelectorAll('.check-box');
    check_list.forEach((chck) => {
      console.log(chck);
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

