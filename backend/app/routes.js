const api = require('./controllers/api');


module.exports = (app)=>{
    app.get('/recipes', api.recipes);
    app.get('/recipe/:id', api.recipe);
    app.post('/filter', api.filter); 
    app.put('/recipe-toggle-starred-by-joe/:id', api.toggleRecipeStarredByJoe)
}
