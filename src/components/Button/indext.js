import Icon from "../Icons";

const Button = ({label, icon, onClick, btnType, btnSize}) => {
    return ( 
        <button className={`btn btn--${btnSize ? btnSize : ''} btn--${btnType ? btnType : 'primary'}`}>
            {icon && <Icon className="icon-12 icon-12-xlg" id={icon} />}
            {label}
        </button>
     );
}
 
export default Button;