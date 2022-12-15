import { useState, useImperativeHandle, forwardRef } from 'react'
import { Button, ButtonDelete } from '../styledComponents/Button'
import { Margins } from '../styledComponents/StylingDivNav'

const Togglable = forwardRef((props, ref) => {
  const [visible, setVisible] = useState(false)

  const hideWhenVisible = { display: visible ? 'none' : '' }
  const showWhenVisible = { display: visible ? '' : 'none' }

  const toggleVisibility = () => {
    setVisible(!visible)
  }

  useImperativeHandle(ref, () => {
    return {
      toggleVisibility,
    }
  })

  return (
    <Margins>
      <div style={hideWhenVisible}>
        <Button onClick={toggleVisibility}>{props.buttonLabel}</Button>
      </div>
      <div style={showWhenVisible}>
        {props.children}
        <ButtonDelete onClick={toggleVisibility}>cancel</ButtonDelete>
      </div>
    </Margins>
  )
})

Togglable.displayName = 'Togglable'

export default Togglable
