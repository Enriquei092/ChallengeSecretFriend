// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let nombresAmigos= []

function agregarAmigo(){

    let valorIngrsado = document.getElementById('amigo').value

    if(valorIngrsado == ''){
        alert("Por favor, inserte un nombre.")
    }else{        
        nombresAmigos.push(valorIngrsado)
        valorIngrsado = document.getElementById('amigo').value=''
        arrayAmigos()
        
    }
}

function arrayAmigos(){
    let lista = document.getElementById('listaAmigos')
    lista.innerHTML=''

    for (let index = 0; index < nombresAmigos.length; index++) {
        const element = nombresAmigos[index];
        const li = document.createElement('li')
        li.textContent=element
        lista.appendChild(li)           
        
    }
}
    
function sortearAmigo(){
    
    let resultado = document.getElementById('resultado')
    if(nombresAmigos.length == 0){
        alert("Un aun no hay amigos registrados")
    }else{
        
        let posicion = Math.floor(Math.random() * nombresAmigos.length  ) +1 ;
        const newLi = document.createElement('li')
        document.getElementById('texto').removeAttribute('hidden')
        newLi.textContent = nombresAmigos[posicion-1]
        resultado.appendChild(newLi)
    }

}
