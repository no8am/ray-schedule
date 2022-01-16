import { Typography } from '@mui/material';
import { Button } from '@mui/material';
import { useSelector } from "react-redux";
import Link from 'next/link';

import Login from './login';
import NightModeSwitch from './NightModeSwitch';

const Header = () => {

    const darkThemeEnabled = useSelector((state) => state.darkMode.value);
    
    return (
        <div className="flex p-4 justify-center flex-col sm:gap-4 sm:flex-row">
            <Link href="/">
                <img src={darkThemeEnabled ? 'ray schedule branding-10.svg' : 'ray schedule branding-09.svg'} className={"max-h-20 cursor-pointer"} />
            </Link>
            <div className="flex justify-center items-center gap-4">
                <Link href="/wiki">
                    <Button className="" variant="text"> Wiki </Button>
                </Link>
                <Link href="/about">
                    <Button className="" variant="text"> About </Button>
                </Link>
                <NightModeSwitch />
                <Login />
            </div>
        </div>
    )
}

export default Header;