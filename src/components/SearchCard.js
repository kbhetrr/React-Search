import React, { useEffect } from 'react';
import './SearchCard.css';



const SearchCard = ({ data, query }) => {
    const { json_data } = data;
    

    //var regex = new RegExp(query, "g");

    //const pre_PRDUCT = PRDUCT.indexOf(query) !== -1 ? (PRDUCT === query ? "<span class='highlight'>" + query + "</span>" : PRDUCT.replace(regex, "<span class='highlight'>" + query + "</span>")) : PRDUCT;
    //const pre_ENTRPS = ENTRPS.indexOf(query) !== -1 ? (ENTRPS === query ? "<span class='highlight'>" + query + "</span>" : ENTRPS.replace(regex, "<span class='highlight'>" + query + "</span>")) : ENTRPS;

    return (
        <div className="CardBox">
        <div className="card-image"></div>
        <div className="card-text">
            {Object.keys(data).map((el, i) => 
                <h3>{el} : {data[el] !== 'null' ? data[el] : "Null"}</h3>
            )}
        </div>
        </div>
    );
};
export default SearchCard;