const schoolTest = {
    student: "João",
    subjects: "Português",
    value: 10,
    questions: [
        {
            reply: "a",
            correct: "b"
        },
        {
            reply: "c",
            correct: "c"
        },
        {
            reply: "e",
            correct: "b"
        },
        {
            reply: "b",
            correct: "b"
        },
        {
            reply: "c",
            correct: "c"
        }
    ]
};

function corretionTest(schoolTest) {
    let acerts = 0;
    let value = 0;
    for (const toCorrect of schoolTest.questions) {
        if (toCorrect.reply === toCorrect.correct) {
            acerts++; 
            value += 2;
        }
    }
    console.log(`The student ${schoolTest.student} got ${acerts} right questions and your grade is ${value}.`);
}

corretionTest(schoolTest);