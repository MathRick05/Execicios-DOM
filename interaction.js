let ITENS_LOJA = [
    {
        name: "Bola da Copa",
        preco: 86.30,
        url_img: "./img/bola_copa.webp",
        conteudoDescricao: "Bola utilizada na Copa do Mundo, idela para utilizar em campo e colecionar"
    },
    {
        name: "Carrinho da Hot Wheels",
        preco: 5.80,
        url_img: "./img/carro_hotwheels.jpeg",
        conteudoDescricao: "Carrinho para dar de presentes para crianças ou colecionar"
    },
    {
        name: "Chinelo",
        preco: 19.99,
        url_img: "./img/chinelo.webp",
        conteudoDescricao: "Chinelo para se utilizar em qualquer lugar"
    },
    {
        name: "Escorredor de Louça",
        preco: 15.20,
        url_img: "./img/escorredor_louca.webp",
        conteudoDescricao: "Utilizando para ajudar no processo de secagem dos utensilios"
    },
    {
        name: "Espada Medieval",
        preco: 200.18,
        url_img: "./img/espada_medieval.png",
        conteudoDescricao: "Utilizada em batalhar para neutralizar o inimigo ou como produtos de decoração"
    },
    {
        name: "Guitarra",
        preco: 1980.99,
        url_img: "./img/guitarra.webp",
        conteudoDescricao: "Otima para utilizar em bandas de hard rock"
    },
    {
        name: "Toalha de Banho",
        preco: 9.99,
        url_img: "./img/toalha_banho.webp",
        conteudoDescricao: "Boa para se secar apos o banho"
    },
    {
        name: "Vinho",
        preco: 59.90,
        url_img: "./img/vinho.png",
        conteudoDescricao: "Vinho que harmoniza muito bem com carnes vermelhas "
    }
]

for (var i = 0; i < ITENS_LOJA.length; i++) {
    lojinha(ITENS_LOJA[i]);
}

function lojinha(produtos) {

    let input = document.getElementById("itens_section");
    let conteudo = document.createElement("div");
    let img = document.createElement("img");
    conteudo.className = "conteudo";
    img.src = produtos.url_img;
    
    let titulo = document.createElement("div");
    let name = document.createTextNode(produtos.name);
    titulo.className = "titulo";
    titulo.appendChild(name);

    let conteudoDescricao = document.createElement("div");
    let textDescricao = document.createTextNode(produtos.conteudoDescricao);
    conteudoDescricao.className = "conteudoDescricao";
    conteudoDescricao.appendChild(textDescricao);

    let preco = document.createElement("div");
    let b = document.createElement("b");
    let text = document.createTextNode("Preco:");
    let value = document.createTextNode(` R$ ${produtos.preco}`);
    preco.className = "preco";
    b.appendChild(text);
    preco.appendChild(b);
    preco.appendChild(value);

    let desc = document.createElement("div");
    let descricao = document.createTextNode("Descrição:");
    desc.className = "desc";
    desc.appendChild(descricao);

    conteudo.appendChild(img);
    conteudo.appendChild(titulo);
    conteudo.appendChild(preco);
    conteudo.appendChild(desc);
    conteudo.appendChild(conteudoDescricao);

    input.appendChild(conteudo);

}
