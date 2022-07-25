
function Button ({status, icon, text, event, setIsTapped, setStatus, setIconName, flashcard}) {
    return (
        <button onClick={() => {
            flashcard.status = status
            setIsTapped(true)
            setStatus (flashcard.status)
            setIconName(icon)
            event(icon)
            }}>
                {text}
        </button>
    )
}

export default Button;