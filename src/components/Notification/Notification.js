import React from 'react'
import { Toast, ToastHeader, ToastBody, Button } from 'reactstrap'
import Icon from '../Icon/Icon'
import classNames from 'classnames'
import PropTypes from 'prop-types'

const propTypes = {
  header: PropTypes.string,
  content: PropTypes.string,
  state: PropTypes.string,
  dismissable: PropTypes.bool,
  fix: PropTypes.string,
  withIcon: PropTypes.bool,
}

const defaultProps = {}

function pickIcon(state){
  var iconClass = 'it-check-circle'
  switch (state) {
    case 'success':
      iconClass = 'it-check-circle'
      break
    case 'error':
      iconClass = 'it-close-circle'
      break
    case 'info':
      iconClass = 'it-info-circle'
      break
    case 'warning':
      iconClass = 'it-error'
  }
  return iconClass;
}
const Notification = props => {
  const { header, content, state, dismissable, fix, withIcon, style } = props
  const wrapperClass = classNames(
    'notification',
    fix,
    withIcon ? 'with-icon' : null,
    state,
    dismissable ? 'dismissable' : null
  )
  const icon = pickIcon(state)
  const btnClass = classNames('btn', 'notification-close')
  return (
    <Toast className={wrapperClass} style={style}>
      <ToastHeader>
        <h5>
          {header}
          <Icon icon={icon} />
        </h5>
      </ToastHeader>
      {content && (
        <ToastBody>
          <p>{content}</p>
        </ToastBody>
      )}
      {dismissable && (
        <Button className={btnClass}>
          <Icon icon="it-close" />
          <span className="sr-only">Chiudi notifica: Titolo notifica</span>
        </Button>
      )}
    </Toast>
  )
}

Notification.defaultProps = defaultProps
Notification.propTypes = propTypes
export default Notification
