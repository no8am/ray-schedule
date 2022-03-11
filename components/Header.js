/* eslint-disable @next/next/no-img-element */
import { Typography } from '@mui/material';
import { Button } from '@mui/material';
import { useSelector } from "react-redux";
import Link from 'next/link';

import Login from './login';
import NightModeSwitch from './NightModeSwitch';
import SaveButton from './SaveButton';

const Header = () => {

    const darkThemeEnabled = useSelector((state) => state.darkMode.value);
    
    return (
        <div className="flex p-4 justify-center flex-col sm:gap-4 sm:flex-row">
            <Link href="/">
                <img alt="ray schedule logo" src={darkThemeEnabled ? '/ray schedule branding-10.svg' : '/ray schedule branding-09.svg'} className={"max-h-20 cursor-pointer"} />
            </Link>
            <div className="flex justify-center items-center gap-4">
                <Link href="/help">
                    <Button className="" variant="text"> Help </Button>
                </Link>
                <Link href="/about">
                    <Button className="" variant="text"> About </Button>
                </Link>
                <NightModeSwitch />
                {/* <Login /> */}
                {/* <SaveButton /> */}
            </div>
        </div>
    )
}

export default Header;