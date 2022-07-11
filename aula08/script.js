const bnt = document.querySelector("#btn-text");

bnt.addEventListener("click", function () {
    const div = document.createElement("div");
    const h1 = document.createElement("h1");
    const txtH1 = document.createTextNode("Eu te amo brenda");

    h1.appendChild(txtH1);

    div.appendChild(h1);

    document.body.appendChild(div);
});
