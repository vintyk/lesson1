import React, {Component} from 'react';

class Registration extends Component {
    constructor(props) {
        super(props);
        this.state = {
          email: ''
        };
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        console.log('Форма засабмитилась...', this.state.email);
    }

    handleEmailChange(event){
        console.log('E-Mail изменился...', event.target.value);
        this.setState({email: event.target.value})
    }

    render() {
     return (
         <form onSubmit={this.handleSubmit}>
             <input
                 type="text"
                 placeholder="Ваш E-Mail"
                 value={this.state.email}
                 onChange={this.handleEmailChange}/>
             <button type="submit" className="expanded success button">Засабмитить значение</button>
         </form>
     );
    }
}

export default Registration;