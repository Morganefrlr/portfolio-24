
import styled from 'styled-components';
import CardHoverGlass from "./CardHoverGlass";

const CardHover = ({details, label, handleClick}) => {
    return (
        < CardHoverStyled className="cardHover">
            <CardHoverGlass handleClick={handleClick} label={label}/>
            <div className="cardHoverTitle">
                <h3>{label}</h3>
                <p>{details}</p>
            </div>
        </ CardHoverStyled>
    );
};

const CardHoverStyled = styled.div`
    background-color: #ce412e9d;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    border-radius: 10px;
    padding: 20px;
    .cardHoverTitle{
        display: flex;
        flex-direction: column;
        align-self: flex-end;
        gap: 5px;

        h3{
            text-transform: capitalize;
        }
        p{
            font-size: 12px;
            text-transform: uppercase;
        }

    }
`
export default CardHover;