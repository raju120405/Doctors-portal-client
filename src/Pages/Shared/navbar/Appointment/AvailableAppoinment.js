import { format } from 'date-fns';
import React, { useState } from 'react';

const AvailableAppoinment = ({date}) => {
    
    return (
        <div>
            Available Appointments on {format(date,'PP')}
        </div>
    );
};

export default AvailableAppoinment;