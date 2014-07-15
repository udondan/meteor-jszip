jszip
=============

A Zip package for Meteor. Create, read and edit .zip files on server.

This package packs [JSZip][1] and adds a `saveAs` method to the zip instance for convenience.


##Install
```
mrt add jszip
```


##Documnentation

Full documentation of the API at the original package [JSZip][2].


##Usage
```js
var zip = new JSZip();

// Add content to Zip file
zip.file('textfile.txt', 'Hello World');
zip.file('folder/image.jpg', binaryContent);
zip.file('folder/document.pdf', binaryContentBase64Encoded, {base64: true});

// Save to file on server
zip.saveAs("/path/to/filename.zip");

```

If in an unknown environment you want to save to a folder within the meteor structure, e.g. the `public` folder you can use `process.env["PWD"]` to get to the absolute path:
```js
var path = process.env["PWD"] + "/public/";
zip.saveAs(path + "filename.zip");
```

  [1]: http://stuk.github.io/jszip/
  [2]: http://stuk.github.io/jszip/documentation/api_jszip.html
