import React, {Component} from 'react';
import  { connect } from 'react-redux';
import  { bindActionCreators } from 'redux';
import  { fetchWeather } from '../actions/index';

class SearchBar extends Component{

    constructor(props){
        super(props);
        this.state = {term : ''}
    }

    onChangeHandler = (event)=>{
        this.setState({term : event.target.value});
    }

    onSubmitHandler = (event)=>{
        event.preventDefault();

        this.props.fetchWeather(this.state.term);

        this.setState({term : ''})
    }
    

    render(){
        return(
          <form
          onSubmit ={this.onSubmitHandler}
          className="input-group">
          <input
            placeholder="Get a five-day weather report"
            className='form-control'
            value={this.state.term}
            onChange = {this.onChangeHandler}
          />
          <span className="input-group-btn" >
          <button type="submit" className="btn  btn-primary">Submit</button>
          </span>
          </form>  
        );
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({fetchWeather}, dispatch);
}

export default connect(null,mapDispatchToProps)(SearchBar);