const loki = require('lokijs');
const db = new loki('auto_generated_recipes.json');

const recipesDatabase = db.addCollection('allRecipes')
const recipeData = require('./recipes.json') ;

recipeData.recipes.map((recipe, index)=>{
    
    const cookingTimeInt = parseInt(recipe.cookingTime.match(/\d/g).join(""));
    const newEntry = Object.assign({}, recipe, {starredByJoe: false} , {id: index}, {cookingTimeInt: cookingTimeInt})
    recipesDatabase.insert( newEntry)
  
})


db.saveDatabase();