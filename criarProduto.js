import { connectApi } from "./connect.js"

const formulario = document.querySelector(".formulario")

async function criarProdutov2(nome, valor, foto) {
    await connectApi.criarProduto(nome, valor, foto)    
}

formulario.addEventListener("submit", e => {
    e.preventDefault()
    criarProdutov2(e.target["nome"].value, e.target["valor"].value, e.target["imagem"].value)
})
