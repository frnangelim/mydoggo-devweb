import React from 'react';

const PetCard = (props) => {
    const pet = props.pet;
    return (
        <li>
            <a href="/TODO">
                <div className="image">
                    <img alt="Foto do pet" className="img-rounded" src={pet.image}/>
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
