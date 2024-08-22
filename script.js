const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");

// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

function btnEncriptar() {
    const textoEncriptado = encriptar(textArea.value); // Llama a la función encriptar
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";

    // Mostrar el botón de "Copiar"
    document.getElementById("copiar").style.display = "block";
}

function encriptar(stringEncriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufact"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    } // Cierre del for

    return stringEncriptada;
}

// ... (resto de tu código JavaScript)


function btnDesencriptar() {
    const textoEncriptado = desencriptar(textArea.value);
    mensaje.value= textoEncriptado;
    textArea.value= "";
}
    

function desencriptar(stringDesencriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufact"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    } // Cierre del for

    return stringDesencriptada;
}


function copiarTexto() {
    const mensaje = document.querySelector(".mensaje");
    const textoACopiar = mensaje.value;
  
    navigator.clipboard.writeText(textoACopiar)
      .then(() => {
        alert("¡Texto copiado al portapapeles!");
      })
      .catch(err => {
        console.error("Error al copiar al portapapeles:", err);
      });
  }
