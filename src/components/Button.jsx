import "../styles/button.css";

const Button = ({ variant, hover, disableShadow, disabled }) => {
    return(
        <div>
            <p className={hover == 1 ? 'p-active': 'none'}>{hover == 1 ? '&:hover, &:focus' : `<Button variant=${variant} />`}</p>
            <button className={`${ hover == 1 ? `${variant}-active` : variant} ${disableShadow == true ? 'disableShadow': 'none'} ${disabled == true ? 'disabled' : 'none'}`}>Default</button>
        </div>
    )
}

export default Button; 