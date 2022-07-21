import React from "react";
import Flashcard from "./Flashcard";

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

    const [iconsName, setIconsName] = React.useState([]);

    function Count (icon) {
        setIconsName([...iconsName, icon]);           
    }
    
    return (
        <div> 
            <header>
                <img src="./assets/logo-pequeno.png" alt="" />
                <h2>ZapRecall</h2>
            </header>

            <main>
                {flashcards.map ((flashcard, index) => (
                    <Flashcard
                        key = {index}
                        question = {flashcard.question}
                        answer = {flashcard.answer}
                        i = {index + 1}
                        event = {Count}
                    />)
                 )}
            </main>           

             <footer>
                {(iconsName.length === flashcards.length) ? (
                    <>
                        {(iconsName.includes("close-circle")) ? (
                            <>
                                <div className="result">
                                    <div>
                                        <img src="./assets/sad.png" alt="" /> 
                                        <p>Poxa!</p>
                                    </div> 
                                    Ainda faltam alguns... Mas não desanime!
                                </div>
                                <div>
                                    {iconsName.length}/{flashcards.length} CONCLUÍDOS
                                </div>

                                <div>
                                    {iconsName.map((iconName, index) =>
                                        <ion-icon key = {index} name={iconName}></ion-icon>
                                    )}
                                </div>
                            </>
                        ) : ( 
                            <>
                                <div className="result">
                                    <div>
                                        <img src="./assets/party.png" alt="" /> 
                                        <p>Parabéns</p>
                                    </div> 
                                    Você não esqueceu de nenhum flashcard!
                                </div>
                                <div>
                                    {iconsName.length}/{flashcards.length} CONCLUÍDOS
                                </div>

                                <div>
                                    {iconsName.map((iconName, index) =>
                                        <ion-icon key = {index} name={iconName}></ion-icon>
                                    )}
                                </div>
                            </>
                        )}
                    </>

                ) : (
                    <>
                        <div>
                            {iconsName.length}/{flashcards.length} CONCLUÍDOS
                        </div>

                        <div>
                            {iconsName.map((iconName, index) =>
                                <ion-icon key = {index} name={iconName}></ion-icon>
                            )}
                        </div>
                    </>
                )}
                
            </footer>

        </div>
    )
}

export default Deck;