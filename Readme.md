Aqui esta os desafios que fiz quando participei da #7DaysOfCode pela Alura onde tive que resolver problemas em JavaScript durante 7 dias.

# Desafios Alura 

Ai esta os desafios que fiz quando participei do #7DaysOfCode na alura onde tive que resolver alguns desafios durante 7 dias.

| :placard: Descrição |     |
| -------------  | --- |
| :sparkles: Nome        | **#7DaysOfCode**
| :label: Tecnologias | JavaScript,(tecnologias utilizadas)

## Detalhes do projeto

Registro de todos os desafios do #7DaysOfCode 





#Dia 1 => No primeiro dia tive que corrigir esse erro e fazer com que ele imprima as informações de maneira correta, que faça sentido e sem erros. (O CODIGO CORRETO SE ENCONTRA NO desafio1.js)
let numeroUm = 1
let stringUm = '1'
let numeroTrinta = 30
let stringTrinta = '30'
let numeroDez = 10
let stringDez = '10'

if (COMPARAR O numeroUm e a stringUm) {
  console.log('As variáveis numeroUm e stringUm tem o mesmo valor, mas tipos diferentes')
} else {
  console.log('As variáveis numeroUm e stringUm não tem o mesmo valor')
}

if (COMPARAR O numeroTrinta e a stringTrinta) {
  console.log('As variáveis numeroTrinta e stringTrinta tem o mesmo valor e mesmo tipo')
} else {
  console.log('As variáveis numeroTrinta e stringTrinta não tem o mesmo tipo')
}

if (COMPARAR O numeroDez e a stringDez) {
  console.log('As variáveis numeroDez e stringDez tem o mesmo valor, mas tipos diferentes')
} else {
  console.log('As variáveis numeroDez e stringDez não tem o mesmo valor')
}

#Dia 2 => No segundo dia tive que desenvolver um programa simulando um site que deve pedir para o usuário responder 3 perguntas:

- Qual o seu nome?
- Quantos anos você tem?
- Qual linguagem de programação você está estudando?

À medida que as perguntas forem sendo feitas, a pessoa que estiver usando o programa deve responder cada uma delas.

No final, o sistema vai exibir a mensagem:

"Olá [nome], você tem [idade] anos e já está aprendendo [linguagem]!" 

(O CODIGO ESTA NA PASTA desafio2)

#Dia 3 => #7DaysOfCode No desafio de hoje da alura dia 3 tive que criar os destinos possíveis de um jogo, em que o usuário consiga escolher:



1. Se quer seguir para área de Front-End ou seguir para a área de Back-End.



2. Caso esteja na área de Front-End, se quer aprender React ou aprender Vue. Caso esteja na área de Back-End, poderá aprender C# ou aprender Java.



3. Depois, independente das escolhas anteriores, o usuário poderá escolher entre seguir se especializando na área escolhida ou seguir se desenvolvendo para se tornar Fullstack. Você deve exibir na tela uma mensagem específica para cada escolha.



4. Por fim, pergunte quais são as tecnologias nas quais a pessoa gostaria de se especializar ou de conhecer. Aqui, a pessoa pode responder N tecnologias, uma de cada vez. Então, enquanto ela continuar respondendo ok para a pergunta: "Tem mais alguma tecnologia que você gostaria de aprender?", continue apresentando para ela o Prompt, para que ela complete o nome da tecnologia em questão. E, logo depois, apresente uma mensagem comentando algo sobre a linguagem inserida.

#Dia 4 => No desafio de hoje tive que criar um programa que comece com um valor específico pré-definido entre 0 a 10 para o número que você vai adivinhar (7, por exemplo).



Em seguida, o programa vai perguntar para o usuario o valor que o usuario deseja chutar e, caso ele acerte, ele irá te parabenizar. Caso erre, ele vai te dar mais 2 tentativas.



No fim, caso você não acerte nenhuma vez, ele vai imprimir qual era o número inicial.

Explicaçao do Codigo: 

-A primeira linha gera um número aleatório entre 0 e 10 usando a função Math.random() e a função Math.floor() para arredondar o número para baixo e transformá-lo em um número inteiro.

-A variável tentativas é inicializada com o valor 3, que representa o número de tentativas que o usuário terá para adivinhar o número.

-O loop while é usado para pedir o chute do usuário até que ele acerte o número ou as tentativas acabem.

-Dentro do loop, o código pede o chute do usuário usando a função prompt() e converte a resposta do usuário em um número inteiro usando a função parseInt().

-Em seguida, o código verifica se o chute é igual ao número gerado. Se for, o usuário acertou o número e o jogo acaba. Caso contrário, o número de tentativas é decrementado e o código verifica se ainda há tentativas disponíveis. Se ainda houver, uma mensagem é exibida informando que o chute foi errado e quantas tentativas ainda restam. Se as tentativas acabarem, uma mensagem é exibida informando que o jogo acabou e qual era o número gerado.

#Dia 5 => O código tem como finalidade criar uma lista de compras em JavaScript, onde o usuário pode adicionar alimentos e suas respectivas categorias, tais como frutas, laticínios, congelados, doces, entre outros.

Para criar a lista, o código utiliza um laço de repetição que pergunta ao usuário se deseja adicionar um item na lista de compras. Se a resposta for "sim", o código pede que o usuário digite o nome do alimento e a categoria em que ele se encaixa. Em seguida, o código armazena o item em um objeto e adiciona o objeto na lista de compras.

Depois de criar a lista, o código agrupa os itens por categoria e imprime a lista de compras agrupada, exibindo todos os itens agrupados por categoria.

Com isso, o código permite que o usuário crie uma lista de compras organizada e mais fácil de ser utilizada, já que os itens estarão agrupados por categoria.

Dia  7 => O código apresenta uma calculadora que permite ao usuário realizar operações básicas (soma, subtração, multiplicação e divisão) entre dois números.

Cada operação é uma função diferente, o que ajuda a deixar o código mais organizado e facilita a manutenção.

A função principal calculadora()apresenta um loop infinito que exibe as opções disponíveis para o usuário escolher a operação que deseja realizar. Após escolher uma opção, o usuário insere os valores a serem usados ​​na operação e a função correspondente é chamada para realizar o calculado e exibir o resultado.

Caso o usuário escolha a opção "Sair", o programa é encerrado com a mensagem "Até a próxima!".

O código também verifica se a opção escolhida pelo usuário é válida e trata o erro de divisão por zero na função de divisão.