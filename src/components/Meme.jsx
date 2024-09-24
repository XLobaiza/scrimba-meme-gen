import React from "react";
import memesData from "../memesData.jsx"

export default function Meme(){

    function handleClick(){

        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const memeURL = memesArray[randomNumber].url
        console.log(memeURL)
    }

    return(
        <div className="form">
            <div className="form--user">
                <div className="form---input">
                    <label for="text" >Top text</label>
                    <input id="text" type="text" placeholder="Shut up"></input>
                </div>
                <div className="form---input">
                    <label for="bottom">Bottom text</label>
                    <input id="bottom" type="text" placeholder="And take my money"></input>
                </div>
            </div>
            <button onClick={handleClick} className="form---button">Get a new meme image  🖼</button>
        {/* <img src="src/assets/memeimg.png"/> */}
        </div>
    )
}