import React from "react";
import smallLogo from "../assets/img/logo-pequeno.png"

import Flashcard from "./Flashcard";
import Results from "./Results";

const flashcards = [
    {
        question: "O que é JSX?",
        answer: "Uma extensão de linguagem do JavaScript",
        status: "flashcard"
    },
    {
        question: "O React é ...",
        answer: "uma biblioteca JavaScript para construção de interfaces",
        status: "flashcard"
    },
    {
        question: "Componentes devem iniciar com ...",
        answer: "letra maiúscula",
        status: "flashcard"
    },
    {
        question: "Podemos colocar (...) dentro do JSX ",
        answer: "expressões",
        status: "flashcard"
    },
    {
        question: "O ReactDOM nos ajuda ...",
        answer: "interagindo com a DOM para colocar componentes React na mesma",
        status: "flashcard"
    },
    {
        question: "Usamos o npm para ... ",
        answer: "gerenciar os pacotes necessários e suas dependências",
        status: "flashcard"
    },
    {
        question: "Usamos props para ...",
        answer: "passar diferentes informações para componentes",
        status: "flashcard"
    },
    {
        question: "Usamos estado (state) para ...",
        answer: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente",
        status: "flashcard"
    }  
]

flashcards.sort(shuffle);

function shuffle() { 
	return Math.random() - 0.5; 
}

function Deck () { 

    const [deck, setDeck] = React.useState([...flashcards]);
    const [iconsArray, setIconsArray] = React.useState([]);

    function Count (icon) {
        setIconsArray([...iconsArray, icon]);           
    }

    return (
        <div> 
            <header>
                <img src={smallLogo} alt="" />
                <h2>ZapRecall</h2>
            </header>

            <main>
                {deck.map ((flashcard, index) => (
                    <Flashcard
                        key = {index}
                        question = {flashcard.question}
                        answer = {flashcard.answer}
                        i = {index + 1}
                        event = {Count}
                        status = {flashcard.status}
                        flashcard = {flashcard}
                    />)
                 )}
            </main>           

             <footer>
                <Results 
                    iconsArray={iconsArray} 
                    flashcards={flashcards}
                    setIconsArray={setIconsArray}
                    setDeck = {setDeck}
                    deck = {deck}
                />                
            </footer>

        </div>
    )
}

export default Deck;