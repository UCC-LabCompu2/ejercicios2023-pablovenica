/**
 * Convierte unidades entre metros, pulgadas, pies y yardas
 * @method convertirUnidades
 * @param {string} id - Id del elemento input del html
 * @param {number} valor - COntiene el valor del input que ingreso el usuario
 */
convertirUnidades = (id, valor) => {
    let met, pul, pie, tar;

    if (valor.includes(",")) {
        valor = valor.replace(",", ".");
    }
    if (isNaN(valor)) {
        alert("El valor ingresado es incorrecto");
        met = " ";
        pul = " ";
        pie = " ";
        yar = " ";
    } else if (id == "metro") {
        met = valor;
        pul = valor * 39.3701;
        pie = valor * 3.28084;
        yar = valor * 1.09361;
    } else if (id == "pulgada") {
        pul = valor;
        met = valor * 0.0254;
        pie = valor * 0.08333;
        yar = valor * 0.027778;
    } else if (id == "pie") {
        pie = valor;
        met = valor * 0.3048;
        pul = valor * 12;
        yar = valor * 0.333333;
    } else if (id == "yarda") {
        yar = valor;
        met = valor * 0.9144;
        pul = valor * 36;
        pie = valor * 3;
    }
    document.lasUnidades.unid_metro.value = Number(met).toFixed(2);
    document.lasUnidades.unid_pulgada.value = Number(pul).toFixed(2);
    document.lasUnidades.unid_pie.value = Number(pie).toFixed(2);
    document.lasUnidades.unid_yarda.value = Number(yar).toFixed(2);
}
/**
 * Convierte grados a radianes o radianes a grados
 * @method convertirGR
 * @param {string} id - Id del elemento input del html
 */
const convertirGR = (id) => {
    const gradosInput = document.getElementById("grados");
    const radianesInput = document.getElementById("radianes");

    let grados, radianes;

    if (id === "grados") {
        grados = parseFloat(gradosInput.value);
        if (isNaN(grados)) {
            alert("El valor ingresado es incorrecto");
            gradosInput.value = "";
            radianesInput.value = "";
        } else {
            radianesInput.value = (grados * Math.PI) / 180;
        }
    } else if (id === "radianes") {
        radianes = parseFloat(radianesInput.value);
        if (isNaN(radianes)) {
            alert("El valor ingresado es incorrecto");
            radianesInput.value = "";
            gradosInput.value = "";
        } else {
            gradosInput.value = (radianes * 180) / Math.PI;
        }
    }
};
/**
 * Muestra o oculta un div en la parte inferior
 * @method mostrar_ocultar
 * @param {string} id - Id del elemento input radio en html
 */
let mostrar_ocultar = (id) => {
    if (id === "mostrarDiv") {
        document.getElementsByName("unDiv")[0].style.display = 'block';
    } else {
        document.getElementsByName("unDiv")[0].style.display = 'none';
    }
}
/**
 * Suma 2 inputs introducidos por el usuario
 * @method sumar
 */
let sumar = () => {
    let res, s1, s2;
    s1 = Number(document.operacionesMat.sum_num1.value)
    s2 = Number(document.operacionesMat.sum_num2.value)
    res = s1 + s2;
    document.getElementById("totalS").innerHTML = res;
}
/**
 * Suma 2 inputs introducidos por el usuario
 * @method sumar
 */
let restar = () => {
    let res, s1, s2;
    s1 = Number(document.operacionesMat.res_num1.value)
    s2 = Number(document.operacionesMat.res_num2.value)
    res = s1 - s2;
    document.getElementById("totalR").innerHTML = res;
}
/**
 * Multiplica 2 inputs introducidos por el usuario
 * @method multiplicacion
 */
let multiplicacion = () => {
    let res, s1, s2;
    s1 = Number(document.operacionesMat.mul_num1.value)
    s2 = Number(document.operacionesMat.mul_num2.value)
    res = s1 * s2;
    document.getElementById("totalM").innerHTML = res;
}
/**
 * Divide 2 inputs introducidos por el usuario
 * @method dividir
 */
let dividir = () => {
    let res, s1, s2;
    s1 = Number(document.operacionesMat.div_num1.value)
    s2 = Number(document.operacionesMat.div_num2.value)
    res = s1 / s2;
    document.getElementById("totalD").innerHTML = res;
}
/**
 * Si el campo contiene una letra, blanquee el campo
 * @method verLetra
 * @param {string} id- Id del elemento input del html
 * @param  {number/string} value- Contiene el valor del input que ingresa el usuario
 */
let verLetra = (id, value) => {
    if (isNaN(value)) {
        document.getElementById(id).value = " ";
    }
}
/**
 * Redirige la primera pagina web a la segunda
 * @method generarUrl
 */
let generarUrl = () => {
    const dist = document.getElementById("distancia").value;
    const uni = document.getElementsByName("unidades")[0].value;

    const urlCompl = `segundaWeb.html#${dist}#${uni}`;
    window.open(urlCompl);
}

/**
 * Carga los valores de la primera pagina web en la segunda
 * @method cargarValor
 */
let cargarValor = () => {
    let urlCompleta = window.location.href;
    console.log(urlCompleta);
    urlCompleta = urlCompleta.split("#");

    const distancia = urlCompleta[1];
    const unidad = urlCompleta[2];
    document.getElementById("dist").value = `${distancia} ${unidad}`;
}
/**
 * Guarda los datos en la segunda pagina web, mediante local storage
 * @method guardarLS
 */
let guardarLS = () => {
    const dist = document.getElementById("distancia").value;
    const uni = document.getElementsByName("unidades")[0].value;

    localStorage.setItem("distanciaLS", dist);
    localStorage.setItem("unidadLS", uni);
    window.open("web2.html");
}
/**
 * Carga los valores de la primera pagina web en la segunda mediante local storage
 * @method cargarLS
 */
let cargarLS = () => {
    console.log("Se cargara el local storage")
    let distancia = localStorage.getItem("distanciaLS");
    let unidad = localStorage.getItem("unidadLS");
    console.log("Lei" + distancia);
    console.log("Lei" + unidad);
    document.getElementById("dist").innerHTML = `${distancia} ${unidad}`;
}
/**
 * Dibuja un circulo y un rectangulo mediante CANVAS
 * @method dibujarCirculoCuadrado
 */
let dibujarCirculoCuadrado = () => {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");

    let xMax = canvas.width;
    let yMax = canvas.height;
    ctx.fillStyle = "#333";
    //Dibujar rectangulo
    let margen = 5;
    ctx.fillRect(0 + margen, yMax - 120 - margen, 130, 120);

    //Dibuja un circulo
    ctx.arc(xMax / 2, yMax / 2, 100, 0, 2 * Math.PI);
    ctx.stroke(); //IMP el STROKE para que dibuje las lineas
    ctx.fill(); //pinta el interior
}
/**
 * Mediante un boton limpia lo que se encuentre en el CANVAS
 * @method limpiarCanvas
 */
let limpiarCanvas = () => {
    let canvas = document.getElementById("myCanvas");
    canvas.width = canvas.width;
}
/**
 * Dibuja lineas en un CANVAS
 * @method dibujar
 */
var bandera;
let dibujar = () => {
    let canvas = document.getElementById("myCanvas");
    let ctx = canvas.getContext("2d");

    let posX = event.clientX;
    let posY = event.clientY;
    console.log(posX, posY);

    canvas.onmousedown = function () {
        bandera = true
    };
    canvas.onmouseup = function () {
        bandera = false
    };
    if (bandera) {
        ctx.fillRect(posX - 10, posY - 121, 5, 5);
        ctx.fill;
    }
}

/**
 * Otra forma de realizar el MINI PAINT, mediante el parámetro listener
 * @method cargarListeners
 */
let cargarListeners = () => {
    document.getElementById("myCanvas").addEventListener("mousemove", function (event) {
        let canvas = document.getElementById("myCanvas");
        let ctx = canvas.getContext("2d");

        let posX = event.clientX;
        let posY = event.clientY;
        console.log(posX, posY);
        canvas.onmousedown = function () {
            bandera = true
        };
        canvas.onmouseup = function () {
            bandera = false
        };
        if (bandera) {
            ctx.fillRect(posX - 10, posY - 121, 5, 5);
            ctx.fill;
        }

    });
}
/**
 * Otra forma de realizar el MINI PAINT, mediante el parámetro listener
 * @method cargarListenerEjemplo
 */
let cargarListenerEjemplo = () => {
    document.getElementById("myCanvas").addEventListener("mousemove", dibujar);
}

/**
 * Realiza un cuadriculado y marca los ejes cartesianos X e Y
 * @method dibujarCuadriculado
 * @param {number} inicioX- posicion X
 * @param  {number} inicioY- posicion Y
 */
let dibujarCuadriculado = (inicioX, inicioY) => {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");
    const anchoMax = canvas.width;
    const alturaMax = canvas.height;
    const paso = 20;
    let ejeX = inicioX;
    let ejeY = inicioY;

    // Lineas verticales
    for (let i = paso; i < anchoMax; i += paso) {
        ctx.beginPath();
        ctx.moveTo(i, 0);
        ctx.lineTo(i, alturaMax);
        ctx.strokeStyle = "#333";
        ctx.stroke();
        ctx.font = "10px Arial";
        ctx.fillStyle = "#333";
        ctx.fillText(ejeX, i, alturaMax / 2);
        ctx.closePath();
        ejeX++;
    }

    // Lineas horizontales
    for (let i = paso; i < alturaMax; i += paso) {
        ctx.beginPath();
        ctx.moveTo(0, i);
        ctx.lineTo(anchoMax, i);
        ctx.strokeStyle = "#333";
        ctx.stroke();
        ctx.font = "10px Arial";
        ctx.fillStyle = "#333";
        ctx.fillText(ejeY, anchoMax / 2, i);
        ctx.closePath();
        ejeY++;
    }

    // Eje X
    ctx.beginPath();
    ctx.moveTo(0, alturaMax / 2);
    ctx.lineTo(anchoMax, alturaMax / 2);
    ctx.strokeStyle = "#c51515";
    ctx.stroke();
    ctx.closePath();

    // Eje Y
    ctx.beginPath();
    ctx.moveTo(anchoMax / 2, 0);
    ctx.lineTo(anchoMax / 2, alturaMax);
    ctx.strokeStyle = "#c51515";
    ctx.stroke();
    ctx.closePath();
};

/**
 * Realiza una animacion simple de una imagen
 * @method animarAuto
 */
var x = 0;
var dx = 2;
let animarAuto = () => {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");

    let img = new Image();
    img.src = "images/auto.png";

    img.onload = function () {
        canvas.width = canvas.width;
        ctx.drawImage(img, x, 100);
        requestAnimationFrame(animarAuto);
    }
    x = x + dx;
    console.log("La coordenada X es: " + x);
    if (x > canvas.width) {
        x = 0;
    }
}
var intervalId;
let detenerAuto = () => {
    console.log("Se detuvo el auto")
    clearInterval(intervalId); // Detener la animación
}
let comenzarAnimacion = () => {
    console.log("Se llamo a comenzar animacion")
    intervalId = setInterval(animarAuto, 10);
    setTimeout(detenerAuto, 6000);
}
let animarNuevo = () => {
    requestAnimationFrame(animarAuto);
}
/**
 * Dibuja una imagen en un lienzo canvas
 * @method dibujarImagen
 * @param {number} posX- Posicion de un valor en el eje cartesiano X
 * @param  {number} posY- Posicion de un valor en el eje cartesiano Y
 */
let dibujarImagen = (posX, posY) => {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");
    const anchoMax = canvas.width;
    const alturaMax = canvas.height;

    canvas.width = canvas.width;
    console.log(posX, posY);
    let img = new Image();
    img.src = "images/auto.png";

    if (posX < 0 || posY < 0 || posX >= anchoMax || posY >= alturaMax) {
        openDialog();
    } else {
        img.onload = function () {
            ctx.drawImage(img, posX, posY);
        }
    }

}
/**
 * Permite cerrar un dialogo
 * @method cerrarDialog
 */
let cerrarDialog = () => {
    const dialog = document.getElementById("myDialog");
    dialog.close();
}
/**
 * Permite abrir un dialogo
 * @method openDialog
 */
let openDialog = () => {
    const dialog = document.getElementById("myDialog");
    dialog.showModal();
}
