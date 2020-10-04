import React, { useEffect, useState } from 'react'
import './App.css';
import CustomTable from "./components/CustomTable";

const MOCK = [
    {name: 'Rocco', gender: 'M', age: 5},
    {name: 'Akira', gender: 'F', age: 1},
    {name: 'Bono', gender: 'M', age: 3},
    {name: 'Mary', gender: 'F', age: 2},
    {name: 'Pretinha', gender: 'F', age: 3},
];

function App() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        setItems(MOCK);
    }, []);

    return (
        <div className="App">
            <header className="App-header">
                <CustomTable items={items}/>
            </header>
        </div>
    );
}

export default App;
