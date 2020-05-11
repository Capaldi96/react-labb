import React, {useState, useEffect} from 'react'
import axios from 'axios'

const PlanetList = ({setFavoritePlanets, favoritePlanets, changeScreen}) => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [planetList, setPlanetList] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [filteredList, setFilteredList] = useState([])

    const handleSearchValue = (e) => {
        const results = planetList.filter(item => {
            return (
                item.name.toLowerCase().includes(e.target.value.toLowerCase())|| 
                item.terrain.toLowerCase().includes(e.target.value.toLowerCase()) ||
                item.climate.toLowerCase().includes(e.target.value.toLowerCase())
            );
        });
        setFilteredList(results);
        setSearchValue(e.target.value);
    };
    const detailedHandler = (planet) =>{
        changeScreen(planet);

    }
    
    const addToFav = (event, planet) => {
        event.stopPropagation();
        if(!favoritePlanets.includes(planet))
        setFavoritePlanets(planet);
    }
    useEffect(()=>{
        let mounted = true;
        setIsLoaded(true);
        const fetchData = async () =>{
            try{
                let result = await axios(`https://swapi.dev/api/planets/`)
                if(!mounted) return;
                setPlanetList(result.data.results);
                setFilteredList(result.data.results)
                let count = 2;
                while(result.data.next !== null){
                    result = await axios(`https://swapi.dev/api/planets/?page=${count}`)
                    if(!mounted) return;
                    setPlanetList([...planetList, result.data.results]);
                    setFilteredList([...filteredList, result.data.results]);
                    count++;
                }
            } catch(e){
                setError(e);
            }
            setIsLoaded(false);
        }
        fetchData();
        return () => {
            mounted = false;
        };
    },[filteredList, planetList])
    const cards = filteredList.map((item, index) =>(
        <div className="card" key={item.name+index} onClick={()=>detailedHandler(item)}>
            <section>
                <h2>{item.name}</h2>
                <p>Climate: {item.climate}</p>
                <p>Terrain: {item.terrain}</p>
                <p>Population: {item.population}</p>
            </section>        
            <button onClick={(e)=>addToFav(e,item)}>Add to favorites</button>
        </div>
    ))

    if(error)
        return <div>{error}</div>

    if(isLoaded === true)
        return <div className="loader"></div>
    else
        return (
            <div className="list-component">
                <div className="search-wrapper">
                    <input className="search-input" type="text" placeholder="Search on name, climate or terrain" onChange={handleSearchValue} value={searchValue} />
                </div>
                <h2>All Planets</h2>
                <div className="gallery">{cards}</div>
            </div>
        )
}

export default PlanetList;
