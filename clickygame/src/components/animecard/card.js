import React from "react";

const AnimeCards = props =>(
    <div className="card col-md-3">
        <div className="img-box">
            <img alt={props.name} src={props.image} />
        </div>
    </div>
);

export default AnimeCards;