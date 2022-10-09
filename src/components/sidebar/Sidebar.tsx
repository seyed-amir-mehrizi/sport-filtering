import './sidebar.css';
import Logo from '../../assets/images/logo.jpg';
import RangeSlider from '../../shared/components/RangeSlider';
import RadioButton from '../../shared/components/RadioButton';
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
                <div className='price-range-slider-wrapper'>
                    <div className='price-range-title'>
                        Price range
                    </div>
                    <RangeSlider />
                    <div className='from-to-container'>
                        <div className='form-price-container'>
                            <div className='from-to-label'>
                                From
                            </div>
                            <div className='price-holder'>
                                10
                            </div>
                        </div>
                        <div className='to-price-container'>
                            <div className='from-to-label'>
                                To
                            </div>
                            <div className='price-holder'>
                                25
                            </div>
                        </div>
                    </div>
                </div>
                <div className='review-container'>
                    <div className='review-title'>
                        reviews
                    </div>
                    <div className='rating-container'>
                        <RadioButton label='amir'/>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Sidebar
