import { Link } from "react-router-dom";
import './Header.css';

interface HeaderProps {
    title: string;
}

export default function Header({title}: HeaderProps){
return (
    <header>
        <div>
            <Link to='/'>{title}</Link> 
        </div>
        <nav>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/shows'>Shows</Link></li>
                <li><Link to='/genres'>Genres</Link></li>
            </ul>
        </nav>
    </header>
)
}