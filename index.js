
var fastft = require('fastft-api-client');

fastft.config('host', 'http://clamo.ftdata.co.uk/api');

setInterval(function () {
	fastft
		.search()
		.then(function (data) {
			var h = data.posts.map(function (post) {
				return [ post.title, new Date(post.datepublished*1000).toISOString() ];
			}).join("\n");
			console.log(h); // render
		})
	}, 5000);
