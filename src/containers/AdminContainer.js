import React, { Fragment, useEffect, useState } from 'react';
import FileUpload from './FileUpload';

const AdminContainer = () => {
    const [FilesInfo, setFilesInfo] = useState(new Object());
    const [FileName, setFileName] = useState("");

    const handleUploadFile = (e) => {
        console.log(e.target.files[0]);
        setFileName(e.target.files[0].name);
        setFilesInfo({
            [e.target.id]: e.target.files[0],
        });
    };

    const handleParsingFile = (e) => {
        
    };

    return (
        <Fragment>
            <div>admin page</div>
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <FileUpload 
                    text={"엑셀 파일 업로드"}
                    id={"excel"}
                    handleFile={(e) => handleUploadFile(e)}
                />
                {FilesInfo.hasOwnProperty("excel") ? (
                    <div>파일 이름 : {FileName}</div>
                ) : ("")}
                {FilesInfo.hasOwnProperty("excel") ? (
                    <button 
                        onClick={(e) => handleParsingFile(e)}
                    >업로드</button>
                ) : ("")}
            </div>
            <div>status : </div>
        </Fragment>
    )
};

export default AdminContainer;