import {auth} from '../../grant_flow.js';
import './login.css';

function Login() {
    return(
        <div className='container-login'>
            <div className='header-login'>
                <h1>Login untuk melanjutkan</h1>
            </div>
            <div className='link'>
              <a href={auth}>Login</a>
            </div>
      
        </div> 
    )
} export default Login;