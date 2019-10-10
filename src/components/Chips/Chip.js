import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const propTypes = {
  /** Utilizzarlo in caso di utilizzo di componenti personalizzati */
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  /** Classi aggiuntive da usare per il componente Chip */
  className: PropTypes.string,
  /** Impostarlo su `true` per centrare la label all'interno */
  simple: PropTypes.bool,
  /** Impostarlo su `true` per una versione più grande del componente Chip. */
  large: PropTypes.bool,
  /** Impostarlo su `true` per renderizzare il componente Chip come disabilitato */
  disabled: PropTypes.bool,
  color: PropTypes.string
}

const defaultProps = {
  tag: 'div',
  simple: false,
  large: false,
  disabled: false,
  color: 'chip-primary'
}

const Chip = props => {
  const { className, color, tag: Tag, simple, large, disabled, ...attributes } = props
  var classes = classNames('chip', className, 
  simple ? 'chip-simple' : false,
  large ? 'chip-lg' : false,
  disabled ? 'chip-disabled' : false,
  'chip-' + color 

);

  return <Tag className={classes} {...attributes} />
}

Chip.propTypes = propTypes
Chip.defaultProps = defaultProps

export default Chip
