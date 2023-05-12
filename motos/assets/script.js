var exibeMotos = document.getElementById("exibeMotos")
var formAdicionar = document.getElementById("adicionar")
var formEditar = document.getElementById("formulario")

const Produtos = {
    motos:[
        {
            nome: "biz",
            modelo: 125,
            ano: 2023,
            preco: 13.280,
            img: 'biz.png'
        },
        {
            nome:"bros",
            modelo: 160,
            ano: 2022,
            preco: 17.100,
            img: 'bros.jpg'
        }
    ],

    editar(key, novaMoto){
        this.motos[key] = novaMoto
        exibir()
    },

    excluir(key){
        this.motos.splice(key, 1)
        exibir()
    },

    adicionar(obj){
        this.motos.push(obj)
        exibir()
    }
}

function recuperaProduto(key) {
    var produto = Produtos.motos[key]

    var keyInput = document.getElementById("key")
    keyInput.value = key

    var nome = document.getElementById("nome")
    nome.value = produto.nome

    var modelo = document.getElementById("modelo")
    modelo.value = produto.modelo

    var ano = document.getElementById("ano")
    ano.value = produto.ano

    var preco = document.getElementById("preco")
    preco.value = produto.preco

    var imagem = document.getElementById("imagem")
    imagem.value = produto.img

    console.log(window.scrollY, window.innerHeight)

    window.scrollTo(window.innerHeight,window.innerHeight); 
}

function exibir() {
    var html = "" 

    for (var i = 0; i < Produtos.motos.length; i++) {
        var moto = Produtos.motos[i]
        html += `<div id="biz`+ i +`" class="biz" >
                    <img src="img/`+ moto.img +`" alt="">
                    <p>Nome: `+ moto.nome +`</p>
                    <p>Modelo: `+ moto.modelo +`</p>
                    <p>Ano: `+ moto.ano +`</p>
                    <p>Preço: `+ moto.preco +`</p>
                    <button onclick="Produtos.excluir(`+ i +`)">Excluir</button>
                    <button onclick="recuperaProduto(`+ i +`)">Editar</button>
                </div>`
    }

    exibeMotos.innerHTML = html
}

function adicionar(event) {
    event.preventDefault()

    // Transforma os dados do formulário em um objeto
    var dados = new FormData(this)

    var obj = {
        nome: dados.get("nome"),
        modelo: dados.get("modelo"),
        ano: dados.get("ano"),
        preco: dados.get("preco"),
        img: dados.get("imagem")
    }

    Produtos.adicionar(obj)
    

}

function editar(event) {
    event.preventDefault()

    // Transforma os dados do formulário em um objeto
    var dados = new FormData(this)
    var key = dados.get("key")

    var obj = {
        nome: dados.get("nome"),
        modelo: dados.get("modelo"),
        ano: dados.get("ano"),
        preco: dados.get("preco"),
        img: dados.get("imagem")
    }

    Produtos.editar(key, obj)
}

formAdicionar.addEventListener("submit", adicionar)
formEditar.addEventListener("submit", editar)

window.onload = function() {
    exibir()
}