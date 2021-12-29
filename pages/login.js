import { auth, provider } from '../auth/thisFirebase';
import { setActiveUser, unsetActiveUser, selectUserName, selectUserEmail } from '../src/features/user/userSlice';

import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@mui/material';

const Login = () => {

    const dispatch = useDispatch();

    const userName = useSelector(selectUserName);
    const userEmail = useSelector(selectUserEmail);

    const handleLogin = () => {
        auth.signInWithPopup(provider).then(result => {
            dispatch(setActiveUser({ 
                userName: result.user.displayName, 
                userEmail: result.user.email 
            }));
        })
        .catch(error => {
            console.log(error);
        });
    }

    const handleLogout = () => {
        auth.signOut().then(() => {
            dispatch(unsetActiveUser());
        }).catch(error => {
            window.alert(error); // fix!
        });
    }

    return (
        <div>
            {
                userName ? (
                    <div>
                        <p>Hello, {userName}!</p>
                        <Button className="" variant="outlined" onClick = {handleLogout}> Log Out </Button>
                    </div>
                ) : (
                    <Button className="" variant="outlined" onClick = {handleLogin}> Log In </Button>
                )
            }
        </div>
    )
}

export default Login