/** @type {import("jest").Config} */
const config = {
  clearMocks: true,

  coverageProvider: "v8",

  testEnvironment: "node",

  transform: {
    "^.+\\.(t|j)s$": [
      "@swc/jest",
      {
        jsc: {
          target: "es2022",
        },
      },
    ],
  },

  testMatch: [
    "**/__tests__/**/*.test.ts",
    "**/?(*.)+(spec|test).ts",
  ],

  extensionsToTreatAsEsm: [".ts"],
};

export default config;