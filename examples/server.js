var echo = require('../dist/index.js');

var options = {
  	"authHost": "http://localhost",
	"authEndpoint": "/broadcasting/auth",
	"clients": [
		{
			"appId": "f89e0fff22c99cec",
			"key": "0c983538088d6e1df16834c0ee3bd7b2"
		}
	],
	"database": "sqlite",//redis
	"databaseConfig": {
		"redis": {},
		"sqlite": {
			"databasePath": "/database/laravel-echo-server.sqlite"
		}
	},
	"devMode": true,
	"host": null,
	"port": "6001",
	"protocol": "http",
	"socketio": {},
	"secureOptions": 67108864,
	"sslCertPath": "",
	"sslKeyPath": "",
	"sslCertChainPath": "",
	"sslPassphrase": "",
	"subscribers": {
		"http": true,
		"redis": true
	},
	"apiOriginAllow": {
		"allowCors": true,
		"allowOrigin": "*",
		"allowMethods": "GET, POST",
		"allowHeaders": "Origin, Content-Type, X-Auth-Token, X-Requested-With, Accept, Authorization, X-CSRF-TOKEN, X-Socket-Id"
	},
	"publishPresence": true//xem them trong README.md de hieu ro
};

echo.run(options);
