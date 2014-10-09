Package.describe({
  summary: "Create, read and edit .zip files on server",
  version: "2.2.2_1",
  git: "https://github.com/udondan/meteor-jszip.git",
  environments: 'server'
});

Npm.depends({
  'jszip': '2.2.2'
});

Package.on_use(function (api) {
  api.versionsFrom("METEOR@0.9.0");
  api.add_files('lib/saveas.js', 'server');
  api.export(['JSZip'], 'server');
});
