#[cfg(target_family="wasm")]
use wasm_bindgen::prelude::*;

#[cfg(target_family="wasm")]
#[wasm_bindgen]
pub fn sayhi() -> String { "hithere".to_string() }
