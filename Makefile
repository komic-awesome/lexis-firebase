clean:
	rm -rf build

build: clean
	mkdir build
	webpack --config ./configs/webpack.production.config.js
	cp ./src/index.html ./build/index.html

dev:
	`npm bin`/webpack-dev-server --devtool eval \
		--progress --hot --content-base src \
		--config ./configs/webpack.development.config.js
