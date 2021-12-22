import { Typography } from '@mui/material';
import { Link, Button } from '@mui/material';

const Header = () => {
    return (
        <div className="flex p-4 justify-center flex-col sm:gap-4 sm:flex-row">
            <img src={'ray schedule branding-09.svg'} className={"max-h-20"} />
            <div className="flex justify-center items-center gap-4">
                <Button className="" variant="text" href="/wiki"> Wiki </Button>
                <Button className="" variant="text" href="/about"> About </Button>
                <Button className="" variant="outlined" href="/login"> Login </Button>
            </div>
        </div>
    )
}

export default Header;