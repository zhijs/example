// webpack.config.js
module.exports = {
	// ...
	output: {
    libraryTarget: 'umd',
    library:{
      root: 'mylib',
      amd: 'my-lib',
      commonjs: 'my-common-lib'
    }
	}
	//...
}

// bundle.js
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
	  // commonJS2 导出
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
	 // amd 导出
		define([], factory);
	else if(typeof exports === 'object')
	  // commonjs 导出
		exports["my-common-lib"] = factory();
	else
	  // 全局对象属性导出
		root["mylib"] = factory();
})(window, function() {
  return you_lib_code_wrapper
});