import React, { useState } from 'react';
import './menubar.css';
import FlareIcon from '@mui/icons-material/Flare';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import WeekendIcon from '@mui/icons-material/Weekend';
import WaterIcon from '@mui/icons-material/Water';
import KitchenIcon from '@mui/icons-material/Kitchen';
import PowerIcon from '@mui/icons-material/Power';
import SettingsIcon from '@mui/icons-material/Settings';
import AirIcon from '@mui/icons-material/Air';
import EmojiFoodBeverageIcon from '@mui/icons-material/EmojiFoodBeverage';
import SmokeFreeIcon from '@mui/icons-material/SmokeFree';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ElectricalServicesIcon from '@mui/icons-material/ElectricalServices';
import BatteryFullIcon from '@mui/icons-material/BatteryFull';
import ToggleOnIcon from '@mui/icons-material/ToggleOn';

const Menubar = () => {
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const [clickedCategory, setClickedCategory] = useState(null);
  const [expandedSubcategories, setExpandedSubcategories] = useState([]);

  const categories = [
    { name: 'Lightings', icon: <TipsAndUpdatesIcon />, subcategories: [] },
    { name: 'Fans', icon: <AcUnitIcon />, 
      subcategories: [
        'Ceiling Fan', 'Wall Fan', 'Pedestral Fan', 'Table Fan', 
        'Cabin Fan', 'Exhaust Fan', 'Fresh Air Fan', 
        'BLDC Ceiling Fan', 'Premium Fans', 
        'Decorative Fans', '12 V DC Fans', '12 V AC/DC Fan'
      ]
    },
    { name: 'Torch and Lamps', icon: <FlareIcon />, subcategories: [] },
    { name: 'Home Decor', icon: <WeekendIcon />, subcategories: [] },
    { name: 'Geyser', icon: <WaterIcon />, subcategories: [] },
    { name: 'Home Appliances', icon: <KitchenIcon />, subcategories: [] },
    { name: 'Stablizers', icon: <PowerIcon />, subcategories: [] },
    { name: 'Industrial Fittings', icon: <SettingsIcon />, subcategories: [] },
    { name: 'Vaccum Cleaners', icon: <AirIcon />, subcategories: [] },
    { name: 'Atta Chakki', icon: <EmojiFoodBeverageIcon />, subcategories: [] },
    { name: 'Chimney', icon: <SmokeFreeIcon />, subcategories: [] },
    { name: 'Personal Care', icon: <FavoriteIcon />, subcategories: [] },
    { name: 'Wire and Cables', icon: <ElectricalServicesIcon />, subcategories: [] },
    { name: 'Inverter and Battery', icon: <BatteryFullIcon />, subcategories: [] },
    { name: 'Switches and Accessories', icon: <ToggleOnIcon />, subcategories: [] },
  ];

  const handleMouseEnter = (category) => {
    if (!clickedCategory) {
      setHoveredCategory(category);
    }
  };

  const handleClick = (category) => {
    if (clickedCategory === category) {
      setClickedCategory(null);
      setExpandedSubcategories([]);
    } else {
      setClickedCategory(category);
      if (category.subcategories && category.subcategories.length > 0) {
        setExpandedSubcategories(category.subcategories);
      } else {
        setExpandedSubcategories([]);
      }
    }
  };

  return (
    <div className="menubar-container">
      <div className="menubar">
        {categories.map((category, index) => (
          <div
            key={index}
            className={`menu-item ${hoveredCategory === category || clickedCategory === category ? 'active' : ''}`}
            onMouseEnter={() => handleMouseEnter(category)}
            onClick={() => handleClick(category)}
          >
            {category.icon}
            <p>{category.name}</p>
          </div>
        ))}
      </div>
      {clickedCategory && (
        <div className="mega-menu">
          <h2>{clickedCategory.name}</h2>
          <div className="subcategory-columns">
            {expandedSubcategories.map((subcategory, index) => (
              <div key={index} className="subcategory-item">
                {subcategory}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Menubar;
