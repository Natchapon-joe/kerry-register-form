import { useState } from "react";
import "./FormInput.css";
import { useForm } from "react-hook-form";
import {ReactComponent as CheckIcon} from '../assets/icons/check.svg';

const FormInput = (props) => {
  const [focused, setFocused] = useState(false);
  const { label, errorMessage, onChange, id, preIcon: PreIcon, ...inputProps } = props;
  const {formState:{ error }} = useForm();
  const handleFocus = (e) => {
    setFocused(true);
  };
  const checkName = () =>{
    if(inputProps.pattern==inputProps.value&& inputProps.value&& !error?.errorMessage&& inputProps.pattern == inputProps.value ){
      return(
        <CheckIcon />
      );
    }else if(inputProps.name!='confirmPassword'&&inputProps.value && !error?.errorMessage){
        return(
          <CheckIcon />
        );
    }
  }
  console.log(inputProps)
  return (
    <div className="formInput">
      <label className="ui-label">{label}</label>
      <div className="SignUpForm-start-icon">{PreIcon && <PreIcon />}</div>
      <div className="SignUpForm-end-icon">
        {checkName()}
      </div>
      <input
        {...inputProps}
        style={{ width: '431px' }}
        onChange={onChange}
        onBlur={handleFocus}
        onFocus={() =>
          inputProps.name === "confirmPassword" && setFocused(true) 
        }
        focused={focused.toString()}
      />
      <span>{errorMessage}</span>
    </div>
  );
};

export default FormInput;