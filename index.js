/***************************************************************************
 *
 * Copyright (c) 2015 Baidu.com, Inc. All Rights Reserved
 * $Id$
 *
 * @file index.js
 * @author:  osdream(songao@baidu.com)
 * @version: $Revision$
 * @date:    $Date: 2015/05/20 18:11:28$
 * @desc:    
 *
 **************************************************************************/

var through = require('through2');

module.exports = function(logName) {
    logName = logName || 'show-me-file';

    function bufferContents(file, enc, cb) {
        this.push(file);

        console.log('>> [' + logName + '] ' + file.path);

        cb();
    }

    return through.obj(bufferContents);
};




















/* vim: set ts=4 sw=4 sts=4 tw=100 : */
