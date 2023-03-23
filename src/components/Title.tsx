import styled from 'styled-components';

const TitleDiv = styled.h1`
margin-top: 0;
text-align: center;
font-weight: 200;
font-size: 3rem;
`
const Title = () => {
    return(
        <TitleDiv>
            <div>Weather App</div>
        </TitleDiv>
    )
}

export default Title