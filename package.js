Package.describe({
  name: 'trinisofttechnologies:keepalive',
  summary: "Trinisoft Technologies's package keeps your app alive on meteor or heroku.",
  version: '1.0.1',
  git: 'https://github.com/trinisofttechnologies/keepalive.git'
});

Npm.depends({
});


Package.on_use(function (api) {
	api.use('http@1.0.0');

  api.add_files('common.js', ['client', 'server']);
  api.add_files('server.js', ['server']);

  if(api.export){
		api.export("KeepAlive",['client', 'server']);
	}
});