/**
 * Created by lmy2534290808 on 2017/9/9.
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {List, ListItem} from 'material-ui';
import blogclasses from '../resources/blogclasses.json';
import Resources from '../resources/Resources';
export default class DrawerContent extends Component {
    constructor() {
        super();
    }

    static propTypes = {
        onItemPress: PropTypes.func,
    }

    _onItemPress(item) {
        this.props.onItemPress && this.props.onItemPress(item)
    }

    render() {
        return (<div><List>{Resources.data.map((item, index) => <ListItem primaryText={item.name} key={index}
                                                                       onClick={()=>this._onItemPress(item)}/>)}</List></div>)
    }
}