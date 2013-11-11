/* Backbone Cheatsheet Tracker is similar to
 // http://cheat.markdunkley.com/
 // or
 // http://oscarotero.com/jquery/
 // But it allows the user to track which items she or he has encountered.
 // for instance, during a tutorial.

 */

// Create the Classes

// Each Item describes one Backbone method
var Item = Backbone.Model.extend({
    defaults: {checked: false, fieldsetDown:false}
});

/* Each Heading describes one Backbone object
 // and corresponding description and background-color.
 // One Heading for many Items. Perhaps this should be
 // incorporated into a nested Item class
 */
var Heading = Backbone.Model.extend({});



// Create the first item
//
// Data underlying the tracker is here:
// https://docs.google.com/spreadsheet/ccc?key=0Ao3Ts9D8bHHpdHFzOGlOdFNNLWdVdkhjSUJxbDFEekE&usp=drive_web#gid=2
// (Eventually we'll be able to pull from Google Spreadsheet
//  or directly from Backbone docs)

var itemTrigger = new Item({Method:"trigger", Code: "object.trigger(event, [*args])", Description: "Trigger callbacks for the given event, or space-delimited list of events.", Object:"Events" });


// the following command logs: {"Method":"trigger", "Code": "object.trigger(event, [*args])", "Description": "Trigger callbacks for the  given event, or space-delimited list of events.", "Object":"Events", "checked":false, "fieldsetDown":false }
console.log(JSON.stringify(itemTrigger));
