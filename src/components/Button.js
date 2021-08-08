import PropsTypes from 'prop-types'
const Button = (props) => {
    // const onClick = ()=>{
    //     console.log("You clicked me!");
    // }

    return (
        <button onClick={props.onClick} style={{ backgroundColor: props.color }} className="btn">    
            {props.text}
        </button>
    )       
}


Button.defaultProps={
    color: 'steelblue', 
}

Button.propsType = {
    text: PropsTypes.string,
    color: PropsTypes.string,
    onClick: PropsTypes.func

}

export default Button
