import React from 'react'

const CheckBox = (props) => {
  return (
    <div>
      <div class="custom-control custom-checkbox">
                  <input type="checkbox" class="custom-control-input" id="customCheck1" checked/>
                  <label class="custom-control-label" for="customCheck1"></label>
              </div>
    </div>
  )
}

export default CheckBox
