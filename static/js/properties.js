"use strict";

/** @namespace
*   'IMG_GAL'
*   ----------
*/
var IMG_GAL = IMG_GAL || {};

/** @sub-namespace
*   'globals'
*   --------------
*/
IMG_GAL.globals = (function(){
    
    /* server path */
    var loc = window.location.pathname.substr(0, window.location.pathname.indexOf("/"));
    
    /* screen height */
    var screenHeight = $(window).height();
    
    /* screen width */
    var screenWidth = parseFloat($(window).width() * 100) / 100;
    
    /* fraction of screen height as initial height of images */
    var rowHeightDivideFactor = 3.5;
    
    /* width left in a row (needed to place images in a row one after another) */
    var availableWidth = 0;
    
    /* the images array (holds the image objects)
    *  refer to @sub-namespace: IMG_GAL.model
    */
    var images = [];
    
    /* number of images to show per iteration */
    var numberOfImagesPerIteration = 12;
    
    /* set of getters and setters for the aforementioned variables */
    return {
                    getScreenHeight: function(){
                        return screenHeight;
                    },
                    getScreenWidth: function(){
                        return screenWidth;
                    },
                    getRowHeightDivideFactor: function(){
                        return rowHeightDivideFactor;
                    },
                    setAvailableWidth: function(){
                        
                    },
                    getAvailableWidth: function(){
                        return availableWidth;
                    },
                    resetImages: function(){
                        images = [];
                    },
                    addNewImage: function(imgModelObj){
                        images.push(imgModelObj);
                    },
                    getImages: function(){
                        return images;
                    },
                    getNumberOfImagesPerIteration: function(){
                        return numberOfImagesPerIteration;
                    },
                    getLoc: function(){
                        return loc;
                    }
                }
})();