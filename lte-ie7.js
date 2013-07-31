/* Load this script using conditional IE comments if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'Color-Test\'">' + entity + '</span>' + html;
	}
	var icons = {
			'icon-drk-orange' : '&#x6f;&#x72;&#x61;&#x6e;&#x67;&#x65;',
			'icon-lgt-orange' : '&#x79;&#x65;&#x6c;&#x6c;&#x6f;&#x77;',
			'icon-white' : '&#x68;&#x74;&#x6d;&#x6c;'
		},
		els = document.getElementsByTagName('*'),
		i, attr, html, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		attr = el.getAttribute('data-icon');
		if (attr) {
			addIcon(el, attr);
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
};