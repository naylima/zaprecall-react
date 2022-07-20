import React from "react";

function Flashcard (props) {

    const [flashcard, setFlashcard] = React.useState(true);
    const [isFlipped, setFlipped] = React.useState(true);
    const [status, setStatus] = React.useState("flashcard");
    const [iconName, setIconName] = React.useState("play-outline");
    const [count, setCount] = React.useState(0);

    return (
        <>
            <main>
                {flashcard ? (
                    <div className={status}>
                        <p>Pergunta {props.i}</p>
                        <ion-icon name={iconName} onClick={() => {
                            setFlashcard(!flashcard)}}>
                        </ion-icon>
                    </div>
                ) : (
                    <>  
                        {isFlipped ? (
                            <div className="flashcard-question">
                                <p>{props.question}</p>
                                <img src="./assets/setinha.png" alt="" onClick={() => {
                                    setFlipped(!isFlipped)}} />
                            </div>
                        ) : (
                            <div className="flashcard-answer">
                                <p>{props.answer}</p>
                                <div>
                                    <button onClick={() => {
                                            setFlashcard(true)
                                            setStatus ("wrong")
                                            setIconName("close-circle")
                                            setCount(count + 1)}}>
                                                Não lembrei
                                    </button>
                                    <button onClick={() => {
                                            setFlashcard(true)
                                            setStatus ("almost")
                                            setIconName("help-circle")
                                            setCount(count + 1)}}>
                                                Quase não lembrei
                                    </button>
                                    <button onClick={() => {
                                            setFlashcard(true)
                                            setStatus ("right")
                                            setIconName("checkmark-circle")
                                            setCount(count + 1)}}>
                                                Zap!
                                    </button>
                                </div>
                            </div>
                        )}
                    </>
                )}               
            </main>

            <footer>
                {count}/{flashcards.length} CONCLUÍDOS
            </footer>
       </>
    );
}

const flashcards = [
    {
        question: "O que é JSX?",
        answer: "Uma extensão de linguagem do JavaScript",
    },
    {
        question: "O React é ...",
        answer: "uma biblioteca JavaScript para construção de interfaces",
    },
    {
        question: "Componentes devem iniciar com ...",
        answer: "letra maiúscula",
    },
    {
        question: "Podemos colocar (...) dentro do JSX ",
        answer: "expressões",
    },
    {
        question: "O ReactDOM nos ajuda ...",
        answer: "interagindo com a DOM para colocar componentes React na mesma",
    },
    {
        question: "Usamos o npm para ... ",
        answer: "gerenciar os pacotes necessários e suas dependências",
    },
    {
        question: "Usamos props para ...",
        answer: "passar diferentes informações para componentes",
    },
    {
        question: "Usamos estado (state) para ...",
        answer: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente",
    }
]

flashcards.sort(shuffle);

function shuffle() { 
	return Math.random() - 0.5; 
}

function Deck () {    

    return (
        <div> 
            <header>
                <img src="./assets/logo-pequeno.png" alt="" />
                <h2>ZapRecall</h2>
            </header>

            {flashcards.map ((flashcard, index) => (
                <Flashcard 
                    question = {flashcard.question}
                    answer = {flashcard.answer}
                    i = {index + 1}
                />)
            )}

        </div>
    )
}

export default Deck;