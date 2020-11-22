import React, {useState} from 'react';
import {Button, Col, FormGroup, Input, Row} from "reactstrap";
import CustomSelect from "./CustomSelect";

const SPECIES = [
    {value: '', label: 'Todos'},
    {value: 'DOG', label: 'Cachorro'},
    {value: 'CAT', label: 'Gato'},
]

const ANIMAL_SIZES = [
    {value: '', label: 'Todos'},
    {value: 'P', label: 'Pequeno'},
    {value: 'M', label: 'Médio'},
    {value: 'G', label: 'Grande'}
]

const PetFilters = (props) => {
    const [specie, setSpecie] = useState('');
    const [size, setSize] = useState('');
    const [petName, setPetName] = useState('');

    function onBlur(e) {
        e.preventDefault();
        props.onBlur({specie, size, petName});
    }

    return (
        <div className="home-search-area">
            <h1 style={{color: '#fff'}}>Encontre um PET</h1>
            <br/>
            <form>
                <Row>
                    <Col sm={6}>
                        <FormGroup>
                            <CustomSelect
                                name="species"
                                placeholder={"Selecione uma espécie"}
                                options={SPECIES}
                                onChange={(data) => {
                                    setSpecie(data.value);
                                }}
                            />
                        </FormGroup>
                    </Col>

                    <Col sm={6}>
                        <FormGroup>
                            <CustomSelect
                                name="sizes"
                                placeholder={"Selecione um porte"}
                                options={ANIMAL_SIZES}
                                onChange={(data) => {
                                    setSize(data.value)
                                }}
                            />
                        </FormGroup>
                    </Col>

                    <Col sm={12}>
                        <FormGroup>
                            <Input
                                name="petName"
                                type="text"
                                placeholder="Nome do animal"
                                value={null}
                                onChange={(e) => {
                                    setPetName(e.target.value)
                                }}
                            />
                        </FormGroup>
                    </Col>

                    <div style={{width: '100%', marginTop: 20}}>
                        <Button type="submit" style={{backgroundColor: '#F4AA24', color: '#FFF'}} onClick={onBlur}>
                            Pesquisar
                        </Button>
                    </div>
                </Row>
            </form>
        </div>
    );
}

export default PetFilters;
