import { combineReducers, createStore,applyMiddleware } from 'redux'
import { DishesReducer } from './dishesReducer'
import { CommentsReducer } from './commentsReducer'
import { LeadersReducer } from './leadersReducer'
import { PromotionsReducer } from './promotionsReducer'
import thunk from 'redux-thunk';
import logger from 'redux-logger'


export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            dishes: DishesReducer,
            comments: CommentsReducer,
            leaders: LeadersReducer,
            promotions: PromotionsReducer
        }
        ),applyMiddleware(thunk,logger)
    );
    return store;
}