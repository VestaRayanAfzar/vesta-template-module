const vesta = require('@vesta/devmaid');

let aid = new vesta.TypescriptTarget({
    genIndex: true,
    targets: ['es5', 'es6'],
    files: ['.npmignore', 'LICENSE', 'README.md'],
    publish: '--access=public',
    transform: {
        package: (json, target) => {
            if (target === 'es5') {
                json.dependencies['es6-promise'] = '^4.1.0';
                json.devDependencies['@types/es6-promise'] = '^0.0.32';
            }
        },
        tsconfig: (json, target) => {

        }
    }
});

aid.createTasks();