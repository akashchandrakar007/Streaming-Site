import React from 'react';
import PropTypes from 'prop-types';
import {Field,reduxForm} from 'redux-form';

class StreamCreate extends React.Component{

  static propTypes = {
    handleSubmit: PropTypes.func
  }

  renderError({touched,error}){
        if(touched && error){
          return (
             <div className="ui error message">
               <div className="header">{error}</div>
             </div>
          );
        }
  }
  renderInput=(formProps)=>{

    return (

      <div className="field">
      <label>{formProps.label}</label>
      <input {...formProps.input}/>
      <div>{this.renderError(formProps.meta)}</div>
      </div>

    );
  }

  onSubmit(formValues){
    console.log(formValues);
  }

  render(){
       const { handleSubmit } = this.props;

        return (
           <form onSubmit={handleSubmit(this.onSubmit)} className="ui form error">
           <Field name="title" component={this.renderInput} label="Enter Title"/>
           <Field name="description" component={this.renderInput} label="Enter description"/>
           <button className="ui button primary">Submit</button>
           </form>
        );
   }
}

const validate=(formValues)=>{
  const errors={};
  if(!formValues.title){
    errors.title="You must enter a title"
  }

  if(!formValues.description){
    errors.description="You must enter a description"
  }
  return errors;
};
export default reduxForm({form:'StreamCreate',validate:validate})(StreamCreate);
