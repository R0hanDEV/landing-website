
import postcssImport from 'postcss-import';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

export default {
  plugins: [
    postcssImport,
    tailwindcss,
    autoprefixer,  // Adds vendor prefixes for browser support
  ],
}
