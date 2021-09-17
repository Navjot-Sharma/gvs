import React from 'react';
import './AppLoader.scss';

const AppLoader = (props) => {
    return(
        <div className={props.className + " skeleton h-inherit w-100"} style={{...props.size}}>
        </div>
    )
}
export const PageLoader = (props) => {
    return(
        <div className="app-loader">
            <div className="yellow"></div>
            <div className="red"></div>
            <div className="blue"></div>
            <div className="violet"></div>
        </div>
    )
}


export default AppLoader;