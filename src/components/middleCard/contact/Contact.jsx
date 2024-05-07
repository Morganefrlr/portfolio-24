import styled from 'styled-components';
import BoxInfos from '../../leftCard/components/BoxInfos';
import { useRef, useState } from 'react';

import emailjs from '@emailjs/browser';


const Contact = () => {

    const formRef = useRef()
    const [sent, setSent] = useState(false)

    const handleSubmit = (e) =>{
       e.preventDefault()
       emailjs.sendForm('service_mnn36yh', 'template_h7ubhxy', formRef.current, 'z-ItlutE25_XNkWDj')
      .then((result) => {
          console.log(result.text);
          setSent(true)
      }, (error) => {
          console.log(error.text);
      });
    }



    return (
        <ContactStyled>
            <h1>Contact</h1>
            <hr />
            <div className='contactContainer'>
                <form className='left' ref={formRef} onSubmit={handleSubmit}>
                    <div className='container'>
                        <div className='input'>
                            <p>Nom Complet</p>
                            <input type="text" placeholder='Votre nom' name='user_name'/>
                        </div>
                        <div className='input'>
                            <p>Adresse mail</p>
                            <input type="email" placeholder='Votre email' name='user_email' required/>
                        </div>
                        <div className='input'>
                            <p>Sujet du Message</p>
                            <input type="text" placeholder='Sujet' name='user_subject'/>
                        </div>
                        <div className='input'> 
                            <p>Message</p>
                            <textarea placeholder='Message' name='message' required></textarea>
                        </div>
                    </div>
                    <button>Envoyer</button>
                    {sent && <span className='messageSent'>Merci, votre message a bien été envoyé!</span>}
                </form>
                <div className='right'>
                    <div className='title'>
                        <h4>Morgane Ancelin</h4>
                        <p className='job'>Developpeuse React Junior</p>
                    </div>
                    <BoxInfos />
                </div>
            </div>
        </ContactStyled>
    );
};

const ContactStyled = styled.div`
    width: 100%;
    padding: 30px;
    max-height: 85vh;
    overflow-y: scroll;
    &::-webkit-scrollbar{
       display: none;
    }
    h1{
        font-size: 40px;
    }
    hr{
        width: 80%;
        margin: 20px auto;
        border: 0.3px solid  #323231ce;
    }



    .contactContainer{
        display: flex;
        margin-top: 5vh;
        .left{
            flex: 1;
           display: flex;
           flex-direction: column;
           gap: 20px;
            .container{
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                height: fit-content;
                gap: 20px;
               
            }
            .input{
                width: 90%;
                border: 1px solid #323231ce;
                border-radius: 10px;
                position: relative;
                padding: 16px;

                p{
                    font-size: 10px;
                    text-transform: uppercase;
                    width: fit-content;
                    padding: 2px 6px;
                    background-color: #2a2a29;
                    position: absolute;
                    top: -8px;
                }
                input, textarea{
                    background-color: transparent;
                    border: none;
                    width: 100%;

                    &::placeholder{
                        font-size: 10px;
                        color: #484846;
                    }

                    &:focus{
                        outline: 1px solid #ce412e;
                        border-radius: 10px;
                        padding: 16px;
                        
                    }
                }
                
            }

            button{
                display: flex;
                justify-content: center;
                align-items: center;
                width: 25%;
                height: 50px;
                border-radius: 10px;
                border: none;
                cursor: pointer;
                gap: 10px;
                font-weight: 500;
                font-size: 15px;
                background: linear-gradient(to right, #ce412e, #B60000);
                &:active{
                    background: linear-gradient(to left, #ce412e, #B60000);
                }
            }
        }
        .right{
            flex: 0.5;
            height: 100%;
            border: 1px solid #323231ce;
            display: flex;
            flex-direction: column;
            padding: 60px 0 60px 30px;
            border-radius: 10px;

            .title{
                display: flex;
                flex-direction: column;
                gap: 5px;
            }
            .job{
                background: linear-gradient(to right, #ce412e, #B60000);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                font-size: 10px;
                font-weight: 600;
                text-transform: uppercase;
            }
        }
    }
`
export default Contact;