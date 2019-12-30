import React from 'react';
import GroupCategory from './GroupCategory';
import SearchBar from './SearchBar';
import Modal from './Modal';

class Content extends React.Component {
    constructor(props){
      super(props)
      this.state = {
        showModal: false,
        text: ''
      }
    }

    render() {
        const closeModal = () => this.setState({ showModal: false });

        return (
            <div className="container">
                <div className="header">
                    <h1 className="helpTitle">How can we help you?</h1>
                    <SearchBar
                        searchTerm={this.props.searchTerm}
                        handleSearchTerm={this.props.handleSearchTerm}
                    />
                </div>
                <div className="col-md-12">
                    <div className="addButtons">
                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={(e) => this.setState({ showModal: true, text: e.target.innerText })}
                        >
                            New Category
                        </button>
                        <button
                            type="button"
                            className="btn btn-info"
                            onClick={(e) => this.setState({ showModal: true, text: e.target.innerText })}
                        >
                            New Question
                        </button> 
                    </div>
                </div>
                <GroupCategory/>
                <Modal show={this.state.showModal} onHide={closeModal} text={this.state.text} />
            </div>
        );
    };
};

export default Content;
