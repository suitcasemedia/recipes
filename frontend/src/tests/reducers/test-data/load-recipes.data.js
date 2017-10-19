//data for testing 'LOAD_RECIPES' action type in recipes reducer
export const action = {  
    type:'LOAD_RECIPES',
    payload:{  
       data:[  
          {  
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
          {  
             name:'Beef Stroganoff',
             imageUrl:'http://ichef.bbci.co.uk/food/ic/food_16x9_608/recipes/beefstroganoffwithsa_89439_16x9.jpg',
             ingredients:[  
                'Beef',
                'Mustard',
                'Mushrooms'
             ],
             cookingTime:'30 minutes',
             starredByJoe:false,
             id:1,
             cookingTimeInt:30,
             meta:{  
                revision:2,
                created:1507807725488,
                version:0,
                updated:1507848468157
             },
             $loki:2
          },
          {  
             name:'Chicken Caesar Salad',
             imageUrl:'http://ichef.bbci.co.uk/food/ic/food_16x9_608/recipes/chickencaesarsalad_84099_16x9.jpg',
             ingredients:[  
                'Lettuce',
                'Chicken',
                'Parmesan',
                'Croutons'
             ],
             cookingTime:'25 minutes',
             starredByJoe:true,
             id:2,
             cookingTimeInt:25,
             meta:{  
                revision:1,
                created:1507807725488,
                version:0,
                updated:1507848471425
             },
             $loki:3
          }
       ],
       status:200,
       statusText:'OK',
       headers:{  
          date:'Fri, 13 Oct 2017 14:23:00 GMT',
          'content-encoding':'gzip',
          'x-powered-by':'Express',
          etag:'W/"405-Vsy/HNV/PxVFt9600anaXTor4yo"',
          vary:'Accept-Encoding',
          'content-type':'application/json; charset=utf-8',
          'transfer-encoding':'chunked',
          connection:'close'
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
          url:'/recipes'
       },
       request:{  
 
       }
    }
}
// state expected to be returned  when 'LOAD_RECIPES' is the action.type
export const expectedState =  {  
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
    },
    '1':{  
       name:'Beef Stroganoff',
       imageUrl:'http://ichef.bbci.co.uk/food/ic/food_16x9_608/recipes/beefstroganoffwithsa_89439_16x9.jpg',
       ingredients:[  
          'Beef',
          'Mustard',
          'Mushrooms'
       ],
       cookingTime:'30 minutes',
       starredByJoe:false,
       id:1,
       cookingTimeInt:30,
       meta:{  
          revision:2,
          created:1507807725488,
          version:0,
          updated:1507848468157
       },
       $loki:2
    },
    '2':{  
       name:'Chicken Caesar Salad',
       imageUrl:'http://ichef.bbci.co.uk/food/ic/food_16x9_608/recipes/chickencaesarsalad_84099_16x9.jpg',
       ingredients:[  
          'Lettuce',
          'Chicken',
          'Parmesan',
          'Croutons'
       ],
       cookingTime:'25 minutes',
       starredByJoe:true,
       id:2,
       cookingTimeInt:25,
       meta:{  
          revision:1,
          created:1507807725488,
          version:0,
          updated:1507848471425
       },
       $loki:3
    }
 }