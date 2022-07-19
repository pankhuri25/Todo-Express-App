let tasks = [];
const taskList = document.getElementById('list');
const addTaskInput = document.getElementById('add');
const tasksCounter = document.getElementById('tasks-counter');

// console.log('Working');

async function fetchToDos() {
    // fetch('https://jsonplaceholder.typicode.com/todos')
    // .then(function(response){
    //     // console.log(response);
    //     return response.json();
    // })
    // .then(function(data){
    //     tasks = data.slice(0,10);
    //     renderList();
    //     // console.log(data);
    // })
    // .catch((error)=>console.log("Error:", error));

    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        const data = await response.json();
        tasks = data.slice(0,10);
        renderList();
    }
    catch(error){
        console.log(error);
    }

    
}

function addTasksToDOM(task){
    const li = document.createElement('li');

    li.innerHTML=`
    <input type="checkbox" id="${task.id}" ${task.completed ? 'checked' : ''} class="custom-checkbox">
    <label for="${task.id}">${task.title}</label>
    <img src="bin.svg" class="delete" data-id="${task.id}" />
    `;

    taskList.append(li);
}

function renderList () {
    taskList.innerHTML='';

    for(let i=0; i<tasks.length; i++)
    {
        addTasksToDOM(tasks[i]);
    }
    tasksCounter.innerHTML=tasks.length
}

function markTaskAsComplete (taskId) {
    const task = tasks.filter((task)=> {
        return task.id === taskId;
    });
    // console.log(task);
    if(task){
        const t = task[0];
        t.completed = !t.completed;
        renderList();
        showNotification("Task Completed!")
        return;
    }
    showNotification("Something went wrong!")
}

function deleteTask (taskId) {
    if(taskId){
        tasks.pop(taskId);
    }

    // const newTasks = tasks.filter((task)=> {
    //     return task.id !== taskId;
    // });
    // tasks = newTasks;
    renderList();
    showNotification("Task Removed Successfully");
}

function addTask (task) {
    if(task){
        tasks.push(task);
        renderList();
        showNotification("Task Added Successfully!");
        return;
    }
    showNotification("Task cannot be added!");


    // Using POST method to add task to a server:

    // if(task){
    //     fetch('https://jsonplaceholder.typicode.com/todos', 
    //     {
    //         method: 'POST', 
    //         headers: {'Content-Type': 'application/json'}, 
    //         body: JSON.stringify(task)
    //     })
    //     .then(function(response){
    //         // console.log(response);
    //         return response.json();
    //     })
    //     .then(function(data){
    //         tasks.push(task);
    //         renderList();
    //         showNotification("Task Added Successfully!");
    //     })
    //     .catch((error)=>console.log("Error:", error));
    // }
    
    
}

function showNotification(text) {
    alert(text);
}

function handleKeyboardInput(e){
    // var text=''
    
    if(e.key==='Enter'){
        const text = e.target.value;
    
        console.log(text);

        if(!text){
            showNotification("Input some text");
            return;
        }

        const task={
            title: text,
            id: Date.now(),
            completed: false
        }
        e.target.value="";

        addTask(task);
    }
}

function handleClickInput(e){
    const input=e.target;
    // console.log(input);

    if(input.className==='custom-checkbox'){
        markTaskAsComplete(input.id);
        return; 
    }
    else if(input.className==='delete'){
        deleteTask(input.dataset.id);
        return;
    }
}

function initializeApp(){
    fetchToDos();
    addTaskInput.addEventListener('keyup', handleKeyboardInput);
    document.addEventListener('click', handleClickInput);
}

initializeApp();