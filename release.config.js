module.exports = {
    release: {
        branches: ["main"]
    },
    plugins: [
        '@semantic-release/npm',
        [
            '@semantic-release/git',
            {
                assets: ['package.json'],
                message: '${nextRelease.version}',
            },
        ],
    ],
}
