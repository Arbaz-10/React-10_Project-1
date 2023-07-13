import React from 'react'

const Hero = () => {
  return (
    <main className='hero container'>
        <div className='hero-content'>
            <h1>YOUR FEET DESERVE THE BEST</h1>
            <p>JO ACCHA DIKTA HAI WOHI ACCHA BIKTA HAI! WE ARE HELP YOU TO BEST SHOES FOR YOUR FEET. SO, YOUR FEET DESERVE BEST SHOES.</p>
            <div className="hero-btn">
                <button className='shop'>Shop Now</button>
                <button className='secondary-btn'>Category</button>
            </div>
            <div className="shopping">
                <p>Also Available On</p> 
                <div className="brand-icons">
                    <img src="/Images/amazon.png" alt="amazon-logo"/>
                    <img src="/Images/flipkart.png" alt="flipkart-logo"/>
                </div>
            </div>
        </div>
        <div className='hero-image'>
            <img src="/Images/shoe_image.png" alt="hero-image" />
        </div>
    </main>
  )
}

export default Hero