/* eslint-disable jsx-a11y/anchor-is-valid */

import './style.scss';

const Footer = () => {
    return (
        <>
            <footer id="footer" className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                <div className="col-md-4 d-flex align-items-center">
                    <a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
                        
                    </a>
                    <span className="text-muted">© 2021 Flávio Malto de Olivera</span>
                </div>

                <ul className="nav col-md-4 justify-content-end list-unstyled d-flex m-4">
                    <li className="ms-3"><a className="text-muted" href="https://github.com/FlavioMalto/Backend1"><img width="24" height="24" src="https://cdn-icons.flaticon.com/png/512/2175/premium/2175377.png?token=exp=1637095042~hmac=c70e460436b4ca7d90a5002a7118a95e" alt="github" /></a></li>
                    <li className="ms-3"><a className="text-muted" href="https://www.linkedin.com/in/flávio-malto-de-oliveira-03215a90/"><img width="24" height="24" src="https://cdn-icons.flaticon.com/png/512/3536/premium/3536505.png?token=exp=1637095228~hmac=d73926515df6bd3fd386f9f666cfc5ce" alt="linkedin" /></a></li>
                    <li className="ms-3"><a className="text-muted" href="mailto:flaviomalto@gmail.com"><img width="24" height="24" src="https://cdn-icons-png.flaticon.com/512/5968/5968534.png" alt="email" /></a></li>
                </ul>
            </footer>
        </>
    );
}

export default Footer;