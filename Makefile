install:
	npm install

run-calc:
	npx babel-node src/bin/brain-calc.js

run-even:
	npx babel-node src/bin/brain-even.js

publish:
	npm publish --dry-run

lint:
	npx eslint .