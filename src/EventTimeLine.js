import React, {Component} from 'react'
import {connect} from 'react-redux'

const LabelTime = ({top, time}) => {
    return (
        <div className="timer_box" style={{top: top}}>
            <div className='timer_label'>{time}</div>
        </div>
    )
}

const filterCategories = (data, filter) => {
    if(filter == 'SHOW_ALL') {
        return data
    }
    return foo(filter, data)
}

function foo (filter, objs) {
    return objs.filter(ev => {
        if(filter === ev.categories) {
            return {...ev}
        }
    })
}

class EventTimeLine extends Component {
    componenDidUpdate() {
        console.log('componenDidUpdate ')
    }
    componentWillReceiveProps(prevProps) {
        // const {labelTime, filter} = this.props;
        // console.log("-------------------------")
        // console.log("componentWillReceiveProps")
        // console.log(prevProps, this.props);
        // console.log("-------------------------")
        // let nE = this.renderTimelineLabels(labelTime, filter)
        // console.log("nE nE  ", nE)
    }
    renderTimelineLabels = (labelTime, filter) => {
        return filterCategories(labelTime, filter).map((label, index) => {
            return  <LabelTime {...label} key={index}/>
        })
    }
    render() {
        const {labelTime, filter} = this.props;
        return (
            <div className="event_time_line">
                
                {this.renderTimelineLabels(labelTime, filter)}
            </div>
        )
    }
}

const mapStateToProps = ({timerLabel, filter}) => {
    return {
        labelTime: timerLabel,
        filter
    }
}

export default connect(mapStateToProps, null)(EventTimeLine)