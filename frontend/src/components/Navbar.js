import React from 'react';

const Navbar = (props) => {
    return (
        <div className="topnav">
            <a className="active" href="/app/home">Home</a>
            <div className="nav-right" >
                <a href="/login">Entrar</a>
                <a href="/signup">Cadastrar</a>
            </div>
        </div>
    );
}

export default Navbar;
