import React, { Component } from 'react'

export default class NewsApi extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: []
        }

    }

    componentDidMount() {

        const endpoint = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=';

        const key = 'c4abb60cc9534bb7958d8bc984a81f69';
    }




    render() {
        return (
            <div>
                
            </div>
        )
    }
}