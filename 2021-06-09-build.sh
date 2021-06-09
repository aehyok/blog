


echo "5秒后将自动退出本脚本："
for i in $(seq 5 -1 1)
do
  echo -e $i;sleep 1
done
exit