import jsonplaceholder from '../api/jsonPlaceholder';

export const fetchPost = () => {
    return async function (dispatch, getState) {
        const response = await jsonplaceholder.get('/posts');
        dispatch({
            type: 'FETCH_POSTS',
            payload: response.data
        });
    }
}

//Or Using Modern Syntax

// export const fetchPost = () => async dispatch => {
//         const response = await jsonplaceholder.get('/posts');
//         dispatch({
//             type: 'FETCH_POSTS',
//             payload: response
//         });
//     }