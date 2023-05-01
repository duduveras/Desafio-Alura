    const numero = Math.floor(Math.random() * 11);

    let tentativas = 3;

    while (tentativas > 0) {
    const chute = prompt("Chute um número entre 0 e 10:=>");

    const numeroChutado = parseInt(chute);

    if (numeroChutado === numero) {
        alert("Parabéns! Você acertou o número!");
        break;
    } else {
        tentativas--;
        if (tentativas > 0) {
        alert(`Ops! Chute errado! Você tem mais ${tentativas} tentativas.`);
        } else {
        alert(`Acabaram suas tentativas! O número era ${numero}.`);
        }
    }
    }
