const quizData = [
  { question: "What is CSS used for?", a: "Structure", b: "Styling", c: "Database", correct: "b" },
  { question: "JavaScript is a ____ language.", a: "Programming", b: "Markup", c: "Database", correct: "a" }
];

const quizContainer = document.getElementById("quiz-container");
const result = document.getElementById("quiz-result");

quizData.forEach((q, index) => {
  const div = document.createElement("div");
  div.innerHTML = `
    <p>${index + 1}. ${q.question}</p>
    <label><input type="radio" name="q${index}" value="a"> ${q.a}</label>
    <label><input type="radio" name="q${index}" value="b"> ${q.b}</label>
    <label><input type="radio" name="q${index}" value="c"> ${q.c}</label>
  `;
  quizContainer.appendChild(div);
});

document.getElementById("submit-quiz").addEventListener("click", () => {
  let score = 0;
  quizData.forEach((q, index) => {
    const answer = document.querySelector(`input[name="q${index}"]:checked`);
    if (answer && answer.value === q.correct) score++;
  });
  result.textContent = `You scored ${score} / ${quizData.length}`;
});
