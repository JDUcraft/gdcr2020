module.exports = {
    coverageProvider: "v8",
    testEnvironment: "node",
    transform: {
        "^.+\\.(ts)$": "ts-jest"
    },
    testMatch: [
        "**/*.spec.ts",
    ],
};
