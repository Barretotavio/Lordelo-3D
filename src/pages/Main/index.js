import './styles.css';
import { Route, Routes } from 'react-router-dom';
import SignIn from '../SignIn';
import SignUp from '../SignUp';
import DashBord from '../Dashbord';

function Main() {

    return (
        <Routes>
            <Route path='/sign-in' element={<SignIn />} />
            <Route path='/sign-up' element={<SignUp />} />
            <Route path='/dashbord' element={<DashBord />} />
        </Routes>
    )
}
export default Main;