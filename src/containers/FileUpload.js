import React, { useRef } from "react";

const FileUpload = (props) => {
    const fileInputInfo = useRef(null);
    const handleClick = (e) => {
        fileInputInfo.current.click();
    }

    const handleChangeUpload = (e) => {
        props.handleFile(e);
    };

    return (
        <>
            <button onClick={(e) => handleClick(e)}>{props.text}</button>
            <input
                type="file"
                id={props.id}
                accept={props.extension}
                ref={fileInputInfo}
                style={{ display: 'none' }}
                onChange={(e) => handleChangeUpload(e)}
            />
        </>
    );
};

FileUpload.defaultProps = {
    extension: ".xls, .xlsx",
    text: "파일 업로드",
    id: "",   
};

export default FileUpload;