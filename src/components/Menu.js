import './Menu.css'
import { NavLink } from "react-router-dom";

const Menu = (props) => {
    return (
        <div className='Menu'>
            <nav>
                <ul>
                    <li><NavLink exact to='/' 
                        className='menuItem' 
                        onClick={props.onClose} 
                        activeClassName='active'>Список квизов</NavLink></li>
                    <li><NavLink to='/quiz-creator' 
                        className='menuItem'
                        onClick={props.onClose} 
                        activeClassName='active'>Создать квиз</NavLink></li>
                </ul>
            </nav>
        </div>
    )
}

export default Menu