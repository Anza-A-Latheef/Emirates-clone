import React from 'react'
import loadingGif from '../assets/images/sload_1.gif'
import styled from 'styled-components'

const LoadingPage = () => {
  return (
    <LoadingFlight>
      <FlightGif src={loadingGif} alt="loading gif" />
    </LoadingFlight>
  )
}

export default LoadingPage

const LoadingFlight=styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const FlightGif=styled.img`
    width: auto;
    height: auto;
`;