import './styles.css';
import { Route, Routes } from 'react-router-dom';
import SignIn from '../SignIn';
import SignUp from '../SignUp';
import DashBord from '../Dashbord';
import ForgotPassword from '../ForgotPassword';

function Main() {

    return (
        <Routes>
            <Route path='/sign-in' element={<SignIn />} />
            <Route path='/sign-up' element={<SignUp />} />
            <Route path='/dashbord' element={<DashBord />} />
            <Route path='/forgot-password' element={<ForgotPassword />} />
        </Routes>
    )
}
export default Main;