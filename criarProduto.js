import { connectApi } from "./connect.js"

const formulario = document.querySelector("#formulario")

async function criarProdutov2(e, nome, valor, foto) {
    e.preventDefault()
    await connectApi.criarProduto(nome, valor, foto)    
}

formulario.addEventListener("submit", e => {
    criarProdutov2(e, e.target["nome"].value, e.target["valor"].value, e.target["imagem"].value)
})
