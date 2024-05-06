import styled from 'styled-components';
import BoxInfos from '../../leftCard/components/BoxInfos';

const Contact = () => {
    return (
        <ContactStyled>
            <h1>Contact</h1>
            <hr />
            <div className='contactContainer'>
                <div className='left'>
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
                        <textarea placeholder='Sujet'></textarea>
                    </div>
                    <button>Envoyer</button>
                </div>
                <div className='right'>
                    <div>
                        <h4>Morgane Ancelin</h4>
                        <p>Developpeuse React Junior</p>
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

        .left{
            flex: 1;
        }
        .right{
            flex: 1;
        }
    }
`
export default Contact;