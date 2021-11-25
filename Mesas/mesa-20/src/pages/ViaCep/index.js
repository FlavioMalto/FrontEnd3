import { Component } from 'react';
import { Formik, Form, Field } from 'formik';
import Swal from 'sweetalert2';
import apis from '../../services/api';
import { Link } from 'react-router-dom';
import './style.scss';

export default class ViaCep extends Component {
  constructor() {
    super();
    this.state = {
      enderecos: {}
    }
  }

  handleSubmit = async ({ cep }) => {
    if (cep !== '') {
      try {
        const response = await apis[1].get(`${cep}/json/`);
        this.setState({ enderecos: response.data });
      } catch (error) {
        Swal.fire({
          title: error.response.status,
          icon: 'error',
          text: error.response.data.message
        });
      }
    }
  }

  render() {
    return (
      <>
      <Link to="/brasilapi">Pesquisar Usando BrasilApi</Link>
          <div className="col-md-4 col-sm-6 my-3 container text-center">
            <h2>Procure um endereço pelo CEP</h2>
            <Formik initialValues={{ cep: '' }} onSubmit={this.handleSubmit}>
              <Form>
                <Field placeholder="Insira o CEP" required type="text" name="cep" id="cep" className="form-control" />
                <button type="submit" className="btn btn-primary my-4">Pesquisar</button>
              </Form>
            </Formik>
            {this.state.enderecos && (
              <ul>
                <li>CEP: {this.state.enderecos.cep}</li>
                <li>Logradouro: {this.state.enderecos.logradouro}</li>
                <li>Complemento: {this.state.enderecos.complemento}</li>
                <li>Bairro: {this.state.enderecos.bairro}</li>
                <li>Cidade: {this.state.enderecos.localidade}</li>
                <li>Estado: {this.state.enderecos.uf}</li>
                <li>IBGE: {this.state.enderecos.ibge}</li>
                <li>GIA: {this.state.enderecos.gia}</li>
                <li><Link to={`/${this.state.enderecos.ddd}`}>DDD: {this.state.enderecos.ddd}</Link></li>
                <li>SIAFI: {this.state.enderecos.siafi}</li>
              </ul>
              )              
            }
          </div>
      </>
    );
  }
}