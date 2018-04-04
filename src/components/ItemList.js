import React, {Component} from 'react'
import {connect} from 'react-redux'
import { itemsFetchData } from './../action/items'
class ItemList extends Component {
    componentDidMount() {
        this.props.fetchData('http://5826ed963900d612000138bd.mockapi.io/items')
    }
    render() {
        if(this.props.hasErrored) {
            return <p>hello</p>
        }

        if (this.props.isLoading) {
            return <p>isLoading...</p>
        }

        return (
            <ul>
                {this.props.items.map((item) => (
                    <li key={item.id}>
                        {item.label}
                    </li>
                ))}
            </ul>
        )
    }
}
const mapStateToProps = (state, ownProps = {}) => {
    return {
        items: state.items,
        hasErrored: state.itemsHasErrored,
        isLoading: state.itemsIsLoading
    }
}

const mapDispatchToProps = (dispatch, ownProps = {}) => {
    return {
        fetchData: (url) => dispatch(itemsFetchData(url))
    }
}


export default  connect(mapStateToProps, mapDispatchToProps)(ItemList)