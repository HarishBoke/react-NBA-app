import React, {Component} from 'react';

class Subscriptions extends Component {
    constructor(props){
        super(props);

        this.state = {
            error: false,
            success: false,
            email: ''
        };
    }
    handleSumbmit = () =>{
        //if valid submit 
    }
    onChangeInput = (e) => {
        //valid HTML
        this.setState({
            email: e.target.value
        });
    }
    render(){
        return (
            <div className="subcribe_panel">
            <h3>Subscribe to us</h3>
            <div>
            <form onSubmit={this.handleSumbmit}>
                        <input type="text" 
                        value={this.state.email} 
                        placeholder="yourmail@gmail.com" 
                        onChange={this.onChangeInput}/>
                        <div className={this.state.error ? "error show" : "error"}>Check your mail</div>
                        <div className={this.state.success ? "success show" : "success"}>Thank you</div>
                    </form>
            </div>
    
            <small>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
            </small>
        </div>
        );
    }
}

export default Subscriptions;