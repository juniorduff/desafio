// module.exports = {
//   presets: [
//     ["@babel/preset-env", { target: { node: "current" } }],
//     "@babel/preset-typescript",
//   ],
//   plugin: [
//     [
//       "module-resolver",
//       {
//         alias: {
//           "@modules": ["./src/modules"],
//           "@config": ["./src/config"],
//           "@shared": ["./src/shared"],
//           "@errors": ["./src/errors"],
//           "@utils": ["./src/utils"],
//         },
//       },
//     ],
//     "babel-plugin-transform-typescript-metadata",
//     ["@babel/plugin-proposal-decorators", { legacy: true }],
//     ["@babel/plugin-proposal-class-properties", { loose: true }],
//   ],
// };
module.exports = {
  presets: [
    ["@babel/preset-env", { targets: { node: "current" } }],
    "@babel/preset-typescript",
  ],
  plugins: [
    [
      "module-resolver",
      {
        alias: {
          "@modules": "./dist/modules",
          "@config": "./dist/config",
          "@shared": "./dist/shared",
          "@errors": "./dist/errors",
          "@utils": "./dist/utils",
        },
      },
    ],
    "babel-plugin-transform-typescript-metadata",
    ["@babel/plugin-proposal-decorators", { legacy: true }],
    ["@babel/plugin-proposal-class-properties", { loose: true }],
  ],
};
