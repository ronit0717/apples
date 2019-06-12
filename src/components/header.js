import React, {Component} from 'react';

class Header extends Component {
    
    state = {
        keyword: ''
    }
        
    inputChangeHandler = (event) => { 
        this.setState({
            keyword: event.target.value
        })
    }

    render(){

        return (
            <header>
                <div className = "logo">Logo</div>
                <input 
                        type="text" 
                        onChange={ this.inputChangeHandler }/>
                <div> {this.state.title} </div>
                <br></br>
            </header>
        )
    }
}

export default Header;