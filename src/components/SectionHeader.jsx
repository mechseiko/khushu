import React from 'react';

function SectionHeader({ title, subtitle }) {
  return (
    <div className="text-center md:mb-10 mb-5">
      <h1 className="text-3xl font-bold text-primary">{title}</h1>
      <p className="text-grey mt-2">{subtitle}</p>
    </div>
  );
}

export default SectionHeader;
