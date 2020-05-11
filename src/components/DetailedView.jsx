import React, {useState, useEffect} from 'react'
import axios from 'axios';

const DetailedView = ({person}) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState();
    const [homeWorld, setHomeWorld] = useState(null);
    const [movies, setMovies] = useState([]);
    console.log(person)
    useEffect(()=>{
        let mounted = true;
        setIsLoaded(true);
        const fetchHomeWorld = async () =>{  
            if(person.homeworld){ 
                try{     
                    let result = await axios(person.homeworld);
                    if(!mounted) return;
                    setHomeWorld(result.data.name)
                }
                catch(e){
                    setError(e);
                    console.log(error)
                }
                setIsLoaded(false);
            }
        }
        fetchHomeWorld();
        return () => {
            mounted = false;
        };
    },[error, person.homeworld])
    useEffect(()=>{
        let mounted = true;
        const fetchMovies = async () =>{   
            try{     
                for(let i = 0; i < person.films.length; i++){ 
                    let result = await axios(person.films[i]);
                    if(!mounted) return;
                    setMovies(movies => movies.concat(result.data.title));
                }
            }
            catch(e){
                setError(e);
            }
            setIsLoaded(false);
        }
        fetchMovies();
        return () => {
            mounted = false;
        };
    },[person.films])

    const movieList = movies.map(movie =>(
        <p key={movie}>{movie}</p>
    ))
    if(error)
        return <div>{error}</div>
    if(isLoaded === true)
        return <div className="loader"></div>
    else{
        if(person.height)
            return (
            <div className="detailed-card">
                <h2>{person.name}</h2>
                <div className="detailed-grid">
                    <div>Birth year: <p>{person.birth_year}</p></div>
                    <div>Height: <p>{person.height} cm</p></div>
                    <div>Hair color: <p>{person.hair_color}</p></div>
                    <div>Eye color: <p>{person.eye_color}</p></div>
                    <div>Skin color: <p>{person.skin_color}</p></div>
                    <div>Gender: <p>{person.gender}</p></div>
                    <div>Mass: <p>{person.mass} kg</p></div>
                    <div>Homeworld: <p>{homeWorld}</p></div>
                    <div>Movies: <div>{movieList}</div></div>
                </div>
                
            </div>
        )
        else return (
            <div className="detailed-card">
            <h2>{person.name}</h2>
            <div className="detailed-grid">
                <div>Climate: <p>{person.climate}</p></div>
                <div>Diameter: <p>{person.diameter}</p></div>
                <div>Gravity: <p>{person.gravity}</p></div>
                <div>Orbital period: <p>{person.orbital_period}</p></div>
                <div>Population: <p>{person.population}</p></div>
                <div>Rotation period: <p>{person.rotation_period}</p></div>
                <div>Surface water: <p>{person.surface_water}</p></div>
                <div>Terrain: <p>{person.terrain}</p></div>
                <div>Movies: <div>{movieList}</div></div>
            </div>
            
        </div>
        )
    }
}
export default DetailedView;
