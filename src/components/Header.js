import PropTypes from 'prop-types';
import Button from './Button'

const Header = (props) => {
    const tableau = [1,2,3,4,5,4];
    const arr = tableau.map((num, index) => <h1 key={index}>{num}</h1>)
    return (
        <header className='header'>
            <div>{arr}</div>
            <h1>{props.title}</h1>
            <Button color='green' text='Hello 3 '></Button>
            <Button color='green' text='Hello 2'></Button>
            <Button color='green' text='Hello 1'></Button>
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

const headingStyle = {color: 'red', backgroundColor: 'black'}

export default Header
