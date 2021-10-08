import React from 'react';
import { VscChevronLeft } from "react-icons/vsc";
import classnames from 'classnames';

export const CarouselButton = props => {
  return <div onClick={props.handleClick}
    style={props.style}
    className={classnames(props.className, 'p-10 shadow-smooth br-10')}
  >
    <VscChevronLeft />
  </div>;
};

