import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import requests from '../Requests'

function Movies() {
  const [movie, setMovie] = useState([]);

    async function fetchData() {
        await fetch('https://api.themoviedb.org/3'+ requests.fetchNetflixOriginals)
        .then(data => data.json())
        .then(result => setMovie(result.results))
        .catch(error => console.log(error))
    }
       
    useEffect(() => { 
        fetchData();
    }, []);

  return (
    <Container>
        <h4>Recommended for You</h4>
        <Content>
          {movie.map((val,key)=>(
            <Wrap>
            <img style={{backgroundImage: `url("https://image.tmdb.org/t/p/original/${val.backdrop_path}")`,
              backgroundSize: "cover",
              backgroundPosition: "center center",
            }} />
          </Wrap>
          ))}
        </Content>
    </Container>
  )
}

export default Movies

const Container = styled.div`


`
const Content = styled.div`
  display:grid;
  grid-gap:25px;
  grid-template-columns:repeat(4,minmax(0,1fr));
`
const Wrap = styled.div`
  border-radius:10px;
  cursor:pointer;
  overflow:hidden;
  height: 150px;
  object-fit: contain;
  border: 3px solid rgba(249, 249, 249,0.1);  
  box-shadow:rgb(0 0 0 / 69%) 0px 26px 30px -10px,
  rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

  img{
    width:100%;
    height:100%;
    object-fit:cover;
  }

  &:hover{
    transform:scale(1.05);
    border-color:rgba(249, 249, 249, 0.8);
    box-shadow:rgb(0 0 0 / 80%) 0px 40px 58px -16px,
    rgb(0 0 0 / 72%) 0px 30px 22px -10px;
  }
`