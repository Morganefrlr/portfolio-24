
import { useRef, useState } from 'react';
import styled from 'styled-components';
import emailjs from '@emailjs/browser';
import { inputContactConfig } from '../../../../helper/middleCardConfig';
import InputContact from './InputContact';


const Form = () => {

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
        <FormStyled className='left'  ref={formRef} onSubmit={handleSubmit}>
            <div className='container'>
                {inputContactConfig.map(item => 
                    <InputContact
                        key={item.label}
                        label={item.label}
                        placeholder={item.placeholder}
                        required={item.required}
                        name={item.name}
                        type={item.type}
                        html={item.html}/>
                )}
            </div>
            <button>Envoyer</button>
            {sent && <span>Merci, votre message a bien été envoyé!</span>}
        </FormStyled>
    );
};

const FormStyled = styled.form`

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
        
`
export default Form;