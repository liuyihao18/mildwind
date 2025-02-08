# 队列

基于官方的`Data.Sequence`库实现的队列，也是为了方便自己代码的抽象。

> 安装：`cabal install --lib containers`

<<< ./src/queue.hs{haskell}

函数名顾名思义，我就不多做解释了，其中的`view`方法仿照了官方`Data.Heap`数据类型中的定义方式。
