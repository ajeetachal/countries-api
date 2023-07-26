import React, { useState } from 'react';

const Head = () => {
  const [darkMode, setDarkMode] = useState(false);

  const changeTheme = () => {
    setDarkMode((prevMode) => !prevMode);
    document.body.classList.toggle('light-theme');
  };

  return (
    <>
      <header className={`header ${darkMode ? 'light-theme' : ''}`}>
        <div>
          <h1>where in the world?</h1>
        </div>
        <div>
          <i className={darkMode ? 'fas fa-sun' : 'fas fa-moon'} onClick={changeTheme}></i>
          {darkMode ? ' Light Mode' : ' Dark Mode'}
        </div>
      </header>
    </>
  );
};

export default Head;
