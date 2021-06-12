import * as ActionTypes from './actionTypes'

export const CommentsReducer=(state={
    isLoading:true,
    err:null,
    comments:[]
}, action)=>{

    switch(action.type){

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

        case ActionTypes.Add_Comment :
			
            {
				console.log("hi")
                var comment=action.payload;
                comment.id=state.length;
                comment.date=new Date().toISOString();
				console.log("============================");
				return { ...state, comments: state.comments.concat(comment)};				
            }

        default:
            return state;
    }
}