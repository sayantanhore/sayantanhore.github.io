"use strict";

/** @namespace
*   'IMG_GAL'
*   ----------
*/
var IMG_GAL = IMG_GAL || {};

/** @sub-namespace
*   'model'
*   --------------
*/
IMG_GAL.model = {
    
    /** @method
    *   'image'
    *   To be called to generate a new image object containing ['index', 'path', 'rendered' and 'feedback']
    *   ---------------------------------------------------------------------------------------------------
    */
    image: function(imgObj){
        
        return ({
            index: imgObj.index,
            path: 'static/images/im' + (parseInt(imgObj.index) + 1) + '.jpg',
            //path: '../static/images/im' + (parseInt(imgObj.index) + 1) + '.jpg',
            rendered: false,
            feedback: 0.0
        })
    }
};