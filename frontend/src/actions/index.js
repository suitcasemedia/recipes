import axios from 'axios';
export const LOAD_RECIPES =  'LOAD_RECIPES';
export const LOAD_RECIPE  = 'LOAD_RECIPE' ;
export const STAR_RECIPE = 'STAR_RECIPE' ;
export const FILTER_RECIPES = 'FILTER_RECIPES'


const headers = {
    'Accept': 'application/json'
    
  }
export function loadRecipes(){

    //@todo --- need to load offset and limit for paginations
    const request = axios.get('/recipes')
    return{
        
        type:  LOAD_RECIPES,
        payload: request

    }
}

/* the following functions do not exist on the back end */

export function loadRecipe (id){
    const request  = axios.get(`/recipe/${id}`);
   
    return{
        type : LOAD_RECIPE,
        payload: request
    }
}
export function starRecipe( recipeId ,recipe){
    const request = axios.put(`/recipe-toggle-starred-by-joe/${recipeId}`) ;
    const newStarredValue = !recipe.starredByJoe ;
    return{
        type: STAR_RECIPE,
        
        payload:  {...recipe, starredByJoe : newStarredValue }  
    }
}




export function filterRecipes(starredOnly, query, cookingTime, callback){
    const request = axios({
        method: 'post',
        url: '/filter/',
        data: {
          starredOnly,
          query,
          cookingTime,
          headers: {
            ...headers,
            'Content-Type': 'application/json'
          }
        }
    }).then(function(response) {
        return response.data;
        })
    .then((parsedData)=> {
        // data here
        
        callback(parsedData)   

    }) 
    
}

export function returnFilterChange(parsedData){
    
      return{
          type: FILTER_RECIPES ,
          payload : parsedData
      }
  
  }