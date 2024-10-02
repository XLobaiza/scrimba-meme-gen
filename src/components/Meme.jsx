import React from "react";
import memesData from "../memesData.jsx"

export default function Meme(){

    const [meme, setMemeImage] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    const [allMemeImages, setAllMemeImages] = React.useState(memesData)

    function getMemeImage(){

        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMemeImage(prevMeme => ({
            ...prevMeme, randomImage: url
        }))
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
        <img src={meme.randomImage}/>
        </div>
    )
}