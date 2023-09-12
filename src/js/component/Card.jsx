import React from "react";
import PropTypes from 'prop-types';


const Card = (props) => {
    return (
        <>
            <div className="card-group col-md-3">                
                <div className="card">
                    <img className="card-img-top" src={props.src} alt="Card image cap" style={{"height" : "40%", "width" : "100%"}}/>
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">{props.description}</p>
                    </div>
                    <div className="col card-footer">
                        <a href={props.url} target="_blank" className="btn btn-primary">{props.btnText}</a>
                    </div>
                </div>
            </div>
        </>
    );
}



export default Card;