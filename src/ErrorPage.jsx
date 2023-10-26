import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <>
      <h1>Uh-oh!</h1>
      <p>The page you&apos;re looking for doesn&apos;t exist!</p>
      <p>If you like, you can <Link to='/'>go back to the home page</Link>.</p>
    </>
  );
};

export default ErrorPage;
