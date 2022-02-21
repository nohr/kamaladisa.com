import React from 'react';
import Vimeo from '@u-wave/react-vimeo';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid white;
  margin: auto;
  align-items: center;
  justify-content: flex-start;
  width: 80%;
  margin: 00px 0;
  height: 80%;
  position: absolute;
  z-index: 200;
  top: 50%;
  left: 50%;
  gap: 60px;
  -webkit-transform: translate(-50%,-50%);
  transform: translate(-50%,-50%);
  padding: 20px;
  overflow-y: auto;

  @media screen and (max-width: 768px) {
      width: 100%;
      height: 80vh;
      margin-top: 60px;
      gap: 10px;
      justify-content: flex-start !important;

      .video{
          padding: 0 !important;
          width: 100%;
          height: fit-content;
      }

      .abstract{
          width: 100% !important;
      }

    };

.abstract{
    width: 50%;
}
.video {
  margin: 0 auto;
  display: block;
  width: 100%;
  padding: 0 40px 0px 40px;
}

.vp-center{
    width: 52%;
}
p{
    text-indent: 60px;
}

h2{
    width: fit-content;
    margin: 0;
}

.video iframe{
    width: 100%;
}
.video iframe .vp-center{
    width: min-content;
}
`

export function HTTCIS() {

    const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

    return (
        <Container>
            <Vimeo
                video="586990385"
                width={"100vw"}
                height={"100vh"}
                responsive
                autoplay
                className='video'
            />
            <p className='abstract'>{text}</p>
            <h2>{`Cast & Crew`}</h2>
            <p>{"Hey"}</p>
        </Container>
    )
};