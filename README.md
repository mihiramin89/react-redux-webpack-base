## Usage

```sh
npm start # start dev server. navigate to localhost:3000 (points to development backend)
npm run cleanup # removes build, dist, & coverage folders
npm run build # build for production
npm run nsp # node security to help identify known vulnerabilities in project
npm run tests # runs the mocha test specs
npm run tests-coverage # run mocha test specs on the coverage directory
npm run pre-coverage # rungs tests and generates report and outputs to coverage directory
npm run get-coverage # generates coverage report and runs tests-coverage
npm run bump:major # bumps to next major version (x.#.#) and creates version tag
npm run bump:minor # bumps to next minor version (#.x.#) and creates version tag
npm run bump:patch # bumps to next patch version (#.#.x) and creates version tag
```

## Unit testing and code coverage
`Simple App` uses [mocha](https://mochajs.org/) with [chai](http://chaijs.com/), and [istanbuljs/nyc](https://github.com/istanbuljs/nyc) to run code coverage. [How The Test was Won](https://github.com/Koleok/how-the-test-was-won/blob/master/src/index.js) is also used as a short-hand for Mocha tests.

`nyc` generates a viewable report, both in the console (see example below), and an inspectable view at `/simple app/coverage/lcov-report/index.html`. This view will show you which portions of the files are not being tested, and how you can correct this. For details on how to read the console report, [look here](https://stackoverflow.com/questions/26618243/how-do-i-read-an-istanbul-coverage-report).

```
-------------------|----------|----------|----------|----------|----------------|
File               |  % Stmts | % Branch |  % Funcs |  % Lines |Uncovered Lines |
-------------------|----------|----------|----------|----------|----------------|
All files          |      100 |      100 |      100 |      100 |                |
 general           |      100 |      100 |      100 |      100 |                |
  index.js         |      100 |      100 |      100 |      100 |                |
 general/spec      |      100 |      100 |      100 |      100 |                |
-------------------|----------|----------|----------|----------|----------------|
```

Run `npm run get-coverage` to generate these reports. These reports are run on each build, and will fail if unit test coverage for `All files` drops below `90%`.

## Seeing Errors?
1. Check your node version - should be 8.0.0 (package-lock.json might be out of sync)
2. Remove your node modules and try again.
3. Clean npm cache - `npm cache clean`

## Suggestions for Developing:
1. Start with node version 8.0.0 or greater (this automatically updates the package-lock file on npm i)
2. Run command `npm i`
3. Run command `npm start`
4. Navigate to localhost:3000

## Steps before creating a PR
1. Add unit tests (if applicable)
2. Make sure unit tests work - `npm run get-coverage`
3. If adding new modules or updating existing modules run the node security check - `npm run nsp`
