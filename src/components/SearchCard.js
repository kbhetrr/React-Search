import React, { useEffect } from 'react';
import './SearchCard.css';



const SearchCard = ({ data, query }) => {
    const { json_data } = data;
    const Material = data["Material"];
    const Description1 = data["Description1"];
    const Description2 = data["Description2"];
    const Description3 = data["Description3"];
    const Description4 = data["Description4"];
    const Description5 = data["Description5"];
    const Description6 = data["Description6"];
    const Old_Mat_Num = data["Old Mat Num"];
    const Mfr_part_number = data["Mfr part number"];
    

    //var regex = new RegExp(query, "g");

    //const pre_PRDUCT = PRDUCT.indexOf(query) !== -1 ? (PRDUCT === query ? "<span class='highlight'>" + query + "</span>" : PRDUCT.replace(regex, "<span class='highlight'>" + query + "</span>")) : PRDUCT;
    //const pre_ENTRPS = ENTRPS.indexOf(query) !== -1 ? (ENTRPS === query ? "<span class='highlight'>" + query + "</span>" : ENTRPS.replace(regex, "<span class='highlight'>" + query + "</span>")) : ENTRPS;

    return (
        <div className="CardBox">
        <div className="card-image"></div>
        <div className="card-text">
            {Material != "null" ? <h3>Material : {Material}</h3> : ""}
            {Description1 != "null" ? <h3>Description1 : {Description1}</h3> : "Null"}
            {Description2 != "null" ? <h3>Description2 : {Description2}</h3> : "Null"}
            {Description3 != "null" ? <h3>Description3 : {Description3}</h3> : "Null"}
            {Description4 != "null" ? <h3>Description4 : {Description4}</h3> : "Null"}
            {Description5 != "null" ? <h3>Description5 : {Description5}</h3> : "Null"}
            {Description6 != "null" ? <h3>Description6 : {Description6}</h3> : "Null"}
            {Old_Mat_Num != "null" ? <h3>Old_Mat_Num : {Old_Mat_Num}</h3> : "Null"}
            {Mfr_part_number != "null" ? <h3>Mfr_part_number : {Mfr_part_number}</h3> : "Null"}
        </div>
        </div>
    );
};
export default SearchCard;