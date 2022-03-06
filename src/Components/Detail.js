import React from 'react'
import styled from 'styled-components'

function Detail() {
  return (
    <Container>
        <Background>
            <img src='https://4.bp.blogspot.com/-KuWXfA_2zEw/WsPYrBXXXOI/AAAAAAAAVyw/1cMGP21yZcU5Y9uEKNGHuu5LabzGdKGfwCLcBGAs/w600-h315-p-k-no-nu/Bao-Lead-Image.jpg'/>
        </Background>
        <ImageTitle>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiwMUVv2S3V1lzkOt4kBKKuLTgZn4uimMLDA&usqp=CAU'/>
            {/* <img src='https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/D7AEE1F05D10FC37C8731B71E7A6563F36C6B1B497CAB1CEC2/scale?width=1440&aspectRatio=1.78'/> */}
        </ImageTitle>
    </Container>
  )
}

export default Detail

const Container = styled.div`
    padding:0 calc(3.5vw + 5px);
    min-height: calc(100vh - 70px);
    position:relative;
`
const Background = styled.div`
    position:fixed;
    top:0;
    left:0;
    bottom:0;
    right:0;
    z-index: -1;
    opacity:0.8;

    img{
        width:100%;
        height:100%;
        object-fit:cover;
    }
`

const ImageTitle = styled.div`
    height:30vh;
    width:35vw;

    img{
        width:100%;
        height:100%;
        object-fit:contain;
    }
`