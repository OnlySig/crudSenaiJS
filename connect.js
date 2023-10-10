async function getConnectApi() {
    const api = await fetch("http://localhost:3000/produtos")
    const apiJson = await api.json()
    return apiJson
}

async function criarProduto(nome, valor, foto) {
    const conexao = await fetch("http://localhost:3000/produtos", {
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

export const connectApi = {
    getConnectApi,
    criarProduto
}