const tabela = document.querySelectorAll("td");

const btn = document.querySelector("#btn");

const dataInput = document.querySelector("#dataInput");

const dataInput2 = document.querySelector("#dataInput-2");

btn.addEventListener("click", function () {
    const dia = dataInput.value;

    const dia2 = dataInput2.value;

    const valueDia = dia.substring(dia.lastIndexOf("-") + 1);

    const valueDia2 = dia2.substring(dia2.lastIndexOf("-") + 1);

    for (let i = 0; i < tabela.length; i++) {
        let verificar = tabela[i];

        if (verificar.innerText == "") {
            verificar.style.backgroundColor = "white";
        } else if (verificar.innerText == valueDia) {
            verificar.style.backgroundColor = "red";
        }

        if (verificar.innerText == "") {
            verificar.style.backgroundColor = "white";
        } else if (verificar.innerText == valueDia2) {
            verificar.style.backgroundColor = "blue";
        }
    }
});
