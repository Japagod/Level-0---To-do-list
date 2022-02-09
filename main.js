const pai = document.getElementById("lista")

const getData = () => JSON.parse(localStorage.getItem("data")) ?? []
const setData = (Data) => localStorage.setItem("data", JSON.stringify(Data))

function createItem(header, desc, concluded,indice) {
    
    console.log("createItem");

    const item = document.createElement("div")
    item.className = "item"
    item.dataset.indice = indice
    item.innerHTML = `
    <button class="removebutton"> X </button>
    <h1>${header}</h1>
    <p class="desc"> ${desc} </p>
    <button id="button"> Concluir </button>
    `
    if(concluded === false){
        item.style.background = "rgba(255, 0, 0, .4)"
        item.style.boxShadow = "0px 0px 100px rgba(255, 0, 0, .6)"
    } else {
        item.style.background = "rgba(0, 255, 0, .4)"
        item.style.boxShadow = "0px 0px 100px rgba(0, 255, 0, .6)"
    }
    pai.appendChild(item)
}

function clean() {
    while (pai.firstChild) {
        pai.removeChild(pai.lastChild)
    }
}

function atualizaTela() {

    console.log("atualizaTela");

    clean()
    const data = getData()
    data.forEach((item,indice) => createItem(item.header, item.desc,item.concluded,indice))
}

function addItem() {
    var header = document.getElementById("addHeader")
    var desc = document.getElementById("addDesc")
    const data = getData()
    data.push({
        "header": header.value,
        "desc": desc.value,
        "concluded": false
    })
    header.value = ""
    desc.value = ""
    setData(data)
    atualizaTela()
}

function animação(indice){

    console.log("animação");

    const data = getData()

    if(data[indice].concluded === true){
        pai.children[indice].style.animation = "changeToGreen .3s ease forwards "   
    }

    if(data[indice].concluded === false){
        pai.children[indice].style.animation = "changeToRed .3s ease forwards"   
    }
    
}

function concluir(indice){

    console.log("concluir");

    const data = getData()
    data[indice].concluded = data[indice].concluded === false ? true : false

    setData(data);
    atualizaTela();
    animação(indice)

}

function excluir(indice){
    const data = getData()
    data.splice(indice,1)
    setData(data)
    atualizaTela()
    showRemove()
    showRemove()
}

function concluirClick(evento) {
    console.log("concluirClick");
    let element = evento.target

    let indice = element.parentNode.dataset.indice

    if(element.id === 'button'){

        concluir (indice);

    }
    
    if(element.className === "removebutton"){
        excluir (indice);
    }
}

atualizaTela()

pai.addEventListener("click",concluirClick)

