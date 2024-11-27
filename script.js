 z  
const form = document.querySelector('form')

const input = document.querySelector('input')

const ul = document.querySelector('ul')




form.addEventListener('submit', SaveTask)

function SaveTask(e){
    e.preventDefault()

    list = document.createElement('li')
    // console.log(input.value)
    list.innerText = input.value
   

    list.className  = "list-group-item w-50 mt-2"
    ul.appendChild(list)



    const dltBtn = document.createElement('button')
    dltBtn.className = "btn btn-danger text-light float-end"
    dltBtn.innerText = "X"
    list.appendChild(dltBtn)

    // console.log("this is function ")
    form.reset()

}




function DeleteTask(e){

    if(e.target.className.includes("btn")){
        li = e.target.parentElement 
        console.log(li)
        li.remove()
    }



}



ul.addEventListener('click' , DeleteTask)


