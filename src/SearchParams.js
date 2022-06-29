import { useState, useEffect } from "react";
import Pet from "./Pet";

const ANIMALS = [ "bird", "cat", "dog", "rabbit", "reptile" ];

const SearchParams = () => {
    const [ location, setLocation ] = useState( "" );
    const [ animal, setAnimal ] = useState( "" );
    const [ breed, setBreed ] = useState( "" );
    const [ pets, setPets ] = useState( [] );
    const breeds = [];

    useEffect( () => {
        requestPets();
    }, [] ); // eslint-disable-line react-hooks/exhaustive-deps

    async function requestPets() {
        const res = await fetch(
            `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
        );

        const json = await res.json();

        console.log( json );

        setPets( json.pets );
    }

    function updateLocation( e ) { setLocation( e.target.value ); }
    function updateAnimal( e ) { setAnimal( e.target.value ); }
    function updateBreed( e ) { setBreed( e.target.value ) }

    return (
        <div className="search-params">
            <form>
                <label htmlFor="location">
                    Location
                    <input id="location" onChange={ updateLocation } value={location.toUpperCase()} placeholder="location"/>
                </label>
                <label htmlFor="animal">
                Animal
                <select
                id="animal"
                value={animal}
                onChange={ updateAnimal }
                onBlur={ updateAnimal }
                >
                    <option />
                    {
                        ANIMALS.map( animal => ( <option value={animal} key={animal}>{animal}</option> ) )
                    }
                    </select>
                </label>
                <label htmlFor="breed">
                Breed
                <select
                id="breed"
                value={breed}
                onChange={ updateBreed }
                onBlur={ updateBreed }
                >
                    <option />
                    {
                        breeds.map( breed => ( <option value={breed} key={breed}>{breed}</option> ) )
                    }
                    </select>
                </label>
                <button>Submit</button>
            </form>
            {
                pets.map( pet => (
                    <Pet name={pet.name} animal={pet.animal} breed={pet.breed} key={pet.id} />
                    ) )
            }
        </div>
    );
}

export default SearchParams;