
import styled from 'styled-components';
import BoxInfos from '../../../leftCard/components/BoxInfos';

const ContactCard = () => {
    return (
        <ContactCardStyled>
            <div className='title'>
                <h4>Morgane Ancelin</h4>
                <p className='job'>Developpeuse React Junior</p>
            </div>
            <BoxInfos />
        </ContactCardStyled>
    );
};

const ContactCardStyled = styled.div`
    flex: 0.5;
    height: 100%;
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

    @media (max-width: 640px){
        margin-top:50px;
    }


`
export default ContactCard;