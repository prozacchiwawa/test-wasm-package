all:
	cargo build --release --no-default-features
	cargo build --release --target wasm32-unknown-unknown
	wasm-pack build --scope=prozacchiwawa-factory
	cd pkg && npm link
	cd use-test && npm install && npm link @prozacchiwawa-factory/test_wasm && npm run build
