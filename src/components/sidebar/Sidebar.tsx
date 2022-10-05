import './sidebar.css';
import Logo from '../../assets/images/logo.jpg';
function Sidebar() {
    return (
        <div className='sidebar'>
            <div className='sidebar-wrapper'> 
                <div className='logo-container'>
                    <img src={Logo} alt='EverSport' className='logo' />
                </div>
                <div className='filter-info-container'>
                    <span className='filter-counter'>1 Filter</span>
                    <span className='price-range-filter'>from 10 euros • 2 & up</span>
                    <span className='clear-all'>Clear all</span>
                </div>

            </div>
        </div>
    )
}

export default Sidebar
