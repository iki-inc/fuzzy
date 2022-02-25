import typescript from 'rollup-plugin-typescript2'
import { terser } from 'rollup-plugin-terser'

export default {
  input: 'lib/index.ts',
  output: {
    file: 'index.js',
    format: 'umd',
    indent: false,
    name: 'fuzzy',
    sourcemap: false
  },
  plugins: [
    typescript({
      useTsconfigDeclarationDir: true
    }),
    terser()
  ]
}
