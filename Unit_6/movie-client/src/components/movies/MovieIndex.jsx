import React, { useEffect, useState } from 'react'
import MovieCreate from './MovieCreate'
import { Col, Container, Row } from 'reactstrap'
import MovieTable from './MovieTable'
import { baseURL } from '../../environment'

function MovieIndex(props) {
    const [ movies, setMovies ] = useState([]);

    const fetchMovies = async () => {
        const url = `${baseURL}/movies`

        const requestOptions = {
            method: 'GET',
            headers: new Headers({
                "Authorization": props.token
            })
        }

        try {

            const response = await fetch(url, requestOptions);
            const data = await response.json();

            console.log(data);
            setMovies(data.Library);

        } catch(err) {
            console.log(err.message);
        }
    }
    useEffect(() => {
        if(props.token){
            fetchMovies();
        }
    }, [props.token])
    

  return (
    <>
        <Container>
            <Row>
                <Col md='4'>
                <MovieCreate 
                token={props.token} 
                fetchMovies={fetchMovies} />
                </Col>
                <Col md='8'>
                    <MovieTable
                    token={props.token}
                    fetchMovies={fetchMovies}
                    movies={movies}/>
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default MovieIndex