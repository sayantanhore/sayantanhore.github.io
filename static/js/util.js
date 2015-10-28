// Holds the utility functions

"use strict";

/** @namespace
*   'IMG_GAL'
*   ----------
*/
var IMG_GAL = IMG_GAL || {};

/** @sub-namespace
*   'util'
*   --------------
*/
IMG_GAL.util = {
    
    /** @method
    *   'removeUinit'
    *   To be called to remove unit (eg. px or em) from incoming string 'measure' to reveal numeric value
    *   -------------------------------------------------------------------------------------------------
    */
    removeUnit: function(measure){
        //return measure.replace("px", "");
        
        return parseFloat(measure.substr(0, measure.length - 2));
    },
    
    /** @method
    *   'attachUinit'
    *   To be called to attach unit (eg. px or em) to incoming numeric value 'measure'
    *   ------------------------------------------------------------------------------
    */
    attachUnit: function(measure){
        return (measure + 'px');
    },
    
    /** @method
    *   'getPxForEm'
    *   To be called to convert from 'measure' in 'em' to 'measure' in 'px'
    *   -------------------------------------------------------------------
    */
    getPxForEm: function(measure){
        var multiplyWith = this.removeUnit($('body').css("font-size"));
        return measure * multiplyWith;
    }
};