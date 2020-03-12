var express = require('express');
var cors = require('cors');
var compression = require('compression');
var path = require('path');

var app = express();
app.use(compression());

app.use(
	cors({
		origin: true,
		methods: 'POST, GET, PUT, DELETE, OPTIONS',
		exposedHeaders: 'Content-Range, X-Content-Range',
		credentials: true,
		allowedHeaders:
			'Cache-Control, Origin, Authorization, Content-Type, X-Requested-With'
	})
);

const hotel = express();
const DIST_FOLDER = path.join(process.cwd(), 'dist');


hotel.get('*', express.static(path.join(DIST_FOLDER, 'MicroApp1')));
hotel.get('*', (req, res) => {
	res.sendFile(path.join(DIST_FOLDER, 'MicroApp1') + '/index.html');
});

app.use('/hotel/', hotel);

app.use(express.static(path.join(DIST_FOLDER, 'MicroApp1')));

app.listen(process.env.PORT || 4200, function() {
	console.log(
		'HTTP server started listening on port: %s',
		process.env.PORT || 4200
	);
});
