import React from 'react'
import { Button, Table } from 'reactstrap';
import { baseURL } from '../../environment';


function MovieTable({movies, token, fetchMovies}) {
    
  async function deleteMovie(id){
      const url = `${baseURL}/movies/${id}`;

      let requestOptions = {
        headers: new Headers({
            'Authorization': token
        }),
        method: 'DELETE'
      }

      try{

        let response = await fetch(url, requestOptions);
        let data = await response.json();

        if(data) {
          fetchMovies();
        }
      } catch(err) {
          console.log(err.message)
        }
      }
  
    return (
    <>
    <h1>Movie Library</h1>
    <Table hover striped>
  <thead>
    <tr>

      <th>
        Title
      </th>

      <th>
        Genre
      </th>

      <th>
        Rating
      </th>

      <th>
        Runtime
      </th>

      <th>
        Release Year
      </th>
      <th>
        Edit / Delete
      </th>

    </tr>
  </thead>

  <tbody>
    {
        movies.map(movie => (
            <tr key={movie._id}>
            <th scope="row">{movie.title}</th>
            <td>{movie.genre}</td>
            <td>{movie.rating}</td>
            <td>{movie.length}mins</td>
            <td>{movie.releaseYear}</td>
            <td>
              <Button
                  onClick={() => deleteMovie(movie._id)}
                  color='danger'
              >Delete</Button>
              </td>   
            </tr>
        ))
    }     
  </tbody>
</Table>
</>
  )
}

export default MovieTable