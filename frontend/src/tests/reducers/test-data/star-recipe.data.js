export const starInitialState ={  
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

export const  starAction  = 
 {  
    type:'STAR_RECIPE',
    payload:{  
       name:'Lemon Chicken',
       imageUrl:'http://ichef.bbci.co.uk/food/ic/food_16x9_608/recipes/lemonchicken_11654_16x9.jpg',
       ingredients:[  
          'Chicken',
          'Lemon',
          'Thyme'
       ],
       cookingTime:'30 minutes',
       starredByJoe:true,
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
 }

export const expectedStateStarred = {  
    '0':{  
       name:'Lemon Chicken',
       imageUrl:'http://ichef.bbci.co.uk/food/ic/food_16x9_608/recipes/lemonchicken_11654_16x9.jpg',
       ingredients:[  
          'Chicken',
          'Lemon',
          'Thyme'
       ],
       cookingTime:'30 minutes',
       starredByJoe:true,
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