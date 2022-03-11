import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

function Detail() {

    return (
        <Container>            
            <Background>
                <img src='https://4.bp.blogspot.com/-KuWXfA_2zEw/WsPYrBXXXOI/AAAAAAAAVyw/1cMGP21yZcU5Y9uEKNGHuu5LabzGdKGfwCLcBGAs/w600-h315-p-k-no-nu/Bao-Lead-Image.jpg' />
            </Background>
            <ImageTitle>
                <img src='https://image.pngaaa.com/277/276277-middle.png' />
            </ImageTitle>
            <Controls>
                <PlayButton>
                    <img src='/images/play-icon-black.png' />
                    <span>PLAY</span>
                </PlayButton>
                <TrailerButton>
                    <img src='/images/play-icon-white.png' />
                    <span>Trailer</span>
                </TrailerButton>
                <AddButton>
                    <span>+</span>
                </AddButton>
                <GroupWatchButton>
                    <img src='/images/group-icon.png' />
                </GroupWatchButton>
            </Controls>
            <SubTitle>
                2020 ‧ Comedy-drama, Romantic comedy
            </SubTitle>
            <Description>
                Chicago marketing executive Emily Cooper is hired to provide an American perspective at a marketing firm in Paris.
            </Description>
        </Container>
    )
}

export default Detail

const Container = styled.button`
    padding:0 calc(3.5vw + 5px);
    min-height: calc(100vh - 70px);
    position: relative;
`
const Background = styled.button`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
    opacity: 0.8;

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

const ImageTitle = styled.button`
    height: 30vh;
    min-height: 170px;
    width: 35vw;
    min-width: 200px;
    background-color: black;
    margin-top: 60px;

    img{
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`
const Controls = styled.div`
    display: flex;
    align-items: center;

`
const PlayButton = styled.button`
    border-radius: 4px;
    padding: 0px 24px;
    margin-right: 22px;
    font-size: 15px;
    display: flex;
    align-items: center;
    letter-spacing: 1.8px;
    height: 56px;
    background: rgb(249, 249, 249);
    border: none;
    cursor: pointer;
    text-transform: uppercase;

    &:hover{
        background: rgb(198, 198, 198);
    }
`
const TrailerButton = styled(PlayButton)`
    background: rgba(0, 0, 0, 0.3);
    border: 1px solid rgb(249, 249, 249);
    color: rgb(249, 249, 249);
    
`
const AddButton = styled.button`
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: 2px solid white;
    background-color: rgba(0, 0, 0, 0.6);
    cursor: pointer;
    margin-right: 16px;

    span{
        font-size: 30px;
        color: white;
    }
`
const GroupWatchButton = styled(AddButton)`
    background: rgb(0, 0, 0);
`

const SubTitle = styled.div`
    color: rgb(249, 249, 249);
    font-size: 15px;
    min-height: 20px;
    margin-top: 26px;
`
const Description = styled.div`
    line-height: 1.4;
    font-size: 20px;
    margin-top: 16px;
    color: rgb(249, 249, 249);
    max-width: 760px;

`