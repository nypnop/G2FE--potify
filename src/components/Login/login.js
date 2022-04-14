import {auth} from '../../grant_flow.js';
import './login.css';
import Button from '@material-ui/core/Button';

function Login() {
    return(
        <div className='container-login'>
            <div className='header-login'>
                <h1>Login untuk melanjutkan</h1>
            </div>
            <div className='link'>
              <Button variant="contained" href={auth}>Login</Button>
            </div>
      
        </div> 
    )
} export default Login;