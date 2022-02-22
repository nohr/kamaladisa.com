import React, { useEffect, useState } from 'react';
import { Text } from '@react-three/drei';
import Vimeo from '@u-wave/react-vimeo';
import styled from 'styled-components';
import { state } from './Shapes';
import { useSnapshot } from 'valtio';
import Media from 'react-media';
import { DoubleSide } from 'three';


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
  top: 28%;
  left: 5%;
  -webkit-transform: translate(-5%,-35%);
  transform: translate(-5%,-35%);
  padding: 10px;
  overflow-y: auto;

  @media screen and (max-width: 768px) {
      width: 100%;
      justify-content: flex-start !important;
      padding: 5px;
      top: 25%;

      .video{
          padding: 0 !important;
          width: 100%;
          height: fit-content;
      }

    };

.video {
  width: 100%;
}
`

export function Film() {

    return (
        <>
            <Container>
                <Vimeo
                    video="586990385"
                    width={"100vw"}
                    height={"100vh"}
                    responsive
                    className='video'
                />
            </Container>
        </>
    )
};

export function HTTCISText() {
    const abstract = `How The Tortoise Cracked It's Shell is an animated short film based off a classic west African folktale. The project initially started off as research on African folktales and their cultural importance.

Looking into the role it played within communities, I began to reimagine how these stories can exist in the modern world and what relevance it would have. It turned out to be a lot more relevant than I expected and the more the story unfolded, the more connections were made to current affairs. I realized these stories need to be preserved and kept within the current dialogue, not just as a documentation of the past but as a reminder of the present reality.`
    const castCrew = `
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
        <Media queries={{ small: { maxWidth: 768 } }}>
            {matches =>
                matches.small ?
                    <>
                        <Text
                            position={[0, 100, -50]}
                            color={'#FFFFFF'}
                            fontSize={8}
                            maxWidth={290}
                            lineHeight={1.2}
                            letterSpacing={0.025}
                            textAlign={'left'}
                            fillOpacity={1}
                            font='/Fonts/Poppins/Poppins-Regular.ttf'

                        >
                            {abstract}
                            <meshBasicMaterial
                                attach="material"
                                side={DoubleSide}
                                color={'#FFFFFF'}
                                toneMapped={false}
                            />
                        </Text>
                        <Text
                            position={[-75, 20, -25]}
                            color={'#FFFFFF'}
                            fontSize={8}
                            maxWidth={400}
                            lineHeight={1}
                            letterSpacing={0.025}
                            textAlign={'center'}

                            font='/Fonts/Poppins/Poppins-SemiBold.ttf'
                        >
                            {"CAST & CREW"}
                            <meshBasicMaterial
                                attach="material"
                                side={DoubleSide}
                                color={'#FFFFFF'}
                                toneMapped={false}
                            />
                        </Text>
                        <Text
                            position={[-50, -20, 50]}
                            color={'#FFFFFF'}
                            fontSize={6}
                            maxWidth={400}
                            lineHeight={1.2}
                            letterSpacing={0.025}
                            textAlign={'left'}
                            font='/Fonts/Poppins/Poppins-Regular.ttf'
                        >
                            {castCrew}
                            <meshBasicMaterial
                                attach="material"
                                side={DoubleSide}
                                color={'#FFFFFF'}
                                toneMapped={false}
                            />
                        </Text>
                    </> : <>
                        <Text
                            position={[200, 200, 50]}
                            fontSize={12}
                            maxWidth={300}
                            lineHeight={1.2}
                            letterSpacing={0.025}
                            textAlign={'left'}
                            font='/Fonts/Poppins/Poppins-Regular.ttf'
                        >
                            {abstract}
                            <meshBasicMaterial
                                attach="material"
                                side={DoubleSide}
                                color={'#FFFFFF'}
                                toneMapped={false}
                            />
                        </Text>
                        <Text
                            position={[-160, 84, 50]}
                            color={'#FFFFFF'}
                            fontSize={12}
                            maxWidth={400}
                            lineHeight={1}
                            letterSpacing={0.025}
                            textAlign={'center'}

                            font='/Fonts/Poppins/Poppins-SemiBold.ttf'
                        >
                            {"CAST & CREW"}
                            <meshBasicMaterial
                                attach="material"
                                side={DoubleSide}
                                color={'#FFFFFF'}
                                toneMapped={false}
                            />
                        </Text>
                        <Text
                            position={[-160, 10, 50]}
                            color={'#FFFFFF'}
                            fontSize={10}
                            maxWidth={400}
                            lineHeight={1.2}
                            letterSpacing={0.025}
                            textAlign={'center'}
                            font='/Fonts/Poppins/Poppins-Regular.ttf'
                        >
                            {castCrew}
                            <meshBasicMaterial
                                attach="material"
                                side={DoubleSide}
                                color={'#FFFFFF'}
                                toneMapped={false}
                            />
                        </Text>
                    </>}
        </Media>
    )

}