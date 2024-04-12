import styled from "styled-components";
import { IoIosArrowRoundForward } from "react-icons/io";
import { useContext } from "react";
import AdminContext from "../../../context/AdminContext";

const About = () => {
    const{ setMenuSelected} = useContext(AdminContext)
    const aboutInfos = [
        {
            img:"/deux.png",
            label:"Années d'expérience"
        },
        {
            img:"/huit.png",
            label:"Projets Formation"
        },
        {
            img:"/quinze.png",
            label:"Projets Personel"
        },
    ]
    return (
        <AboutStyled>
            <div className="div">

            <p className="aboutJob">Développeuse REACT Junior</p>
            <h1 className="aboutName">Morgane Ancelin</h1>
            <p className="aboutText">Baignant dedans, depuis mon plus jeune âge, j’ai toujours été passionné d’informatique. Mon parcours atypique d’autodidacte, m’a d’abord mené dans la restauration, secteur dans lequel, grâce à ma soif de savoir et ma ténacité, j’ai pu gravir les échelons jusqu’à la gérance. C’est ensuite mes goûts pour la photographie et le graphisme qui m’ont poussés à devenir free-lance dans ces domaines pendant plusieurs années. Le métier de développeur m’a fait rêver plus de 10 ans avant que je n’ose la reconversion professionnelle. Durant ma formation, j’ai pu apprendre toutes les bases du développement Web que j’approfondis depuis par le biais de projets personnel.</p>
            <div className="containerImg">
                {aboutInfos.map(item =>
                    <div key={item.label} className="aboutNumberBox">
                        <img src={item.img} alt="" />
                        <p>{item.label}</p>
                    </div>
                )}
            </div>
            <button onClick={() => setMenuSelected('portfolio')}>
                Portfolio
                <IoIosArrowRoundForward className="icon"/>
            </button>
            </div>
        </AboutStyled>
    );
};


const AboutStyled = styled.div`
    flex: 3;
    border-radius: 30px;
    background:  #2a2a29;
    box-shadow: 15px 15px 30px rgb(25, 25, 25),
                -15px -15px 30px rgb(60, 60, 60);
    height: 70vh;
    display: flex;
    justify-content: center;
    align-items: center;


    .div{
        width: 80%;
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
    .aboutJob{
        background: linear-gradient(to right, #ce412e, #B60000);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      font-size: 18px;
      font-weight: 600;
      text-transform: uppercase;
    }

    h1{
        font-size: 40px;
    }

    .aboutText{
        font-size: 14px;
        font-weight: 300;
        line-height: 2;
        

    }

    .containerImg{
        width: 80%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 auto;
        gap: 50px;
        .aboutNumberBox{
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
        .icon{
            font-size: 20px;
        }

        &:active{
            background: linear-gradient(to left, #ce412e, #B60000);
        }
    }

`
export default About;