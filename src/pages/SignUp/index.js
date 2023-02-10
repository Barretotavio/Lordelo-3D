import './styles.css';
import Logo from '../../assets/logo.svg';

function SignUp() {
  return (
    <div className='container-sign-in'>
      <img src={Logo} alt='logo' className='logo' />
      <div className='content-sign-in'>
        <div className='left-side'>

        </div>
        <div className='rigth-side'>
          <h2>Login</h2>
          <form>
            <div className='container-inputs'>
              <label htmlFor='email'>E-mail</label>
              <input type='text' name='email' />
            </div>
            <div className='container-inputs'>
              <label htmlFor='password'>Password</label>
              <input type='password' name='password' />
            </div>
            <button className='btn-big btn-blue'>
              Entrar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;