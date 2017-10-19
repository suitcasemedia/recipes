import recipes from '../../reducers';

import {action ,expectedState} from './test-data/load-recipes.data.js' ;
import { loadRecipeAction , expectedLoadRecipeState} from './test-data/load-recipe.data.js' ;

import { filterInitialState, filterActionCT , expectedStateFCT} from './test-data/filter-recipe-cook-time.data.js' ;
import { initialStateSearchFilter, filterActionSearch , expectedStateFSearch} from './test-data/filter-recipe-search.data.js' ;
import { filterRecipeStarredInitialState ,filterRecipeActionStarred , expectedStateFStarred} from './test-data/filter-recipe-starred-only.data.js' ;
import {starInitialState, starAction , expectedStateStarred} from './test-data/star-recipe.data.js' ;
// initial state
test('should setup default state values',()=>{
    const state = recipes({}, {type:'@@INIT'})
    expect(state).toEqual({})    
});
// LOAD_RECIPES
test('should load recipes', () => {
    let state;
    state = recipes({}, action );
    expect(state).toEqual(expectedState);
});
// LOAD_RECIPE
test('should load the correct individual recipe', () => {
    let state;
    state = recipes({}, loadRecipeAction );
    expect(state).toEqual(expectedLoadRecipeState);
});
// STAR_RECIPE
test('should toggle recipe star status', () => {
    let state;
    state = recipes(starInitialState , starAction);
    expect(state).toEqual(expectedStateStarred);
  });

// FILTER_RECIPES -cook time 
test('should return recipes with cooktime less than or equal to max cook time', () => {
    let state;
    state = recipes(filterInitialState , filterActionCT);
    expect(state).toEqual(expectedStateFCT);
  });
  

// FILTER_RECIPES - search 
test('should return recipes with search term in title or ingredients', () => {
    let state;
    state = recipes(initialStateSearchFilter , filterActionSearch);
    expect(state).toEqual(expectedStateFSearch);
  });
  

// FILTER_RECIPES - only starred
test('should only return recipes that are starred', () => {
    let state;
    state = recipes(filterRecipeStarredInitialState , filterRecipeActionStarred);
    expect(state).toEqual(expectedStateFStarred);
  });