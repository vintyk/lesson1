import React, {Component} from 'react';
import './css/foundation.min.css';
import Header from "./js/Header";
import Registration from "./js/Registration"

const menu = [
    {
        link: '/articles',
        label: 'Articles'
    },
    {
        link: '/contacts',
        label: 'Contacts'
    },
    {
        link: '/posts',
        label: 'Posts'
    }
];

class App extends Component {
    render() {
        return (
            <div>
                <Header items={menu} />
                <Registration/>
            </div>
        )
    }
}

export default App;
