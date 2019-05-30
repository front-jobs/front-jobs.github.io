import React from 'react';

class JobsList extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return(
            <ul>
                {this.props.results.join(' ')}
            </ul>
        )
    }
}

export default JobsList;