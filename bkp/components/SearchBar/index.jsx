import React from 'react';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.onKeyUp = this.onKeyUp.bind(this);
    }

    onKeyUp(e) {
        if (e.keyCode === 13) {
            this.props.send(e.target.value)
            e.target.value = "";
            return;
        }
    }

    render() {
        return(
            <input type="text" onKeyUp={this.onKeyUp}/>
        )
    }
}

export default SearchBar;