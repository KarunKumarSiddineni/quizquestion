const todoarray=[
    {name:'make dinner',duedate:'02-11-2024'}
   ,{ name: 'watch youtube',duedate:'02-11-2024'}
];


function Addintolist(){
    const name= document.querySelector('.userwish');
    const duedate= document.querySelector('.date');
    const name1 = name.value;
    const duedate1 =duedate.value;
    todoarray.push({name: name1, duedate: duedate1});
    console.log(todoarray);
    print();
}

function print(){
    let todolist='';
    for(let i=0; i<todoarray.length ;i++){
        const todoobject= todoarray[i];
        const name = todoobject.name;
        const duedate = todoobject.duedate;
        const html= `<p>${name} ${duedate} 
        <button class="deletebutton" onclick="todoarray.splice(${i},1); print();">Delete</button> 
        </p>`;
         todolist +=html;
    }

    document.querySelector('.output').innerHTML = todolist;

 }
