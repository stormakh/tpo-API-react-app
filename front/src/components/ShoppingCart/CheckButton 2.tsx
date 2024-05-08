import React, { useState } from 'react';

export default function() {
  const [selected, setSelected] = useState(false);

  const toggleSelected = () => {
    setSelected(!selected);
  };

  return (
    <div
      className={`w-9 h-9 rounded-full bg-gray-300 cursor-pointer border border-gray-900 ${selected ? '': 'bg-white' }`}
      onClick={toggleSelected}
    >
    </div>
  );
}


