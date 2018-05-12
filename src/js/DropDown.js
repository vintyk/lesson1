import React, {Component} from 'react';

class DropDown extends Component {
    constructor(props) {
        super(props);
        this.state = { isOpened: false };
    }

    toggleState() {
        this.setState({ isOpened: !this.state.isOpened})
    }

    render() {
        console.log('isOpened', this.state.isOpened);
        let dropDownTest;
        if (this.state.isOpened) {
            dropDownTest = <div>Все у меня получится</div>;
        }
        return (
            <div>
                Это текст...
                {dropDownTest}
            </div>
        );
    }
}

export default DropDown;