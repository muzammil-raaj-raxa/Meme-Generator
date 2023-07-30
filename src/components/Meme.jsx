import React, { useEffect, useState } from 'react'
import FrameImage from '../assets/frame-pic.png'

export default function Meme() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg"
  })

  const [allMemes, setAllMemes] = useState([])

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then(res => res.json())
      .then(data => setAllMemes(data.data.memes))
  }, [])


  function getMemeImage() {
    const randomNumber = Math.floor(Math.random() * allMemes.length)
    const url = allMemes[randomNumber].url
    setMeme(prevMeme => ({
      ...prevMeme,
      randomImage: url
    }))
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme(prevMeme => ({
      ...prevMeme,
      [name]: value
    }))
  }
  return (
    <main>
      <div className='form'>
        <input
          className='form-input'
          type='input'
          placeholder='Top text'
          name="topText"
          value={meme.topText}
          onChange={handleChange} />
        <input
          className='form-input'
          type='input'
          placeholder='Bottom text'
          name="bottomText"
          value={meme.bottomText}
          onChange={handleChange} />
        <button
          className='form-btn'
          onClick={getMemeImage}> <img src={FrameImage} alt='frame image' /> </button>
      </div>
      <div className="meme">
        <img src={meme.randomImage} className='meme-img' alt='Meme Image' />
        <h2 className="meme-text top">{meme.topText}</h2>
        <h2 className="meme-text bottom">{meme.bottomText}</h2>
      </div>
    </main>

  )
}
