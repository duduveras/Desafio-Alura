    let shoppingList = [];

    function adicionarItem() {
    let adding = true;

    while (adding) {
        let answer = prompt("Deseja adicionar um item na lista de compras? (sim ou não)");

        if (answer.toLowerCase() === "sim") {
        let food = prompt("Qual item você deseja inserir?");
        let category = prompt("Em qual categoria esse item se encaixa? (frutas, laticínios, congelados, doces, cereais, etc.)");

        let item = {
            food: food,
            category: category
        };

        shoppingList.push(item);
        } else if (answer.toLowerCase() === "não") {
        console.log("Itens adicionados à lista de compras:");
        for (let i = 0; i < shoppingList.length; i++) {
            console.log(`${i + 1}. ${shoppingList[i].food} - ${shoppingList[i].category}`);
        }
        adding = false;
        } else {
        console.log("Opção inválida. Digite 'sim' ou 'não'.");
        }
    }
    }
    function removerItem() {
    if (shoppingList.length > 0) {
        let remover = prompt("Deseja remover algum item da lista? (sim ou não)");

        if (remover.toLowerCase() === "sim") {
        console.log("Itens na lista de compras:");
        for (let i = 0; i < shoppingList.length; i++) {
            console.log(`${i + 1}. ${shoppingList[i].food} - ${shoppingList[i].category}`);
        }
        let itemRemover = prompt("Qual item você deseja remover?");
        let indexRemover = -1;

        for (let i = 0; i < shoppingList.length; i++) {
            if (shoppingList[i].food === itemRemover) {
            indexRemover = i;
            break;
            }
        }
        if (indexRemover !== -1) {
            shoppingList.splice(indexRemover, 1);
            console.log("Item removido da lista de compras.");
            console.log(shoppingList);
        } else {
            console.log("Não foi possível encontrar o item dentro da lista!");
        }
        } else if (remover.toLowerCase() === "não") {
        console.log("Lista de compras:");
        let categorias = {};

        for (let i = 0; i < shoppingList.length; i++) {
            let categoria = shoppingList[i].category;
            let item = shoppingList[i].food;

            if (!categorias[categoria]) {
            categorias[categoria] = [item];
            } else {
            categorias[categoria].push(item);
            }
        }
        for (const categoria in categorias) {
            console.log(`${categoria}: ${categorias[categoria].join(", ")}`);
        }
        } else {
        console.log("Opção inválida. Digite 'sim' ou 'não'.");
        removerItem();
        }
    } else {
        console.log("Lista de compras vazia.");
    }
    }
    adicionarItem();
    removerItem();
