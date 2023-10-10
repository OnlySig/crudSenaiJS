import { connectApi } from "./connect.js"

const contentPage = document.querySelector(".main")

async function listaItens() {
    const listaApi = await connectApi.getConnectApi()
    listaApi.forEach(element => {
        console.log(element)
        contentPage.innerHTML +=`
            <div class="content__item d-flex flex-column content__item shadow-sm p-3 mb-5 bg-body-tertiary rounded gap-2">
                <img src=${element.foto} alt="${element.name} class="img__item">    
                <span class="row"></span>
                <p>${element.nome}</p>
                <h3>R$${element.valor}</h3>
            </div>
        `
    })

}


listaItens()