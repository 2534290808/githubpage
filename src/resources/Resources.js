/**
 * Created by lmy2534290808 on 2017/9/10.
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import props from '../resources/react/props.md';
import hello1 from '../resources/react/hello1.markdown'
const Resources = {
    link: [{name: 'react', children: [{name: 'props', path: "/props"}]}, {
        name: 'react-native',
        children: [{name: 'hello1',path:"/hello1"}]
    }],
    route:[{path:'/props',source:props,title:'props',subTitle:'2017-9-10'},{path:'/hello1',source:hello1}]

}
export default Resources;
