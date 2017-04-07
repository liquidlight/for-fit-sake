/**
 * forFitSake
 *
 * @author Mike Street
 * @copyright Liquid Light
 * @homepage https://github.com/liquidlight/for-fit-sake
 * @version 0.2.0
 * @summary Object fit fallback library
 */
(function($){
	$.fn.forFitSake = function(options) {

		// Only option is to change the class used
		var defaults = {
			class: 'hasForFitSake',
			includeDetection: true
		};
		options = $.extend(defaults, options);

		// Custom & modified Modernizr code for just object-fit
		if(options.includeDetection) {
			!function(a,b,c){function h(a,b){return typeof a===b}function i(){var a,b,c,e,i,j,k;for(var l in d)if(d.hasOwnProperty(l)){if(a=[],b=d[l],b.name&&(a.push(b.name.toLowerCase()),b.options&&b.options.aliases&&b.options.aliases.length))for(c=0;c<b.options.aliases.length;c++)a.push(b.options.aliases[c].toLowerCase());for(e=h(b.fn,"function")?b.fn():b.fn,i=0;i<a.length;i++)j=a[i],k=j.split("."),1===k.length?f[k[0]]=e:(!f[k[0]]||f[k[0]]instanceof Boolean||(f[k[0]]=new Boolean(f[k[0]])),f[k[0]][k[1]]=e),g.push((e?"":"no-")+k.join("-"))}}function m(a,b){return!!~(""+a).indexOf(b)}function o(){return"function"!=typeof b.createElement?b.createElement(arguments[0]):b.createElement.apply(b,arguments)}function r(a,b,d,e){function p(){g&&(delete q.style,delete q.modElem)}if(e=!h(e,"undefined")&&e,!h(d,"undefined")){var f=nativeTestProps(a,d);if(!h(f,"undefined"))return f}for(var g,i,j,k,l,n=["modernizr","tspan","samp"];!q.style&&n.length;)g=!0,q.modElem=o(n.shift()),q.style=q.modElem.style;for(j=a.length,i=0;i<j;i++)if(k=a[i],l=q.style[k],m(k,"-")&&(k=cssToDOM(k)),q.style[k]!==c){if(e||h(d,"undefined"))return p(),"pfx"!=b||k;try{q.style[k]=d}catch(a){}if(q.style[k]!=l)return p(),"pfx"!=b||k}return p(),!1}function s(a,b,c,d,e){var f=a.charAt(0).toUpperCase()+a.slice(1),g=(a+" "+k.join(f+" ")+f).split(" ");return h(b,"string")||h(b,"undefined")?r(g,b,d,e):(g=(a+" "+l.join(f+" ")+f).split(" "),testDOMProps(g,b,c))}var d=[],e={_version:"3.4.0",_config:{classPrefix:"",enableJSClass:!0,usePrefixes:!0},_q:[],on:function(a,b){var c=this;setTimeout(function(){b(c[a])},0)},addTest:function(a,b,c){d.push({name:a,fn:b,options:c})},addAsyncTest:function(a){d.push({name:null,fn:a})}},f=function(){};f.prototype=e,f=new f;var g=[],j="Moz O ms Webkit",k=e._config.usePrefixes?j.split(" "):[];e._cssomPrefixes=k;var l=e._config.usePrefixes?j.toLowerCase().split(" "):[];e._domPrefixes=l;var p=(b.documentElement,{elem:o("modernizr")});f._q.push(function(){delete p.elem});var q={style:p.elem.style};f._q.unshift(function(){delete q.style}),e.testAllProps=s;var t=e.prefixed=function(a,b,c){return 0===a.indexOf("@")?atRule(a):(-1!=a.indexOf("-")&&(a=cssToDOM(a)),b?s(a,b,c):s(a,"pfx"))};f.addTest("objectfit",!!t("objectFit"),{aliases:["object-fit"]}),i(),delete e.addTest,delete e.addAsyncTest;for(var u=0;u<f._q.length;u++)f._q[u]();a.Modernizr=f}(window,document);
		}

		// Check if object fit is supported
		if (!Modernizr.objectfit) {
			// Loop through each of the elements initialised
			$(this).each(function () {
				// Check if the element exits
				if($(this).length) {
					// Cache some variables
					var self = $(this),
						imgUrl = self.find('img').prop('src');

					// If the element passed in is an image itself, target the parent
					if(self.is('img')) {
						imgUrl = self.prop('src');
						self = self.parent();
					}

					// Add the image as a background on the parent
					if (imgUrl) {
						self.css('backgroundImage', 'url(' + imgUrl + ')')
							.addClass(options.class);
					}
				}
			});
		}
	};
})(jQuery);