import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return <div className="px-[15px] lg:px-[30px]">{children}</div>;
};

export default Container;
