let userData = document.querySelector('.inputbox input');
let addBtn = document.querySelector('.inputbox button');
let list = [];

addBtn.addEventListener('click', ()=>{
    let data = userData.value;
    list.push(data)
   
})
let txt = ''
for(let i = 0; i<list.length; i++){
  txt += list[i]
}
console.log(list)

