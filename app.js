let input = document.getElementById('input')
let btn = document.getElementById('btn')
let parentTodo = document.getElementById('details')
let logDetails = document.getElementById('log')
let details = document.getElementById('details')

details.addEventListener('click',(e)=>{
    let target = e.target
    
    if(target.classList.contains('card')){
        if(target.className == 'card contain'){
            target.innerHTML += ''
        }else{
            let before = target.innerHTML

            target.innerHTML = '<i class="fa-solid fa-check"></i>'+ before 
            target.className = 'card contain'
        }
    }else if(target.classList.contains('delete')){
        target.parentElement.parentElement.remove()

        logDetails.innerHTML = 
        `<div class="error">
            Todo Removed
        </div>
        `
        input.value = ''
        setTimeout(()=>{
            logDetails.innerHTML = ''
        },1000)
       
    }

    
   
})


btn.addEventListener('click',handleTodo)
input.addEventListener('keypress',handleKeytodo)




function handleTodo(){
    if(input.value.trim() !== ''){

        parentTodo.innerHTML += 
        `<li class="card" id="cardBox">
        <span id="textTodo">${input.value}</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" ><path d= "M135.2 17.69C140.6 6.848 151.7 0 163.8 0H284.2C296.3 0 307.4 6.848 312.8 17.69L320 32H416C433.7 32 448 46.33 448 64C448 81.67 433.7 96 416 96H32C14.33 96 0 81.67 0 64C0 46.33 14.33 32 32 32H128L135.2 17.69zM394.8 466.1C393.2 492.3 372.3 512 346.9 512H101.1C75.75 512 54.77 492.3 53.19 466.1L31.1 128H416L394.8 466.1z" class="delete"/></svg>
    </li>
        `
        logDetails.innerHTML +=
            `<div class="success">
                Todo Added To The List
            </div>
            `
            details.style.display = 'block'
        input.value = ''
        setTimeout(()=>{
            logDetails.innerHTML = ''
        },1500)

    }else{
        logDetails.innerHTML = 
        `<div class="error">
            Can Add An Empty List To Todo
        </div>
        `
        input.value = ''
        setTimeout(()=>{
            logDetails.innerHTML = ''
        },1000)
    }
}

function handleKeytodo(event){
    if ( event.key === "Enter"){
        handleTodo()
    }
}


