const display = document.getElementById("display");

function adicionar(valor) {
    display.value += valor;
}

function limpar() {
    display.value = "";
}

function apagar() {
    display.value = display.value.slice(0, -1);
}

function calcular() {
    try {
        let expressao = display.value;

        // Converte porcentagem
        expressao = expressao.replace(
            /(\d+(?:\.\d+)?)%/g,
            "($1/100)"
        );

        let resultado = eval(expressao);

        if (!isFinite(resultado)) {
            display.value = "Erro";
            return;
        }

        display.value = resultado;
    } catch {
        display.value = "Erro";
    }
}

// Teclado
document.addEventListener("keydown", function(event) {

    const tecla = event.key;

    if (
        (tecla >= "0" && tecla <= "9") ||
        tecla === "+" ||
        tecla === "-" ||
        tecla === "*" ||
        tecla === "/" ||
        tecla === "." ||
        tecla === "%"
    ) {
        adicionar(tecla);
    }

    if (tecla === "Enter" || tecla === "=") {
        calcular();
    }

    if (tecla === "Backspace") {
        apagar();
    }

    if (tecla === "Escape") {
        limpar();
    }

});