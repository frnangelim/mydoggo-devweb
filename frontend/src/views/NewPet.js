import React, {useEffect, useState} from 'react'
import './../App.css';

import Navbar from "./../components/Navbar";
import {Spinner, Col, FormGroup, Label, Input, Button} from 'reactstrap';

import PetRoutes from "./../middleware/API/pet/routes";

function NewPet(props) {
    const [pet, setPet] = useState({
        name: '',
        type: '',
        gender: '',
        location: '',
        image: '',
        size: '',
        description: ''
    });
    const [invalidForm, setInvalidForm] = useState(false);
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);

    useEffect(() => {
        validateAuth()
    }, []);

    function validateAuth() {
        let user = JSON.parse(localStorage.getItem('USER'));
        if (!user || (user && !user.jwt)) {
            props.history.push('/auth/login');
        }
        setLoading(false);
    }

    function onChangeInput({name, value}) {
        setPet({
            ...pet,
            [name]: value
        })
    }

    function onChangeGender(gender) {
        setPet({
            ...pet,
            gender: gender
        })
    }

    function onChangeType(type) {
        setPet({
            ...pet,
            type: type
        })
    }

    function onChangeSize(size) {
        setPet({
            ...pet,
            size: size
        })
    }

    function validateFields() {
        return pet.name.trim() && pet.gender.trim() &&
            pet.location.trim() && pet.image.trim() &&
            pet.size.trim() && pet.description.trim() && pet.type.trim();
        ;
    }

    async function onSubmit() {
        if (validateFields()) {
            setInvalidForm(false);
            setSaving(true);
            let response = await PetRoutes.create(pet);
            if (response) {
                setPet({
                    name: '',
                    type: '',
                    gender: '',
                    location: '',
                    image: '',
                    size: '',
                    description: '',
                });
                setSuccess(true);
            }
            setSaving(false);
        } else {
            setSuccess(false);
            setInvalidForm(true)
        }
    }

    return (
        <div>
            <Navbar active={"newPet"}/>

            {!loading && pet ?
                <>
                <Col sm={6} style={{
                    background: '#333',
                    padding: 50,
                    borderRadius: 20,
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    marginTop: 50,
                    marginBottom: 50
                }}>
                    <div>
                        <h2 style={{color: '#FFF'}}>Cadastrar novo PET</h2>
                        <br/>
                        <Col sm={12}>
                            <FormGroup>
                                <Input
                                    name="name"
                                    type="text"
                                    placeholder="Nome do animal"
                                    value={pet.name}
                                    onChange={(e) => {
                                        onChangeInput(e.target);
                                    }}
                                />
                            </FormGroup>
                        </Col>
                        <Col sm={12}>
                            <FormGroup style={{display: 'flex', justifyContent: 'space-around'}}>
                                <Col>
                                    <FormGroup check>
                                        <Label check style={{color: 'white'}}>
                                            <Input type="radio" name="radioType"
                                                   onChange={() => onChangeType('DOG')}/>{' '}
                                            Cachorro
                                        </Label>
                                    </FormGroup>
                                    <FormGroup check>
                                        <Label check style={{color: 'white'}}>
                                            <Input type="radio" name="radioType"
                                                   onChange={() => onChangeType('CAT')}/>{' '}
                                            Gato
                                        </Label>
                                    </FormGroup>
                                </Col>
                                <Col style={{textAlign: 'right'}}>
                                    <FormGroup check>
                                        <Label check style={{color: 'white'}}>
                                            <Input type="radio" name="radioGender"
                                                   onChange={() => onChangeGender('M')}/>{' '}
                                            Macho
                                        </Label>
                                    </FormGroup>
                                    <FormGroup check>
                                        <Label check style={{color: 'white'}}>
                                            <Input type="radio" name="radioGender"
                                                   onChange={() => onChangeGender('F')}/>{' '}
                                            Fêmea
                                        </Label>
                                    </FormGroup>
                                </Col>
                            </FormGroup>
                        </Col>
                        <Col sm={12}>
                            <FormGroup>
                                <Input
                                    name="location"
                                    type="text"
                                    placeholder="Estado/Cidade"
                                    value={pet.location}
                                    onChange={(e) => {
                                        onChangeInput(e.target);
                                    }}
                                />
                            </FormGroup>
                        </Col>
                        <Col sm={12}>
                            <FormGroup>
                                <Input
                                    name="image"
                                    type="text"
                                    placeholder="URL da foto do animal"
                                    value={pet.image}
                                    onChange={(e) => {
                                        onChangeInput(e.target);
                                    }}
                                />
                            </FormGroup>
                        </Col>
                        <Col sm={12}>

                        </Col>
                        <Col sm={12}>
                            <Label style={{color: '#fff', fontWeight: 'bold'}}>
                                Porte do animal
                            </Label>
                            <FormGroup style={{display: 'flex', justifyContent: 'space-around'}}>
                                <FormGroup check>
                                    <Label check style={{color: 'white'}}>
                                        <Input type="radio" name="radioSize" onChange={(e) => onChangeSize('P')}/>{' '}
                                        Pequeno
                                    </Label>
                                </FormGroup>
                                <FormGroup check>
                                    <Label check style={{color: 'white'}}>
                                        <Input type="radio" name="radioSize" onChange={(e) => onChangeSize('M')}/>{' '}
                                        Médio
                                    </Label>
                                </FormGroup>
                                <FormGroup check>
                                    <Label check style={{color: 'white'}}>
                                        <Input type="radio" name="radioSize" onChange={(e) => onChangeSize('G')}/>{' '}
                                        Grande
                                    </Label>
                                </FormGroup>
                            </FormGroup>
                        </Col>
                        <Col sm={12}>
                            <FormGroup>
                                <Input
                                    name="description"
                                    type="textarea"
                                    style={{height: 150}}
                                    placeholder="Mais informações sobre o animal"
                                    value={pet.description}
                                    onChange={(e) => {
                                        onChangeInput(e.target);
                                    }}
                                />
                            </FormGroup>
                        </Col>

                        {invalidForm &&
                        <p style={{color: 'red', textAlign: 'center'}}>Por favor, preencha todos os campos</p>}
                        {success && <p style={{color: 'green', textAlign: 'center'}}>PET cadastrado com sucesso</p>}

                        {saving &&
                        <div style={{textAlign: 'center'}}>
                            <Spinner color="primary"/>
                        </div>
                        }

                        <div style={{width: '100%', marginTop: 50, textAlign: 'center'}}>
                            <Button type="submit" style={{backgroundColor: '#F4AA24', color: '#FFF'}} onClick={onSubmit}
                                    disabled={saving}>
                                Cadastar PET para adoção
                            </Button>
                        </div>
                    </div>
                </Col>
                </>
                :
                <div style={{textAlign: 'center'}}>
                    <Spinner color="primary"/>
                </div>
            }


        </div>

    );
}

export default NewPet;
