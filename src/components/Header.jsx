import React from 'react'
import resume from '../assets/CV_Rahul2023.pdf';
import { AiOutlineMenu } from 'react-icons/ai';
const Header = ({menuOpen, setMenuOpen}) => {
  return (
    <>
    <nav>
        <NavContent setMenuOpen={setMenuOpen} />
     </nav>


        <button className="navBtn" onClick={()=> setMenuOpen(!menuOpen)}>
            <AiOutlineMenu />
        </button>
        

        </>    
  )
}

export const HeaderPhone = ({menuOpen,setMenuOpen }) => {
    return (
      <div className={`navPhone ${menuOpen ? "navPhoneComes":""}`}>
          <NavContent setMenuOpen={setMenuOpen} />
          </div>
    )
  }

export const NavContent = ({menuOpen,setMenuOpen}) => (
    <>
    <h2>Rahul</h2>
    <div>
        <a onClick={() => setMenuOpen(false)} href='#home'>Home</a>
        <a onClick={() => setMenuOpen(false)} href='#work'>Work</a>
        <a onClick={() => setMenuOpen(false)} href='#timeline'>Experience</a>
        <a onClick={() => setMenuOpen(false)} href='#services'>Services</a>
        <a onClick={() => setMenuOpen(false)} href='#testimonial'>Testimonial</a>
        <a onClick={() => setMenuOpen(false)}  href='#contact'>Contact</a>
        
    </div>
    <a href='mailto:rahulpanditercs01@gmail.com'>
        <button>Email</button>
    </a>
    <button className='btn1'>
        <a className='btn2' href={resume} download='CV_Rahul2023.pdf'>Download Resume</a>
    </button>
    </>
);

export default Header;