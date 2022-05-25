import { auth, provider } from '../auth/thisFirebase';
import { setActiveUser, unsetActiveUser, selectUserName, selectUserEmail, selectUid } from '../src/features/user/userSlice';
import { setCourses, unsetAll, setSchedules } from '../src/features/userCourses/userCoursesSlice';

import { useDispatch, useSelector } from 'react-redux';
import { getDatabase, ref, onValue, get, update} from "firebase/database";
import { Button } from '@mui/material';

const Login = () => {

    const dispatch = useDispatch();

    const userName = useSelector(selectUserName);
    const userEmail = useSelector(selectUserEmail);
    const uid = useSelector(selectUid);

    const handleLogin = () => {
        auth.signInWithPopup(provider).then(result => {
            dispatch(setActiveUser({ 
                userName: result.user.displayName, 
                userEmail: result.user.email,
                uid: result.user.uid,
            }));
            const db = getDatabase();
            const userDataRef = ref(db, result.user.uid);
            const updates = {};
            updates[uid] = {courses: [], schedules: []};

            update(db, updates);
            // get(userDataRef, (snapshot) => {
            //     const data = snapshot.val();
            //     if (snapshot.exists()) {
            //         dispatch(setUserCourses(data.courses));
            //         dispatch(setUserSchedules(data.schedules));
            //     } else {
            //         newUser(result.user.uid);
            //     }
            // })
        })
        .catch(error => {
            console.log(error);
        });
    }

    const handleLogout = () => {
        auth.signOut().then(() => {
            dispatch(unsetActiveUser());
            dispatch(unsetAll());
        }).catch(error => {
            window.alert(error); // fix!
        });
    }

    const newUser = (uid) => {
        const courses = []
        const schedules = []
        const db = getDatabase();

        const updates = {};
        updates[uid] = {courses, schedules};

        return update(ref(db), updates);
    }

    return (
        <div>
            {
                userName ? (
                    <div>
                        <p>Hello, {userName}!</p>
                        <p>{userEmail}</p>
                        <p>{uid}</p>
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