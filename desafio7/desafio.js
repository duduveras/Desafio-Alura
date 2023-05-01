    function soma(a, b) {
        return a + b;
    }
    function subtracao(a, b) {
        return a - b;
    }
    function multiplicacao(a, b) {
        return a * b;
    }
    function divisao(a, b) {
        if (b === 0) {
        return "Erro: não é possível dividir por zero";
        }
        return a / b;
    }
    function imprimirMenu() {
        console.log("Escolha uma operação (escolha o numero que esta na frente):");
        console.log("1 - Soma");
        console.log("2 - Subtração");
        console.log("3 - Multiplicação");
        console.log("4 - Divisão");
        console.log("5 - Sair");
        let escolha = prompt("Opção escolhida:");
        return escolha;
    }
    while (true) {
        let escolha = imprimirMenu();
        switch (escolha) {
        case "1":
            let a = prompt("Digite o primeiro valor:");
            let b = prompt("Digite o segundo valor:");
            console.log(`Resultado: ${soma(Number(a), Number(b))}`);
            break;
        case "2":
            a = prompt("Digite o primeiro valor:");
            b = prompt("Digite o segundo valor:");
            console.log(`Resultado: ${subtracao(Number(a), Number(b))}`);
            break;
        case "3":
            a = prompt("Digite o primeiro valor:");
            b = prompt("Digite o segundo valor:");
            console.log(`Resultado: ${multiplicacao(Number(a), Number(b))}`);
            break;
        case "4":
            a = prompt("Digite o primeiro valor:");
            b = prompt("Digite o segundo valor:");
            console.log(`Resultado: ${divisao(Number(a), Number(b))}`);
            break;
        case "5":
            console.log("Até a próxima!");
            return;
        default:
            console.log("Opção inválida. Tente novamente.");
            break;
        }
    }
    