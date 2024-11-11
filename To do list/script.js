const inputField = document.querySelector('.input-field textarea');
const toDoList = document.querySelector('.toDoList');
const pendingNum = document.querySelector('.pending-num');
const clearBtn = document.querySelector('.clear-button');

function allTasks(){
    const tasks = document.querySelector('.pending');
    pendingNum.textContent = tasks.length === 0? 'No' : tasks.length;
    let allLists = document.querySelector('.list');
    if(allLists.length > 0){
        toDoList.style.marginTop = '5';
        clearBtn.style.pointerEvents = 'auto';
        return;
    }

    toDoList.style.marginTop = '0';
    clearBtn.style.pointerEvents = 'none';
}

inputField.addEventListener('keyup', (e)=>{
    let inputVal = inputField.value.trim();
    if(e.key === 'Enter' && inputVal.length > 0){
        var taskList   = `
         <li class="list pending flex items-center bg-slate-200 p-[20px_15px] rounded-lg relative cursor-pointer mt-2" onclick='handleStatus(this)'>
           <input type="checkbox" name="" id="" class="h-4 min-w-4 "> 
           <span class="task m-[0_30px_0_15px] break-words">${inputVal}</span>
           <i class="fa-solid fa-trash-can hidden absolute top-1/2 right-[15px] transform translate-y-[-50%] text-2xl text-gray-500 focus:text-[##AB7B8E] p-1 hover:opacity-100" onclick='deleteTask()'></i>
        </li>
        `     
       toDoList.insertAdjacentHTML('beforeend', taskList);
       inputField.value ='';
        allTasks();
    }
})

function handleStatus(e){
    const checkbox = e.querySelector('input');
    console.log(checkbox);
    checkbox.checked = !checkbox.checked;
    e.classList.toggle('pending'); 
    allTasks();
    
}

function deleteTask(e){
    e.parentElement.remove();
    console.log(e.parentElement);
    allTasks();
}

clearBtn.addEventListener('click', ()=>{
    toDoList.innerHTML = '';
    allTasks();
})