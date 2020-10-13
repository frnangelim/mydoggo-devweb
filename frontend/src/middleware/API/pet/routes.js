import {request} from '../request.js';

import {
    API_BASE_URL
} from '../config';


export function getAll() {
    return request({
        url: API_BASE_URL + `/pet`
    });
}

export default {
    getAll
}
