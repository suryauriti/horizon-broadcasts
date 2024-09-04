import React from 'react';

const Settings = ({ currentLanguage, onLanguageChange }) => {
  const handleSelectChange = (event) => {
    onLanguageChange(event.target.value);
  };

  return (
    <div className="settings">
      <label htmlFor="language-select">Select Language: </label>
      <select id="language-select" value={currentLanguage} onChange={handleSelectChange}>
        {['English', 'French', 'German', 'Russian', 'Spanish', 'Chinese'].map((language) => (
          <option key={language} value={language}>{language}</option>
        ))}
      </select>
    </div>
  );
};

export default Settings;
