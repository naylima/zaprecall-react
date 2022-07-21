function Results ({iconsName, flashcards}) {

  
    return (
        <>
        {(iconsName.length === flashcards.length) ? (
            <>
                {(iconsName.includes("close-circle")) ? (
                
                        <div className="result">
                            <div>
                                <img src="./assets/sad.png" alt="" /> 
                                <p>Poxa!</p>
                            </div> 
                            Ainda faltam alguns... Mas não desanime!
                        </div>                        
                    
                ) : ( 
                    
                        <div className="result">
                            <div>
                                <img src="./assets/party.png" alt="" /> 
                                <p>Parabéns</p>
                            </div> 
                            Você não esqueceu de nenhum flashcard!
                        </div>
                
                )}
                <div>
                    {iconsName.length}/{flashcards.length} CONCLUÍDOS
                </div>

                <div>
                    {iconsName.map((iconName, index) =>
                        <ion-icon key = {index} name={iconName}></ion-icon>
                    )}
                </div>
                <button class="reload">REINICIAR RECALL</button>
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
        </>
    );
}

export default Results;