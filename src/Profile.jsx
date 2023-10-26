import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <div>
      <h1>Hello from Profile page!</h1>
      <p>So, how are you?</p>
      <p>&lpara;You can also <Link to='/'>go back to the home page</ Link>&rpara;</p>
    </div>
  );
};

export default Profile;