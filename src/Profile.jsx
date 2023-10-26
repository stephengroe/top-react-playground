import { Link, Outlet, useParams } from "react-router-dom";
import DefaultUser from "./DefaultUser";
import User from "./User";
import Interests from "./Interests";

const Profile = () => {
  const { name } = useParams();

  return (
    <div>
      <h1>Hello from Profile page!</h1>
      <p>So, how are you?</p>
      <hr />
      <p>View the user information here:</p>
      {name === 'user' ? (
        <User />
      ) : name === 'interests' ? (
        <Interests />
      ) : (
        <DefaultUser />
      )}
      <p>&#40;You can also <Link to='/'>go back to the home page</ Link>&#41;</p>
    </div>
  );
};

export default Profile;