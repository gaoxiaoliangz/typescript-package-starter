import nodeResolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import json from '@rollup/plugin-json'
// import { uglify } from 'rollup-plugin-uglify';

export default [
  {
    input: 'src/index.ts',
    output: {
      format: 'es',
      sourcemap: true,
      dir: 'esm',
    },
    plugins: [
      nodeResolve({
        preferBuiltins: false,
      }),
      commonjs(),
      typescript({
        declaration: true,
        incremental: false,
        outDir: 'esm',
      }),
      json(),
      // uglify()
    ],
  },
]
