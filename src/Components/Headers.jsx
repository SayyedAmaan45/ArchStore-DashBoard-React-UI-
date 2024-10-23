import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faSearch } from '@fortawesome/free-solid-svg-icons';



function Headers() {
    return (
        <>
            <div className="header">
                <h1>   DashBoard    </h1>
                <div className="header-icon">
                   <FontAwesomeIcon icon={faSearch} />
                <button className='header-button'>Customize</button>
                <button className='header-button'>Export</button>
                </div> 
            </div>
            <div className='header-link'>
                <ul>
                    <li>Market Analysis</li>
                    <li>Performance</li>
                </ul>
            </div>
        </>
    )
}

export default Headers;