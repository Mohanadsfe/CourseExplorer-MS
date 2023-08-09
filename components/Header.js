import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title,onClick }) => {
  return (
    <header className='header'>
      <h1>{title}</h1>
        <Button
          color={'red'}
          text={'Click'}
          onClick={(onClick)}
          className="btn"
        />
    </header>
  )
}

Header.defaultProps = {
  title: '',
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}


export default Header

