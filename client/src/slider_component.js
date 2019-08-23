import React, { useState, useEffect } from 'react'
import Slider from 'react-rangeslider'
import 'react-rangeslider/lib/index.css'

const SliderComponent = ({ onValueChange }) => {
  const [value, setValue] = useState()

  useEffect(() => {
    setValue(1559174400000) // set initail as the mmin
  }, [])

  const handleChange = val => {
    setValue(val)
  }

  const handleChangeComplete = () => {
    onValueChange(value) // only send the changed value once it is selected
  }

  return (
    <div>
      <h2>Select Time:</h2>
      <h5>{new Date(value).toString()}</h5>
      <Slider
        min={1559174400000} // 2019-05-30
        max={1564617600000} // 2019-08-01
        step={10000} // step by ten seconds
        value={value}
        tooltip={false}
        onChange={handleChange}
        onChangeComplete={handleChangeComplete}
      />

    </div>)
}

export default SliderComponent
