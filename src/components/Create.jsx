import React, {useState, useEffect} from 'react'

const Create = ({setFavoritePeople}) => {
    const [created, setCreated] = useState([]);
    const [touched, setTouched] = useState(false);

    let cssClass = '';

    const isValidNumber = x => {
        let maybeNumber = x - 0;
        return !isNaN(maybeNumber);
    }


    if( touched ) {
        if( isValidNumber() )
            cssClass = 'valid';
        else
            cssClass = 'invalid';
    }
    return (
        <div className="detailed-card">
            <p>
                Please enter a number: <br/>
                <input type="text"
                    value={created}
                    className={cssClass}
                    onChange={event => setCreated(event.target.value)}
                    onBlur={event => setTouched(true)} /> <br/>
            </p>
            <button>Submit</button>
        </div>
    )
}
export default Create;
