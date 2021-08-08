
import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title, titleName}) => {

    const onClick = ()=>{
        console.log("Clicked!");
    }
    return (
        <header className="header">

            <div>
                <h2>{titleName}</h2>
            </div>
            <div>
                <Button color="green" text="Add" onClick={onClick} />
            </div>
        </header>
    )
}

Header.defaultProps ={
    titleName: "Tast Tracker",
}

Header.propTypes = {
    titleName: PropTypes.string.isRequired,
}

//Css in js

const headerCss = {
    color: 'white',
    backgroundColor: 'rgba(0,0,0,0.3)'
}
export default Header
