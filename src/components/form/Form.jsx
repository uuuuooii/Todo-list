import { useState } from 'react';
import './style.css';

function Form({ addItem }) {
  const [inputTitle, setInputTitle] = useState('');
  const [inputContents, setInputContents] = useState('');

  const addItemList = () => {
    setInputTitle('');
    setInputContents('');
    addItem(inputTitle, inputContents);
  }

  return (
    <div className='main'>
      <div className="form">
        <label className='box'>
          <p>Title</p>
          <input
            value={inputTitle}
            onChange={(e) => setInputTitle(e.target.value)}
          />
          <p>Contents</p>
          <input
            value={inputContents}
            onChange={(e) => setInputContents(e.target.value)}
          />
        </label>
        <button onClick={() => addItemList()} className="btn">
          Add todo
        </button>
      </div>
    </div>
  );
}
export default Form;
