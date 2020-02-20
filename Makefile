install:
	npm install

run-calc:
	npx babel-node src/bin/brain-calc.js

run-even:
	npx babel-node src/bin/brain-even.js

run-gcd:
	npx babel-node src/bin/brain-gcd.js

publish:
	npm run build
	npm publish

lint:
	npx eslint .