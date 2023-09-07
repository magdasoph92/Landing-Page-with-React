import React from "react";
import PropTypes from 'prop-types';



const Jumbotron = (props) => {
    return (
        <div className="container mb-5 mt-4 bg-light py-5">
            <div className="jumbotron">
            <h1 className="display-4">{props.title}</h1>
            <p className="lead">{props.description}</p>
            <p className="lead">
                <a className="btn btn-primary btn-lg" href="https://a-z-animals.com/blog/baby-elephants-9-facts-and-pictures/" target="_blank" role="button">{props.btnText}</a>
            </p>
            </div>          
        </div>
    );
}

Jumbotron.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    btnText: PropTypes.string
}

export default Jumbotron;