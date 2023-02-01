import './styles.css';
import { Route, Routes } from 'react-router-dom';
import SignIn from '../SignIn';

function Main() {

    return (
        <div className='conteiner-main'>
            <Routes>
                <Route path='/sign-in' element={<SignIn />} />
            </Routes>
        </div>
    )
}
export default Main;