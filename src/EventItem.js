import React, {Component} from 'react'
import {connect} from 'react-redux'
//actions


class EventItem extends Component {
    componentDidMount() {
        console.log("componentDidMount EventItem")
        const {timeAt, categories, filter} = this.props;
        const {block} = this;
        console.log("filter", filter)
        if (this.props.getTop) {
            this.props.getTop(block.getBoundingClientRect().top, timeAt, categories)
        }
       
    }
    componentWillReceiveProps(nextProps) {
        if(nextProps.filter === this.props.categories) {
            console.log("THERE IS UNIQ")
            console.log(this.props.title)
        }
        // console.log('------------------')
        // console.log("componentWillReceiveProps in EventItem")
        // console.log("nextProps", nextProps)
        // console.log("this.props", this.props)
        // console.log('------------------')
    }
    render() {
        const {title, timeAt, short_description, categories, onClick} = this.props;
        return (
            <li className="event_item" ref={n => this.block = n}>
                <div className='event_item__photo'>
                    <img src="https://studfiles.net/html/2706/1080/html_5JyIsgW7SK.t443/img-oKFKyO.png"/>
                </div>
                <div className='event_item_box'>
                    <div className='event_item__header'>
                        <h2>{title}</h2>
                        <span>The categories: {categories}</span>
                    </div>
                    <div className="event_item__body">
                        {/* <span>{timeAt}</span> */}
                        <p>{short_description}</p>
                    </div>
                    <div className='event_item__control'>
                        <button>read more</button>
                    </div>
                </div>
            </li>
        )
    }
}
const mapStateToProps = ({filter}) => {
    return {filter}
}
export default connect(mapStateToProps, null)(EventItem)
