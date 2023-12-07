import React, { useState } from 'react';


const RichEditor = ({jobData, setJobData}) => {


    return (
        <div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '50px' }}>
                <label style={{ fontSize: '15px', color: '#061421' }} htmlFor="richtext">Job Details</label>
                <textarea style={{ padding: '8px', border: '1px solid #3498db5c', borderRadius: '4px', resize: 'none', outline: 'none' }} name="" id="richtext" cols="30" rows="13" placeholder='Type details and responsibilities' onChange={(e) => setJobData({...jobData, 'description': e.target.value})} defaultValue={jobData.description} required></textarea>
            </div>
        </div>
    );
};

export default RichEditor;