/* eslint-disable jsx-a11y/anchor-is-valid */

import './style.scss';


const Projetos = () => {

    const listaProjetos = [
        {
            id: 1,
            img: 'https://images.pexels.com/photos/248559/pexels-photo-248559.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            nome: 'Mundo do Pedal',
            descricao: 'Site com informações de ciclismo',
            linkPagina: 'https://flaviomalto.github.io/front1_projeto1/',
            linkGitHub: 'https://github.com/FlavioMalto/front1_projeto1'
        },
        {
            id: 2,
            img: 'https://images.pexels.com/photos/5048523/pexels-photo-5048523.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            nome: 'Cidade de São Paulo',
            descricao: 'Site com video sobre a cidade de São Paulo',
            linkPagina: 'https://flaviomalto.github.io/front1_avaliacao1/',
            linkGitHub: 'https://github.com/FlavioMalto/front1_avaliacao1'
        },
        {
            id: 3,
            img: 'https://images.pexels.com/photos/3585093/pexels-photo-3585093.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            nome: 'Formulário',
            descricao: 'Página de formulário realizado em Front End I',
            linkPagina: 'https://flaviomalto.github.io/front1-cp2/',
            linkGitHub: 'https://github.com/FlavioMalto/front1-cp2'
        }
    ]

    return (
      <div id="projetos" className="album py-5 bg-light">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {
              listaProjetos.map(({id, img, nome, descricao, linkPagina, linkGitHub}) => {
                return (
                  <div key={id} className="col">
                    <div className="card shadow-sm">
                      <img className="bd-placeholder-img card-img-top" width="100%" height="225" src={img} alt="imagem" /><rect width="100%" height="100%" fill="#55595c"></rect><text id="nomeProjeto" x="50%" y="50%" fill="#eceeef" dy=".3em">{nome}</text>

                      <div className="card-body">
                        <p className="descricao">{descricao}</p>
                        <div id="buttons" className="d-flex justify-content-between align-items-center">
                          <div className="btn-group">
                            <a href={linkGitHub}><button type="button" className="btn btn-sm btn-outline-secondary px-md-3">GitHub</button></a>
                            <a href={linkPagina}><button type="button" className="btn btn-sm btn-outline-secondary px-md-3">Página</button></a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  // <div className="col">
                  //   <div className="card shadow-sm">
                  //     <img width="100%" height="225" src={img} alt="imagem" />

                  //     <div className="card-body">
                  //       <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  //       <div className="d-flex justify-content-between align-items-center">
                  //         <div className="btn-group">
                  //           <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                  //           <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                  //         </div>
                  //         <small className="text-muted">9 mins</small>
                  //       </div>
                  //     </div>
                  //   </div>
                  // </div>
                )
              })            
            } 
          </div>
        </div>
      </div>

    );
}

export default Projetos;