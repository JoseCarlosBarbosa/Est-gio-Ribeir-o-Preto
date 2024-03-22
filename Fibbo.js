// Importa a biblioteca readline, que é uma interface para ler dados de entrada a partir de uma stream de leitura, 
// como o terminal.
const readline = require('readline');

// Define uma função chamada getInput que solicita ao usuário uma entrada no terminal e retorna essa entrada como uma Promise.
function getInput(prompt) {
    // Cria uma interface de leitura usando a biblioteca readline, configurando a entrada para o processo padrão de entrada (stdin)
    // e a saída para o processo padrão de saída (stdout).
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    // Retorna uma Promise que resolve a entrada do usuário após ele digitar algo e pressionar Enter.
    return new Promise((resolve) => {
        // Usa rl.question para exibir o prompt ao usuário e aguardar sua entrada.
        rl.question(prompt, (input) => {
            // Quando o usuário entra com um valor, fecha a interface readline.
            rl.close();
            // Resolve a Promise com a entrada do usuário.
            resolve(input);
        });
    });
}

// Define uma função chamada Fibbo que recebe o valor digitado pelo usuario.

function Fibbo(userInput) {
    let aux = 0;
    let somaF = 1;

    //verificação base do fibbo
    if (userInput === aux || userInput === somaF) return true;
    while (somaF <= userInput) {
        //verifica se o numero informado e igual a sequencia
        if (somaF === userInput) {
            return true;
        }
        // atualiza a sequyencia 
        let next = aux + somaF;
        aux = somaF;
        somaF = next;
    }
    // Se o número não foi encontrado na sequência de Fibonacci, retorna falso
    return false;
}

// Define uma função assíncrona chamada main, que é a função principal do programa.
async function main() {
    // Aguarda a entrada do usuário usando a função getInput e armazena a entrada em uma variável chamada userInput.
    const userInput = await getInput("Digite o Valor a Ser Verificado : ");
    const numero = parseInt(userInput);
    // Imprime a entrada do usuário no console.
    console.log(Fibbo(numero));
}

// Chama a função main para iniciar a execução do programa.
main();