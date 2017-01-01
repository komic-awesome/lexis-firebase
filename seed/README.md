使用 valiant-hearts 作为测试数据

```bash
firebase database:set /dict ./dict.json -y
firebase database:set /games ./games.json -y
cd ./valiant-hearts/
node generate.js # generate from ./valiant-hearts.json
firebase database:set /sents ./sents.json -y
firebase database:set /words ./words.json -y
```
