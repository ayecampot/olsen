/*!
* Start Bootstrap - Grayscale v7.0.5 (https://startbootstrap.com/theme/grayscale)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };



    // Shrink the navbar 
    navbarShrink();


    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

// clock


// var Clock = (function(){

// 	var exports = function(element) {
// 		this._element = element;
// 		var html = '';
// 		for (var i=0;i<6;i++) {
// 			html += '<span>&nbsp;</span>';
// 		}
// 		this._element.innerHTML = html;
// 		this._slots = this._element.getElementsByTagName('span');
// 		this._tick();
// 	};

// 	exports.prototype = {

// 		_tick:function() {
// 			var time = new Date();
// 			this._update(this._pad(100-time.getHours()) + this._pad(time.getMinutes()) + this._pad(800-time.getSeconds()));
// 			var self = this;
// 			setTimeout(function(){
// 				self._tick();
// 			},1000);
// 		},

// 		_pad:function(value) {
// 			return ('0' + value).slice(-2);
// 		},

// 		_update:function(timeString) {

// 			var i=0,l=this._slots.length,value,slot,now;
// 			for (;i<l;i++) {

// 				value = timeString.charAt(i);
// 				slot = this._slots[i];
// 				now = slot.dataset.now;

// 				if (!now) {
// 					slot.dataset.now = value;
// 					slot.dataset.old = value;
// 					continue;
// 				}

// 				if (now !== value) {
// 					this._flip(slot,value);
// 				}
// 			}
// 		},

// 		_flip:function(slot,value) {

// 			// setup new state
// 			slot.classList.remove('flip');
// 			slot.dataset.old = slot.dataset.now;
// 			slot.dataset.now = value;

// 			// force dom reflow
// 			slot.offsetLeft;

// 			// start flippin
// 			slot.classList.add('flip');

// 		}

// 	};

// 	return exports;
// }());

// var i=0,clocks = document.querySelectorAll('.clock'),l=clocks.length;
// for (;i<l;i++) {
// 	new Clock(clocks[i]);
// }

// Scroll

const scrollElements = document.querySelectorAll(".js-scroll");

const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) / dividend
  );
};

const elementOutofView = (el) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop > (window.innerHeight || document.documentElement.clientHeight)
  );
};

const displayScrollElement = (element) => {
  element.classList.add("scrolled");
};

const hideScrollElement = (element) => {
  element.classList.remove("scrolled");
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 1.25)) {
      displayScrollElement(el);
    } else if (elementOutofView(el)) {
      hideScrollElement(el)
    }
  })
}

window.addEventListener("scroll", () => { 
  handleScrollAnimation();
});




