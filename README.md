# starwars
to start this download the repository.
serve the index file via starting nginx
add below config to nginx servers eg.
/usr/local/etc/nginx/servers/starwars.conf
    server {

    listen 80;
    server_name starwars.com;
    root /Users/chinmayee.m/Documents/profile/starwars;
    index index.html;

    location / {
            try_files $uri /index.html;
    }

    }
    
    you can access the page by opening http://starwars.com/starwar in browser.
