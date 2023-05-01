    let shoppingList = [];
        let adding = true;

        while (adding) {
        
        let answer = prompt("Deseja adicionar um item na lista de compras? (sim ou não) ");

        if (answer.toLowerCase() === "sim") {
            let food = prompt("Qual item você deseja inserir? ");
            let category = prompt("Em qual categoria esse item se encaixa? (frutas, laticínios, congelados, doces, cereais,produtos,etc.) ");

            let item = {
            food: food,
            category: category
            };

            shoppingList.push(item);
        } else {

            adding = false;
        }
        }
        let groupedItems = {};
        for (let i = 0; i < shoppingList.length; i++) {
        let item = shoppingList[i];

        if (item.category in groupedItems) {
            groupedItems[item.category].push(item.food);
        } else {

            groupedItems[item.category] = [item.food];
        }
        }
        console.log("Lista de compras:");
        for (let category in groupedItems) {
        console.log(`  ${category}: ${groupedItems[category].join(", ")}`);
        }
