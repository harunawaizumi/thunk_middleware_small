import React from 'react'


export function itemsHasErrorerd(bool) {
    return {
        type: 'ITEMS_HAS_ERRORED',
        hasErrored: bool
    }
}

export function itemsIsLoading(bool) {
    return {
        type: 'ITEMS_IS_LOADING',
        isLoading: bool
    }
}

export function itemsFetchingDataSuccess(items) {
    return {
        type: 'ITEMS_FETCH_DATA_SUCCESS',
        items
    }
}

export function itemsFetchData(url) {
    return (dispatch) => {
        dispatch(itemsIsLoading(true));

        fetch(url)
            .then((response) => {
                if(!response.ok) {
                    throw  Error(response.statusText)
                }

                dispatch(itemsIsLoading(false))

                return response
            })

            .then((response) => response.json())
            .then((items) => dispatch(itemsFetchingDataSuccess(items)))
            .catch(() => dispatch(itemsHasErrorerd(true)))
    }
}