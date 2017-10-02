const db = require('../util/db');

exports.recipes = (req,res)=>{
    db.loadDatabase({},()=>{
       const allRecipes =  {recipes : db.getCollection('allRecipes').data}
        res.json(allRecipes.recipes)   
      })
}
// Lemon Chicken
exports.recipe = (req,res)=>{
    db.loadDatabase({}, ()=>{
       const singularRecipe= {recipe : db.getCollection('allRecipes').findOne({'id': {$aeq: req.params.id}})}
       if (singularRecipe){
        res.json(singularRecipe.recipe)
       }

       
    })
}

exports.toggleRecipeStarredByJoe = (req,res)=>{
    db.loadDatabase({}, ()=>{
        const recipe = ( db.getCollection('allRecipes').findOne({'id': {$aeq: req.params.id}}))
        const newStarredByJoe = !recipe.starredByJoe ;
        const newRecipe = Object.assign({}, recipe.starredByJoe = newStarredByJoe ,recipe )
        db.getCollection('allRecipes').update(newRecipe)
        db.saveDatabase();
        res.json(newRecipe)
    })
}

exports.filter = (req,res,next)=>{
  
    
   // terrible mess - makes my head hurt - needs refactoring
   // hard to merge results from various filters

    db.loadDatabase({},()=>{ 
        // database queries
        const allRecipes =  db.getCollection('allRecipes')
        const nameResults = allRecipes.find({'name':  { '$regex': [ req.body.query ,'i']}});
        const ingredientResults = allRecipes.find({'ingredients':  { '$regex': [ req.body.query ,'i']}});  
        const results = Object.assign({}, ingredientResults , nameResults )
        let maxCookingTime;   
        // has max cooking time been set in filter ?
        if(req.body.cookingTime){
            maxCookingTime = parseInt(req.body.cookingTime) + 1
            let resultArray = [] 
            for(i in results){
                if(results[i].cookingTimeInt < maxCookingTime ){
                    resultArray.push(results[i]) ;
                    } 
            }
            // filter for starred only && cooktime && search query
            if(req.body.starredOnly){
                const resultsStarredOnly = []
                for(i in resultArray){

                    if(resultArray[i].starredByJoe ){
                        resultsStarredOnly.push(resultsArray[i])
                    }
                }
                res.send(resultsStarredOnly)
            }
            else{
                res.send(resultArray)
            }  
        }
        // has max cooking time not set in filter - search query only
        else{
             // filter for starred  && cooktime not in search query
            if(req.body.starredOnly){
                const resultsStarredOnly = []
                for(i in results){
                    if(results[i].starredByJoe ){
                        resultsStarredOnly.push(results[i])
                    }
                }
                res.send(resultsStarredOnly)
            }
            else{
                res.send(results)
            }
             
        }
          
       })

       
 }





