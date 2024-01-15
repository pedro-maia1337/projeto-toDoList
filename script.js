const tarefa = document.querySelector('#txt')  
const sub = document.querySelector('.sub')
const res = document.querySelector('#resp')

function criaTarefa(){
    const item = document.createElement('li')
    return item
}

function criaP(textoInput){
    item = criaTarefa()
    item.innerHTML += textoInput
    res.appendChild(item)
    item.setAttribute('class', 'task')
    cleanInput() //anotar
    criaBtn(item)
    save()
}

function criaBtn(item){ //anotar
    const btn = document.createElement('button')
    btn.innerHTML = 'Concluída'
    item.innerText += ' '
    item.appendChild(btn)
    btn.setAttribute('class', 'apagar')
}

function cleanInput(){ //anotar
    tarefa.value = ''
    tarefa.focus()
}


sub.addEventListener('click', function(event){ 
    if(!tarefa.value) return //anotar
    criaP(tarefa.value)
})

document.addEventListener('click', function(event){
    const el = event.target
    if(el.classList.contains('apagar')) {
        el.parentElement.remove()
        save()
    }
})

tarefa.addEventListener('keypress', function(event){
    if(event.keyCode === 13){
        criaP(tarefa.value)
    }
})

function save(){
    const liTarefas = res.querySelectorAll('li')
    const listaDeTarefas = []

    for(let tarefas of liTarefas){ //anotar
        let tarefaTexto = tarefas.innerText
        tarefaTexto = tarefaTexto.replace('Concluída', '').trim() //remove os espaços na ponta
        listaDeTarefas.push(tarefaTexto)
    }

    const tarefasJson = JSON.stringify(listaDeTarefas) //converte um array pra uma string json
    localStorage.setItem('tarefas', tarefasJson) //salva na memoria do navegador (somente string)
}

function addSaveTasks(){ //anotar
    const tarefas = localStorage.getItem('tarefas')
    const listaDeTarefas = JSON.parse(tarefas) //converte novamente pra um array
    console.log(listaDeTarefas)
    for (let tarefa of listaDeTarefas){
        criaP(tarefa)
    }
}
addSaveTasks()



