import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  //após o periodo de tempo ele redireciona para o endereço colocado, no caso a raíz (/)
  setTimeout(() => {
    navigate('/');
  }, 5000)

  return (
    <>
      <img src="https://http.cat/404" alt="404 Cat" />
    </>
  )
}

export default NotFound;
