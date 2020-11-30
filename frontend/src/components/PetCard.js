import React from 'react';
import DefaultPhoto from '../assets/img/defaultpet.png'

const PetCard = (props) => {
    const pet = props.pet;
    return (
        <li>
            <a href={`/app/pet/${pet.id}`}>
                <div className="image">
                    <img onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = DefaultPhoto
                    }} alt="Foto do pet" className="img-rounded" src={pet.image}/>
                </div>
                <div className="info">
                    <p className="name">{pet.name}</p>
                    <p className="gender">{pet.gender === 'M' ? 'Macho' : 'Fêmea'}</p>
                    <p className="state">{pet.location}</p>
                    <div className="details">
                        <div className={pet.size === 'P' ? 'active' : null}>P</div>
                        <div className={pet.size === 'M' ? 'active' : null}>M</div>
                        <div className={pet.size === 'G' ? 'active' : null}>G</div>
                    </div>
                </div>
            </a>
        </li>
    );
}

export default PetCard;
