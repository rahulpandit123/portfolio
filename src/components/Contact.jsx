import React,{useState} from 'react'
import vg from "../assets/vg.png"
import toast from "react-hot-toast"
import {motion} from 'framer-motion'
import { addDoc,collection } from 'firebase/firestore'
import {db} from "../firebase"

const Contact = () => {
    // const [inputs,setInputs] = useState({name:"",email:"",message:""})
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [message,setMessage] = useState("")
    const [disableBtn,setDisableBtn] = useState(false)
    
    
    const submitHandler = async (e) => {
        // e.preventDefault();
        e.preventDefault();
        setDisableBtn(true);
        try {
            await addDoc(collection(db,"contacts"),{
                name,
                email,
                message,
                
                
            });
            setName("")
            setEmail("")
            setMessage("")
            toast.success('Message Sent')
            setDisableBtn(false)
        } catch (error) {
            toast.error("Error!");
            console.log(error);
            setDisableBtn(false)
        }
        console.log(name,email,message)
        
    } 
    // const changeHandler = (e) => {
    //     setInputs({...inputs ,[e.target.name]:e.target.value})
    //     console.log(inputs)
    // }
    const animations = {
        form: {
            initial: {
                x:"-100%",
                opacity:0,
            },
            whileInView: {

                x:0,
                opacity:1,
            }
        },
        button: {
            initial: {
                y:"-100%",
                opacity:0,
            },
            whileInView: {

                y:0,
                opacity:1,
            },
            transition: {
                delay:0.5
            }
        }
    }
  return (
    <div id="contact">
        <section>
            <motion.form {...animations.form} onSubmit={submitHandler}>
                <h2>Contact Me</h2>
                <input type='text' placeholder='Your Name' required value={name} name='name' onChange={(e) => setName(e.target.value)}/>
                <input type='email' placeholder='Enter your Email' required value={email} name='email' onChange={(e) => setEmail(e.target.value)} />

                <input type='text' placeholder='Your Message' required value={message} name='message' onChange={(e) => setMessage(e.target.value)} />
                <motion.button 
                disabled={disableBtn}
                className={disableBtn ? 'disableBtn':""}
                {...animations.button} type='submit'>send</motion.button>
            </motion.form>
        </section>
        <aside>
            <img src={vg} alt='graphichs' />
        </aside>
        </div>
  )
}

export default Contact