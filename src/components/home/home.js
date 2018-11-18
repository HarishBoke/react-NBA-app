import React, {Component} from "react";
import SimpleSlider from "../shared/slider";

export default class Home extends Component {
    constructor(props){
        super(props);

        this.state = {
            home: []
        }
    }
    getData(){
        fetch('http://localhost:3005/home')
        .then(res => res.json())
        .then(res=>{
            this.setState({
                home: res
            });
        }).catch((err)=> {
            console.error(err);
            
        });
    }
    componentWillMount(){
        this.getData();
    }
    render(){
        return(
            <div>
                <SimpleSlider slides={this.state.home.slider} />
            </div>
        );
    }
}