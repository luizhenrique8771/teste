let velocidade = 40

const deseja = parseFloat(prompt("Sua moto está a " + velocidade + "km/h" + " em uma avenida onde a máxima é 120km/h. Deseja aumentar a velocidade? \n(Digite 1 para Sim e 2 para Não)"))

while (deseja) {
    if(deseja === 1){
    velocidade += 30
    alert("Você está a " + velocidade + "km/h")
}

if(deseja === 2) {
    alert("Você ficou em uma velocidade dentro dos limites da avenida e chegou a seu destino após 4h.")
    break
}

const deseja1 = parseFloat(prompt("Você está a " +"70km/h." + " Deseja aumentar a velocidade? (1: Sim / 2: Não)"))

if(deseja1 === 1 && velocidade === 70) {
    velocidade += 30
    alert("Agora você está a    " + "100km/h." + " \nDeseja aumentar a velocidade? (1:Sim / 2: Não)")
}

else if(deseja1 === 2 && velocidade === 70) {
    alert("Você ficou em uma velocidade dentro dos limites da avenida e chegou a seu destino após 3h.")
    break
}

if(deseja1 === 1 && velocidade === 100) {
    velocidade += 20
    alert("Você está a " + velocidade + "km/h." + " Você está no limite de velocidade máxima da avenida. \nTem certeza que deseja aumentar a velocidade? (1:Sim / 2:Não)")
}

else if(deseja1 === 2 && velocidade === 100) {
    alert("Você ficou em uma velocidade dentro dos limites da avenida e chegou a seu destino após 2:30h.")
    break
}

if(deseja1 === 1 && velocidade === 120) {
    velocidade += 30
    alert("Em uma avenida onde a máxima é 120km/h, você está a 150km/h. \nTem certeza que deseja aumentar sua velocidade? (1:Sim / 2:Não)")
}

else if(deseja1 === 2 && velocidade === 120) {
    alert("Você ficou no limite de velocidade da avenida e chegou a seu destino após 2:10h.")
    break
}

if(deseja1 === 1 && velocidade === 150) {
    velocidade += 30
    alert("180km/h.")
}


}
