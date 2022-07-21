import React from "react";

function Flashcard (props) {

    const [flashcard, setFlashcard] = React.useState(true);
    const [isFlipped, setFlipped] = React.useState(true);
    const [status, setStatus] = React.useState("flashcard");
    const [iconName, setIconName] = React.useState("play-outline");    

    return (
        <>
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
                                        props.event("close-circle")
                                        }}>
                                            Não lembrei
                                </button>
                                <button onClick={() => {
                                        setFlashcard(true)
                                        setStatus ("almost")
                                        setIconName("help-circle")
                                        props.event("help-circle")
                                        }}>
                                            Quase não lembrei
                                </button>
                                <button onClick={() => {
                                        setFlashcard(true)
                                        setStatus ("right")
                                        setIconName("checkmark-circle")
                                        props.event("checkmark-circle")
                                        }}>
                                            Zap!
                                </button>
                            </div>
                        </div>
                    )}
                </>
            )}               
        </>
    );
}

export default Flashcard;