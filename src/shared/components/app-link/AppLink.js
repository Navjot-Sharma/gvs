import React from 'react';

const AppLink = props => {
  return <>
  {!props.withoutLine && <svg id="stroke" xmlns="http://www.w3.org/2000/svg" width="0" height="0">
      <defs>
        <path id="line" d="M2 2c49.7 2.6 100 3.1 150 1.7-46.5 2-93 4.4-139.2 7.3 45.2-1.5 90.6-1.8 135.8-.6" fill="none" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
      </defs>
    </svg>
}
    <a className="btn" href={props.link}>
        {props.children}
          {!props.withoutLine && <><svg className="button-stroke" viewBox="0 0 154 13">
            <use href="#line"></use>
          </svg>
          <svg className="button-stroke" viewBox="0 0 154 13">
            <use href="#line"></use>
          </svg>
          </>}
    </a>
  </>;
};

export default AppLink;
