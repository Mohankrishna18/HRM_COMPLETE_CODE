import React from 'react'

const CheckBox = (props) => {
  return (
    <div>
      <div className="custom-control custom-checkbox">
                  <input type="checkbox" className="custom-control-input" id="customCheck1" checked/>
                  <label className="custom-control-label" for="customCheck1"></label>
              </div>
    </div>
  )
}

export default CheckBox
