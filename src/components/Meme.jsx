import React from "react";
import memesData from "../memesData.jsx"

export default function Meme(){

    const [memeImage, setMemeImage] = React.useState()

    function getMemeImage(){

        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        setMemeImage(memesArray[randomNumber].url)
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
            <button onClick={getMemeImage} className="form---button">Get a new meme image  🖼</button>
        <img src={memeImage}/>
        </div>
    )
}