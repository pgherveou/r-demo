build-en:
	LOCALE=en node node_modules/requirejs/bin/r.js -o  public/build-profile.js

build-fr:
	LOCALE=fr node node_modules/requirejs/bin/r.js -o  public/build-profile.js