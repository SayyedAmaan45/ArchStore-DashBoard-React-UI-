import './App.css';
import Headers from './Components/Headers';
import Navbar from './Components/NavBar';
import Visibility from "./img/Visibility.png"
import IndustryOpportunites from "./img/Industry Opportunities.png"
import MarketTrend from "./img/Market Trend.png"
import TrendingInIndustry from "./img/Trending in Industry.png"
import Revenue from "./img/Revenue.png"

function App() {
  return (
    <>
      <div className='DashBoard'>
        <div className='left-side'>
          <Navbar />
        </div>
        <div className='righ-side'>
          <Headers />
          <div className="dashboard-content">
            <div className="dashboard-section-revenue">
              <img className="img-revenue" src={Revenue} alt="Revenue" />
            </div>
            <div className="dashboard-section-opportunities-market-trend">
              <div className="dashboard-section-opportunities">
                <img className="img-opportunities" src={IndustryOpportunites} alt="Industry Opportunities" />
              </div>
              <div className="dashboard-section-market-trend">
                <img className="img-market-trend" src={MarketTrend} alt="Market Trend" />
              </div>
            </div>
            <div className="dashboard-section-trending-visibility">
              <div className="dashboard-section-trending">
                <img className="img-trending" src={TrendingInIndustry} alt="Trending in Industry" />
              </div>
              <div className="dashboard-section-visibility">
                <img className="img-visibility" src={Visibility} alt="Visibility" />
              </div>
            </div>
          </div>

        </div>
      </div>

    </>
  );
}

export default App;
