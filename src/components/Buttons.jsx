import PropTypes from 'prop-types';

const Buttons = ({ text,onClick,color}) => {
    return (
        <div className='btn-container'>
            <button 
            onClick={onClick}
            // to add multiple inline styles
            style={{...btnStyle,background:color}}
            >{text}</button>
        </div>
    )
}
const btnStyle = {
    height: '2rem',  
    width: '4rem',
    fontSize: '1.2rem',
    color:'white',
    marginRight:'1rem',
    outline: 'none',
    border: '1px solid black',
    borderRadius:'5px',
    cursor:'pointer'
}

Buttons.defaultProps = {
    color: 'white'
}
Buttons.propTypes ={
    text:PropTypes.string,
    color:PropTypes.string,
    onClick:PropTypes.func
}
export default Buttons;