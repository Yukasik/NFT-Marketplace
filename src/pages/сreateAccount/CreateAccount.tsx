import "./CreateAccount.css";
import { EmailGrey, UserGrey, Lock } from "../../img/img-icons";
import { InputForm, Button } from "../../components/UI";

const SignUp = () => {
  return (
    <div className="sign-up">
      <div className="sign-up-wrap">
        <div className="sign-up-left"></div>
        <div className="sign-up-right">
          <form>
            <div className="sign-up-right-form-text">
              <h1>Create Account</h1>
              <p>
                Welcome! Enter Your Details And Start <br /> Creating,
                Collecting And Selling NFTs.
              </p>
            </div>
            <div className="sign-up-right-form">
              <InputForm
                type="name"
                className="sign-up-right-form-input"
                placeholder="Username"
                icon={UserGrey}
                classNameInput="sign-up-right-form-input-img"
              />
              <InputForm
                type="email"
                className="sign-up-right-form-input"
                placeholder="Email Address"
                icon={EmailGrey}
                classNameInput="sign-up-right-form-input-img"
              />
              <InputForm
                type="password"
                className="sign-up-right-form-input"
                placeholder="Password"
                icon={Lock}
                classNameInput="sign-up-right-form-input-img"
              />
              <InputForm
                type="password"
                className="sign-up-right-form-input"
                placeholder="Confirm Password"
                icon={Lock}
                classNameInput="sign-up-right-form-input-img"
              />
              <Button type="sign-up-right-form-button" destination="/">
                Create account
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
