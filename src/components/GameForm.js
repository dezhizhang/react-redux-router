import React from 'react';


class GameForm extends React.Component{
    constructor(props){
        super(props);
        this.state={
            username:'',
            cover:''
        }
    }
    handleChange = (ev) => {
        this.setState({
            [ev.target.name]:ev.target.value

        })

    
    }

    handleSubmit = (ev) => {
        ev.preventDefault();
        
    }
    render(){
        return (<div>
           <form className='ui form' onSubmit={this.handleSubmit}>
             <h1>新增用户信息表</h1>
             <div className='filed'>
               <label htmlFor='name'>用户名：</label>
               <input type='text' value={ this.state.username }  onChange={ this.handleChange} name='username'/>
             </div>
             <br/>
             <div className='filed'>
               <label htmlFor='cover'>图片地址</label>
               <input type='text' name='cover' value={ this.state.cover } onChange={ this.handleChange} />
             </div>
             <br/>
             <div className='filed'>
               {this.state.cover && <img src={this.state.cover} alt='cover'  className='ui small bordered image'/>}
             </div>
             <br/>
             <div class="ui two bottom attached buttons">
             
                
                <div class="ui button primary">提交</div>
            </div>
           </form>
        </div>)
    }
}

export default GameForm;

