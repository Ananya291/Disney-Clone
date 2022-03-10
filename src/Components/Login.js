import React from 'react'
import styled from 'styled-components'

function Login() {
  return (
    <Container>
      <CTA>
        <CTAlogoOne src="/images/cta-logo-one.svg" />
        <SignUp>GET ALL THERE</SignUp>
        <Description>
          Get premier access to releases, classics, series, and Originals. With Hulu,
          you can enjoy over 80,000 episodes of every kind of TV, including hit series.
        </Description>
        <CTAlogoTwo src="/images/cta-logo-two.png" />
      </CTA>
    </Container>
  )
}

export default Login

const Container = styled.div`
    position: relative;
    height: calc(100vh - 70px);
    display: flex;
    align-items: top;
    justify-content: center;

    &:before{
        position: absolute;
        top: 0;
        bottom: 0;
        content: "";
        left: 0;
        right: 0;   
        background-image: url("/images/login-background.jpg");
        background-position: top;
        background-size: cover;
        background-repeat: no-repeat; 
        opacity: 0.7;
        z-index: -1;  
      }
`
const CTA = styled.div`
      max-width: 650px;
      padding: 80px 40px;
      width: 90%;
      display: flex;
      flex-direction: column;
      margin-top: 80px;
      align-items: center;
`
const CTAlogoOne = styled.img`

`
const SignUp = styled.a`
      width: 100%;
      font-weight: bold;
      background-color: #0063e5;
      padding: 17px 0;
      color: #f9f9f9;
      border-radius: 4px;
      text-align: center;
      font-size: 18px;
      cursor: pointer;
      transition: all 250ms;
      letter-spacing: 1.5px;
      margin-top: 8px;
      margin-bottom: 12px;

      &:hover{
        background: #0483ee;
      }
`
const Description = styled.p`
      fonst-size: 11px;
      letter-spacing: 1.5px;
      text-align: center;
      line-height: 1.5;
`
const CTAlogoTwo = styled.img`
      width: 90%;
`