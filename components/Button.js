import PropTypes from 'prop-types'

const Button = ({ color, text, onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{ color: color }}
      className='lbtn'
    >
      {text }
    </button>
  )
}

Button.defaultProps = {
  color: 'red',
}

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
}

export default Button
