
import styled from 'styled-components';
import CardHover from "./CardHover";

const CardProject = ({project,handleClick}) => {

    return (
        <CardProjectStyled className={project.className}>
            <img src={project.img} alt="" />
            <CardHover label={project.label} details={project.details} handleClick={handleClick}/>
        </CardProjectStyled>
    );
};
const CardProjectStyled = styled.div`
    width: 100%;
    height: 250px;
    border-radius: 10px;
    box-shadow: 5px 5px 10px #181818;
    position: relative;
    cursor: pointer;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 10px;
    }
    .cardHover{
        display: none;
    }

    &:hover{
        img{
          filter: contrast(60%) grayscale(80%);
        }
        .cardHover{
            display: flex;
        }
    }
 
`

export default CardProject;