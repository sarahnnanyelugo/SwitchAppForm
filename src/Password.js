import { useState } from "react/cjs/react.development";

  import Icofont from "react-icofont";
function ShowAndHidePassword() {
  const [passwordType, setPasswordType] = useState("password");
  const [passwordInput, setPasswordInput] = useState("");
  const handlePasswordChange = (evnt) => {
    setPasswordInput(evnt.target.value);
  };
  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };
  return (
    <div className="col-md-12">
      <div className="input-group ">
        <input
        style={{borderRadius:'5px'}}
          type={passwordType}
          onChange={handlePasswordChange}
          value={passwordInput}
          name="password"
          className="form-control"
          placeholder="Password"
        />

        <h3
          className="text-secondary eye2"
          onClick={togglePassword}
          style={{ marginLeft: "-50px",position:'relative', zIndex:"4", marginTop:'20px'}}
        >
          {passwordType === "password" ? (
            <Icofont icon="icofont-eye-blocked" />
          ) : (
            <Icofont icon="icofont-eye-alt" />
          )}
        </h3>
      </div>
    </div>
  );
}
export default ShowAndHidePassword;
