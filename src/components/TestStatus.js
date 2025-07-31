import React from 'react';

const TestStatus = ({ status }) => {
  let icon, text, colorClass;
  
  if (status.includes('yes')) {
    icon = <span className="text-green-400">✓</span>;
    text = status.replace('yes', '').trim();
    colorClass = 'text-green-400';
  } else if (status.includes('no')) {
    icon = <span className="text-red-400">✗</span>;
    text = status.replace('no', '').trim();
    colorClass = 'text-red-400';
  } else if (status.includes('warning')) {
    icon = <span className="text-yellow-400">⚠</span>;
    text = status.replace('warning', '').trim();
    colorClass = 'text-yellow-400';
  } else {
    icon = <span className="text-gray-400">?</span>;
    text = status;
    colorClass = 'text-gray-400';
  }
  
  return (
    <div className={`flex items-center justify-center gap-2 ${colorClass}`}>
      {icon}
      <span>{text}</span>
    </div>
  );
};

export default TestStatus;
