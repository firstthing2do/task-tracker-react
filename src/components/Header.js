import PropTypes from 'prop-types'
import Button from './Button'
const Header = ({title, onAdd,showAdd}) => {
    // const onClick = () => {
    //     console.log('clicked')
    // }

  return (
    <header className='header'>
        <h1>{title}</h1>
        <Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'Close' : 'Add'} onClick={onAdd}/>
    </header>
  )
}

Header.defaultProps = {
    title: 'Task manager',
}

Header.propTypes = {
    title: PropTypes.string.isRequired, 
}

// const headerStyle = {
//     color : 'red',
//     textAlign : 'center',
//     backgroundColor : 'black'
// }

export default Header
