/**
 * Created by lmy2534290808 on 2017/9/9.
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {MuiThemeProvider, AppBar, Drawer, ListItem, List, Paper} from 'material-ui';
import DrawerContent from "./DrawerContent";
import ReactMarkdown from 'react-markdown';
import Resources from '../resources/Resources';
import $ from 'jquery';
import hello from '../resources/react/hello.markdown';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import MainContent from "./MainContent";
export default class Blog extends Component {
    constructor() {
        super();
        this.state = {
            open: false,
        }
        this._hiddenDrawer=this._hiddenDrawer.bind(this)
    }
    _hiddenDrawer(){
        this.setState({open:false})
    }
    render() {
        return (<Router>
            <div><AppBar zDepth={2} onLeftIconButtonTouchTap={() => this.setState({open: true})} title="my blog"/>
                {Resources.route.map((item, index) => <Route key={index} path={item.path}
                                                             component={() => <MainContent source={item.source} title={item.title} subTitle={item.subTitle}/>}/>)}
                <Drawer
                    docked={false}
                    width={200}
                    open={this.state.open}
                    onRequestChange={(open) => this.setState({open})}
                ><List>{Resources.link.map((item, index) => <ListItem key={index} primaryText={item.name}
                                                                      primaryTogglesNestedList={true}
                                                                      nestedItems={item.children.map((itemChildren, itemIndex) =>
                                                                         <Link key={itemIndex} to={itemChildren.path} ><ListItem onClick={this._hiddenDrawer}
                                                                             primaryText={itemChildren.name}/></Link>)}/>)}</List></Drawer>
            </div>
        </Router>)
    }
}