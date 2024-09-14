const chaveAPI = "f445045a9f9d118e5b7c96801875ec21"

function colocarDadosNaTela(dados){
document.querySelector(".cidade").innerHTML ="Clima em " + dados.name
document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "°C"
document.querySelector(".texto-previsao").innerHTML = dados.weather[0].description
document.querySelector(".umidade").innerHTML = "Umidade: " + dados.main.humidity + "%"
document.querySelector(".img-previsao").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
}

async function buscarCidade(cidade){
  
  let dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${chaveAPI}&lang=pt_br&units=metric`).then(resposta => resposta.json())

  console.log(dados)
  colocarDadosNaTela(dados)
}




function clicarNoBotao(){
  let cidade = document.querySelector(".barra-de-pesquisa").value
  buscarCidade(cidade)
}