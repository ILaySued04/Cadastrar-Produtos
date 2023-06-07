let btnCadastrar = document.getElementById("btncadastrar")
let tbody = document.getElementById("tbody")
/*Criando um objeto */
function criandoObjeto(imagem,produto,quantidade,descricao,preco,categoria){
    
    let obj = {
        imagem:imagem,
        produto:produto,
        quantidade:quantidade,
        descricao:descricao,
        preco:preco,
        categoria:categoria
    }
    
    return obj
}

/*Adicionando valores no objeto */
function pegandoValores(){

    let imagem = document.getElementById("imagem");
    let produto = document.getElementById("produto");
    let quantidade = document.getElementById("quantidade");
    let descricao = document.getElementById("descricao");
    let preco = document.getElementById("preco");
    let categoria = document.getElementById("categoria")

    return criandoObjeto(imagem.value,produto.value, quantidade.value, descricao.value, preco.value, categoria.value)
}

function criandoTabela(imagem,produto, descricao, categoria, quantidade, preco, precoTotal){

    return tbody.innerHTML += `
        <tr>
            <td>
                <div class="d-flex align-items-center">
                    <img
                        src="${imagem}"
                        alt=""
                        style="width: 45px; height: 45px"
                        class="rounded-circle"
                        />
                    <div class="ms-3">
                    <p class="fw-bold mb-1">${produto}</p>
                    </div>
                </div>
            </td>
            <td>
                <p class="text-muted mb-0">${descricao}</p>
                </td>
                <td>
                <span class="badge rounded-pill d-inline" id="status">${status}</span>
                </td>
                <td>
                <button type="button" class="btn btn-link btn-sm btn-rounded">
                ${categoria}
                </button>
            </td>
                <td>${quantidade}</td>
            <td>
                <button type="button" class="btn btn-link btn-sm btn-rounded">
                R$ ${preco.toFixed(2)}
                </button>
            </td>
            <td>
            <button type="button" class="btn btn-link btn-sm btn-rounded">R$ 
            ${precoTotal.toFixed(2)}
            </button>
        </td>
        
        </tr>
    `
}

btnCadastrar.addEventListener('click', () => {

    const linkProduto = pegandoValores().imagem
    const nomeProduto = pegandoValores().produto
    const descricaoProduto = pegandoValores().descricao
    const produtoQuantidade = pegandoValores().quantidade
    const precoProduto = pegandoValores().preco
    const produtoPreco = parseFloat(precoProduto)
    const categoria = pegandoValores().categoria
    const precoTotal = produtoQuantidade*produtoPreco

    if (nomeProduto === "" || produtoQuantidade === "" || precoProduto === ""){
        if (nomeProduto === "") {
            document.getElementById("msg-produto").style = "display:block"
        }
        else {
            document.getElementById("msg-produto").style = "display:none"
        }

        if (produtoQuantidade === "") {
            document.getElementById("msg-quantidade").style = "display:block"
        }
        else {
            document.getElementById("msg-quantidade").style = "display:none"
        }

        if (precoProduto === "") {
            document.getElementById("msg-preco").style = "display:block"
        }
        else {
            document.getElementById("msg-preco").style = "display:none"
        }
    }
    else{
        criandoTabela(linkProduto, nomeProduto,descricaoProduto,categoria,produtoQuantidade,produtoPreco,precoTotal)
    }
})
