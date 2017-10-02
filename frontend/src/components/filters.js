import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {debounce} from 'lodash'
import {
    filterRecipes,
    returnFilterChange
    } from '../actions'

import {connect} from 'react-redux'
import { Slider ,Layout ,Checkbox} from 'antd';

class Filter  extends Component{
    constructor(props) {
        super(props);
        this.state = {
          starredOnly: false,
          query : '',
          maxCookTime: 30,
         
         
        };
      }
      

    render(){
       const{Content} = Layout;

        const {dispatch} = this.props ;
       
        const value = 10
        const marks = {
            0: '0',
            20: '20',
            25: '25',
            30: {
            style: {
                color: '#f50',
            },
            label: <strong>30 minutes</strong>,
            },
        };
        const filterRecipesDebounced = debounce(filterRecipes, 200);
        return(   
            <Content>
                <h2>Filters</h2>
                <br/>
                <div >
                    <p>Max cooking time</p>
                    <Slider marks={marks} defaultValue={37} max={30} onChange={
                        (value) =>{
                            this.setState({maxCookTime : value})
                            filterRecipesDebounced(this.state.starredOnly, this.state.query, value ,(parsedData)=>{
                                dispatch(returnFilterChange(parsedData)) 
                                })
                            }
                        } />
                </div>
                <br />
                <div className="search">
                    <br/>
                    <div className="search-input-wrapper">
                        <label>
                            <p>Search by recipe name or ingredients</p>
                        </label>
                        <input 
                            type="text"
                            placeholder="Name or ingredients"
                            onChange={(event) =>  {
                                event.preventDefault();
                                this.setState({query:event.target.value })
                                filterRecipesDebounced(this.state.starredOnly, event.target.value, this.state.cookTime,(parsedData)=>{
                                    dispatch(returnFilterChange(parsedData)) 
                                    })
    
                                }
                            }                   
                        /> 
                          
                    </div>
                </div> 

                <div className="starred-only-filter" >
                    <br/>
                    <br/>
                    <Checkbox onChange={ (e)=>{
                        this.setState({ starredOnly: e.target.checked})
                        filterRecipesDebounced(e.target.checked, this.state.query, this.state.cookTime,(parsedData)=>{
                                        dispatch(returnFilterChange(parsedData)) 
                                        })
                        }
                    }> Only  show  recipes starred by Joe</Checkbox> 
                   


                </div>  
            </Content>
            )

    }
    
    }



    Filter.PropTypes = {
    dispatch: PropTypes.func.isRequired,
    };
export default connect()(Filter) ;