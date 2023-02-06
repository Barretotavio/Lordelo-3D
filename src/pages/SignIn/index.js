import './styles.css';
import Logo from '../../assets/logo.svg';

function SignIn() {
  return (
    <div className='container-sign-in'>
      <img src={Logo} alt='logo' className='logo' />
      <div className='content-sign-in'>
        <div className='left-side'>

        </div>
        <div className='rigth-side'>
          <h2>Login</h2>
          <form>
            <div>
              <label htmlFor='email'>E-mail</label>
              <input type='text' name='email' />
            </div>
            <div>
              <label htmlFor='password'>Password</label>
              <input type='password' name='password' />
            </div>
            <button>
              Entrar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignIn;