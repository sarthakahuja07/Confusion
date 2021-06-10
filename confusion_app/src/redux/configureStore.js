import { combineReducers, createStore } from 'redux'
import { DishesReducer } from './dishesReducer'
import { CommentsReducer } from './commentsReducer'
import { LeadersReducer } from './leadersReducer'
import { PromotionsReducer } from './promotionsReducer'

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            dishes: DishesReducer,
            comments: CommentsReducer,
            leaders: LeadersReducer,
            promotions: PromotionsReducer
        }
        )
    );
    return store;
}