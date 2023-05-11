var botaoAtualizar = document.getElementById("atualizar")
var biz = document.getElementById("biz")

const Produtos = {
    motos:[{
            nome: "biz",
            modelo: 125,
            ano: 2023,
            preco: 13.280
        },
        {
            nome:"bros",
            modelo: 160,
            ano: 2022,
            preco: 17.100
        }
    ],
    editar(key, novaMoto){
        this.motos[key] = novaMoto
    },
    excluir(key){
        var elemento = document.getElementById("biz" + key)
        elemento.style.display = "none"
        delete this.motos[key]
    },
    adicionar(key){
        this.motos.push[key]
    }
}