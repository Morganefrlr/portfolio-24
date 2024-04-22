import styled from "styled-components";


const SingleExpeComponent = ({index, year, label, details}) => {
    return (
        <SingleExpeComponentStyled>
            <div className="experienceTopContainer">
                <div>{index}</div>
                <p>{year}</p>
            </div>
            <div className="experienceBottomContainer">
                <h4>{label}</h4>
                <p>{details}</p>
            </div>
        </SingleExpeComponentStyled>

    );
};

const SingleExpeComponentStyled = styled.div`
    display: flex; 
    flex-direction: column;
    margin: 40px 0;
    gap: 20px;
    .experienceTopContainer{
        display: flex;
        width: 70%;
        height: 40px;
        background: #212120;
        align-items: center;
        position: relative;
        div{
            width: 45px;
            height: 45px;
            background: linear-gradient(to right, #ce412e, #B60000);
            border: 2px solid #212120;
            border-radius: 25px;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 10px;
            font-weight: 600;
            position: absolute;
            left: -10px;
        }

        p{
            margin-left: 50px;
            font-size: 12px;
        }
    }

    .experienceBottomContainer{
        margin-left: 50px;
        display: flex;
        flex-direction: column;
        gap: 10px;
        width: 75%;

        p{
            font-size: 14px;
            font-weight: 300;
            line-height: 2;
        }
    }

`

export default SingleExpeComponent;