    let area = prompt("Você quer seguir para a área de Front-End ou Back-End?:");

    if (area === "Front-End") {
    let frontEnd = prompt("Você quer aprender React ou Vue?:");
    if (frontEnd === "React") {
        let especializar = prompt("Você quer se especializar em Front-End ou se desenvolver para se tornar Fullstack?:");
        if (especializar === "Front-End") {
        console.log("Parabéns! Você decidiu se especializar em React no Front-End.:");
        } else {
        console.log("Parabéns! Você decidiu se desenvolver para se tornar um desenvolvedor Fullstack.:");
        }
    } else if (frontEnd === "Vue") {
        let especializar = prompt("Você quer se especializar em Front-End ou se desenvolver para se tornar Fullstack?:");
        if (especializar === "Front-End") {
        console.log("Parabéns! Você decidiu se especializar em Vue no Front-End.:");
        } else {
        console.log("Parabéns! Você decidiu se desenvolver para se tornar um desenvolvedor Fullstack.:");
        }
    } else {
        console.log("Opção inválida. Por favor, escolha entre React e Vue.:");
    }
    } else if (area === "Back-End") {
    let backEnd = prompt("Você quer aprender C# ou Java?:");
    if (backEnd === "C#") {
        let especializar = prompt("Você quer se especializar em Back-End ou se desenvolver para se tornar Fullstack?:");
        if (especializar === "Back-End") {
        console.log("Parabéns! Você decidiu se especializar em C# no Back-End.:");
        } else {
        console.log("Parabéns! Você decidiu se desenvolver para se tornar um desenvolvedor Fullstack.:");
        }
    } else if (backEnd === "Java") {
        let especializar = prompt("Você quer se especializar em Back-End ou se desenvolver para se tornar Fullstack?:");
        if (especializar === "Back-End") {
        console.log("Parabéns! Você decidiu se especializar em Java no Back-End.:");
        } else {
        console.log("Parabéns! Você decidiu se desenvolver para se tornar um desenvolvedor Fullstack.:");
        }
    } else {
        console.log("Opção inválida. Por favor, escolha entre C# e Java.:");
    }
    } else {
    console.log("Opção inválida. Por favor, escolha entre Front-End e Back-End.:");
    }
