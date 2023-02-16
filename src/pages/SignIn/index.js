import './styles.css';
import loguinho2 from '../../assets/loguinho2.jpeg';
import { Link, useNavigate } from 'react-router-dom';

function SignIn() {
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    navigate('/dashbord');
  }

  return (
    <div className='container-sign-in'>
      <img src={loguinho2} alt='logo' className='loguinho2' />
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
            <div className='forgot-passsword'>
              <Link to="/forgot-password">Esqueci minha senha</Link>
            </div>
            <button className='btn-big btn-blue'>
              Entrar
            </button>
            <div className='link-sign-up'>
              <span>Ainda não tem conta?</span>
              <Link to="/sign-up">Crie agora!</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignIn;