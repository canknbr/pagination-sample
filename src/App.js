import React, { useState, useEffect } from 'react';
import { useFetch } from './useFetch';

const App = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [followers, setFollowers] = useState([]);
  const { loading, data } = useFetch();

  useEffect(() => {
    if (loading) return;
    setFollowers(data[currentPage]);
  }, [loading, currentPage]);

  const handlePage = page => {
    setCurrentPage(page);
  };
  const prevPage = () => {
    setCurrentPage(oldPage => {
      let newPage = oldPage - 1;
      if (newPage < 0) newPage = followers.length - 1;
      return newPage;
    });
  };
  const nextPage = () => {
    setCurrentPage(oldPage => {
      let newPage = oldPage + 1;
      if (newPage >= followers.length) newPage = 0;
      return newPage;
    });
  };
  if (loading) return <div>Loading...</div>;
  return (
    <main>
      <h2 className="title">Pagination Sample</h2>
      <div className="users-container">
        {followers.map((user, index) => {
          const { login, avatar_url, html_url } = user;
          return (
            <div className="user" key={index}>
              <div className="img">
                <img src={avatar_url} alt={login} />
              </div>
              <p className="name">{login}</p>
              <a className="btn user-btn" href={html_url}>
                view profile
              </a>
            </div>
          );
        })}
      </div>
      {!loading && (
        <div className="btn-container">
          <button className="btn" onClick={prevPage}>
            Prev
          </button>
          {data.map((_, index) => {
            return (
              <button
                className={`btn ${currentPage === index ? 'active' : ''}`}
                key={index}
                onClick={() => handlePage(index)}
              >
                {index + 1}
              </button>
            );
          })}
          <button className="btn" onClick={nextPage}>
            Next
          </button>
        </div>
      )}
    </main>
  );
};

export default App;
