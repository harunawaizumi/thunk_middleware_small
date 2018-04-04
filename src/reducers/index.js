import React from 'react'
import {items, itemsHasErrored, itemsIsLoading} from './items'
import {combineReducers} from 'redux'

export default combineReducers({
    items,
    itemsHasErrored,
    itemsIsLoading
})