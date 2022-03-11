import { database } from '../auth/thisFirebase';
import { setId, selectAll } from '../src/features/userCourses/userCoursesSlice';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ref, set, push } from "firebase/database";
import { Button } from '@mui/material';
import { useRouter } from 'next/router';

const SaveButton = () => {

  const [saving, setSaving] = useState(false);
  const all = useSelector(selectAll);
  const dispatch = useDispatch();
  const router = useRouter();
  const id = all.id;

  const writeSession = () => {
    setSaving(true);
    const toWrite = {
      data: all,
      timestamp: Date.now(),
    };
    if (id) {
      set(ref(database, `id/${id}`), toWrite);
      console.log("updated existing id " + id);
    } else {
      const newId = push(ref(database), toWrite);
      router.replace(`/app/${newId?._path?.pieces_[0]}`, undefined, { shallow: true });
      console.log("created new id " + newId?._path?.pieces_[0]);
    }
    setSaving(false);
  }

  return (<>
    <Button variant="outlined" onClick={writeSession} disabled={saving}> Save </Button>
  </>);
}

export default SaveButton;