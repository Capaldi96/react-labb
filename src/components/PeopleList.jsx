import React, { useState, useEffect} from 'react';
import axios from 'axios';

const PeopleList = ({changeScreen, setFavoritePeople}) => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [peopleList, setPeopleList] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [filteredList, setFilteredList] = useState([])


    const handleSearchValue = (e) => {
        const results = peopleList.filter(item => {
            return (
                item.name.toLowerCase().includes(e.target.value.toLowerCase())|| 
                item.skin_color.toLowerCase().includes(e.target.value.toLowerCase()) ||
                item.hair_color.toLowerCase().includes(e.target.value.toLowerCase())
            );
        });
        setFilteredList(results);
        setSearchValue(e.target.value);
    };
    
    const addToFav = (event, item) => {
        event.stopPropagation();
        setFavoritePeople(item);
    }
    const detailedHandler = (person) =>{
        changeScreen(person);
    }

    useEffect(()=>{
        let mounted = true;
        setIsLoaded(true);
        const fetchData = async () =>{
            try{
                let result = await axios(`https://swapi.dev/api/people/`)
                if(!mounted) return;
                setPeopleList(result.data.results);
                setFilteredList(result.data.results)
                while(result.data.next !== null){
                    result = await axios(result.data.next)
                    if( !mounted) return;
                    setPeopleList(peopleList => peopleList.concat(result.data.results));
                    setFilteredList(filteredList => filteredList.concat(result.data.results))
                }
            } catch(e){
                setError(e);
                console.log(e)
            }
            setIsLoaded(false);
        }
        fetchData();
        return () => {
            mounted = false;
        };
    },[])
    const cards = filteredList.map((item, index) =>(
        <div className="card" key={item.name+index} onClick={() => detailedHandler(item)}> 
            <h2>{item.name}</h2>
            <p>Birth year: {item.birth_year}</p>
            <p>Eye color: {item.eye_color}</p>
            <p>Hair color: {item.hair_color}</p>
            <button onClick={(e)=>addToFav(e,item)}>Add to favorites</button>
            {/* <button onClick={()=>removeFav(index+1)}>Remove fromfavorites</button> */}
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
                <input className="search-input" type="text" placeholder="Search on name, birth year or skin color" onChange={handleSearchValue} value={searchValue} />
            </div>
            <h2>All People</h2>
            <div className="gallery">{cards}</div>
        </div>
    )
}

export default PeopleList;
