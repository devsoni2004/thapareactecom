import React from 'react'
import styled from 'styled-components'
import HeroSection from './components/HeroSection';
import Services from './components/Services';
import Trusted from './components/Trusted';
import FeatureProducts from './components/FeatureProducts';
function Home() {
  const data ={
    name: "Anjali Store",
  }
  return (
   <>
   
   <HeroSection myData={data}/>
   <FeatureProducts/>
   <Services/>
   <Trusted/>
   </>
    
  );
};
const Wrapper = styled.section`
background-color: ${({theme}) => theme.colors.bg};
height: 100vh;
`;

export default Home