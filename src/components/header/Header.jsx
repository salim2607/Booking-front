import {useState} from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBed, faCalendarDays, faPlane, faCar, faTaxi, faPerson } from "@fortawesome/free-solid-svg-icons"
import "./header.css"
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; 
import 'react-date-range/dist/theme/default.css'; 

const Header = () => {
   
    const [date, setDate] = useState([
        {
          startDate: new Date(),
          endDate: null,
          key: 'selection'
        }
      ]);
      

    return (
        
        <div className="header">
            <div className="headerContainer">
            <div className="haderList">
                <div className="headerLIstItem active">
                <FontAwesomeIcon icon={faBed} />
                <span>Hébergement</span>
                </div>

                <div className="headerLIstItem">
                <FontAwesomeIcon icon={faPlane} /> 
                <span>Vols</span>
                </div>

                <div className="headerLIstItem">
                <FontAwesomeIcon icon={faCar} />
                <span>voiture de location</span>
                </div>

                <div className="headerLIstItem">
                <FontAwesomeIcon icon={faBed} /> 
                   <span>attraction</span>
                </div>

                <div className="headerLIstItem">
                <FontAwesomeIcon icon={faTaxi} />
                <span>Taxi aéroport </span>
                </div>

                </div>
                
                <h1 className="headerTitle">Trouvez votre prochain séjour</h1>
                <p className="headerDescription">Recherchez des offres sur des hôtels, des hébergements indépendants et plus encore</p>
                 <button className="headerBtn">Sign in / Regester</button>

                 
                <div className="headerSearch">
                    <div className="headerSearchItem">
                    <FontAwesomeIcon icon={faBed} className="headerIcon" /> 
                    <input type="text" placeholder="where are you going ?"
                    className="headerSearchItem"/>
                    </div>
                 

                    <div className="headerSearchItem">
                    <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" /> 
                   <span className="headersearchText">date to date</span>
                   <DateRange
                       editableDateInputs={true}
                       onChange={item => setDate([item.selection])}
                       moveRangeOnFirstSelection={false}
                      ranges={date}
                      className='date'
                    />
                   
                   </div>

                    <div className="headerSearchItem">
                    <FontAwesomeIcon icon={faPerson} className="headerIcon"/> 
                    <span className="headersearchText">2 adults 2 children 1 room</span>
                    </div>
                    <div className="headerSearchItem">
                    <button className="headerBtn">Search</button>
                    </div>
        
                 </div>
            
            </div>
        </div>
    )
}
export default Header