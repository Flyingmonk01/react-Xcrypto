import React from 'react'
import "../styles/home.scss";
import vg from "../assets/2.webp";
import {AiFillGoogleCircle, AiFillYoutube, AiFillLinkedin, AiFillInstagram } from "react-icons/ai";



const Home = () => {
  return (
    <>
      <div className='home' id='home'>
        <main>
          <h1>Codex</h1>
          <p>We are here to solve the problems of creative era !</p>
        </main>
      </div>

      <div className="home2">
        <img src={vg} alt='Graphics' />
        <div>
          <p>
            We are your one & only solution to the tech problems you face everyday. We are leading tech company whose aim is tto increase the problem solving ability in children.
          </p>
        </div>
      </div>
      <div className="home3" id="about">
        <div>
          <h1>Who we are?</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia sunt, voluptas laboriosam at quaerat ad quos qui architecto libero, labore similique id? Sunt voluptatibus eligendi quidem ex, numquam quos quam magni voluptatem facere? Atque quod consequuntur beatae natus eos tenetur modi tempore nulla molestiae autem minus quidem minima quasi, fugiat pariatur ratione?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem tempore sed corporis mollitia hic amet eos laboriosam modi, officia dolor accusamus quis rem laudantium natus temporibus possimus, impedit quas voluptas!
          </p>
        </div>
      </div>

      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>

          <article>
          <div style={{ animationDelay:"0.3s" }}>
              <AiFillGoogleCircle/>
              <p>Google</p>
          </div>
          <div style={{ animationDelay:"0.5s" }}>
              <AiFillYoutube/>
              <p>Youtube</p>
          </div>
          <div style={{ animationDelay: "0.7s" }}>
              <AiFillLinkedin/>
              <p>Linked In</p>
          </div>
          <div style={{ animationDelay:"0.9s" }}>
              <AiFillInstagram/>
              <p>Instagram</p>
          </div>
        </article>
        </div>
      </div>
    </>
  )
}

export default Home