import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';

const NewsArticle = ({ title, explan, date, imageSrc, description1, description2 }) => {
  const [formattedDate, setFormattedDate] = useState('');

  useEffect(() => {
    if (date) {
      const formatted = format(date, 'd, MMM yyyy');
      setFormattedDate(formatted);
    }
  }, [date]);

  return (
    <>
      <div className="mx-auto h-screen grid container grid-cols-12 gap-4 bg-zinc-50 p-1" style={{ background: '#302C42' }}>
        <div className="header col-span-12 py-8 flex items-left justify-left">
          <div className="w-2/3">
            <h1 className="font-bold" style={{ color: '#2890A7', fontFamily: 'Montserrat, sans-serif', fontSize: '27px' }}>
              {title}
            </h1>
            <h2 className="font-bold text-blue-500 mb-4" style={{ color: '#2890A7', fontFamily: 'Montserrat, sans-serif', fontSize: '27px' }}>
              {explan}
            </h2>
            <div className="flex items-left">
              <FontAwesomeIcon icon={faCalendar} className="mr-3 text-2xl" />
              <h1 className="text-base" style={{ fontFamily: 'Montserrat, sans-serif' }}>{formattedDate}</h1>
            </div>
          </div>
        </div>

        <div className="col-span-12 rounded-lg p-5 sm:col-span-7" style={{ background: '#121221', borderRadius: '20px' }}>
          <div className="rounded-lg overflow-hidden mx-auto">
            <img src={imageSrc} alt="Gambar" className="w-full mx-auto" />
          </div>
        </div>
        <div className="col-span-12 rounded-lg p-1 sm:col-span-5 text-white" style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '23px', lineHeight: '1.5' }}>
          {description1}
        </div>
        <div className="footer col-span-12 rounded-lg p-1 text-white" style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '23px', lineHeight: '1.5' }}>
          {description2}
        </div>
      </div>
    </>
  );
};

export default NewsArticle;
