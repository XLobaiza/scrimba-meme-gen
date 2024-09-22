import React from "react";

export default function Meme(){
    return(
        <form className="form">
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
            <button id="sumbit" className="form---button">Get a new meme image  🖼</button>
        <img src="src/assets/memeimg.png"/>
        </form>
    )
}