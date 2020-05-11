import React, {useState, useEffect} from 'react'

const Favorites = ({changeScreen, favoritePeople, favoritePlanets, setFavoritePeople, setFavoritePlanets}) => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [list, setList] = useState('all')
    const [filteredPeople, setFilteredPeople] = useState([]);
    const [filteredPlanets, setFilteredPlanets] = useState([]);
    const [combinedList, setCombinedList] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    console.log(favoritePlanets)
    console.log(combinedList)
    useEffect(()=>{
        
        setFilteredPeople(...filteredPeople, favoritePeople)
        setFilteredPlanets(...filteredPlanets, favoritePlanets)
        setCombinedList([...favoritePeople, ...favoritePlanets]);
    },[])
    
    const detailedHandler = (person) =>{
        changeScreen(person);
    }

    const handleSearchValue = (e) => {
        const results = favoritePeople.filter(item => {
            return (
                item.name.toLowerCase().includes(e.target.value.toLowerCase())|| 
                item.skin_color.toLowerCase().includes(e.target.value.toLowerCase()) ||
                item.hair_color.toLowerCase().includes(e.target.value.toLowerCase())
            );
        });
        setFilteredPeople(results);
        setSearchValue(e.target.value);
    };
    const removeFavPeople = (event,param) => {
        event.stopPropagation();
        let array = favoritePeople.filter(person => person.name !== param.name)
        setFilteredPeople(array);
        setFavoritePeople(array);
    }
    const removeFavPlanets = (event,param) => {
        event.stopPropagation();
        let array = favoritePlanets.filter(planet => planet.name !== param.name)
        setFavoritePlanets(array);
        setFilteredPlanets(array);
    }
    const peopleCards = filteredPeople.map((item, index) =>(
        <div className="card" key={item.name} onClick={() => detailedHandler(item)}>
            <h2>{item.name}</h2>
            <p>Birth year: {item.birth_year}</p>
            <p>Eye color: {item.eye_color}</p>
            <p>Hair color: {item.hair_color}</p>
            <button onClick={(e)=>removeFavPeople(e,item)}>Remove from favorites</button>
        </div>
    ))
    const planetCards = filteredPlanets.map((item) =>(
        <div className="card" key={item.name}>
            <h2>{item.name}</h2>
            <p>Climate: {item.climate}</p>
            <p>Terrain: {item.terrain}</p>
            <p>Population: {item.population}</p>
            <button onClick={(e)=>removeFavPlanets(e,item)}>Remove from favorites</button>

        </div>
    ));

    const combinedCards = combinedList.map((item) =>{
        if(item.terrain) return (
            <div className="card" key={item.name}>
                <h2>{item.name}</h2>
                <p>Climate: {item.climate}</p>
                <p>Terrain: {item.terrain}</p>
                <p>Population: {item.population}</p>
                <button onClick={(e)=>removeFavPlanets(e,item)}>Remove from favorites</button>
            </div>
        )
        else return (
            <div className="card" key={item.name} onClick={() => detailedHandler(item)}>
            <h2>{item.name}</h2>
            <p>Birth year: {item.birth_year}</p>
            <p>Eye color: {item.eye_color}</p>
            <p>Hair color: {item.hair_color}</p>
            <button onClick={(e)=>removeFavPeople(e,item)}>Remove from favorites</button>
            </div>
        )
    });

    if(error)
        return <div className="list-component">{error}</div>
    
    else if(isLoaded === true)
        return <div className="loader"></div>

    else if(favoritePeople.length === 0 && favoritePlanets.length === 0)
    return (
        <div className="list-component">
            <h1>You currently have no favorites</h1>
        </div>
    )
    
    else {
        if(list === 'people' )
            return (
                <div className="list-component">
                    <button onClick={() => setList('all')}>List all</button>
                    <button onClick={() => setList('people')}>List people</button>
                    <button onClick={() => setList('planets')}>List planets</button>
                    <div className="search-wrapper">
                        <input className="search-input" type="text" placeholder="Search on name, birth year or skin color" onChange={handleSearchValue} value={searchValue} />
                    </div>
                    <h1>Your favorite</h1>
                    <div>
                        <h2>People</h2>
                        <div className="gallery">{peopleCards}</div>
                    </div>
                </div>
            )
        else if(list === 'planets')
            return (
                <div className="list-component">
                    <button onClick={() => setList('all')}>List all</button>
                    <button onClick={() => setList('people')}>List people</button>
                    <button onClick={() => setList('planets')}>List planets</button>
                    <div className="search-wrapper">
                        <input className="search-input" type="text" placeholder="Search on name, terrain or climate" onChange={handleSearchValue} value={searchValue} />
                    </div>
                    <h1>Your favorites</h1>
                    <div>
                        <h2>Planets</h2>
                        <div className="gallery">{planetCards}</div>
                    </div>
                </div>
            )
        else if(list === 'all')
            return (
                <div className="list-component">
                    <button onClick={() => setList('all')}>List all</button>
                    <button onClick={() => setList('people')}>List people</button>
                    <button onClick={() => setList('planets')}>List planets</button>
                    <div className="search-wrapper">
                        <input className="search-input" type="text" placeholder="Search on name, birth year or skin color" onChange={handleSearchValue} value={searchValue} />
                    </div>
                    <h1>Your favorites</h1>
                    <div>
                        <h2>People & Planets</h2>
                        <div className="gallery">{combinedCards}</div>
                        </div>
                </div>
            )
    }
}

export default Favorites
