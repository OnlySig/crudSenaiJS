import { connectApi } from "./connect.js"

const contentPage = document.querySelector(".content__container")
function constroiCard(nome, valor, foto, id) {
    const produto = document.createElement("li")
    const btnDeleta = document.createElement("button")
    produto.classList.add("produto__item")
    btnDeleta.classList.add("exclui")
    produto.innerHTML +=`
        <div class="produto__item content__item d-flex flex-column content__item shadow p-3 mb-5 bg-body-tertiary rounded gap-2">
            <img src=${foto} alt="${nome} class="img__item">    
            <span class="row"></span>
            <p>${nome}</p>
            <h3>R$${valor}</h3>
            <button value=${id} class="edita">editar</button>
            <button value=${id} class="del">deleta</button>
        </div>
    `
    return produto
}

document.addEventListener("click", e => {
    if(! e.target.matches(".del")) {
        if(! e.target.matches(".edita")) {
            return
        } else {
            editarProduto(e.target.value)
        }
        return
    } else {
        contentPage.innerHTML = ""
        connectApi.deletaCard(e.target.value)
        listaItens()
    }
})

async function editarProduto(id) {
    console.log(id)
}

async function listaItens() {
    const listaApi = await connectApi.getConnectApi()
    listaApi.forEach(element => contentPage.appendChild(constroiCard(element.nome, element.valor, element.foto, element.id)))
    return listaApi
}

listaItens()