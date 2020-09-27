import {request} from '../request.js';

import {
    API_BASE_URL
} from '../config';


export function signup(user) {
    return request({
        url: API_BASE_URL + `/user`,
        method: 'POST',
        body: JSON.stringify(user),
        contentType: 'application/json'
    });
}

export function login(user) {
    return request({
        url: API_BASE_URL + `/user/login`,
        method: 'POST',
        body: JSON.stringify(user),
        contentType: 'application/json'
    });
}
