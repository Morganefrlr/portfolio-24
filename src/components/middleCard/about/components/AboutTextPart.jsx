import styled from "styled-components";


const AboutTextPart = () => {
    return (
        <AboutTextPartStyled>
            <p className="aboutJob">Développeuse REACT Junior</p>
            <h1 className="aboutName">Morgane Ancelin</h1>
            <p className="aboutText">Baignant dedans, depuis mon plus jeune âge, j’ai toujours été passionné d’informatique. Mon parcours atypique d’autodidacte, m’a d’abord mené dans la restauration, secteur dans lequel, grâce à ma soif de savoir et ma ténacité, j’ai pu gravir les échelons jusqu’à la gérance. C’est ensuite mes goûts pour la photographie et le graphisme qui m’ont poussés à devenir free-lance dans ces domaines pendant plusieurs années. Le métier de développeur m’a fait rêver plus de 10 ans avant que je n’ose la reconversion professionnelle. Durant ma formation, j’ai pu apprendre toutes les bases du développement Web que j’approfondis depuis par le biais de projets personnel.</p>
        </AboutTextPartStyled>
    );
};

const AboutTextPartStyled = styled.div`
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
`

export default AboutTextPart;