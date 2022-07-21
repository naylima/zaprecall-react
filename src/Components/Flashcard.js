import React from "react";

import Button from "./Buttons";

const buttons = [
    {status: "wrong", icon: "close-circle", text: "Não lembrei"},
    {status: "almost", icon: "help-circle", text: "Quase não lembrei"},
    {status: "right", icon: "checkmark-circle", text: "Zap!"}
]

function Flashcard ({i, question, answer, event}) {

    const [flashcard, setFlashcard] = React.useState(true);
    const [isFlipped, setFlipped] = React.useState(true);
    const [status, setStatus] = React.useState("flashcard");
    const [iconName, setIconName] = React.useState("play-outline"); 

    return (
        <>
            {flashcard ? (
                <div className={status}>
                    <p>Pergunta {i}</p>
                    <ion-icon name={iconName} onClick={() => {
                        setFlashcard(!flashcard)}}>
                    </ion-icon>
                </div>
                ) : (
                <>  
                    {isFlipped ? (
                        <div className="flashcard-question">
                            <p>{question}</p>
                            <img src="./assets/setinha.png" alt="" onClick={() => {
                                setFlipped(!isFlipped)}} />
                        </div>
                        ) : (
                        <div className="flashcard-answer">
                            <p>{answer}</p>
                            <div>
                                {buttons.map ((button, index) => (
                                    <Button 
                                        key = {index}
                                        status = {button.status}
                                        icon = {button.icon} 
                                        text = {button.text}
                                        event = {event}
                                        setStatus = {setStatus}
                                        setIconName = {setIconName}
                                        setFlashcard = {setFlashcard}
                                    />
                                ))}
                            </div>
                        </div>
                    )}
                </>
            )}               
        </>
    );
}

export default Flashcard;