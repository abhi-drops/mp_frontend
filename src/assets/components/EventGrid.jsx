import React from 'react'
import CardEvents from './CardEvents';

function EventGrid({ eventNotes, today }) {  // Destructuring eventNotes from props

  console.log('inside event notes grid:', eventNotes);

  const columns = 2; // Adjust this to control the number of columns per row

  // Function to convert UTC date to IST
  const convertToIST = (dateString) => {
    const utcDate = new Date(dateString);
    return new Date(utcDate.toLocaleString("en-US", { timeZone: "Asia/Kolkata" }));
  };

  // Get today's date in IST without time
  const todayDate = new Date().toLocaleDateString("en-US", { timeZone: "Asia/Kolkata" });

  // Filter events based on the 'today' prop
  let filteredEvents = eventNotes.filter(note => {
    const eventDateIST = convertToIST(note.eventDate);
    const eventDateString = eventDateIST.toLocaleDateString("en-US", { timeZone: "Asia/Kolkata" });

    if (today) {
      // Show only today's events
      return eventDateString === todayDate;
    }
    // Show only future events, strictly after today
    return (eventDateIST > new Date(todayDate));
  });

  // Sort the filtered events by date in ascending order
  filteredEvents = filteredEvents.sort((a, b) => {
    const dateA = convertToIST(a.eventDate);
    const dateB = convertToIST(b.eventDate);
    return dateA - dateB;  // Sort from nearest to farthest
  });

  // Split `filteredEvents` into rows with the specified column count
  const rows = [];
  for (let i = 0; i < filteredEvents.length; i += columns) {
    rows.push(filteredEvents.slice(i, i + columns));
  }

  console.log("rows:", rows);

  return (
    <div className="w-full grid gap-3 pb-3 grid-cols-1 md:grid-cols-1 md:mb-10">
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className="flex flex-col md:flex-row gap-3 md:mb-6 mb-0">
          {row.map((note, index) => (
            <CardEvents
              key={note._id || index}
              className="h-full w-full"
              note={note.eventTitle}
              like={note.eventLikedUsers?.length}
              date={note.eventDate}
              event={note}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export default EventGrid;
