import styled from 'styled-components';
import BoxInfos from '../../leftCard/components/BoxInfos';

const Contact = () => {
    return (
        <ContactStyled>
            <h1>Contact</h1>
            <hr />
            <div className='contactContainer'>
                <div className='left'>
                    <div className='container'>
                        <div className='input'>
                            <p>Nom Complet</p>
                            <input type="text" placeholder='Votre nom'/>
                        </div>
                        <div className='input'>
                            <p>Adresse mail</p>
                            <input type="email" placeholder='Votre email'/>
                        </div>
                        <div className='input'>
                            <p>Sujet du Message</p>
                            <input type="text" placeholder='Sujet'/>
                        </div>
                        <div className='input'> 
                            <p>Message</p>
                            <textarea placeholder='Message'></textarea>
                        </div>
                    </div>
                    <button>Envoyer</button>
                </div>
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
                height: 26vh;
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
            height: 26vh;
            border: 1px solid #323231ce;
            display: flex;
            flex-direction: column;
            padding: 60px 0 0 30px;
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