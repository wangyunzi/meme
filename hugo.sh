hugo

# cd public

time=$(date "+%Y-%m-%d %H:%M:%S")
echo $time

git add .
git commit -m "first commit 🌈$time"
git push
exit