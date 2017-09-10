/**
 * Created by lmy2534290808 on 2017/9/9.
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import {lime50} from 'material-ui/styles/colors'
import {Paper, Card, CardHeader, CardText} from 'material-ui';
import $ from 'jquery';
import hello from '../resources/react/hello.markdown';
import Resources from '../resources/Resources';
export default class MainContent extends Component {
    static propTypes = {
        source: PropTypes.any,
        title: PropTypes.string,
        subTitle: PropTypes.string,
    }

    constructor(props) {
        super(props);
        this.state = {
            content: ''
        }
    }

    componentDidMount() {
        this._resolveMarkDown(this.props);
    }

    componentWillReceiveProps(nextProps) {
        this._resolveMarkDown(nextProps)
    }

    _resolveMarkDown(props) {
        let self = this;
        $.get(props.source, function (data) {
            self.setState({content: data})
        }, 'text')
    }

    render() {
        return (<div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 2}}>
            <Card style={{width: '100%', margin: 5, backgroundColor: lime50,padding:15}}><CardHeader subtitleStyle={{marginLeft:50}} subtitle={this.props.subTitle}
                                                                                          titleStyle={{fontSize: 50}}
                                                                                          title={this.props.title}/><CardText
                children={<ReactMarkdown source={this.state.content}/>}/></Card></div>)
    }
}