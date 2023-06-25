async function getUser(){
    try {
        let a=[]
        for(let i =1 ; i < 3 ; i++){
            let p = await fetch('https://reqres.in/api/users?page='+i);
            let data = await p.json();
            a.push(data);
        }  
        return a;
    } catch (error) {
        console.error(error);
    }
}

const promise = getUser();
const button=document.getElementById('btn');
const parent = document.getElementsByClassName("container")[0];
const home=document.getElementById('home')
var click=0

home.addEventListener("click", ()=>{
    click=0
    parent.innerHTML=
    `<h1 id="head">
    Welcome To Get User's 
    </h1>`
})

button.addEventListener('click',()=>{
    addUser(promise,click);
    click++;
})

function addUser(promise,click){
    promise.then(data=>{
        if(click==0){
            parent.innerHTML=""
            const user = data[0].data;
            for(let i = 0;i<user.length;i++){
               let nam=(user[i].first_name+' '+user[i].last_name);    
                let email=user[i].email;
                let image=user[i].avatar;
                displayUser(image, nam, email);
            }
        }else if(click==1){
            const user = data[1].data;
            for(let i = 0;i<user.length;i++){
               let nam=(user[i].first_name+' '+user[i].last_name);    
                let email=user[i].email;
                let image=user[i].avatar;
                displayUser(image, nam, email);
            }
        }else if(click == 2){
            let div = document.createElement("div");
            div.classList.add("end");
            div.innerHTML = "End Of User's ";
            parent.appendChild(div);
        }
    })
}


function displayUser(avatar,name,mail){
    let add=`
            <img src="${avatar}" alt="img">
            <h3> Name :- ${name}</h3>
            <h4>Email :- ${mail}</h4>
    `
    let div = document.createElement("div");
    div.classList.add("tab");
    div.innerHTML=add;
    parent.appendChild(div);
}
