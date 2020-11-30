import React, {useEffect, useState} from 'react'
import './../App.css';

import Navbar from "./../components/Navbar";
import {Spinner, Col} from 'reactstrap';

import PetRoutes from "./../middleware/API/pet/routes";
import DefaultPhoto from "../assets/img/defaultpet.png";

function PetPage(props) {
    const [pet, setPet] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadPet();
    }, []);

    async function loadPet() {
        let id = props.match.params.id;
        let pet = await PetRoutes.getOne(id);
        setPet(pet);
        setLoading(false);
    };

    return (
        <div>
            <Navbar/>

            {!loading ?
                <>
                    <ul id="pet-list-search" className="list-inline pet-list-index"
                        style={{textAlign: 'center', marginTop: 50}}>
                        <li>
                            <h2 style={{color: '#613488', textAlign: 'center'}}>{pet.name}</h2>
                            <div className="image" style={{
                                marginLeft: 'auto',
                                marginRight: 'auto'
                            }}>
                                <img onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.src = DefaultPhoto
                                }} alt="Foto do pet" className="img-rounded" src={pet.image}/>
                            </div>
                            <div className="info">
                                <p className="gender"
                                   style={{color: '#613488'}}>{pet.gender === 'M' ? 'Macho' : 'Fêmea'}</p>
                                <p className="state" style={{color: '#613488'}}>{pet.location}</p>
                                <div className="details" style={{display: 'flex', justifyContent: 'center'}}>
                                    <div className={pet.size === 'P' ? 'active' : null}>P</div>
                                    <div className={pet.size === 'M' ? 'active' : null}>M</div>
                                    <div className={pet.size === 'G' ? 'active' : null}>G</div>
                                </div>
                            </div>
                        </li>
                    </ul>

                    <Col sm={6} style={{
                        background: '#333',
                        padding: 50,
                        borderRadius: 20,
                        marginLeft: 'auto',
                        marginRight: 'auto',
                    }}>
                        <div>
                            <p style={{fontWeight: 'bold', color: '#fff'}}>Mais informações:</p>
                            <span style={{
                                color: '#fff',
                                fontSize: 14
                            }}>{pet.description || 'Não foram fornecidas mais informações sobre o animal'}</span>
                            <br/>
                            <br/>
                            <span style={{color: '#fff', fontSize: 14}}><span
                                style={{fontWeight: 'bold', color: '#fff'}}>Responsável:</span> {pet.User.name}</span>
                            <br/>
                            <span style={{color: '#fff', fontSize: 14}}><span
                                style={{fontWeight: 'bold', color: '#fff'}}>Email:</span> {pet.User.email}</span>
                            <br/>
                            <span style={{color: '#fff', fontSize: 14}}><span style={{
                                fontWeight: 'bold',
                                color: '#fff'
                            }}>Telefone para contato:</span> {pet.User.phone ? pet.User.phone : 'Não informado'}</span>
                        </div>
                    </Col>
                </>
                :
                <div style={{textAlign: 'center', marginTop: 100}}>
                    <Spinner color="primary"/>
                </div>
            }

        </div>

    );
}

export default PetPage;
