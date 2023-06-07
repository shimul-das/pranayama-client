import React from 'react';
import './Error404.css';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const Error404 = () => {
  useEffect(()=>{
    document.title="Sportz Car | Error"
  })
  return (
    <div className="error-container">
      <Link to="/">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-500 rounded">
          Back To Home
        </button>
      </Link>
    </div>
  );
};

export default Error404;
