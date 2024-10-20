import React from "react";
import memesData from "../memesData.jsx"

export default function Meme(){

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    function handleChange(event){
    const {top, bottom} = event.target
        setMeme(prevMeme =>{
            return {
                ...prevMeme,
                [event.target.name]: event.target.value
            }
        })
    }

    const [allMemeImages, setAllMemeImages] = React.useState(memesData)

    function getMemeImage(){

        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme, randomImage: url
        }))
    }
    function handleSubmit(event) {
        event.preventDefault()
    }

    return(
        <div className="form">
            <div className="form--user">
                <div className="form---input">
                    <label for="text" >Top text</label>
                    <input id="text" type="text" placeholder="Shut up" onChange={handleChange} value={meme.topText}></input>
                </div>
                <div className="form---input">
                    <label for="bottom">Bottom text</label>
                    <input id="bottom" type="text" placeholder="And take my money" onChange={handleChange} value={meme.bottomText}></input>
                </div>
            </div>
            <button onClick={getMemeImage} className="form---button">Get a new meme image  🖼</button>
        <div className="meme">
                <img src={meme.randomImage} className="meme--image" />
                <h2 className="meme--text top">{meme.topTex}</h2>
                <h2 className="meme--text bottom">{meme.bottomTex}</h2>
            </div>
        </div>
    )
}