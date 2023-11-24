import React, { useState } from 'react';

const ImageUpload = () => {
    const [file, setFile] = useState();
    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }
    return (
        <div>
            <input type="file" onChange={handleChange} />
            <img src={file} />
        </div>
    );
};

export default ImageUpload;