import styled from 'styled-components';
import Form from './component/Form';
import ContactCard from './component/ContactCard';



const Contact = () => {


    return (
        <ContactStyled>
            <h1>Contact</h1>
            <hr />
            <div className='contactContainer'>
                <Form />
                <ContactCard />
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

    }


    @media (max-width: 640px){
        .contactContainer{
        flex-direction: column;
    }
    }
`
export default Contact;