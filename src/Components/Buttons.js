function Button ({status, icon, text, event, setFlashcard, setStatus, setIconName}) {
    return (
        <button onClick={() => {
            setFlashcard(true)
            setStatus (status)
            setIconName(icon)
            event(icon)
            }}>
                {text}
        </button>
    )
}

export default Button;