//grapping the add buttons
const addBtn1 = document.getElementById("add1");
const addBtn2 = document.getElementById("add2");
const addBtn3 = document.getElementById("add3");
//grapping the add inputs
const addIn1 = document.getElementById("addi1");
const addIn2 = document.getElementById("addi2");
const addIn3 = document.getElementById("addi3");


const today = document.getElementById("today");

//the ul of the todo(today,tom)
const list = document.getElementById("list");
const list2 = document.getElementById("list2");
const list3 = document.getElementById("list3");
//grap the nbrs
const col31= document.getElementById("col31"); 
const col32= document.getElementById("col32"); 
const col33= document.getElementById("col33"); 

//array of tasks
let tasks =[];
let tasks2 =[];
let tasks3=[];

//function that save the tasks in local storage
function store(t,task){
    let tas = [];
    if(JSON.parse(localStorage.getItem(t))!= null){
        tas = JSON.parse(localStorage.getItem(t));
    }else{
        tas = [];
    }
    tas.push(task);
    localStorage.setItem(t,JSON.stringify(tas));
}

//function to print the list


function add1(){
    addIn1.style.display = 'inline';
    document.addEventListener("keyup",function(){  //ila drt 3la enter radi yw93 hadxi
        if(event.key === 'Enter'){
            store("tasks",addIn1.value);
            addIn1.style.display = 'none';
            document.location.reload();
        }
    });
}


function add2(){
    addIn2.style.display = 'inline';
    document.addEventListener("keyup",function(){  //ila drt 3la enter radi yw93 hadxi
        if(event.key === 'Enter'){
            store("tasks2",addIn2.value);
            addIn2.style.display = 'none';
            document.location.reload();
        }
    });
}


function add3(){
    addIn3.style.display = 'inline';
    document.addEventListener("keyup",function(){  //ila drt 3la enter radi yw93 hadxi
        if(event.key === 'Enter'){
            store("tasks3",addIn3.value);
            addIn3.style.display = 'none';
            document.location.reload();
        }
    });
}


function listPrint(){
    if(JSON.parse(localStorage.getItem("tasks"))!= null){
         tasks = JSON.parse(localStorage.getItem("tasks"));
    }else{
        tasks = [];
    }
   
 
    for(let i = 0; i < tasks.length; i++){

        list.innerHTML += `<li>
        <div class="check">
        <button id="btn1${i}" onclick="completed(${i})" class="emptycheck">

            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" class="bi bi-check-circle" viewBox="0 0 16 16">
             <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
             <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
            </svg>
            
            </button>

            <button class="notempty" id="btn2${i}" onclick="notCompleted(${i})">
        
            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
          </svg>
          
            </button>
            </div>
        
        <div id="todo${i}">${tasks[i]}</div>
        <div class="impo">
        <div class="importantEmpty">
        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
       <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
     </svg>
        </div>
        <div class="important">
        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>
        </div>
        
</div>
<button value="${i}" class="btn" onclick="remove(${i})">
        <div class="remove">
        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" class="bi bi-dash-circle" viewBox="0 0 16 16">
        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
        <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
      </svg>
        </div>
        </button>
       </li>`;
       }


      //for tomorrow 
      if(JSON.parse(localStorage.getItem("tasks2"))!= null){
         tasks2 = JSON.parse(localStorage.getItem("tasks2"));
    }else{
        tasks2 = [];
    }
    for(let j = 0; j <tasks2.length; j++){
        
        list2.innerHTML += `<li>
        <div class="check">
        <button id="btn12${j}" onclick="completed2(${j})" class="emptycheck2">

            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" class="bi bi-check-circle" viewBox="0 0 16 16">
             <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
             <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
            </svg>
            
            </button>

            <button class="notempty2" id="btn22${j}" onclick="notCompleted2(${j})">
        
            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
          </svg>
          
            </button>
            </div>
        
        <div id="todo2${j}">${tasks2[j]}</div>
        <div class="impo">
        <div class="importantEmpty2">
        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
       <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
     </svg>
        </div>
        <div class="important2">
        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>
        </div>
        
</div>
<button value="${j}" class="btn" onclick="remove2(${j})">
        <div class="remove">
        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" class="bi bi-dash-circle" viewBox="0 0 16 16">
        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
        <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
      </svg>
        </div>
        </button>
       </li>`;
       }


       
      //for upcoming
      if(JSON.parse(localStorage.getItem("tasks3"))!= null){
        tasks3 = JSON.parse(localStorage.getItem("tasks3"));
   }else{
       tasks3 = [];
   }
   for(let j = 0; j <tasks3.length; j++){
       
       list3.innerHTML += `<li>
       <div class="check">
       <button id="btn13${j}" onclick="completed3(${j})" class="emptycheck3">

           <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" class="bi bi-check-circle" viewBox="0 0 16 16">
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
            <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
           </svg>
           
           </button>

           <button class="notempty3" id="btn23${j}" onclick="notCompleted3(${j})">
       
           <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
           <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
         </svg>
         
           </button>
           </div>
       
       <div id="todo3${j}">${tasks3[j]}</div>
       <div class="impo">
       <div class="importantEmpty3">
       <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
      <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
    </svg>
       </div>
       <div class="important3">
       <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
 <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>
       </div>
       
</div>
<button value="${j}" class="btn" onclick="remove3(${j})">
       <div class="remove">
       <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" class="bi bi-dash-circle" viewBox="0 0 16 16">
       <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
       <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
     </svg>
       </div>
       </button>
      </li>`;
      }
}

function remove(i){
    tasks.splice(i,1);
    localStorage.setItem("tasks",JSON.stringify(tasks));
    document.location.reload();
}


function remove2(i){
    tasks2.splice(i,1);
    localStorage.setItem("tasks2",JSON.stringify(tasks2));
    document.location.reload();
}

function remove3(i){
    tasks3.splice(i,1);
    localStorage.setItem("tasks3",JSON.stringify(tasks3));
    document.location.reload();
}


function notCompleted(i){
    const empty = document.getElementById("btn1" + i);
    empty.style.display = 'inline';

    const notEmpty = document.getElementById("btn2" + i);
    notEmpty.style.display = 'none';
    const t = document.getElementById("todo"+i);
    t.style.textDecoration ='none';
    t.style.opacity = 1;
}
function completed(i){
    const empty = document.getElementById("btn1" + i);
    empty.style.display = 'none';
    const notEmpty = document.getElementById("btn2" + i);
    notEmpty.style.display = 'inline-block';
    const t = document.getElementById("todo"+i);
    t.style.textDecoration ='line-through';
    t.style.opacity = 0.5;
}


function notCompleted2(i){
    const empty2 = document.getElementById("btn12" + i);
    empty2.style.display = 'inline';

    const notEmpty2 = document.getElementById("btn22" + i);
    notEmpty2.style.display = 'none';
    const t = document.getElementById("todo2"+i);
    t.style.textDecoration ='none';
    t.style.opacity = 1;
}
function completed2(i){
    const empty2 = document.getElementById("btn12" + i);
    empty2.style.display = 'none';
    const notEmpty2 = document.getElementById("btn22" + i);
    notEmpty2.style.display = 'inline-block';
    const t = document.getElementById("todo2"+i);
    t.style.textDecoration ='line-through';
    t.style.opacity = 0.5;
}


function notCompleted3(i){
    const empty3 = document.getElementById("btn13" + i);
    empty3.style.display = 'inline';

    const notEmpty3 = document.getElementById("btn23" + i);
    notEmpty3.style.display = 'none';
    const t = document.getElementById("todo3"+i);
    t.style.textDecoration ='none';
    t.style.opacity = 1;
}
function completed3(i){
    const empty3 = document.getElementById("btn13" + i);
    empty3.style.display = 'none';
    const notEmpty3 = document.getElementById("btn23" + i);
    notEmpty3.style.display = 'inline-block';
    const t = document.getElementById("todo3"+i);
    t.style.textDecoration ='line-through';
    t.style.opacity = 0.5;
}

 listPrint(list);

col33.textContent = (JSON.parse(localStorage.getItem("tasks"))).length + (JSON.parse(localStorage.getItem("tasks2"))).length + tasks3.length;
