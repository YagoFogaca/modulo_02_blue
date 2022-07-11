const tarefa = document.querySelector("#tarefa");
const botao = document.querySelector("button");
const lista = document.querySelector("ul");

botao.addEventListener("click", () => {
    const item = document.createElement("li");
    const adicionarTarefa = document.createTextNode(tarefa.value);

    item.appendChild(adicionarTarefa);

    const novoBotao = document.createElement("spam");
    novoBotao.className = "botaoExcluir";

    const nomeBotao = document.createTextNode("Apagar Tarefa");

    // novoBotao.setAttribute("onclick","apagarTarefa()")

    novoBotao.appendChild(nomeBotao);
    item.appendChild(novoBotao);

    console.log(novoBotao);

    lista.appendChild(item);
});

const listaCompleta = document.querySelectorAll(".botaoExcluir");

for (let i = 0; i < listaCompleta.length; i++) {
    //     let past = listaCompleta[i]
    //     past.addEventListener("click", () => {
    //         console.log(this.parentElement);
    //     })
    // }

    listaCompleta[i].addEventListener("click", function () {
        const li = listaCompleta.siblings("li");
        li.style.display = "none";
    });
}
