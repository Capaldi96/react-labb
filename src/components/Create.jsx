import React, {useState, useEffect} from 'react'

const Create = ({setFavoritePeople, changeScreen, favoritePeople}) => {
    const [name, setName] = useState('');
    const [skinColor, setSkinColor] = useState('');
    const [eyeColor, setEyeColor] = useState('');
    const [height, setHeight] = useState('');
    const [nameIsTouched, setNameIsTouched] = useState(false);
    const [skinIsTouched, setSkinIsTouched] = useState(false);
    const [eyeIsTouched, setEyeIsTouched] = useState(false);
    const [heightIsTouched, setHeightIsTouched] = useState(false);
    const [isDisabled, setIsDisabled] = useState(true);

    useEffect(() => {
        let mounted = true
        if(name.length === 0 || skinColor.length === 0 || height.length === 0 || eyeColor.length === 0 || favoritePeople.some(person => person.name.toLowerCase() === name.toLowerCase())){
            if(!mounted) return;
            setIsDisabled(true);
        }
        else{
            if(!mounted) return;
            setIsDisabled(false)
        }

        return () => {
            mounted = false;
        }
    }, [name, skinColor, eyeColor, height, favoritePeople])
    
    const submitHandler = (event) =>{
        
        let newCharacter = [{
            name: name,
            skin_color: skinColor,
            eye_color: eyeColor,
            height: height,
            fake: 'Fantasy character'
        }];
    

        setFavoritePeople(newCharacter);
        changeScreen();
    }

    let nameValidate = '';
    let skinValidate = '';
    let eyeValidate = '';
    let heightValidate = '';
    if( nameIsTouched ) {
        if(name.length === 0)
            nameValidate = 'invalid';
        else
            nameValidate = 'valid';
    }
    if( skinIsTouched ) {
        if(skinColor.length === 0)
            skinValidate = 'invalid';
        else
            skinValidate = 'valid';
    }
    if(eyeIsTouched){
        if(eyeColor.length === 0)
            eyeValidate = 'invalid';
        else
            eyeValidate = 'valid';
    }
    if( heightIsTouched ) {
        if(height.length === 0)
            heightValidate = 'invalid';
        else
            heightValidate = 'valid';
    }
    return (
        <div className="create-box">
            <h2>Create your own favorite character</h2>
            <div>
                Name (Cant exist already): 
                <input type="text"
                    value={name}
                    className={nameValidate}
                    onChange={event => setName(event.target.value)}
                    onBlur={event => setNameIsTouched(true)} /> <br/>
            </div>
            <div>
                Skin color: 
                <input type="text"
                    value={skinColor}
                    className={skinValidate}
                    onChange={event => setSkinColor(event.target.value)}
                    onBlur={event => setSkinIsTouched(true)} /> <br/>
            </div>
            <div>
                Eye color: 
                <input type="text"
                    value={eyeColor}
                    className={eyeValidate}
                    onChange={event => setEyeColor(event.target.value)}
                    onBlur={event => setEyeIsTouched(true)} /> <br/>
            </div>
            <div>
                Height (cm): 
                <input type="number"
                    value={height}
                    className={heightValidate}
                    onChange={event => setHeight(event.target.value)}
                    onBlur={event => setHeightIsTouched(true)} /> <br/>
            </div>
            <span>(All fields must be filled)</span>
            <button disabled={isDisabled} onClick={(e)=> submitHandler(e)}>Submit</button>
        </div>
    )
}
export default Create;
