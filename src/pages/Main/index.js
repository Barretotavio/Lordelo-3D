import './styles.css';
import { Route, Routes } from 'react-router-dom';
import SignIn from '../SignIn';
import SignUp from '../SignUp';

function Main() {

    return (
        <div className='container-main'>
            <Routes>
                <Route path='/sign-in' element={<SignIn />} />
                <Route path='/sign-up' element={<SignUp />} />
            </Routes>
        </div>
    )
}
export default Main;