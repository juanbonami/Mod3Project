import React, { Component } from 'react'
import axios from 'axios';

export default class BackendApi extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            subject: '',
            release: ''
        }
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitHandler = (e) => {
        // post method works in postman but seems to fail when i run the code...
        e.preventDefault()
        console.log(this.state)
        // const api = 'http://localhost:8080/comments';
        axios.post('http://localhost:8080/comments',this.state)
        .then(Response => {
            console.log(Response)
        })
        .catch(error => {
            console.log(error);
        })
    }

    // componentDidMount() {

        

    //     // axios.get(api)
    //     // .then(Response => {
    //     //     console.log(Response);
    //     //     // this.setState({
    //     //     //     info: Response
    //     //     // })
    //     // })
        

    // }


    render() {
        const { name, release, subject } = this.state
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <div>
                        <input type="text" name="name" value={name} onChange={this.changeHandler} />
                    </div>
                    <div>
                        <input type="text" name="release" value={release} onChange={this.changeHandler} />
                    </div>
                    <div>
                        <input type="text" name="subject" value={subject} onChange={this.changeHandler} />
                    </div>

                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}
