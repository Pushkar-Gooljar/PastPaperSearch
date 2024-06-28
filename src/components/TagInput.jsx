import React, { useState } from 'react';
import './TagInput.css';

const TagInput = ({ tags, setTags }) => {
  const [input, setInput] = useState('');

  const handleAddTag = () => {
    if (input.trim() && !tags.includes(input.trim())) {
      setTags([...tags, input.trim()]);
      setInput('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAddTag();
    }
  };

  const handleRemoveTag = (tagToRemove) => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  };

  return (
    <div className="tag-input mb-4">
      <div className="input-group">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyPress}
          className="form-control"
          placeholder="Enter a keyword"
        />
        <div className="input-group-append">
          <button className="btn btn-outline-secondary" onClick={handleAddTag}>Add Keyword</button>
        </div>
      </div>
      <div className="tag-container mt-3">
        {tags.map((tag, index) => (
          <span key={index} className="badge bg-primary">
            {tag}
            <button type="button" className="close ml-1" onClick={() => handleRemoveTag(tag)}>
            </button>
          </span>
        ))}
      </div>
    </div>
  );
};

export default TagInput;
