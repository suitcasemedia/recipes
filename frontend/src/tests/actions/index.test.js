import {loadRecipes, loadRecipe, starRecipe, filterRecipes, returnFilterChange} from '../../actions';

test('should return recipes object',()=>{

    const action = loadRecipes();
    expect(action).toEqual({
        "type" : "LOAD_RECIPES",
        "payload": expect.any(Promise) // dont have a good test for this yet because it is coupled to api get call
    })
})

test('should return a single recipe',()=>{
    const action = loadRecipe(1);
    expect(action).toEqual({
        "type" : "LOAD_RECIPE",
        "payload": expect.any(Promise) // dont have a good test for this yet because it is coupled to api get call
    })
})

test('should toggle star rating for recipe', ()=>{
    const recipe =  {
        "name": "Lemon Chicken",
        "imageUrl": "http://ichef.bbci.co.uk/food/ic/food_16x9_608/recipes/lemonchicken_11654_16x9.jpg",
        "ingredients": [
            "Chicken",
            "Lemon",
            "Thyme"
        ],
        "cookingTime": "30 minutes"
    };
    const starredRecipe = {
        "name": "Lemon Chicken",
        "imageUrl": "http://ichef.bbci.co.uk/food/ic/food_16x9_608/recipes/lemonchicken_11654_16x9.jpg",
        "ingredients": [
            "Chicken",
            "Lemon",
            "Thyme"
        ],
        "cookingTime": "30 minutes",
        "starredByJoe": true
    };
    const recipeId = 0;
    const action = starRecipe(recipeId , recipe)
    expect(action).toEqual({
        "type" : "STAR_RECIPE",
        "payload": starredRecipe 
    })
    
})

test('should get data and trigger callback function',()=>{
    const starredOnly = true ;
    const query = "chicken" ;
    const cookingTime = 15;
    const callback = ()=>{} 
    
    const action = filterRecipes(starredOnly, query, cookingTime, callback);

    /*****************************************
     * ! DON'T KNOW HOW TO TEST THIS BECAUSE 
     * IT DOESN'T HAVE RETURN STATEMENET  !
     * 
     * MUST DO RESEARCH  !
     * 
     *****************************************/

})

test('it should return filtered recipes',()=>{
    const parsedData = [
        {
            "name": "Chicken Caesar Salad",
            "imageUrl": "http://ichef.bbci.co.uk/food/ic/food_16x9_608/recipes/chickencaesarsalad_84099_16x9.jpg",
            "ingredients": [
                "Lettuce",
                "Chicken",
                "Parmesan",
                "Croutons"
            ],
            "cookingTime": "25 minutes",
            "starredByJoe": true,
            "id": 2,
            "cookingTimeInt": 25,
            "meta": {
                "revision": 1,
                "created": 1507807725488,
                "version": 0,
                "updated": 1507848471425
            },
            "$loki": 3
        }
    ]
    const action = returnFilterChange(parsedData);
    expect(action).toEqual({

        "type" : "FILTER_RECIPES",
        "payload" :[
            {
                "name": "Chicken Caesar Salad",
                "imageUrl": "http://ichef.bbci.co.uk/food/ic/food_16x9_608/recipes/chickencaesarsalad_84099_16x9.jpg",
                "ingredients": [
                    "Lettuce",
                    "Chicken",
                    "Parmesan",
                    "Croutons"
                ],
                "cookingTime": "25 minutes",
                "starredByJoe": true,
                "id": 2,
                "cookingTimeInt": 25,
                "meta": {
                    "revision": 1,
                    "created": 1507807725488,
                    "version": 0,
                    "updated": 1507848471425
                },
                "$loki": 3
            }
        ]
    })

})