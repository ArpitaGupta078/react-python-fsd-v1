import Footer from '../footer';
import { Outlet } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from '../nav';



const First = () => {
    return(
 <><Nav />
 <Outlet/>
 <Footer /></>)
}
export default First;