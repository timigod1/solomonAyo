const questions = [
    {
        question: "Leadership develops daily, not in a day correlates with which of the following Laws?",
        options: ["Law of Influence", "Law of Process", "Law of Legacy", "Law of Sacrifice"],
        answer: "Law of Process"
    },
    {
        question: "In what year was Diana the most talked-about person worldwide?",
        options: ["1977", "1981", "1985", "1990"],
        answer: "1981"
    },
    {
        question: "Which of the following is not a way people become real leaders, according to the book?",
        options: ["Building solid relationships", "Demonstrating past successes", "Relying solely on natural talent", "Learning from experience"],
        answer: "Relying solely on natural talent"
    },
    {
        question: "Complete the statement attributed to General Norman Schwarzkopf: “Leadership is a potent combination of strategy and character. But if you must be without one, be without __________.”",
        options: ["Character", "Strategy", "Power", "Influence"],
        answer: "Strategy"
    },
    {
        question: "What position did Jack Welch hold, as noted by the author, and what stood out about his work?",
        options: ["CEO of Ford, focused on technological innovation", "CFO of Microsoft, known for rapid expansion", "CEO of General Electric, emphasized efficiency and productivity", "COO of Amazon, pushed customer service"],
        answer: "CEO of General Electric, emphasized efficiency and productivity"
    },
    {
        question: "Which of the following is one of the three barriers to empowerment mentioned in the book?",
        options: ["Lack of funding", "Leader’s desire for control", "Poor communication skills", "Insufficient team training"],
        answer: "Leader’s desire for control"
    },
    {
        question: "A Leader's Lasting Value is Measured by Succession is which law number?",
        options: ["15", "12", "21", "9"],
        answer: "21"
    },
    {
        question: "What does MJ DeMarco see as the primary limitation of the 'Slowlane' approach to wealth?",
        options: ["It requires too much risk", "It is heavily dependent on time and can take a lifetime", "It discourages saving and investing", "It only works for those with high-paying jobs"],
        answer: "It is heavily dependent on time and can take a lifetime"
    },
    {
        question: "How does DeMarco define the 'Fastlane' approach?",
        options: ["A slow, steady investment in the stock market", "A path to wealth that avoids traditional job structures and uses scalable income", "A high-risk, high-reward system involving frequent job changes", "A lifestyle of extreme saving and frugality to build wealth"],
        answer: "A path to wealth that avoids traditional job structures and uses scalable income"
    },
    {
        question: "According to The Millionaire Fastlane, what does DeMarco see as the main issue with trading time for money?",
        options: ["It involves high tax liabilities", "It requires working long hours without breaks", "It places a hard limit on income based on available hours", "It necessitates ongoing investment in new skills"],
        answer: "It places a hard limit on income based on available hours"
    },
    {
        question: "DeMarco emphasizes the importance of 'value' in wealth creation. How does he define its role?",
        options: ["Value creation is unnecessary for passive income", "Value should be low-cost to appeal to a larger market", "Providing high value can drive demand and increase income", "High value is only necessary in traditional career paths"],
        answer: "Providing high value can drive demand and increase income"
    },
    {
        question: "What is DeMarco’s concept of true financial freedom?",
        options: ["Accumulating enough wealth to retire by age 65", "Achieving a passive income that covers basic expenses independently of a job", "Working a high-paying job with substantial benefits", "Owning property and maintaining savings for emergencies"],
        answer: "Achieving a passive income that covers basic expenses independently of a job"
    },
    {
        question: "How does DeMarco use the metaphor of a 'money tree'?",
        options: ["To show the importance of diversified investments", "To illustrate how wealth grows when a passive income source is established", "To describe the rewards of a well-paid traditional job", "To explain the necessity of building an emergency fund"],
        answer: "To illustrate how wealth grows when a passive income source is established"
    }
];

function generateQuiz() {
    const quizForm = document.getElementById("quizForm");

    questions.forEach((question, index) => {
        const questionDiv = document.createElement("div");
        questionDiv.classList.add("question");

        const questionTitle = document.createElement("h3");
        questionTitle.textContent = question.question;
        questionDiv.appendChild(questionTitle);

        question.options.forEach(option => {
            const optionLabel = document.createElement("label");
            const optionInput = document.createElement("input");
            optionInput.type = "radio";
            optionInput.name = "question" + index;
            optionInput.value = option;

            optionLabel.appendChild(optionInput);
            optionLabel.appendChild(document.createTextNode(option));

            questionDiv.appendChild(optionLabel);
            questionDiv.appendChild(document.createElement("br"));
        });

        quizForm.appendChild(questionDiv);
    });
}

function submitQuiz() {
    let score = 0;
    let resultText = "Here are your answers:\n\n";

    questions.forEach((question, index) => {
        const selectedAnswer = document.querySelector(`input[name="question${index}"]:checked`);
        if (selectedAnswer) {
            const answer = selectedAnswer.value;
            resultText += `${question.question}\nYour answer: ${answer}\nCorrect answer: ${question.answer}\n\n`;
            if (answer === question.answer) {
                score++;
            }
        }
    });

    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `<strong>Your Score: ${score} out of ${questions.length}</strong><br><pre>${resultText}</pre>`;
}

generateQuiz();
