import axios from 'axios'
const Signin = () => {
  const handleSubmit = (event)=>{
    event.preventDefault()
    const email = event.target.email.value;
    const password = event.target.password.value;
    axios.post("https://saws-backend.onrender.com/login", { email, password }).then(res=>{
      if(res.data.token){
          console.log("Login Successful",res.data.token);
          localStorage.setItem("token", res.data.token);
          window.alert("You've successfully logged in")
        }
    }).catch((err)=>{
        window.alert("Failed to login");
        console.log(err)
    })
  };
  return (
    <form onSubmit={handleSubmit} className="login">
      <input type="email" placeholder="Email" name="email" id="SigninEmail" />
      <input
        type="password"
        placeholder="Password"
        name="password"
        id="SigninPassword"
      />
      <button id="signin-button">Sign in</button>
      <br />
    </form>
  );
}

export default Signin