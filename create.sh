git init
git config --global user.email "support@download-site.com"
git config --global user.name "Site Downloader"
wget -r -l1 -k -p --restrict-file-names=ascii --user-agent="Mozilla/5.0 (Windows NT 6.1; WOW64; rv:26.0) Gecko/20100101 Firefox/26.0" http://$1
git add .
git commit -m $1
git push -u origin master
