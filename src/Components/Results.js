import sad from "../assets/img/sad.png"
import party from "../assets/img/party.png"

function Results ({iconsArray, flashcards, setIconsArray, deck, setDeck}) {
  
    return (
        <>
        {(iconsArray.length === deck.length) ? (
            <>
                {(iconsArray.includes("close-circle")) ? (
                
                        <div className="result">
                            <div>
                                <img src={sad} alt="" /> 
                                <p>Poxa!</p>
                            </div> 
                            Ainda faltam alguns... Mas não desanime!
                        </div>                        
                    
                ) : ( 
                    
                        <div className="result">
                            <div>
                                <img src={party} alt="" /> 
                                <p>Parabéns</p>
                            </div> 
                            Você não esqueceu de nenhum flashcard!
                        </div>
                
                )}
                <div>
                    {iconsArray.length}/{deck.length} CONCLUÍDOS
                </div>

                <div>
                    {iconsArray.map((iconName, index) =>
                        <ion-icon key = {index} name={iconName}></ion-icon>
                    )}
                </div>
            </>

        ) : (
            <>
                <div>
                    {iconsArray.length}/{deck.length} CONCLUÍDOS
                </div>

                <div>
                    {iconsArray.map((iconName, index) =>
                        <ion-icon key = {index} name={iconName}></ion-icon>
                    )}
                </div>
            </>
        )}
        </>
    );
}

export default Results;