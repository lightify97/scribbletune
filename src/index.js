'use strict';import { mode } from './mode';import { chord } from './chord';import { clip } from './clip';import { render } from './render';exports = module.exports = (() => {	return {		mode: mode,		chord: chord,		clip: clip,		render: render	};})();