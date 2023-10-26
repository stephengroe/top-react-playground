import { Link } from "react-router-dom";

const User = () => {

  return (
    <>
      <h3>Hi, I&apos;m the user! I have interests.</h3>
      <p><Link to='/'>Click here to go back</Link></p>
    </>
  );
};

export default User;
