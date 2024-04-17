import styled from "styled-components";


const SingleFormationComponent = ({year, details, label}) => {
    return (
        <SingleFormationComponentStyled>
            <p className="year">{year}</p>
            <h4>{label}</h4>
            <p className="details">{details}</p>
        </SingleFormationComponentStyled>
    );
};

const SingleFormationComponentStyled = styled.div`
    display: flex;
    height: 70px;
    width: fit-content;
    gap: 6px;
    margin: 10px;
    flex-direction: column;
    .year{
        font-size: 10px;
        background: linear-gradient(to right, #ce412e, #B60000);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-weight: 500;

    }
    .details{
        font-size: 12px;
        line-height: 16px;
        font-weight: 300; 
    }

    
`

export default SingleFormationComponent;