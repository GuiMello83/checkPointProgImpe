/*  Turma 02 - Grupo 3 - Guilherme Mello / Jeferson Oliveira / José Lucas Souza Soares / Hebert Silva dos Santos / Louise Nascimento / Felipe Custódio */

function startMicro(option,timeSec){
    let standartTime = 0
    let resultado = ""
  
    switch(option){
      case "Pipoca": standartTime = 10; break;
      case "Macarrão": standartTime = 8; break;
      case "Carne": standartTime = 15; break;
      case "Feijão": standartTime = 12; break;
      case "Brigadeiro": standartTime = 8; break;
    }
  
    let time2 = standartTime * 2;
    let time3 = standartTime * 3;
  
  resultado = 
    timeSec >= time3 ? 'Kabummm' : timeSec >= time2 ? 'Comida Queimou' : timeSec < standartTime ? 'Tempo Insuficiente' : 'Prato pronto, bom apetite !!!'
  
  console.log(resultado)
    }
  
  startMicro("Brigadeiro",15)
  