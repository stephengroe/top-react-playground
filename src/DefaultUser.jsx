import { useState, useEffect } from 'react';

const DefaultUser = () => {
  const [imageUrl, setImageUrl] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://randomuser.me/api/?nat=us', { mode: 'cors' })
      .then((response) => {
        if (response.status >= 400) {
          throw new Error('Server error');
        }
        return response.json();
      })
      .then(response => setImageUrl(response.results[0].picture.large))
      .catch(error => setError(error))
      .finally(() => setLoading(false));
  }, []);

  if (error) return <p>Uh-oh, there was a network error. {error}</p>;
  if (loading) return <p>Loading...</p>;

  return (
    imageUrl && (<>
      <p>Nothing to see here!</p>
      <img src={imageUrl} alt='Profile picture'/>
    </>
    )
  )
};

export default DefaultUser;
