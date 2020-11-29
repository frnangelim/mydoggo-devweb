import React, {useEffect, useState} from 'react';

const Navbar = (props) => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadUser();
    }, []);

    async function loadUser() {
        let user = localStorage.getItem('USER');
        setUser(JSON.parse(user));
        setLoading(false);
    }

    function logout() {
        localStorage.removeItem('USER');
    }

    return (
        <div className="topnav">
            <a className={props.active === 'home' ? 'active' : null} href="/app/home">Home</a>
            {!loading &&
            <div className="nav-right">
                {user && Object.keys(user).length > 0 ?
                    <a href={"/auth/login"} onClick={logout}>Sair</a>
                    :
                    <>
                        <a className={props.active === 'login' ? 'active' : null} href="/auth/login">Entrar</a>
                        <a className={props.active === 'signup' ? 'active' : null} href="/auth/signup">Cadastrar</a>
                    </>
                }
            </div>
            }
        </div>
    );
}

export default Navbar;
