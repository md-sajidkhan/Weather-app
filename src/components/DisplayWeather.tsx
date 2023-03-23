import styled from "styled-components"

type Props = {
    data?: any;
}


const DisplayContainer = styled.div`
background-color: rgba(244,242,243,255);
border-radius: 20px;
border: 1px solid black;
margin-top: 5%;
width: 80%;
padding: 15px 10px;
font-family: sans-serif;

p{
    margin : 0
}

h1{
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
    font-size: 60px;

    span img{
        height: 80px;
        width: 80px;
        filter: invert(25%);
    }
}
`;



const DisplayWeather = ({data}: Props) => {
    let iconUrl = `https://openweathermap.org/img/wn/${data.icon}.png`
    return(
        <DisplayContainer>
            <p style={{fontSize : '1.2rem'}}>{data.city}, {data.country}. Weather</p>
            <p style={{ fontSize: '0.8rem', color: 'rgba(186,184,185,255)'}}>As of {data.currentTime}</p>
            <h1>
                {data.temp }{ '\u00b0' }
                <span>
                    <img src={iconUrl} alt="Weather icon" />
                </span>
            </h1>
            <p>{data.type}</p>
        </DisplayContainer>
    )
}

export default DisplayWeather