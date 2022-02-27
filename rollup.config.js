import typescript from 'rollup-plugin-typescript2'
import { terser } from 'rollup-plugin-terser'
import { description, version, license, homepage, author } from './package.json'
import json from '@rollup/plugin-json'

export default {
  input: 'lib/index.ts',
  output: {
    file: 'index.js',
    format: 'umd',
    indent: false,
    name: 'fuzzy',
    sourcemap: false,
    banner: `/*!
${homepage}
${description}

Version: ${version}
License: ${license}

© 2022 ${author}
*/`
  },
  plugins: [
    json({
      preferConst: true,
      indent: ' ',
      compact: true
    }),
    typescript({
      useTsconfigDeclarationDir: true
    }),
    terser()
  ]
}
