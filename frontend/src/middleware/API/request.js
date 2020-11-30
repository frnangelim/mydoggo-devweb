export const request = (options) => {
    let headers = {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
    };

    // TODO auth
    let user = JSON.parse(localStorage.getItem('USER'));
    console.log('XXX', user);
    if (user && user.jwt) {
        headers["Authorization"] = `${user.jwt}`;
    }

    options.headers = new Headers(headers);

    return new Promise((resolve, reject) => {
        fetch(options.url, options).then(resp => {
            if (resp.ok)
                resp.json().then(response => {
                    resolve(response);
                });
            else {
                resp.json().then(response => {
                    reject(response);
                });
            }
        })
    })
};
