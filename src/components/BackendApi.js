import React, { Component } from 'react'
import axios from 'axios';

export default class BackendApi extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            release: '',
            subject: ''
        }
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitHandler = (e) => {
        e.preventDefault()
        console.log(this.state)
    }

    componentDidMount() {

        const api = 'http://localhost:8080/comments';

        // axios.get(api)
        // .then(Response => {
        //     console.log(Response);
        //     // this.setState({
        //     //     info: Response
        //     // })
        // })
        axios.post(api, {
            name: 'Catsandra',
            release: 2019,
            subject: 'Catsandra is the fanciest cat in town!'
        })
        .then(Response => {
            console.log(Response)
        })
        .catch(error => {
            console.log(error);
        })

    }


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
