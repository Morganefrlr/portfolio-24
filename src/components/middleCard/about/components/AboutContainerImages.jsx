import styled from "styled-components";
import {aboutInfos} from '../../../../helper/middleCardConfig'

const AboutContainerImages = () => {
    return (
        <AboutContainerImagesStyled>
            {aboutInfos.map(item =>
                <div key={item.label} className="numberContainer">
                    <img src={item.img} alt="" />
                    <p>{item.label}</p>
                </div>
            )}
        </AboutContainerImagesStyled>
    );
};


const AboutContainerImagesStyled = styled.div`
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    .numberContainer{
        position: relative;
        p{
            position: absolute;
            top: 45%;
            left: 25%;
            background-color: #2a2a29;
            font-weight: 500;
        }
        img{
            height: 250px;
            
        }
    }

    @media (max-width: 1024px){
        .numberContainer{

            p{
                font-size: 10px;
            }
            img{
                height: 150px;
            }
        }
    }

    @media (max-width: 640px){
        .numberContainer{

            p{
                text-align: center;
                left: 10%;
            }
            img{
                height: 100px;
            }
        }
    }
`
 
export default AboutContainerImages;