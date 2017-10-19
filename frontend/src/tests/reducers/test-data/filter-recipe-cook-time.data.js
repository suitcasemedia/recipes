

  
export const  filterInitialState  = {  
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
          revision:0,
          created:1507938892607,
          version:0
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
          revision:0,
          created:1507938892608,
          version:0
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
       starredByJoe:false,
       id:2,
       cookingTimeInt:25,
       meta:{  
          revision:0,
          created:1507938892608,
          version:0
       },
       $loki:3
    }
 }

export const filterActionCT = {  
    type:'FILTER_RECIPES',
    payload:[  
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
          starredByJoe:false,
          id:2,
          cookingTimeInt:25,
          meta:{  
             revision:0,
             created:1507938892608,
             version:0
          },
          $loki:3
       }
    ]
 }
 
export const expectedStateFCT = {  
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
       starredByJoe:false,
       id:2,
       cookingTimeInt:25,
       meta:{  
          revision:0,
          created:1507938892608,
          version:0
       },
       $loki:3
    }
 }

