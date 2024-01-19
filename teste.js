let velocidade = 40
const veiculo = alert ("Sua moto está a " + velocidade + "km/h" + " em uma avenida onde a máxima é 120km/h.")
const deseja = parseFloat(prompt ("Deseja aumentar a velocidade da moto? \n\n(Digite 1 para Sim e 2 para Não)"))

if(deseja === 2) {
    alert("Você ficou em uma velocidade dentro dos limites da avenida e chegou a seu destino após 4h.")
 }  


while(deseja === 1) {
    velocidade += 30
    alert("Agora você está a " + velocidade + "km/h.")
 const deseja1 = parseFloat(prompt("Você está á " + velocidade + "km/h." + " Deseja aumentar a velocidade? \n(1: Sim / 2: Não)"))

if (deseja1 === 2 && velocidade === 70) {
  alert("Você ficou em uma velocidade dentro dos limites da avenida e chegou a seu destino após 3:30h.")
  break
}

if (deseja1 === 2 && velocidade === 100) {
  alert("Você ficou em uma velocidade dentro dos limites da avenida e chegou a seu destino após 3h.")
  break
}

    if(deseja1 === 1 && velocidade === 100) {
       alert("Em uma avenida onde a máxima é 120km/h, você está a 130km/h.")
     } 

   else if(deseja1 === 2 && velocidade === 110) {
    alert("Você ficou em uma velocidade dentro dos limites da avenida e chegou a seu destino após 3h.")
        break
      } 

      if(deseja1 === 1 && velocidade === 130) {
        alert("Você está a 160km/h em uma avenida onde a máxima é 120km/h.")
      } 
 
    else if(deseja1 === 2 && velocidade === 130) {
         alert("Você tentou desacelerar mas acabou batendo em um carro e quebrando sua perna direita." )
         break
       } if(deseja1 === 1 && velocidade === 160) {
        alert("Cuidado! você quase bateu em um pedestre!")
      } 
 
      else if(deseja1 === 2 && velocidade === 160) {
         alert("Com muita habilidade, você conseguiu parar sua moto e estacionar em um posto de gasolina." )
         break
       } 

       if( deseja1 === 1 && velocidade === 190 ) {
        alert(
           "A policia viu sua alta velocidade na avenida e começou a perseguir você."
        )
      }

      else if (deseja1 === 2 && velocidade === 190) {
        alert("Você tentou parar sua moto em um posto de gasolina, mas acabou batendo em um pedestre. Infelizmente ele não sobreviveu e você foi preso.")
        break
      }
      
      if(deseja1 === 1 && velocidade === 220) {
        alert("A policia conseguiu alcançar você e acabou batendo na traseira de sua moto. Pela alta velocidade, você teve um acidente fatal e acabou morrendo ali mesmo." + " Seu rosto ficou irreconhecivel.")
        break
      }

}