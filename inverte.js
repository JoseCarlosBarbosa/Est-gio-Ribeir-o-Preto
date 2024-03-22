const readline = require('readline');

// Cria uma interface de leitura para entrada do terminal
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function Reverso(inputString) {
    let inverterString = '';
    for (let i = inputString.length - 1; i >= 0; i--) {
        inverterString += inputString[i];
    }
    return inverterString;
}

rl.question("Digite a String: ", (input) => {
    const reverso = Reverso(input);
    console.log("String invertida:", reverso);

    rl.close();
});
