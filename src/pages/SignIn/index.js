import './styles.css';
import Logo from '../../assets/logo.svg';
import { Link, useNavigate } from 'react-router-dom';

function SignIn() {
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    navigate('/dashbord');
  }

  return (
    <div className='container-sign-in'>
      <img src={Logo} alt='logo' className='logo' />
      <div className='content-sign-in'>
        <div className='left-side'>

        </div>
        <div className='rigth-side'>
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <div className='container-inputs'>
              <label htmlFor='email'>E-mail</label>
              <input type='text' name='email' />
            </div>
            <div className='container-inputs'>
              <label htmlFor='password'>Senha</label>
              <input type='password' name='password' />
            </div>
            <button className='btn-big btn-blue'>
              Entrar
            </button>
            <Link to="/sign-up">Ainda não tem conta? Crie agora!</Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignIn;