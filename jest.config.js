module.exports = {
    roots: ['<rootDir>/src'],
    preset: 'ts-jest',
    collectCoverageFrom: ['src/**/*.{js,ts}', '!<rootDir>/node_modules/'],
    coverageThreshold: {
        global: {
            lines: 90,
            statements: 90,
        },
    },
};
