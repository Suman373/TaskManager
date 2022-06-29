import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import Buttons from './Buttons';

const Header =({title,onAdd,showAddBtn})=>{
    const location = useLocation();
    return(
       <div>
          <div  style={headerStyle}className='header-container'>
            <h1 style={titleStyle}>{title}</h1>
        </div>
        {/* if the location is home we show the button else we don't */}
        {location.pathname === "/" &&
        <Buttons onClick={onAdd} 
        color={showAddBtn ? "#de3c1f" : "#309c1e"}
         text={showAddBtn ? "Close" : "Add"}/>}
       </div>
    )
}
  
const headerStyle={
    background: 'radial-gradient(white, rgba(253,187,45,1) 100%)',
    color:'white',
    height:'4rem',
    textShadow:'0 0 2px blue',
    width:'100%',
    textAlign:'center',
}

const titleStyle={
    fontSize:'2.6rem',
    color:'blue',
    paddingTop:'2px',
    fontStyle:'italic'
}

// props
Header.defaultProps={
    title: "Task Manager"
}

Header.propTypes={
    title: PropTypes.string.isRequired // requires string for the title from the main component
}


export default Header;