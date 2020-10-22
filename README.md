# q3df-front
Q3Defrag frontend based on InfernoJS and SASS.

# Running
1. `npm install`
2. `npm start dev` to generate development builds or `npm start build` to generate production builds.

# Nginx config
```
server {
	server_name  q3df.nuc;

	set $root_path /home/nuc/www/q3df_front/public;
	root $root_path;
	charset utf-8;
	index   index.html index.htm;

	error_log  /home/nuc/www/q3df_front/logs/nginx-error.log;

	client_max_body_size 8m;

	# serve static files directly
	location ~* ^.+.(jpg|jpeg|gif|png|webp|ico|html|xml|txt|woff|woff2)$ {
		root              $root_path;
		access_log        off;
		expires           max;
	}

	## Only allow these request methods ##
	## Do not accept DELETE, SEARCH and other methods ##
	if ($request_method !~ ^(GET|HEAD|POST)$ ) {
		return 444;
	}
}
```

# Notes
You need to have a web server already installed and pointed to the `public` folder