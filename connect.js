async function getConnectApi() {
    const api = await fetch("https://profrodolfo.com.br/api/listar")
    const apiJson = await api.json()
    console.log(apiJson)
    return apiJson
}

async function criarProduto(nome, valor, foto) {
    const conexao = await fetch("https://profrodolfo.com.br/api/put", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            nome: nome,
            valor: valor,
            foto: foto
        })
    })

    const conexaoJson = await conexao.json()
    return conexaoJson
}

async function deletaCard(id) {
    const conexao = await fetch(`https://profrodolfo.com.br/api/delete/${id}`)
    const conexaoJson = await conexao.json()
    return conexaoJson
}

export const connectApi = {
    getConnectApi,
    criarProduto,
    deletaCard
}