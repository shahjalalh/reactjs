import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {

    /** 
    use constructor method instead. It will be better. 
    Babel does not need to create constructor by itself.
    **/
    state = { lat: null, errorMessage: '' };

    /*
    constructor(props) {
        super(props);

        // THIS IS THE ONLY TIME we do direct assignment
        // to this.state
        // this.state = { lat: null, long: null, errorMessage: '' }
    }
    */

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({
                    lat: position.coords.latitude,
                    long: position.coords.longitude
                });
            },
            (err) => {
                this.setState({ errorMessage: err.message });
            }
        );
    }

    renderContent() {
        if (this.state.errorMessage && !this.state.lat) {
            return (
                <div>
                    Error: {this.state.errorMessage}<br />
                </div>
            );
        } else if (!this.state.errorMessage && this.state.lat) {

            /*
            return (
                <div>
                    Latitude: {this.state.lat} <br />
                    Longitude: {this.state.long} <br />
                </div>
            );
            */

            return (
                <div>
                    <SeasonDisplay lat={this.state.lat} />
                </div>
            );
        }

        return (
            <div>
                <Spinner message="Please, accept location request..." />;
            </div>
        );
    }

    render() {

        return (
            <div>
                {this.renderContent()}
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));