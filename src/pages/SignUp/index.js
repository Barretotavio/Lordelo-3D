import './styles.css';
import loguinho from '../../assets/loguinho.jpg';
import { Link } from 'react-router-dom';

function SignUp() {
  return (
    <div className='container-sign-up'>
      <img src={loguinho} alt='logo' className='loguinho' />
      <div className='content-sign-up'>
        <form>
          <h2>Cadastre-se</h2>
          <div className='container-inputs'>
            <label htmlFor='name'>Nome</label>
            <input type='text' name='name' />
          </div>
          <div className='container-inputs'>
            <label htmlFor='email'>E-mail</label>
            <input type='text' name='email' />
          </div>
          <div className='container-inputs'>
            <label htmlFor='password'>Senha</label>
            <input type='password' name='password' />
          </div>
          <div className='container-inputs'>
            <label htmlFor='confir-password'>Confirmação de Senha</label>
            <input type='password' name='confir-password' />
          </div>
          <button className='btn-big btn-blue'>
            Cadastrar
          </button>
          <Link to="/sign-in">Já tem cadastro? Clique aqui!</Link>
        </form>
      </div>
    </div>
  );
}

export default SignUp;