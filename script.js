const key = "7a1c85cc8445712ca19fd78347f8eee1"


function colocarDadosNatela(dados) {
   document.querySelector(".h2").innerHTML = "tempo em " + dados.name
    console.log(dados)
    document.querySelector(".temp").innerHTML = Math.floor (dados.main.temp) + "°C"
    document.querySelector(".texto-previsao").innerHTML = dados.weather[0].description
    document.querySelector(".umidade").innerHTML = dados.main.humidity + "%"
    document.querySelector(".img-previsao").src = `//openweathermap.org/img/wn/${dados.weather[0].icon}.png`
}

async function buscarCidade(cidade) {
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(response => response.json());
   
      colocarDadosNatela(dados)
}




function cliqueiNobotao() {
    const cidade = document.querySelector('.input-cidade').value 

    buscarCidade(cidade)
}

