/* eslint-disable jsx-a11y/anchor-is-valid */
import './App.scss';

function App()

const listagemDeAlunos = [
  {
    id: 0,
    fistName: 'João',
    lastName: 'Silva'
  },
  {
    id: 1,
    fistName: 'Fulano',
    lastName: 'Alberto'
  },
  {
    id: 2,
    fistName: 'John',
    lastName: 'Doe'
  },
  {
    id: 3,
    fistName: 'Jane',
    lastName: 'Doe'
  },
  {
    id: 4,
    fistName: 'Ciclano',
    lastName: 'Beltrano'
  }
]

function App() {
  return (
    <>
      <nav class="navbar navbar-expand-sm navbar-dark bg-dark" aria-label="Third navbar example">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Expand at sm</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample03" aria-controls="navbarsExample03" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarsExample03">
            <ul class="navbar-nav me-auto mb-2 mb-sm-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Link</a>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled">Disabled</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="dropdown03" data-bs-toggle="dropdown" aria-expanded="false">Dropdown</a>
                <ul class="dropdown-menu" aria-labelledby="dropdown03">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
            </ul>
            <form>
              <input class="form-control" type="text" placeholder="Search" aria-label="Search" />
            </form>
          </div>
        </div>
      </nav>
      <div className="App">
        {
          listagemDeAlunos.map(() => {
            return(
              <>
                
              </>
            )
          })
        }
      </div>
    </>
  );
}

export default App;
