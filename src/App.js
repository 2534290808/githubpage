import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {MuiThemeProvider, AppBar,Drawer} from 'material-ui';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {cyan500} from 'material-ui/styles/colors';
import Blog from "./components/Blog";
const uiTheme=getMuiTheme({
    palette:{
        primary1Color:cyan500
    }
})
export  default  class App extends Component {
    constructor(props){
        super(props);
        this.state={
            open:false
        }
    }
    render() {
        return (
            <MuiThemeProvider muiTheme={uiTheme}>
                <Blog/>
            </MuiThemeProvider>
        );
    }
}

