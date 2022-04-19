import './Navbar.css';
import { Link,useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify';
const Navbar = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const logout =()=>{
        dispatch({
            type:'LOGOUT',
            payload:null
        });
        toast.dark('ออกจากระบบแล้ว')
        navigate('/')
    }
    return (
    <header>
        <nav className='navbar'>
            
            <div className="logo" >
                <h1>SANTA</h1>
            </div>
            <ul className="navbar2">
                <li className="navbar3"><Link className="navbar4" to={"/"}>Login</Link></li>
                <li className="navbar3"><Link className="navbar4" to={"Register"}>Register</Link></li>
                <li className="navbar3"><Link className="navbar4" to={"Bmi"}>BMI</Link></li>
                <li className="navbar3"><Link className="navbar4" to={"Activity"}>Activity</Link></li>
                <li className="navbar3"><Link className="navbar4" to={"Data"}>Data</Link></li>
                <li className="navbar3"><Link className="navbar4" to={"EditActivity/:activityDataId"}>EditActivity</Link></li>
                <li className="navbar3" onClick ={logout}>Logout</li>
                
            </ul>
           
        </nav>

    </header>)

    }

    export default Navbar;
