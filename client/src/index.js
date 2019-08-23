import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import MapComponent from './map_component'
import SliderComponet from './slider_component'
import './styles.css'

const Index = () => {
  const [timeValue, setTimeValue] = useState(0)
  const [locationsCount, setLocationsCount] = useState(0)

  const handleTimeChange = val => {
    setTimeValue(val)
  }

  const handleLocationsFetched = val => {
    setLocationsCount(val.flat().length)
  }

  return (
    <div className='flex-grid'>
      <div className='col-1'>
        <div className='header'>
          <h1>Welcome to the example task!</h1>
        </div>
        <div className='slider'>
          <SliderComponet onValueChange={handleTimeChange} />

        </div>
        <h4>{locationsCount} locations loaded</h4>
        {/* TODO(Task 2): Add a slider to select datetime in the past.
        Pass the selected value as prop to the MapContainer */ }
      </div>
      <div className='col-2'>
        <MapComponent selectedTimeValue={timeValue} onLocationsFetched={handleLocationsFetched} />
      </div>
    </div>)
}

ReactDOM.render(<Index />, document.getElementById('main-container'))
