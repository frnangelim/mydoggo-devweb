import React, {useEffect, useState} from 'react'
import './App.css';

import PetCard from "./components/PetCard";
import PetFilters from "./components/PetFilters";
import Navbar from "./components/Navbar";
import {Spinner} from 'reactstrap';

import PetRoutes from "./middleware/API/pet/routes";
import Banner from '../src/assets/img/dogwp.jpg';

function App() {
    const [pets, setPets] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        loadPets();
    }, []);

    async function loadPets(filters = {}) {
        setLoading(true);
        let response = await PetRoutes.getAll(filters);
        if (response)
            setPets(response);
        setLoading(false);
    };

    async function onBlur(data) {
        loadPets(data);
    }

    function renderPetsQuantityMessage() {
        if (pets.length === 0) {
            return "Nenhum animal encontrado para adoção";
        } else if (pets.length === 1) {
            return "1 animal disponível para adoção";
        } else {
            return `${pets.length} animais disponíveis para adoção`;
        }
    }

    return (
        <div>
            <Navbar active={'home'}/>

            <img alt="Banner do site" src={Banner} style={{width: '100%', height: 300, objectFit: 'cover'}}/>
            <div className="container">
                <PetFilters onBlur={onBlur}/>
            </div>

            <div>
                {loading ?
                    <div style={{textAlign: 'center'}}>
                        <Spinner color="primary"/>
                    </div>
                    :
                    <>
                        <h3 style={{textAlign: 'center', marginBottom: 20, color: '#F4AA24', fontWeight: 'bold'}}>
                            {renderPetsQuantityMessage()}
                        </h3>
                        <ul id="pet-list-search" className="list-inline pet-list-index">
                            {
                                pets.map((pet, index) => {
                                    return (
                                        <PetCard key={index} pet={pet}/>
                                    )
                                })
                            }
                        </ul>
                    </>
                }
            </div>
        </div>

    );
}

export default App;
