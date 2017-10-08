import React, {Component} from 'react'
import {connect} from 'react-redux'
//components
import EventContainer from './EventContainer'
import CategoriesList from './CategoriesList'

//actions
import {getData} from './actions'

class App extends Component {
    componentDidMount() {
        this.props.getData()
    }
    render() {
        return (
            <div className="app">
                <EventContainer />
                <CategoriesList />
            </div>
        )
    }
}

// const mapDispatchToProps = (state) => {
//     return {
//         child: state
//     }
// }

export default connect(null, {getData})(App)