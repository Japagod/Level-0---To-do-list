let showB = false

function show() {

    document.getElementById("addScreen").style.animation = "showAddScreen .5s forwards"
    document.getElementById("BotãoTarefaSimples").style.display = "block"
}

function hide() {

    document.getElementById("addScreen").style.animation = "hideAddScreen .5s forwards"
    document.getElementById("TarefaSimples").style.animation = "hideAddScreen .5s forwards"
    document.getElementById("BotãoTarefaSimples").style.display = "none"

}

function Simples() {

    document.getElementById("TarefaSimples").style.animation = "ShowSimple .5s forwards"
    document.getElementById("BotãoTarefaSimples").style.display = "none"

}

function SumaSimples() {

    document.getElementById("TarefaSimples").style.animation = "hideAddScreen .5s forwards"
    document.getElementById("BotãoTarefaSimples").style.display = "block"
    document.getElementById("BotãoTarefaSimples").style.animation = "ShowSimple .5s forwards"
    
}

function showRemove(){
    const buttons = document.getElementsByClassName("removebutton")

    if(showB === false){
        for(let i = 0;i<buttons.length;i++){
            buttons[i].style.animation = "showRemoveButtons .5s forwards" 
        }
        showB = true
    }

    else if(showB === true){
        for(let i = 0;i<buttons.length;i++){
            buttons[i].style.animation = "hideRemoveButtons .5s forwards" 
        }
        showB = false
    }

}