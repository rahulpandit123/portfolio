import React from 'react'
import rahulImg from '../assets/rahul_port_img.jpeg';
import { AiFillGithub, AiFillInstagram, AiFillYoutube } from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>
        <div>
            {/* <img src={"https://avatars.githubusercontent.com/u/25058652"}
            alt='Footer' /> */}

            <img src={rahulImg} alt='footer' />

            <h2>Rahul Pandit</h2>
            <p>Motivation is temporary, but discipline is permanent!</p>
        </div>

        <aside>
            <h2>Social Media</h2>
            <article>
                <a href='https://youtube.com/@rahulpandit382' target={"blank"} >
                    <AiFillYoutube />
                </a>
                <a href='https://instagram.com/rahul_01pandit' target={"blank"} >
                    <AiFillInstagram />
                </a>
                <a href='https://github.com/rahulpandit123' target={'blank'} >
                    <AiFillGithub />
                </a>
            </article>
        </aside>
    </footer>
  )
}

export default Footer