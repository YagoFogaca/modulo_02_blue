const nome = document.querySelector("#inputText");

const lista = document.querySelectorAll("li");

nome.addEventListener("keyup", function () {
    for (let i = 0; i < lista.length; i++) {
        let verifica = lista[i];

        if (nome.value[0] == verifica.innerText[0] && nome.value[1] == verifica.innerText[1]) {
            lista[i].style.fontWeight = "bold";
        }

        if (nome.value === "") {
            lista[i].style.fontWeight = "400";
        }
    }
});
