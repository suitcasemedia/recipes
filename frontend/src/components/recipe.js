import React, {Component} from 'react';
import {connect} from 'react-redux' ;
import {loadRecipe} from '../actions';
import {Link} from 'react-router-dom';
import {Layout ,Menu} from 'antd' ;
 

class Recipe extends Component {
   

    componentDidMount(){
        const {id} = this.props.match.params
        this.props.loadRecipe(id);

    }
    ingredients(ingredientsArray){
        return ingredientsArray.map(ingredient =>{
            return (

                <span> {ingredient}</span>
                
            )
        })
        
       
    }


    render(){
        const { Header, Content  } = Layout;
        console.log("the recipe =", this.props.recipe)
        
        const {recipe} = this.props;
        
                if(!recipe){
                    return (
                        <Layout>
                        <Header style={{ width: '100%' }}>
                            <h1 style={{textAlign: 'center', color: '#fff'}}>Recipe detail page</h1>
                        </Header>
                        <Layout style={{paddingTop: 10, paddingLeft: 30}}>
                            <Content>
                            <div>
                                <h3>Sorry, this recipe doesn't exist or may have been removed</h3>
                                <Link to="/" className="btn">Back to index</Link>       
                            </div>
                            </Content>
                        </Layout>
                        
                       
                    </Layout>
                    
                    )
                }

        return(
            <Layout>
                <Header style={{ width: '100%' }}>
                    <h1 style={{textAlign: 'center', color: '#fff'}}>Recipe detail page</h1>
                    
                    
                </Header>
                
                    
                <Menu
                    theme="dark"
                    mode="horizontal"
                >
                    <Menu.Item key="1"><Link to="/" className="btn">Back to index</Link></Menu.Item>
                       
                </Menu>
                <Layout style={{paddingTop: 10, paddingLeft: 30}}>
                    <Content>
                    <div>
                        <h3>{recipe.name}</h3>
                        <p><strong>Ingredients: </strong>{this.ingredients(recipe.ingredients)}</p>
                        <p><strong>Cooking time:</strong> {recipe.cookingTime}</p>
                        <img   src={recipe.imageUrl}/>
                       
                       
                    </div>
                    </Content>
                </Layout>
                
               
            </Layout>
        )
    }
}
function mapStateToProps(state,ownProps){
    console.log("recipes in detail page =" , state.data)
  //return {recipe:state.data};
  return{recipe: state[ownProps.match.params.id]}
    
}
export default connect(mapStateToProps, {loadRecipe})(Recipe)
