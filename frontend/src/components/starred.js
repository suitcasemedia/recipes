import  FontAwesome  from 'react-fontawesome';
import {PropTypes} from 'prop-types';
import React from 'react'
import {starRecipe} from '../actions'
import {connect} from 'react-redux'

let  Starred = (props) =>{
  
    const {recipe, dispatch} = props ;
    const {starredByJoe ,id } = recipe;
    const isStarred = (recipe)=>{
        if(starredByJoe === false){
            return <span> <i className="fa fa-star-o" aria-hidden="true"></i> Not starred by Joe </span>
        }
        else{
            return (<span> <i className="fa fa-star" aria-hidden="true"></i> starred by Joe </span>)
        }
    }
  
    return (
        <div style={{paddingTop: 10}}>
            <button onClick={()=>{
                dispatch(starRecipe(id,recipe))
                
                
            }}>
            {isStarred(recipe)}

            </button>   
        </div>
    )
}
Starred = connect()(Starred)
Starred.contextTypes  = {
    store: PropTypes.object.isRequired
}


export default Starred