import React from 'react';
import CardNote from './CardNote';

const NotesGrid = ({ circleNotes }) => {


  const columns = 2; // Adjust this to control the number of columns per row

  // Split `circleNotes` into rows with specified column count
  const rows = [];
  for (let i = 0; i < circleNotes.length; i += columns) {
    rows.push(circleNotes.slice(i, i + columns));
  }

  return (
    <div className="w-full grid gap-3 pb-3 grid-cols-1 md:grid-cols-1 md:mb-10">
    {rows.map((row, rowIndex) => (
      <div key={rowIndex} className="flex flex-col md:flex-row gap-3 md:mb-6 mb-0">
        {row.map((note, index) => (
          <CardNote
            key={note._id || index}
            className="h-full w-full"
            note={note}
          />
        ))}
      </div>
    ))}
  </div>

  );
};

export default NotesGrid;
