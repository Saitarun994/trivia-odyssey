import React from 'react';

const Header = () => {
  return (
    <div className="bg-white p-4 border-b-2 border-purple-900 flex justify-between items-center">
      
        <p className="text-black font-semibold">Saitarun994</p>
        <h1 className="text-black font-extrabold text-3xl ml-2">TRIVIA ODYSSEY</h1>
      
      <button className="bg-purple-300 text-white font-semibold px-4 py-2 rounded-md hover:bg-purple-400">
        Sign In
      </button>
    </div>
  );
};

export default Header;