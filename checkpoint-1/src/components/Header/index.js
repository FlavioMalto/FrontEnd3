/* eslint-disable jsx-a11y/anchor-is-valid */

import './style.scss';

const Header = () => {
    return (
        <>
            <header id="header" className="p-3 bg-dark text-white sticky-top">
                <div className="container">
                    <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                        <a href="header" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"><img width="50" height="50" src="https://media-exp1.licdn.com/dms/image/C4E03AQGUu514ACjaBA/profile-displayphoto-shrink_800_800/0/1517394446759?e=1642636800&v=beta&t=F7ZmRZ9HMSj1D1g5g45aFqb2YLZLm5Lr_ogf8MKdpLs" alt="perfil" />
                        </a>

                        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                            <li><a href="#banner" className="nav-link px-3 text-white">Início</a></li>
                            <li><a href="#projetos" className="nav-link px-3 text-white">Projetos</a></li>
                            <li><a href="#footer" className="nav-link px-3 text-white">Contatos</a></li>
                        </ul>

                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;