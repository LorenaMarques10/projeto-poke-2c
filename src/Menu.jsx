import './Menu.css'

const Menu = () =>{
    return(

        <div classNmane="Menu">
            <ul className="nav">
                <li className="nav-item">
                    <a className="nav-link active" href="/home"> 
                    Home
                    </a>
                </li>
                 <li className="nav-item">
                    <a className="nav-link active" href="/pokeflex"> 
                    PokeFlex
                    </a>
                </li>
                 <li className="nav-item">
                    <a className="nav-link active" href="/pokegrid"> 
                    PokeGrid
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Menu 