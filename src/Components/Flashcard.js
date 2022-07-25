import React from "react";
import setinha from "../assets/img/setinha.png"

import Button from "./Buttons";

const buttons = [
    {status: "wrong", icon: "close-circle", text: "Não lembrei"},
    {status: "almost", icon: "help-circle", text: "Quase não lembrei"},
    {status: "right", icon: "checkmark-circle", text: "Zap!"}
]

function Flashcard ({i, question, answer, event, flashcard}) {

    const [isTapped, setIsTapped] = React.useState(true);
    const [isFlipped, setFlipped] = React.useState(true);
    const [status, setStatus] = React.useState(flashcard.status);
    const [iconName, setIconName] = React.useState("play-outline"); 
    
    return (
        <>
            {isTapped ? (
                <div className={status}>
                    <p>Pergunta {i}</p>
                    <ion-icon name={iconName} onClick={() => {
                        setIsTapped(!isTapped)}}>
                    </ion-icon>
                </div>
                ) : (
                <>  
                    {isFlipped ? (
                        <div className="flashcard-question">
                            <p>{question}</p>
                            <img src={setinha} alt="" onClick={() => {
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
                                        setIsTapped = {setIsTapped}
                                        flashcard = {flashcard}
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