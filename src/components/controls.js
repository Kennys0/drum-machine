import React from "react";
import '../styles-components/controls.css'

function Controls(){
    return (
        <>
            <div className="controls-display">
                <span>Power</span>
                <div className="control">
                    <div className="cube"></div>
                </div>
            </div>
            <div className="name-button">
                {/* nombre de cuando presionan el boton */}
            </div>
            <div className='volume-slider'>
            <input
              max='1'
              min='0'
              /*onChange={this.adjustVolume}*/
              step='0.01'
              type='range'
              /*value={this.state.sliderVal}*/
            />
            </div>
            <div className="controls-display">
                <span>Bank</span>
                <div className="control">
                    <div className="cube"></div>
                </div>
            </div>
        </>
    )
}

export default Controls;