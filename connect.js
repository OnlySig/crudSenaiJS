async function getConnectApi() {
    const api = await fetch("https://profrodolfo.com.br/api/listar")
    const apiJson = await api.json()
    return apiJson
}

async function criarProduto(nome, valor, imagem) {
    const conexao = await fetch("https://profrodolfo.com.br/api/listar", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            nome: nome,
            valor: valor,
            imagem: imagem
        })
    })

    const conexaoJson = await conexao.json()

    return conexaoJson
}



export const connectApi = {
    getConnectApi,
    criarProduto
}