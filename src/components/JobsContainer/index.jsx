import React from 'react';
import SearchBar from 'components/SearchBar';
import JobsList from 'components/JobsList';

class JobsContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {results: []};
    }

    updateJobs(value) {
        let results = [...this.state.results, value];
        console.log(results)
        this.setState({
            results: results
        })
    }

    render() {
        return(
            <div>
                <h1>{this.props.title}</h1>
                <SearchBar send={this.updateJobs.bind(this)} />
                <JobsList results={this.state.results}/>
            </div>
        )
    }
}

export default JobsContainer;