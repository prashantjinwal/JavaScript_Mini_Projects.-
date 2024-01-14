const questions = [
    {
        question:"Capital of Japan",
        answers: [
            {text:"India" , correct : false},
            {text:"Tokyo" , correct : true},
            {text:"Jaipur" , correct : false},
            {text:"Delhi" , correct : false},
        ]
    },
    {
        question:"Capital of India",
        answers: [
            {text:"Japan" , correct : false},
            {text:"paris" , correct : false},
            {text:"lucknow" , correct : false},
            {text:"Delhi" , correct : true},
        ]
    },
    {
        question:"Largest planet in our solar system",
        answers: [
            {text:"Jupiter" , correct : true},
            {text:"Venus" , correct : false},
            {text:"Saturn" , correct : false},
            {text:"Mars" , correct : false},
        ]
    },
    {
        question:"Element with the symbol H :",
        answers: [
            {text:"Helium" , correct : false},
            {text:"Carbon" , correct : false},
            {text:"Hydrogen" , correct : true},
            {text:"Nitrogen" , correct : false},
        ]
    },
]

let quesEle = document.getElementById("Question-here");
let ansBtn = document.getElementById("answer-buttons");
let nextBtn = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz()  {
    currentQuestionIndex = 0;
    score = 0;
    nextBtn.innerHTML = "Next";
    showques();
}

function showques(){
    resetstate();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNum = currentQuestionIndex + 1;
    quesEle.innerHTML = questionNum + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answers =>{
        const button = document.createElement("button");
        button.innerHTML = answers.text;
        button.classList.add("btn");
        ansBtn.appendChild(button);
        if(answers.correct){
            button.dataset.correct = answers.correct;
        }
        button.addEventListener("click",selectAnswer);
    });

}

    function resetstate() {
        nextBtn.style.display = "none";
        while(ansBtn.firstChild){
            ansBtn.removeChild(ansBtn.firstChild);
        }
    }


   function selectAnswer(e){
         
        const selectedbtn = e.target;
        const iscorrect = selectedbtn.dataset.correct === 'true';
        if(iscorrect){
            selectedbtn.classList.add("correct");
            score++;
        }
        else{
            selectedbtn.classList.add("incorrect")
        }

        Array.from(ansBtn.children).forEach(button =>{
            if(button.dataset.correct === "true"){
                button.classList.add("correct");
            }
            button.disabled = true;
        });
        nextBtn.style.display = "block";

   }

//    --- show score functon ---

        function showscore () {
            resetstate();
            quesEle.innerHTML = `You scored ${score} out of ${questions.length} ! `;
            nextBtn.innerHTML = `Play Again`;
            nextBtn.style.display = "block"
        }



   function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showques();
    }else{
        showscore();
    }
   }


   nextBtn.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
             handleNextButton();
    }
    else{
        startQuiz();
    }
   });



startQuiz();