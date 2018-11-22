// @ts-nocheck
'use strict';
// detect-browser.js v1.0.0
// Get Browser Data

// MIT License

// Copyright (c) 2018 Ahmad Raza

// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.


function isMobile() {
	return /Mobi/.test(navigator.userAgent);
}

function getBrowserName() {
	// Opera 8.0+
	if ((window.opr && window.opr.addons)
		|| window.opera
		|| navigator.userAgent.indexOf(' OPR/') >= 0) {
		return 'Opera';
	}

	// Firefox 1.0+
	if (typeof InstallTrigger !== 'undefined') {
		return 'Firefox';
	}

	// Safari 3.0+ "[object HTMLElementConstructor]"
	if (/constructor/i.test(window.HTMLElement) || (function (p) {
		return p.toString() === '[object SafariRemoteNotification]';
	})(!window['safari'])) {
		return 'Safari';
	}

	// Internet Explorer 6-11
	if (/* @cc_on!@*/false || document.documentMode) {
		return 'Internet Explorer';
	}

	// Edge 20+
	if (!(document.documentMode) && window.StyleMedia) {
		return 'Microsoft Edge';
	}
	
	// Chrome
	if (window.chrome) {
		return 'Chrome';
	}
}

function getOSName() {
	var os;
	if (isMobile()) {
		if (/Windows/.test(navigator.userAgent)) {
			os = 'Windows';
			if (/Phone 8.0/.test(navigator.userAgent)) {
				os += ' Phone 8.0';
			} else if (/Phone 10.0/.test(navigator.userAgent)) {
				os += ' Phone 10.0';
			}
		} else if (/Android/.test(navigator.userAgent)) {
			function androidVersion() {
				if (/Android/.test(navigator.appVersion)) {
					var v = (navigator.appVersion).match(/Android (\d+).(\d+)/);
					return v;
				}
			}

			var ver = androidVersion();
			os = ver[0];
		} else if (/iPhone;/.test(navigator.userAgent)) {
			function iOSversion() {
				if (/iP(hone|od|ad)/.test(navigator.appVersion)) {
					var v = (navigator.appVersion).match(/OS (\d+)_(\d+)_?(\d+)?/);
					return [parseInt(v[1], 10), parseInt(v[2], 10), parseInt(v[3] || 0, 10)];
				}
			}

			var ver = iOSversion();
			os = 'iOS ' + ver[0] + '.' + ver[1] + '.' + ver[2];
		} else if (/iPad;/.test(navigator.userAgent)) {
			function iOSversion() {
				if (/iP(hone|od|ad)/.test(navigator.appVersion)) {
					var v = (navigator.appVersion).match(/OS (\d+)_(\d+)_?(\d+)?/);
					return [parseInt(v[1], 10), parseInt(v[2], 10), parseInt(v[3] || 0, 10)];
				}
			}

			var ver = iOSversion();
			os = 'iOS ' + ver[0] + '.' + ver[1] + '.' + ver[2];
		} else if (/BBd*/.test(navigator.userAgent)) {
			os = 'BlackBerry';
		}
	} else {
		if (/Windows/.test(navigator.userAgent)) {
			os = 'Windows';
			if (/5.1;/.test(navigator.userAgent)) {
				os += ' XP';
			} else if (/6.0;/.test(navigator.userAgent)) {
				os += ' Vista';
			} else if (/6.1;/.test(navigator.userAgent)) {
				os += ' 7';
			} else if (/6.2/.test(navigator.userAgent)) {
				os += ' 8';
			} else if (/10.0;/.test(navigator.userAgent)) {
				os += ' 10';
			}

			if (/64/.test(navigator.userAgent)) {
				os += ' 64-bit';
			} else {
				os += ' 32-bit';
			}
		} else if (/Macintosh/.test(navigator.userAgent)) {
			os = 'Macintosh';
			if (/OS X/.test(navigator.userAgent)) {
				os += ' OS X';
			}
		}
	}

	return os;
}

function getBrowser() {
	return {
		os: getOSName(),
		browser: getBrowserName(),
		language: navigator.language,
		languages: navigator.languages,
		user_agent: navigator.userAgent,
		device: isMobile() ? 'Mobile' : 'Desktop',
		referrer: document.referrer || 'N/A',
		online: navigator.onLine,
		timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
		screen_resolution: screen.width + ' x ' + screen.height,
		cookie_enabled: navigator.cookieEnabled,
	};
}


// var xhr = new XMLHttpRequest();
// xhr.open('GET', 'http://ip-api.com/json');
// xhr.onreadystatechange = function () {
// 	if (xhr.readyState == 4) {
// 		if (xhr.status == 200) {
// 			var IPdata = xhr.responseText;
// 			jsonResponse = JSON.parse(IPdata);
// 		}
// 	}
// };
// xhr.send(null);
