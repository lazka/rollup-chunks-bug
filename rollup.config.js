import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

let manualChunks= {
    'lit-element': [ 'lit-element' ],
    'lit-html': [ 'lit-html' ]
};

export default {
    input: ['src/index.js'] ,
    output: {
        dir: 'dist',
        format: 'esm'
    },
    manualChunks: manualChunks,
    plugins: [
        resolve(),
        commonjs(),
    ]
};
