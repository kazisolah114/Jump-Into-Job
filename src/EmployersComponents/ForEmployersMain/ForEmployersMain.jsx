import React from 'react';
import ForEmployersHeader from '../ForEmployersLayout/ForEmployersHeader/ForEmployersHeader';
import ForEmployersFooter from '../ForEmployersLayout/ForEmployersFooter/ForEmployersFooter';
import ForEmployersHome from '../ForEmployersHome/ForEmployersHome';


const ForEmployersMain = ({children}) => {
    return (
        <div>
            <ForEmployersHeader/>
            <>{children}</>
            <ForEmployersFooter/>
            
        </div>
    );
};

export default ForEmployersMain;