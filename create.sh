git init
MORE=`cat site`
git config --global user.email "support@download-site.com"
git config --global user.name "Site Downloader"
#wget -r -l1 -k -p --restrict-file-names=ascii --user-agent="Mozilla/5.0 (Windows NT 6.1; WOW64; rv:26.0) Gecko/20100101 Firefox/26.0" http://$MORE
wget \
     --recursive \
     --no-clobber \
     --page-requisites \
     --html-extension \
     --convert-links \
     --restrict-file-names=windows \
     --domains website.org \
     --no-parent \
     http://$MORE
echo '# '[$MORE]'(http://site-downloader.tk/'$MORE'/)'>>README.md
git add .
git commit -m $MORE
git push -u origin master
