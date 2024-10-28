import React from "react";

export default function Meme(){

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })
  
    const [allMemeImages, setAllMemeImages] = React.useState([])

   React.useEffect(()=>{
        fetch('https://api.imgflip.com/get_memes')
        .then(response => response.json())
        .then(data => setAllMemeImages(data.data.memes))
   }, [])
   

    function getMemeImage(){
        const randomNumber = Math.floor(Math.random() * allMemeImages.length)
        const url = allMemeImages[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme, randomImage: url
        }))
    }
    function handleChange(event){
        const {name, value} = event.target
            setMeme(prevMeme => ({
                ...prevMeme,
                [name]: value
            }))
        }


    return(
        <div className="form">
            <div className="form--user">
                <div className="form---input">
                    <label for="text" >Top text</label>
                    <input id="text" type="text" placeholder="Shut up" onChange={handleChange} value={meme.topText} name="topText" ></input>
                </div>
                <div className="form---input">
                    <label for="bottom">Bottom text</label>
                    <input id="bottom" type="text" placeholder="And take my money" onChange={handleChange} value={meme.bottomText} name="bottomText"></input>
                </div>
            </div>
            <button onClick={getMemeImage} className="form---button">Get a new meme image  🖼</button>
        <div className="meme">
                <img src={meme.randomImage} className="meme--image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </div>
    )
}