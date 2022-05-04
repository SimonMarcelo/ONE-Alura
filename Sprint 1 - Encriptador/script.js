const inputTexto = document.querySelector(".input-text");
const outputTexto = document.querySelector(".output-text");

function btnencriptar() {
    const textoEncriptado = encriptar(inputTexto.value);
    outputTexto.value = textoEncriptado;
}

function encriptar(StringParaEncriptar) {
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    StringParaEncriptar = StringParaEncriptar.toLowerCase();
    for(let i = 0; i < matrizCodigo.length; i++) {
        if (StringParaEncriptar.includes(matrizCodigo[i][0])) {
            StringParaEncriptar = StringParaEncriptar.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return StringParaEncriptar;
}

