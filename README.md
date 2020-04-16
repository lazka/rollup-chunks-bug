# rollup bug reproducer

```
npm install
npm run build
```

```
!] RangeError: Maximum call stack size exceeded
RangeError: Maximum call stack size exceeded
    at Chunk$1.inlineChunkDependencies (/home/lazka/Desktop/adwwad/rollup-bug/node_modules/rollup/dist/shared/rollup.js:16400:28)
    at Chunk$1.inlineChunkDependencies (/home/lazka/Desktop/adwwad/rollup-bug/node_modules/rollup/dist/shared/rollup.js:16411:22)
    at Chunk$1.inlineChunkDependencies (/home/lazka/Desktop/adwwad/rollup-bug/node_modules/rollup/dist/shared/rollup.js:16411:22)
    at Chunk$1.inlineChunkDependencies (/home/lazka/Desktop/adwwad/rollup-bug/node_modules/rollup/dist/shared/rollup.js:16411:22)
    at Chunk$1.inlineChunkDependencies (/home/lazka/Desktop/adwwad/rollup-bug/node_modules/rollup/dist/shared/rollup.js:16411:22)
    at Chunk$1.inlineChunkDependencies (/home/lazka/Desktop/adwwad/rollup-bug/node_modules/rollup/dist/shared/rollup.js:16411:22)
    at Chunk$1.inlineChunkDependencies (/home/lazka/Desktop/adwwad/rollup-bug/node_modules/rollup/dist/shared/rollup.js:16411:22)
    at Chunk$1.inlineChunkDependencies (/home/lazka/Desktop/adwwad/rollup-bug/node_modules/rollup/dist/shared/rollup.js:16411:22)
    at Chunk$1.inlineChunkDependencies (/home/lazka/Desktop/adwwad/rollup-bug/node_modules/rollup/dist/shared/rollup.js:16411:22)
    at Chunk$1.inlineChunkDependencies (/home/lazka/Desktop/adwwad/rollup-bug/node_modules/rollup/dist/shared/rollup.js:16411:22)
```