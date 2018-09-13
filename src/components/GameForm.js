import React from 'react';
import classnames from 'classnames';
import { connect } from 'react-redux';
import { saveGame,fetchedGame } from '../actions/index';
import { Redirect } from 'react-router-dom';



class GameForm extends React.Component{
    constructor(props){
        super(props);
        this.state={
            username:'',
            cover:'',
            loading:false,
            done:false,
            errors:{}
        }
    }
    handleChange = (ev) => {
        if(this.state.errors[ev.target.name]){
            let errors =Object.assign({},this.state.errors);
            delete errors[ev.target.name]

            this.setState({
                [ev.target.name]:ev.target.value,
                errors
    
            })
        }else{
            this.setState({
                [ev.target.name]:ev.target.value
            })
        }
       

    
    }

    handleSubmit = (ev) => {
        ev.preventDefault();
        let errors={};
        if(this.state.username==='') errors.username="用户名不能为空";
        if(this.state.cover==='') errors.cover='图片地址不能为空';
        this.setState({ errors });
        let isValue = Object.keys(errors).length ===0;
        if(isValue){
            let {username,cover} = this.state;
            this.setState({ loading:true })
            this.props.saveGame({ username,cover}).then(
                ()=>{ this.setState({ done: true })},
                (err)=> err.response.json().then((errors)=>{ this.setState({errors,loading:false})} )

                )
        }

    }
    componentDidMount(){
        const { match } = this.props;
        if(match.params._id){
            this.props.fetchedGame(match.params._id);

        }
    }
    render(){
        const form=(
            <form className={ classnames('ui','form',{loading:this.state.loading})} onSubmit={this.handleSubmit}>
             <h1>新增用户信息表</h1>
             {!!this.state.errors.global && <div className='ui negative message'>{this.state.error.global}</div>}
             <div className={ classnames('filed',{ error: !!this.state.errors.username})}>
               <label htmlFor='name'>用户名：</label>
               <input type='text' value={ this.state.username }  onChange={ this.handleChange} name='username'/>
               <span>{this.state.errors.username}</span>
             </div>
             <br/> 
             <div className={ classnames('filed',{error: !!this.state.errors.cover})}>
               <label htmlFor='cover'>图片地址</label>
               <input type='text' name='cover' value={ this.state.cover } onChange={ this.handleChange} />
               <span>{this.state.errors.cover}</span>
             </div>
             <br/>
             <div className='filed'>
               {this.state.cover && <img src={this.state.cover} alt='cover'  className='ui small bordered image'/>}
             </div>
             <br/>
             <div className="ui two bottom attached buttons">
             
                
                <button className="ui button primary">提交</button>
            </div>
           </form>
        )
        return (<div>
            { this.state.done ? <Redirect to='/games'/>: form}
        </div>)
    }
}

const mapStateToProps = (state) => {
    return {

    }
}

export default connect(mapStateToProps,{ saveGame,fetchedGame })(GameForm)

