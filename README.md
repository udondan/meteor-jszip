jszip
=============

A Zip package for Meteor. Create, read and edit .zip files on server.


##Install
```
mrt add jszip
```


##Documnentation

Full documentation at the original package [JSZip][1].

This bundle only adds a saveAs method.

##Usage
```
var zip = new JSZip();

// Add content to Zip file
zip.file('textfile.txt', 'Hello World');
zip.file('folder/image.jpg', binaryContent);
zip.file('folder/document.pdf', binaryContentBase64Encoded, {base64: true});

// Save to file on server
zip.saveAs("/path/to/filename.zip");

```

  [1]: https://github.com/eligrey/FileSaver.js
