import React, {useState} from 'react'

const Create = ({setFavoritePeople}) => {
    const [name, setName] = useState('');
    const [skinColor, setSkinColor] = useState('');
    const [eyeColor, setEyeColor] = useState('');
    const [height, setHeight] = useState('');
    const [touched, setTouched] = useState(false);
    const [isDisabled, setIsDisabled] = useState(true);


    let cssClass = '';

    
    const submitHandler = () =>{
        
        let newCharacter = [{
            name: name,
            skin_color: skinColor,
            eye_color: eyeColor,
            height: height
        }];
        setFavoritePeople(newCharacter)
    }

    if( touched ) {
        if( isDisabled )
            cssClass = 'valid';
        else
            cssClass = 'invalid';
    }
    return (
        <div className="create-box">
            <h2>Create your own favorite character</h2>
            <div>
                Name: 
                <input type="text"
                    value={name}
                    className={cssClass}
                    onChange={event => setName(event.target.value)}
                    onBlur={event => setTouched(true)} /> <br/>
            </div>
            <div>
                Skin color: 
                <input type="text"
                    value={skinColor}
                    className={cssClass}
                    onChange={event => setSkinColor(event.target.value)}
                    onBlur={event => setTouched(true)} /> <br/>
            </div>
            <div>
                Eye color: 
                <input type="text"
                    value={eyeColor}
                    className={cssClass}
                    onChange={event => setEyeColor(event.target.value)}
                    onBlur={event => setTouched(true)} /> <br/>
            </div>
            <div>
                Height (cm): 
                <input type="text"
                    value={height}
                    className={cssClass}
                    onChange={event => setHeight(event.target.value)}
                    onBlur={event => setTouched(true)} /> <br/>
            </div>
            <button onClick={()=> submitHandler()}>Submit</button>
        </div>
    )
}
export default Create;
