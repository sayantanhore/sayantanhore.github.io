"use strict";

/** @namespace
*   'IMG_GAL'
*   ----------
*/
var IMG_GAL = IMG_GAL || {};

/** @sub-namespace
*   'Controller'
*   --------------
*/
IMG_GAL.controller = {
    
    /** @method
    *   'firstround'
    *   To be called before the 'view' loads to get the initial set of images
    *   ---------------------------------------------------------------------
    */
    firstround: function(params){
        $.get(params.loc + "/firstround", {no_of_images: params.numberOfImagesPerIteration}).done(function(data){
            console.log(data.results)
            /*
            data = data.replace("[", "")
            data = data.replace("]", "")
            data = data.split(", ")
            */
            data = data.results;
            for (var i = 0; i < data.length; i ++){
                IMG_GAL.globals.addNewImage(IMG_GAL.model.image({
                    index: data[i]
                }));
            }
            
            params.renderGallery();
        });
    },
    
    /** @method
    *   'predict'
    *   To be called 'onClick Next' to get the predicted next set of images
    *   -------------------------------------------------------------------
    */
    predict: function(params){
        $.get(params.loc + "/firstround", {no_of_images: params.numberOfImagesPerIteration}).done(function(data){
            console.log(data.results)
            /*
            data = data.replace("[", "")
            data = data.replace("]", "")
            data = data.split(", ")
            */
            data = data.results;
            IMG_GAL.globals.resetImages();
            for (var i = 0; i < data.length; i ++){
                IMG_GAL.globals.addNewImage(IMG_GAL.model.image({
                    index: data[i]
                }));
            }
            params.deRenderGallery();
            params.renderGallery();
        });
    }
};