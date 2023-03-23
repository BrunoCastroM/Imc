function meuEscopo() {
    const formulario = document.querySelector('.formulario')
    const resultado = document.querySelector('.resultado')

    function receberEventoForm(evento) {
        evento.preventDefault()
        const peso = formulario.querySelector('.peso')
        const altura = formulario.querySelector('.altura')
        const imc = peso.value / (altura.value * altura.value)

        if (isNaN(imc)) {
            resultado.innerHTML = ''
            const p = document.createElement('p')
            p.classList.add('erro')
            p.innerHTML = 'Digite somente números.'
            resultado.appendChild(p)

        } else {
            if (imc <= 18.5) {
                resultado.innerHTML = `<p> O seu imc é ${imc.toFixed(2)}, você está abaixo do peso`
            } else if (imc < 25) {
                resultado.innerHTML = `<p> O seu imc é ${imc.toFixed(2)}, você está com o peso normal`
            } else if (imc < 30) {
                resultado.innerHTML = `<p> O seu imc é ${imc.toFixed(2)}, você está com Sobrepeso`
            } else if (imc < 35) {
                resultado.innerHTML = `<p> O seu imc é ${imc.toFixed(2)}, você está com Sobrepeso Grau 1`
            } else if (imc <= 40) {
                resultado.innerHTML = `<p> O seu imc é ${imc.toFixed(2)}, você está com Sobrepeso Grau 2`
            } else if (imc > 40) {
                resultado.innerHTML = `<p> O seu imc é ${imc.toFixed(2)}, você está com Sobrepeso Grau 3`
            }
        }
    }
    formulario.addEventListener('submit', receberEventoForm)
}

meuEscopo()
