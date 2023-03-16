import React from 'react';
import './Popup.css';

function Popup(registered) {
  return (registered.trigger)? (
    <div className='popup'>
        <div className='popup-inner'>
            
            <button className='close-btn' onClick={() =>registered.setTrigger(false) } >Close</button>
            {registered.children}
            </div>    
    </div>
  ) : "";
};

export default Popup
