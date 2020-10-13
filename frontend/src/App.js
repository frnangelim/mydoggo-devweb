import React, { useEffect, useState } from 'react'
import './App.css';
import CustomTable from "./components/CustomTable";
import PetRoutes from "./middleware/API/pet/routes";

function App() {
    const [pets, setPets] = useState([]);

    useEffect(() => {
        loadPets();
    }, []);

    async function loadPets() {
        let response = await PetRoutes.getAll();
        if (response)
            setPets(response);
    };

    return (
        <div className="App">
            <header className="App-header">
                <CustomTable items={pets}/>
            </header>
        </div>
    );
}

export default App;
