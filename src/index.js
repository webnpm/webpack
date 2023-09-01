/*
 * @Author: 大蒙
 * @Date: 2023-09-01 05:20:09
 * @LastEditors: 大蒙
 * @LastEditTime: 2023-09-01 11:05:00
 * @FilePath: \webpack\src\index.js
 * @Description: 
 * 
 * Copyright (c) 2023, All Rights Reserved. 
 */
import _ from 'lodash';
import './style.css';
function component() {
    const element = document.createElement('div');
    element.classList.add('hello');
    console.log(_)
    // lodash（目前通过一个 script 引入）对于执行这一行是必需的
    // element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.append('123')
    return element;
}

document.body.appendChild(component());

console.log('source map!!!')
console.log(a); //这一行肯定会报错