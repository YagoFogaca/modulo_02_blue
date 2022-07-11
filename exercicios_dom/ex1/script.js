const numero = document.querySelector("#numeroInput");

const bnt = document.querySelector("#bntInput");

bnt.addEventListener("click", function () {
    const numerosP = document.querySelectorAll("p");
    if (numerosP.length >= 10) {
        alert("Por favor reinicia a página, não aprendi a fazer mais coisas");
    } else {
        let tabuada = [];

        let i = 1;

        for (; i <= 10; i++) {
            tabuada.push(numero.value * i);
        }

        i = 1;

        for (let n of tabuada) {
            const paragrafo = document.createElement("p");

            const tabuadaResultado = document.createTextNode(`${numero.value} X ${i} = ${n}`);

            paragrafo.appendChild(tabuadaResultado);

            document.body.appendChild(paragrafo);

            i++;
        }
    }
});
