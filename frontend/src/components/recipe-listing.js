import _ from 'lodash';
import React, { Component } from 'react';
import '../App.css';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom'
import {loadRecipes} from '../actions/';
import Starred from './starred';
import { Layout,Menu} from 'antd';
import Filters from './filters';


class RecipeListing extends Component {

    componentDidMount(){
        this.props.loadRecipes(); 
       
    }
   
    renderRecipes(){   
            return  _.map(this.props.recipes, recipe =>{
              return (
                <li className="recipe-item" key={recipe.id} style={{height: 100 ,margin: 10}}>
                    <div>
                    
                    <Link to={`/recipe/${recipe.id}`}>
                      <img width="152" height="86"  src={recipe.imageUrl} style={{float: 'left',paddingRight: 10}}/>
                   </Link>
                    <Link to={`/recipe/${recipe.id}`}><p><strong>{recipe.name}</strong></p></Link>
                    <p><strong>Cooking time:</strong> {recipe.cookingTime}</p>
                    <p><strong>Ingredients:</strong> {this.ingredients(recipe.ingredients)}</p>
                    <Starred recipe={recipe} style={{float: 'right'}} />
                    </div>           
                 </li>
                 
                 
               
              )
            })   
    }

    ingredients(ingredientsArray){
      return ingredientsArray.map(ingredient =>{
          return (

               `- ${ingredient}  `
              
          )
      })
      
     
  }
  noMoreRecipes(){
    if(this.props.recipes.length < 1 ||  _.isEmpty( this.props.recipes) ) {
      return (<div><h4>Sorry, we currently have no recipes for you</h4></div>)
    }
  }
  

  render() {
    const { Header, Content, Footer, Sider } = Layout;
    /***** this stuff is for pagination - (not yet implemented) ******/
    //const { currentPage, recipesPerPage } = this.props;
    // Logic for displaying current recipes
    // offset is current page * items perpage
    // const indexOfLastRecipe = currentPage * recipesPerPage;
    //const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
    
    return (
      <div>
         <Header style={{ width: '100%' }}>
                    
                   <h1 style={{textAlign: 'center', color: '#fff'}}>Recipe listing page</h1>
                    
                </Header>
      <Layout>
       
        <Sider
        style={{ padding: 24, background: '#ccc' }}
          breakpoint="lg"
          collapsedWidth="0"
          onCollapse={(collapsed, type) => { console.log(collapsed, type); }}
        >
       
          <Filters  />  
        </Sider>
        <Layout>
          <Content style={{ margin: '24px 16px 0' }}>
            <h2>Recipes</h2>
          
            {this.noMoreRecipes()}
           
            <div className="recipe-list">
              <ul>
                {this.renderRecipes()}
              </ul>
            </div>
          </Content>
          <Footer>
            
          </Footer>
        </Layout>
       
      </Layout>
      
      
      </div>
        
    )
  }
}

function  mapStateToProps(state){
    return{ recipes: state
    }
}
export default connect(mapStateToProps,{loadRecipes})( RecipeListing) ;