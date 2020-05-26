import React, { Component } from 'react'
import axios from 'axios';
import { Grid, Image, Reveal } from 'semantic-ui-react'

export default class NewsApi extends Component {
    constructor(props) {
        super(props)

        this.state = {
            resp: []
        }

    }

    componentDidMount() {

        const endpoint = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=';
        const key = 'c4abb60cc9534bb7958d8bc984a81f69';

        axios.get(endpoint+key)
        .then(Response => {
            console.log(Response.data.articles)

            this.setState({
                resp: Response.data.articles
            })
            console.log(this.state.resp)
        })
        .catch(error => {
            console.log(error)
        })
    }




    render() {
        return (
            <div>

                {this.state.resp.map((iterate) => {

                    return (
                        <div>
                            {/* <h2> {iterate.author} </h2> 
                            <h3> {iterate.description} </h3>
                            <h3> {iterate.title} </h3>
                            <a href={iterate.url}>
                                <img src={iterate.urlToImage} />
                            </a> */}

                        <Grid inverted>
                            <Grid.Row>
                                <Grid.Column width={5}>
                                    <Reveal animated='move up'>
                                        <Reveal.Content visible>                                     
                                            <Image src='https://www.ehotelsasia.com/wp-content/uploads/2018/10/Black-Background-DX58.jpg' />                                        
                                        </Reveal.Content>
                                        <Reveal.Content hidden>
                                            <a href={iterate.url}>
                                            <Image src={iterate.urlToImage} />
                                            </a>
                                        </Reveal.Content>                   
                                    </Reveal>
                                    
                                </Grid.Column>

                                <Grid.Column width={11}>
                                    <h2> {iterate.author} </h2> 
                                    <h3> {iterate.description} </h3>
                                    <h3> {iterate.title} </h3>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                            
                        </div>
                    )
                })}

            </div>
        )
    }
}
