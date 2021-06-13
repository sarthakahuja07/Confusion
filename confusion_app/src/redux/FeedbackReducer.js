import * as ActionTypes from './actionTypes'
import axios from 'axios'
import baseUrl from '../shared/baseUrl'
const initialState={
    first_name: "",
    last_name: "",
    tel: "",
    email: "",
    box: false,
    select: "tel.",
    feedback: ""
}

export const FeedbackReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.Post_Feedback:
            
            {
                var feedback = action.payload.feedback
                axios.post(baseUrl + "feedback", { ...feedback })
                    .then(res => { console.log(res);
                    alert(JSON.stringify(res.data))})
                    .catch(error => { console.log(error) })
                return { initialState };
            }


        default:
            return initialState;
    }
}

