Package.describe({
  summary: "Create, read and edit .zip files on server",
  environments: 'server'
});

Npm.depends({
  'jszip': '2.2.2'
});

Package.on_use(function (api) {
  api.add_files('lib/saveas.js', 'server');
  api.export(['JSZip'], 'server');
});
