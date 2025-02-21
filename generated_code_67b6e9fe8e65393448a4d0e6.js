import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const TimeSlot = ({ time, subject, room }) => {
  return (
    <div className="flex flex-col items-center justify-center p-2 border-b border-gray-200">
      <p className="text-sm font-medium text-gray-700">{time}</p>
      <p className="text-sm text-gray-600">{subject}</p>
      <p className="text-xs text-gray-500">{room}</p>
    </div>
  );
};


const DayColumn = ({ day, slots }) => {
    const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="flex flex-col">
      <div
        className={`flex items-center justify-between p-2 cursor-pointer  ${
          day === 'Monday'
            ? 'bg-red-100'
            : day === 'Tuesday'
            ? 'bg-blue-100'
            : day === 'Wednesday'
            ? 'bg-green-100'
            : day === 'Thursday'
            ? 'bg-yellow-100'
            : day === 'Friday'
            ? 'bg-purple-100'
            : day === "Saturday" ? 'bg-pink-100'
            : 'bg-gray-100'
        } rounded-t-lg`}
        onClick={() => setIsOpen(!isOpen)}

      >
        <h3 className="text-lg font-semibold text-gray-800">{day}</h3>
        {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </div>
      {isOpen && (
          <div className="border-l border-r border-gray-200">
            {slots.map((slot, index) => (
              <TimeSlot key={index} time={slot.time} subject={slot.subject} room={slot.room} />
            ))}
          </div>
      )}
    </div>
  );
};

const Timetable = () => {
  const timetableData = {
    Monday: [
      { time: '8:00 - 9:00', subject: 'Math', room: 'A101' },
      { time: '9:00 - 10:00', subject: 'Physics', room: 'B201' },
      { time: '10:00 - 11:00', subject: 'Chemistry', room: 'C301' },
        { time: '11:30 - 12:30', subject: 'Biology', room: 'D301' }
    ],
    Tuesday: [
      { time: '8:00 - 9:00', subject: 'History', room: 'A102' },
      { time: '9:00 - 10:00', subject: 'Geography', room: 'B202' },
      { time: '10:00 - 11:00', subject: 'English', room: 'C302' },
        { time: '1:00 - 2:00', subject: 'Computer Science', room: 'B108' },
    ],
    Wednesday: [
      { time: '8:00 - 9:00', subject: 'Art', room: 'A103' },
      { time: '9:00 - 10:00', subject: 'Music', room: 'B203' },
      { time: '10:00 - 11:00', subject: 'PE', room: 'C303' },
        { time: '2:00 - 3:00', subject: 'Free Period', room: 'Library' },

    ],
    Thursday: [
      { time: '8:00 - 9:00', subject: 'Math', room: 'A101' },
      { time: '9:00 - 10:00', subject: 'Physics', room: 'B201' },
      { time: '10:00 - 11:00', subject: 'Chemistry', room: 'C301' },
        { time: '11:00 - 12:00', subject: 'Literature', room: 'C202' }
    ],
    Friday: [
      { time: '8:00 - 9:00', subject: 'History', room: 'A102' },
      { time: '9:00 - 10:00', subject: 'Geography', room: 'B202' },
      { time: '10:00 - 11:00', subject: 'English', room: 'C302' },
       { time: '1:00 - 2:00', subject: 'Drama', room: 'D101' }
    ],
      Saturday: [
      { time: '8:00 - 9:00', subject: 'History', room: 'A102' },
      { time: '9:00 - 10:00', subject: 'Geography', room: 'B202' },
      { time: '10:00 - 11:00', subject: 'English', room: 'C302' },
            { time: '2:00 - 4:00', subject: 'Extra Class', room: 'A201' }

        ],
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 p-4">
      {Object.keys(timetableData).map((day) => (
        <DayColumn key={day} day={day} slots={timetableData[day]} />
      ))}
    </div>
  );
};

export default Timetable;