/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'Gemups\'">' + entity + '</span>' + html;
	}
	var icons = {
		'ico-eye': '&#xe900;',
		'ico-eye-close': '&#xe901;',
		'ico-facebook': '&#xe902;',
		'ico-file': '&#xe903;',
		'ico-info': '&#xe904;',
		'ico-instagram': '&#xe905;',
		'ico-logout': '&#xe906;',
		'ico-plus': '&#xe907;',
		'ico-refresh': '&#xe908;',
		'ico-shield': '&#xe909;',
		'ico-shield-close': '&#xe90a;',
		'ico-star': '&#xe90b;',
		'ico-tag': '&#xe90c;',
		'ico-time': '&#xe90d;',
		'ico-twitter': '&#xe90e;',
		'ico-user': '&#xe90f;',
		'ico-users': '&#xe910;',
		'ico-wallet': '&#xe911;',
		'ico-world': '&#xe912;',
		'ico-arrow': '&#xe913;',
		'ico-arrow-menu-left': '&#xe914;',
		'ico-burger-mb': '&#xe915;',
		'ico-burger-nav': '&#xe916;',
		'ico-cart': '&#xe917;',
		'ico-cart-bag': '&#xe918;',
		'ico-category': '&#xe919;',
		'ico-close': '&#xe91a;',
		'ico-copy': '&#xe91b;',
		'ico-delete': '&#xe91c;',
		'ico-details': '&#xe91d;',
		'ico-done': '&#xe91e;',
		'ico-download': '&#xe91f;',
		'ico-edit': '&#xe920;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/ico-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
