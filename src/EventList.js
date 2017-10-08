import React, {Component} from 'react'
import EventItem from './EventItem'
import FlipMove from 'react-flip-move';

//moment
import moment from 'moment'

import {getTop, getData} from './actions'
import {connect} from 'react-redux'

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

class EventList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            block: []
        }
    }

    formateDate = (obj) => {
        // return obj.map(ev => {
        //     // console.log("formate data begin ", ev)
        //    const niceDate = moment(ev.timeAt).format("L");
        //     return Object.assign({}, ev, {timeAt: niceDate})
        // })
        return obj
    }
    componentWillReceiveProps(nextProps) {
        // if(nextProps.filter === 'SHOW_ALL' && this.props.filter !== 'SHOW_ALL') {
        //     console.log("fetch data")
        //     this.props.getData()
        // }
        console.log('------------------')
        console.log("nextProps", nextProps)
        console.log("this.props", this.props)
        console.log('------------------')
    }


    componentDidMount() {
        // should become with redux
        // this.setState({child: this.formateDate(data)})
    }
   
    render() {
        const {child, filter, getTop} = this.props;

        const renderEvents = () => {
            return filterCategories(child, filter).map((item, index) => {
                if(index === 0) {
                    return <EventItem {...item} index={index} key={item._id} getTop={getTop} /> 
                }
                const prevDay = item.timeAt.split('.')[0];
                const prevMonth = item.timeAt.split('.')[1];
                for(let i = 0; i < child.length; i++) {
                    const nextDay = child[i].timeAt.split('.')[0];
                    const nextMonth = child[i].timeAt.split('.')[1];

                    if(parseInt(prevDay) > parseInt(nextDay) || parseInt(prevMonth) > parseInt(nextMonth)) {
                        return <EventItem  {...item} index={index} key={item._id} getTop={getTop} />
                    }
                    return <EventItem  {...item} index={index} key={item._id} />
                }
              
            })
        }

        return (
            <ul className="list_navigation">
                <FlipMove duration={750} easing="ease-out">
                    {renderEvents()}
                </FlipMove>
            </ul>
        )
    }
}

const mapStateToProps = ({events, filter}) => {
    return {
        child: events,
        filter
    }
}

export default connect(mapStateToProps, {getTop, getData})(EventList)