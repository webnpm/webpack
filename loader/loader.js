/*
 * @Author: 大蒙
 * @Date: 2023-09-01 12:29:36
 * @LastEditors: 大蒙
 * @LastEditTime: 2023-09-01 13:42:11
 * @FilePath: \webpack\loader\loader.js
 * @Description: 
 * 
 * Copyright (c) 2023, All Rights Reserved. 
 */
import { urlToRequest } from 'loader-utils';
import { validate } from 'schema-utils';

const schema = {
    type: 'object',
    properties: {
        test: {
            type: 'string',
        },
    },
};

export default function (source) {
    const options = this.getOptions();

    validate(schema, options, {
        name: 'Example Loader',
        baseDataPath: 'options',
    });

    source = source.replaceAll('red', 'green')
    //   console.log('The request path', urlToRequest(this.resourcePath),source);
    console.log('source', source);
    console.log('source', typeof source);

    // 对资源应用一些转换……

    //   return `export default ${JSON.stringify(source)}`;
    return source
}