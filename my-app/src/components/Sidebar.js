import css from './css/Sidebar.module.css';



function Sidebar(){
    return <div className = {css.sidebar}> 
        <a href>My photos</a>
        <a href>My illustrations</a>
        <a href>My Paintings</a>
    </div>
}

export default Sidebar;