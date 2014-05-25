JSZip = Npm.require("jszip");

JSZip.prototype.saveAs = function(name, callback) {
  var fs = Npm.require('fs');
  fs.writeFile(
    name,
    this.generate({type: "nodebuffer"}),
    function(error) {
      if (error) {
        if(typeof callback === "function") {
          callback(error, -1);
        } else {
          throw error;
        }
      } else {
        typeof callback === "function" && callback(null, 1);
      }
    }
  );
};
