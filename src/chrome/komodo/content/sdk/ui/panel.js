/**
 * @copyright (c) 2016 ActiveState Software Inc.
 * @license Mozilla Public License v. 2.0
 * @author CareyH
 * @overview Page sub module for the wizard SDK module
 *
 */

var parent = require("./container");
var Module = Object.assign({}, parent); 
module.exports = Module;

// Main module (module.exports)
(function() {
    
    this.Model = Object.assign({}, this.Model);
    
    (function() {
        
        this.name = "panel";
        
        this.init = this.initWithElement;
        
        /**
         * Show the panel.
         *
         * @param {object} args, options object can contain the following:
         *   
         *    {
         *        anchor : dom object to anchor to,
         *        position:   "before_start, before_end, after_start, after_end, start_before, start_after, end_before, end_after, overlap, and after_pointer",
         *        x : number,
         *        y : number,
         *        isContextMenu : bool,
         *        attributes : bool,
         *        triggerEvent : event)
         *    }
         *    ref: https://developer.mozilla.org/en-US/docs/Mozilla/Tech/XUL/Method/openPopup
         * 
         */
        this.open = function panel_open(args = {})
        {
            var anchor =  args.anchor || null;
            var position = args.position || null;
            var x = args.x || 0;
            var y = args.y || 0;
            var isContextMenu = args.isContextMenu || false;
            var attributesOverride = args.attributes || false;
            var triggerEvent = args.triggerEvent || null;
            this.element.openPopup(anchor,
                                   position,
                                   x,
                                   y,
                                   isContextMenu,
                                   attributesOverride,
                                   triggerEvent)
        };
        
    }).apply(this.Model); 
    
}).apply(Module);
