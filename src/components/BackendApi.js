import React, { Component } from 'react'
import axios from 'axios';

export default class BackendApi extends Component {
    constructor(props) {
        super(props)

        this.state = {
            info: ''
        }
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
        return (
            <div>
                <form>
                    <div>
                        <input type="text" name="name" />
                    </div>
                    <div>
                        <input type="text" name="release" />
                    </div>
                    <div>
                        <input type="text" name="subject" />
                    </div>
                </form>
            </div>
        )
    }
}
