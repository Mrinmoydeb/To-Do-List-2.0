let userData = document.querySelector('.inputbox input');
let addBtn = document.querySelector('.inputbox button');
let list = [];
let listItem = document.querySelector('.list');


addBtn.addEventListener('click', ()=>{
    let data = userData.value;
    list.push(data)
    setVal()
})
function setVal(){
    list.forEach((val)=>{
        let li = document.createElement('li')
        li.innerHTML =`<li><span>${val}</span> <span>X</span></li>`
        listItem.appendChild(li)
    })
}

