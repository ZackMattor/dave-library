// Find name for application
var Faces = function() {
  this.origin = "http://facesofdave.org";
  this.faces = [];
  // After we break into multiple face groups
  this.group = "dave";
}

Faces.prototype = {
  load: function(callback) {
    $.get(this.origin + '/faces.json', function(data) {
        
    });
  },

}
