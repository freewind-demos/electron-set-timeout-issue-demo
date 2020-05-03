Electron Set Timeout Demo
=========================

测试在Electron下`setTimeout`是否正常运行。

之前在某处发现`setTimeout(()=>{}, 1)`与`setTimeout(()=>{}, 200)`实际上是几乎同时执行的，
不过在这个测试中没有发现该问题。可能是electron版本或者别的原因。

发现另一种可能：队列中已经有了大量的任务，结果有一个任务特别耗时，把后面的任务都挤到一起去了。

```
npm install
npm start
```
