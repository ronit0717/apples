import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import JSON from './db.json';

//COMPONENTS
import Header from './components/header';
import NewsList from './components/news_list';


class App extends Component {
    state = {
        news : JSON,
        filtered : []
    }

    getKeyword = (event) => {
        //console.log(event.target.value);

        let keywords =  event.target.value;
        let filtered = this.state.news.filter((item) => {
            return item.title.indexOf(keywords) > -1
        });

        this.setState({
            filtered
        })
    }

    render(){

        //Alias
        let newsFiltered = this.state.filtered;
        let newsWhole = this.state.news;
        
        return (
            <div>
                <Header keywords={this.getKeyword}/>
                <NewsList news = {newsFiltered.length === 0 ? newsWhole : newsFiltered}>
                    <h3 style={{textAlign:'center'}}>
                        Apples Headlines
                    </h3>
                </NewsList>
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'));