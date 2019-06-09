import React, {Component} from 'react';

class Header extends Component {
    
    state = {
        title: 'The keywords are:',
        keyword: ''
    }
        
    inputChangeHandler = (event) => { 
        //console.log(event.target.value);
        this.setState({
            keyword: event.target.value
        })
    }

    render(){
        console.log(this.state.keyword)
        return (
            <header>
                <div className = "logo">Logo</div>
                <input 
                        type="text" 
                        onChange={ this.inputChangeHandler }/>
                <div> {this.state.title} </div>
                <div> {this.state.keyword} </div>
            </header>
        )
    }
}

export default Header;