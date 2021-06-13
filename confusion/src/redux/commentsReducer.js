import * as ActionTypes from './actionTypes'
import axios from 'axios'
import baseUrl from '../shared/baseUrl'

export const CommentsReducer = (state = {
	isLoading: true,
	err: null,
	comments: []
}, action) => {

	switch (action.type) {

		case ActionTypes.Comments_Loading:
			{
				return {
					isLoading: true,
					err: null,
					comments: []
				}

			}
		case ActionTypes.Add_Comments:
			{
				return {
					isLoading: false,
					err: null,
					comments: action.payload.comments
				}

			}
		case ActionTypes.Comments_Failed:
			{
				return {
					isLoading: false,
					err: action.payload.err,
					comments: []
				}
			}

		case ActionTypes.Add_Comment:

			{
				var comment = action.payload;
				comment.date = new Date().toISOString();
				axios.post(baseUrl + 'comments', { ...comment })
					.then(res=>{console.log(res)})
					.catch(error => {console.log(error)})
				return { ...state, comments: state.comments.concat(comment)};
			}

		default:
			return state;
	}
}