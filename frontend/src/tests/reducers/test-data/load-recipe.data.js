//data for testing 'LOAD_RECIPE' action type in recipes reducer
export const loadRecipeAction = 
    {  
       type:'LOAD_RECIPE',
       payload:{  
          data:{  
             name:'Lemon Chicken',
             imageUrl:'http://ichef.bbci.co.uk/food/ic/food_16x9_608/recipes/lemonchicken_11654_16x9.jpg',
             ingredients:[  
                'Chicken',
                'Lemon',
                'Thyme'
             ],
             cookingTime:'30 minutes',
             starredByJoe:false,
             id:0,
             cookingTimeInt:30,
             meta:{  
                revision:2,
                created:1507807725487,
                version:0,
                updated:1507848465466
             },
             $loki:1
          },
          status:200,
          statusText:'OK',
          headers:{  
             date:'Fri, 13 Oct 2017 16:16:41 GMT',
             etag:'W/"148-wOMpvnglsovWszqI97usQWusm9Q"',
             connection:'close',
             'x-powered-by':'Express',
             'content-length':'328',
             vary:'Accept-Encoding',
             'content-type':'application/json; charset=utf-8'
          },
          config:{  
             transformRequest:{  
    
             },
             transformResponse:{  
    
             },
             timeout:0,
             xsrfCookieName:'XSRF-TOKEN',
             xsrfHeaderName:'X-XSRF-TOKEN',
             maxContentLength:-1,
             headers:{  
                Accept:'application/json, text/plain, */*'
             },
             method:'get',
             url:'/recipe/0'
          },
          request:{  
    
          }
       }
    };
    
    
 
// state expected to be returned  when 'LOAD_RECIPES' is the action.type
export const expectedLoadRecipeState = {  
    '0':{  
       name:'Lemon Chicken',
       imageUrl:'http://ichef.bbci.co.uk/food/ic/food_16x9_608/recipes/lemonchicken_11654_16x9.jpg',
       ingredients:[  
          'Chicken',
          'Lemon',
          'Thyme'
       ],
       cookingTime:'30 minutes',
       starredByJoe:false,
       id:0,
       cookingTimeInt:30,
       meta:{  
          revision:2,
          created:1507807725487,
          version:0,
          updated:1507848465466
       },
       $loki:1
    }
 };