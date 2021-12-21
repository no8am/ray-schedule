import { Typography } from '@mui/material';
import Image from 'next/image'
import transparentLogo from '../public/ray schedule branding-09.svg'

const Header = () => {
    return (
        <div className="container">
            <header>
                <Image src={transparentLogo} height={200}/>
            </header>
        </div>
    )
}

export default Header;