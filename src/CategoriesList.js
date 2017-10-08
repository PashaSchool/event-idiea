import React, {Component} from 'react'
import {connect} from 'react-redux'
import {filterByCategories} from './actions'

class CategoriesList extends Component {
    handleClickToFilter = (filter) => {
        this.props.filterByCategories(filter)
    }
    _showCategoreisList = () => {
        const {events} = this.props;
        const {handleClickToFilter} = this;

        return this._tumpleCategiries(events).map(
            (categories, index) => 
                <li className='categories_item' 
                    onClick={() => handleClickToFilter(categories)} 
                    filter={categories} 
                    key={index}>{categories}
                </li>
        )
    }
    _tumpleCategiries = (event) => {
       return event.reduce((acumulator, obj) => {
            if(acumulator.indexOf(obj.categories) === -1) {
                acumulator.push(obj.categories)
            }
            return acumulator
        }, [])
    }
    render() {
        const {handleClickToFilter} = this;
        const {filter}= this.props;
        return (
            <ul className='list_categories'>
                <li className='categories_item' onClick={() => handleClickToFilter("SHOW_ALL")} filter="SHOW_ALL">All</li>
                {this._showCategoreisList()}
            </ul>
        )
    }
}


// function setActive(isActive) {
//     if (isActive) {
//         return 'categories_item active'
//     }
//     return 'categories_item' 
// }

const mapStateToProps = ({events, filter}) => ({events, filter})


export default connect(mapStateToProps, {filterByCategories})(CategoriesList)
