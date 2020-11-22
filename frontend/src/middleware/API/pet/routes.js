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

export default {
    getAll
}
