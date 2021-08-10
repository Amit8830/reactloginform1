import { useState } from "react";
import { useForm } from "react-hook-form";
import "./App.css";

function App() {
  const { register, handleSubmit, errors } = useForm();
  const [userInfo, setUserInfo] = useState();
  const onSubmit = (data) => {
    setUserInfo(data);
    console.log(data);
  };
  console.log(errors);
  return (
    <div className="container">
    <pre>{JSON.stringify(userInfo, undefined, 2)}</pre>
    <form onSubmit={handleSubmit(onSubmit)}>

      <h1>Registration Form</h1>
      <div className="ui divider"></div>
      <div className="ui form">
        <div className="field">

          <label>Username</label>
          <input
            type="text"
            name="username"
            placeholder="Username"
            {...register("Username")}
 />
        </div>
        <p>{errors?.username.message}</p>
        <div className="field">
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            {...register("Email")}
          />
        </div>
        <p>{errors?.email.message}</p>
        <div className="field">
          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            {...register("password")}
          />
        </div>
        <p>{errors?.password.message}</p>
        <button className="fluid ui button blue">Submit</button>
      </div>
    </form>
  </div>
);
}
export default App;