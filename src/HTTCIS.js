import React from 'react';
import { Text } from '@react-three/drei';
import Vimeo from '@u-wave/react-vimeo';
import styled from 'styled-components';
const Container = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid white;
  margin: auto;
  align-items: center;
  justify-content: flex-start;
  width: 50%;
  margin: 0px 0;
  position: absolute;
  z-index: 200;
  top: 35%;
  left: 5%;
  -webkit-transform: translate(-5%,-35%);
  transform: translate(-5%,-35%);
  padding: 10px;
  overflow-y: auto;

  @media screen and (max-width: 768px) {
      /* width: 100%;
      height: 80vh;
      margin-top: 60px;
      gap: 10px;
      justify-content: flex-start !important;

      .video{
          padding: 0 !important;
          width: 100%;
          height: fit-content;
      } */

    };

.video {
  margin: 0 auto;
  display: block;
  width: 100%;
}

p{
    text-indent: 60px;
}

h2{
    width: fit-content;
    margin: 0;
}

`

export function HTTCIS() {

    return (
        <>
            <Container>
                <Vimeo
                    video="586990385"
                    width={"100vw"}
                    height={"100vh"}
                    responsive
                    // autoplay
                    className='video'
                />
            </Container>
        </>
    )
};

export function HTTCISText() {
    const abstract = `         For my, Senior Year, Thesis Project I decided to focus on the topic of Nigerian Folktales. A lot of the exploration was into what a modern-day folktale could look like and what topics it would explore. 
        
        Due to the colonial influence of the past, modern - day Nigeria is an example of a country where many traditions and aspects of culture fade away, in exchange for a western idea of development.The country is made up of up to 250 ethnic groups, each with their distinct cultures and holds more than 500 indiginous languages.However, the richness in diversity and culture is often not reflected in the current affairs within the country; from politics to everyday societal interactions.By exploring folktales, an aspect of many Nigerian cultures that is slowly fading, I question the role of these traditions in contemporary society and reflect on the trajectory of Nigeria as a nation under its current systems.`
    const castCrew = `CAST & CREW
ABDULLAH ADISA[Voice of Wale & Script superviser]
ANDREW ELLIS[Assisted with Soundtrack]
AUGUST POLITE[Composed Soundrack]
DAMOLA ADEGBUYI[Voice of Lani]
DOTUN ABESHINBIOKE[Intro Narrator]
HAMZA ADISA[Voice of Remi]
KAMAL ADISA[Directed and Animated Film]
LANRE ADISA[Voice of MC Hustle]
MAX JYUDEH JARRETT[Designed Graphics, Typography
        & Composed Dance Scene’s song]
QIYAO LIN[Assisted with 3D Modeling]
RAJ WADHWANI[Assisted with Soundtrack]`
    return (
        <>
            <Text
                // anchorX="center" // default
                // anchorY="center" // default
                position={[200, 200, 50]}
                color={'#FFFFFF'}
                fontSize={12}
                maxWidth={300}
                lineHeight={1}
                letterSpacing={0.025}
                textAlign={'left'}
            >
                {abstract}
            </Text>
            <Text
                // anchorX="center" // default
                // anchorY="top" // default
                position={[200, 0, 50]}
                color={'#FFFFFF'}
                fontSize={12}
                maxWidth={400}
                lineHeight={1}
                letterSpacing={0.025}
                textAlign={'center'}
            >
                {castCrew}
            </Text>
        </>
    )

}