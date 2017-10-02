import _ from 'lodash';
import {
    LOAD_RECIPES,
    LOAD_RECIPE,
    STAR_RECIPE,
    FILTER_RECIPES
} from '../actions' ;

const initialRecipesState ={}

function recipes(state=initialRecipesState, action){
    switch(action.type){
        case FILTER_RECIPES:
            return _.mapKeys(action.payload,'id')
        case LOAD_RECIPES:   
            return _.mapKeys(action.payload.data,'id')
        case LOAD_RECIPE:
             if( action.payload.data){
                return { ...state, [action.payload.data.id]: action.payload.data} 
             }
             else{
                 return state;
             }
             
        case STAR_RECIPE:
            const ammendedRecipe = action.payload;
            return{ ...state ,[ammendedRecipe.id] : ammendedRecipe } 
        
        default:
            return state;
    }
}

export default recipes;