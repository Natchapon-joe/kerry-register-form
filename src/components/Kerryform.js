import { useState } from "react";
import FormInput from "./FormInput";
import { useNavigate } from 'react-router-dom';
import "./app.css";
import logo from "../assets/imgs/kerryexpress_logo_white.png";
import { ReactComponent as AccountIcon } from '../assets/icons/account.svg';
import { ReactComponent as MailIcon } from '../assets/icons/mail.svg';
import { ReactComponent as PhoneIcon } from '../assets/icons/phone.svg';
import { ReactComponent as LockIcon } from '../assets/icons/lock.svg';


const Kerryform = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage:
        "ชื่อต้องใช้ภาษาอังกฤษและมีความยาวตั้งแต่ 8-16 ตัวอักษร และยังต้องไม่มีตัวอักษรพิเศษ!",
      label: "Username",
      pattern: "^[A-Za-z0-9]{8,16}$",
      required: true,
      preIcon: AccountIcon
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "กรุณาใส่อีเมลให้ถูกต้อง!",
      label: "Email",
      required: true,
      preIcon: MailIcon
    },
    {
      id: 3,
      name: "phone",
      type: "number",
      placeholder: "Phone",
      errorMessage:
        "กรุณากรอกเบอร์โทรศัพท์!",
      label: "Phone",
      required: true,
      preIcon: PhoneIcon
    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "รหัสผ่านควรมีความยาว 8-20 และต้องมีตัวใหญ่ 1 ตัว!",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
      preIcon: LockIcon
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "รหัสผ่านไม่ตรง!",
      label: "Confirm Password",
      pattern: values.password,
      required: true,
      preIcon: LockIcon
    },
  ];

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/registersuccess',{state:{form:{...values}}})
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="app">
      <img src={logo}  className="logo"/>
      <form onSubmit={handleSubmit}>
      <div className="ui-grid">
          <h2 className="ui-welcome">
            Welcome to&nbsp;
            <div className="ui-h2">Kerry Express</div>
          </h2>
          <p>Have an Account ?<br/><a className="ui-a">Sign in</a></p>
      </div>
        <h1>Sign up</h1>
        <div className="field">
          <div>
            {inputs.map((input) => (
              <FormInput
                key={input.id}
                {...input}
                value={values[input.name]}
                onChange={onChange}
              />
            ))}
            <div className="button">
              <button>Sign up</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Kerryform;