module.exports = {
  presets: [
      [ '@babel/preset-env', { targets: { esmodules: true } } ],
      [ '@babel/preset-react', { runtime: 'automatic' } ],
  ],plugins: [
    ['module-resolver', {
      root: ['./src'],
      alias: {
        '@': './src',
      },
    }],
  ],
};