import { connectApi } from "./connect.js"

const contentPage = document.querySelector(".content__container")

function constroiCard(nome, valor, foto) {
    const produto = document.createElement("li")
    produto.classList.add("produto__item")
    produto.innerHTML +=`
        <div class="produto__item content__item d-flex flex-column content__item shadow p-3 mb-5 bg-body-tertiary rounded gap-2">
            <img src=${foto} alt="${nome} class="img__item">    
            <span class="row"></span>
            <p>${nome}</p>
            <h3>R$${valor}</h3>
        </div>
    `
    return produto
}

async function listaItens() {
    const listaApi = await connectApi.getConnectApi()
    listaApi.forEach(element => contentPage.appendChild(constroiCard(element.nome, element.valor, element.foto)))
    return listaApi
}

listaItens()