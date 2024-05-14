
import styled from 'styled-components';

const InputContact = ({label, html, type, name, placeholder,required}) => {
    return (
        <InputContactStyled key={label}>
            <p>{label}</p>
            {html === 'input' ? (<input type={type} placeholder={placeholder} name={name} required={required}/>) : (<textarea placeholder={placeholder} name={name} required={required}></textarea>)}
        </InputContactStyled>
    );
};

const InputContactStyled =styled.div`

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
`
export default InputContact;