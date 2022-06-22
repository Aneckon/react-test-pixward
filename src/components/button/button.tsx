import React, { FC } from 'react';

import './button.css';

interface buttonProps {
  children: string;
  className: string;
}

export const Button: FC<buttonProps> = ({ children, className }) => {
  return <button className={className}>{children}</button>;
};
