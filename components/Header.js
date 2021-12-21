import { Typography } from '@mui/material';
import Image from 'next/image'
import { Link, Button } from '@mui/material';
import transparentLogo from '../public/ray schedule branding-09.svg'

const Header = () => {
    return (
        <div className="container" style={{padding: "1rem", display: "flex"}}>
            <Image src={transparentLogo} height={200} className={"self-start"} />
            <Button variant="text" href="/"> Home </Button>
            <Button variant="text" href="/wiki"> Wiki </Button>
            <Button variant="text" href="/about"> About </Button>
        </div>
    )
}

export default Header;