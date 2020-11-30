import {request} from '../request.js';

import {
    API_BASE_URL
} from '../config';


export function getAll({petName = '', specie = '', size = ''}) {
    let query = `?petName=${petName}&specie=${specie}&size=${size}`;
    return request({
        url: API_BASE_URL + `/pet` + query
    });
}

export function getOne(petId) {
    return request({
        url: API_BASE_URL + `/pet/${petId}`
    });
}

export function create(body) {
    return request({
        url: API_BASE_URL + `/pet`,
        body: JSON.stringify(body),
        method: 'POST'
    });
}

export default {
    getAll,
    getOne,
    create
}
