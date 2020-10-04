import React from 'react';
import {Table} from 'reactstrap';

const CustomTable = (props) => {
    return (
        <Table responsive style={{backgroundColor: '#fff'}}>
            <thead>
            <tr>
                <th>#</th>
                <th>Nome do animal</th>
                <th>Sexo</th>
                <th>Idade aprox.</th>
                </tr>
            </thead>
            <tbody>
            {props.items.map((item, index) => {
                return <tr>
                    <th scope="row">{index + 1}</th>
                    <td>{item.name}</td>
                    <td>{item.gender}</td>
                    <td>{item.age}</td>
                </tr>
            })}
            </tbody>
        </Table>
    );
}

export default CustomTable;
