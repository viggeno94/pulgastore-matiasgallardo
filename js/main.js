function mostrarFecha() {
    const diasSemana = ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"];
    const meses = [
        "enero", "febrero", "marzo", "abril", "mayo", "junio",
        "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"
    ];

    const ahora = new Date();
    const diaSemana = diasSemana[ahora.getDay()];
    const dia = ahora.getDate();
    const mes = meses[ahora.getMonth()];
    const año = ahora.getFullYear();
    const hora = ahora.getHours();
    const minutos = ahora.getMinutes();
    const segundos = ahora.getSeconds();

    const mensaje = `Hoy es ${diaSemana} ${dia} de ${mes} del año ${año}, y son la ${hora} horas con ${minutos} minutos y ${segundos} segundos.`;

    document.getElementById("fecha").innerHTML = mensaje;
}

window.onload = mostrarFecha;

$(document).ready(function () {
    $.toast({
        heading: '¡Precaución!',
        text: 'Este sitio es solo para gente inteligente, si te quedas es bajo tu responsabilidad',
        showHideTransition: 'slide',
        icon: 'warning',
        position: 'top-left'
    });
});
