import styled from 'styled-components';

type Props = {
    data?: any;
}


const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(4, 1fr);
  width: 80%;
  margin-top: 10px;
  font-family: sans-serif;
  grid-column-gap: 100px;
`;

const GridItem = styled.h3`
  border-bottom: 1px dashed #000;
  padding: 10px 0px;
  // border: 1px solid black;
  display: flex;
  justify-content: space-between;
  font-size: 0.9rem;

  span{
    // font-size: 0.8rem;
    color: rgba(166,166,166,255);
    font-weight: 100;
  }
`;

  

const SpecificDetails = ({data} : Props) => {
    return(
    <GridContainer>
      <GridItem>High/Low <span>{data.high}/{data.low}</span></GridItem>
      <GridItem>Wind <span>{data.speed} km/hr</span></GridItem>
      <GridItem>Humidity <span>{data.humidity} % </span></GridItem>
      <GridItem>Wind Direction <span>{data.direction}{ '\u00b0' } deg </span></GridItem>
      <GridItem>Pressure <span>{data.pressure} hPa</span></GridItem>
      <GridItem>Sunrise <span>{data.sunrise}</span></GridItem>
      <GridItem>Visibility <span>{data.visibility} Km</span></GridItem>
      <GridItem>Sunset <span>{data.sunset}</span></GridItem>
    </GridContainer>
    )
}

export default SpecificDetails