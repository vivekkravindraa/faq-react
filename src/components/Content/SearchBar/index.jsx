import React from 'react';

export default props => {
    return(
        <div className="col-lg-6 searchBar">
            <div className="input-group">
                <span
                    className="input-group-addon"
                    id="basic-addon1"
                >
                    <i className="fa fa-search"></i>
                </span>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Search.."
                    aria-describedby="basic-addon1" 
                    value={props.searchTerm}
                    onChange={props.handleSearchTerm}
                />
            </div>
        </div>
    );
};
