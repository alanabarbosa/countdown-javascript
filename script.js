import Countdown from "./countdown.js";

const tempoParaONiver = new Countdown('4 Juner 2022 23:59:59 GMT-0300');

setInterval(() => {
    document.querySelector('.days').innerHTML = `<p> ${tempoParaONiver.total.days} Dias</p>`
    document.querySelector('.hours').innerHTML = `<p> ${tempoParaONiver.total.hours} Horas</p>`
    document.querySelector('.minutes').innerHTML = `<p> ${tempoParaONiver.total.minutes} Minutos</p>`
    document.querySelector('.seconds').innerHTML = `<p> ${tempoParaONiver.total.seconds} Segundos</p>`
}, 1000)