const questions = [
    "What is your name?",
    "What is your favorite movie?",
    "What is your favorite food?"
];


const ask = ( i = 0 ) => {
        process.stdout.write( `\n\n ${questions[i]} > ` );
};

ask();

const answers = [];

process.stdin.on('data', data => {
    answers.push(data.toString().trim());

    if (answers.length < questions.length) {
        ask(answers.length);
    } else {
        process.exit();
    }
})

process.on("exit", () => {
    const [name, movie, food] = answers;

    console.log(`name ${name}, movie ${movie}, food ${food}`);
})



