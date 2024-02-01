import React, { useRef }from 'react'
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import FullButton from '../buttons/FullButton';
import { baseURL } from '../../environment';

function MovieCreate(props) {
console.log(props)

    const titleRef = useRef();
    const genreRef = useRef(); 
    const ratingRef = useRef();
    const lengthRef = useRef();
    const yearRef = useRef();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const title = titleRef.current.value
        const genre = genreRef.current.value
        const rating = ratingRef.current.value
        const length =  lengthRef.current.value
        const releaseYear = yearRef.current.value

        let movieObj = JSON.stringify({
            title, genre, rating, length, releaseYear
           })

        let url = `${baseURL}/movies`
        
        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json")
        myHeaders.append('Authorization', props.token)
        const requestOptions = {
            headers: myHeaders,
            body: movieObj,
            method: 'POST'
        }

        try{

            const res = await fetch(url, requestOptions);
            const data = await res.json();
            
            
            props.fetchMovies()
            if(data.message === `${title} added to database.`) 
            {console.log(title)} else {
              alert(data.message)
            } 
        
          } catch (err){
            console.error(err.message);
          }
        /* 
            - Shape object for the body to be sent.
            - Consider Headers
            - Consider request options
            - fetch
        */
       
    }
    let ratings = [null,'G','PG','PG-13','R','NC-17', 'CAT III'];

    let yearRange = () => {
        let years = [null];
        const thisYear = new Date().getFullYear();

        for(let i = thisYear; i >= 1892; i--) years.push(i);

        return(
            <>
                <Input 
                innerRef={yearRef} 
                type='select'>
                    
                    {
                        years.map((y,i) => {
                            return <option key={i} value={y}>{y}</option>
                        })
                    }
                </Input>
            </>
        )
    }

  return (
    <>
        <h1>Add Movie</h1>
        <Form onSubmit={handleSubmit}>

            <FormGroup>
                <Label>Title</Label>
                <Input
                innerRef={titleRef}
                    autoComplete='off'
                />
            </FormGroup>

            <FormGroup>
                <Label>Genre</Label>
                <Input
                innerRef={genreRef}
                type='select'
                autoComplete='off'
                >
                    <option value={""}></option>
                    <option value={"Comedy"}>Comedy</option>
                    <option value={"Drama"}>Drama</option>
                    <option value={"Action"}>Action</option>
                    <option value={"Horror"}>Horror</option>
                    <option value={"Thriller"}>Thriller</option>
                    <option value={"Family"}>Family</option>
                    <option value={"Science Fiction"}>Science Fiction</option>
                    <option value={"Adult"}>Adult</option>
                    <option value={"Documentary"}>Documentary</option>
                </Input>
            </FormGroup>

            <FormGroup>
                <Label>Rating</Label>
                <Input
                    innerRef={ratingRef}
                    type='select'
                    autoComplete='off'
                >
                    {ratings.map((r,i) => <option key={i} value={r}>{r}</option>)}
                </Input>
            </FormGroup>

            <FormGroup>
                <Label>Length (in Minutes)</Label>
                <Input
                    innerRef={lengthRef}
                    type='number'
                    autoComplete='off'
                />
            </FormGroup>

            <FormGroup>
                <Label>Year Released</Label>
                {yearRange()}
            </FormGroup>

            <FullButton>
                <Button color='success'>Add Movie</Button>
            </FullButton>
            
        </Form>
    </>
  )
}

export default MovieCreate