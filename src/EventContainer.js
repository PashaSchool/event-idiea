import React, {Component} from 'react'

import EventList from './EventList'
import EventTimeLine from './EventTimeLine'

import moment from 'moment'

class EventContainer extends Component {
    // componentDidMount() {
    //     console.log(moment().valueOf())
    //     var timer = 1507373999003;
    //     console.log(moment(timer).format('d MMM YYY'))
    // }
    render() {
        return (
            <div className="event_container">
                <EventList/>
                <EventTimeLine/>
            </div>
        )
    }
}

export default EventContainer