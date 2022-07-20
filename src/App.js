import React from "react";

import Deck from "./Components/Deck.js";
import Landing from "./Components/Landing.js";

function App() {

    const [screen, setScreen] = React.useState(true);

    return (
        <>
            {screen ? (
                <div className="landing">
                    <Landing /> 
                    <button onClick={() => {setScreen(!screen)}}>Iniciar Recall!</button> 
                </div>
            ) : (
                <Deck />)
            } 
        </>        
    );
}

export default App;