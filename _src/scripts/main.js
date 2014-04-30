/*
 * Site functional wrapper
 */

/*jslint plusplus: true, vars: true, browser: true, white:true*/
/*global require: true, Modernizr: true*/

require([
	'core',
	'jquery',
	'imagesloaded',
	'project/calendar',
	'waypoints'
], function(
	core,
	$,
	ImagesLoaded,
	Calendar
) {
	'use strict';

	// Expose core
	window.ljd = core;

	// Document ready
	$(function () {

		// Detect intro load
		var $intro, $bg, $credit, $img, images, image;
		$intro = $('.intro');
		if ($intro.length) {
			images = [
				{
					url: '/images/content/intro-1.jpg',
					credit: 'Photo by <a href="http://www.jordanisip.com" class="fn n url" target="_blank">Jordan Isip</a>'
				},
				{
					url: '/images/content/intro-2.jpg',
					credit: 'Photo by <a href="https://www.facebook.com/kastania.rasmussen" class="fn n url" target="_blank">Kastania Rasmussen</span>'
				},
				{
					url: '/images/content/intro-3.jpg',
					credit: 'Photo by <a href="http://www.jordanisip.com" class="fn n url" target="_blank">Jordan Isip</a>'
				},
				{
					url: '/images/content/intro-6.jpg',
					credit: 'Photo by <a href="http://bkristiansen.com/" class="fn n url" target="_blank">Bjørn Kristiansen</a>'
				},
				{
					url: '/images/content/intro-7.jpg',
					credit: 'Photo by <a href="https://www.facebook.com/kastania.rasmussen" class="fn n url" target="_blank">Kastania Rasmussen</span>'
				}
			];
			image = Math.floor( Math.random() * images.length );

			$bg = $intro.find('.intro__bg');
			$credit = $intro.find('.intro__credit');

			var src = images[image].url;
			$img = $('<img>').attr('src', src).on('load', function() {
				$bg.css('background-image', 'url(' + src + ')');
				$credit.html(images[image].credit);
				$img.remove();
				$intro.addClass('intro--init');
			});
		}

		// Make external links open in new windows
		$('a').not(function () {
			var href = $(this).attr('href');
			return href.indexOf(window.location.hostname) > -1 || href.indexOf('://') < 0;
		}).attr('target', '_blank');

		// Avoid widows
		(function ($) {
			$.fn.avoidWidows = function () {
				return this.each(function () {
					var $elem = $(this), wordArray = $elem.text().split(" ");
					if (wordArray.length > 1) {
						wordArray[wordArray.length-2] += "&nbsp;" + wordArray[wordArray.length-1];
						wordArray.pop();
						$elem.html(wordArray.join(" "));
					}
				});
			};
		}($));
		$('.post').find('h1, h2, h3').each (function () {
			var $header = $(this), $link = $header.children('a');
			if ($link.length) {
				$link.avoidWidows();
			} else {
				$header.avoidWidows();
			}
		});

		// Responsive / lazy images
		$('.responsive-img').each(function () {
			var $img = $(this),
			low = $img.data('src'),
			medium = $img.data('medres'),
			high = $img.data('highres'),
			lastRes = low,
			$win = $(window),
			$loading = $('<div class="responsive-img__loading">Loading&hellip;</div>'),
			doLoad;

			doLoad = function () {
				var res, width;

				width = $win.width();
				if (width > 500) {
					res = high;
				} else {
					res = medium;
				}

				if (res === lastRes) {
					return false;
				}
				lastRes = res;

				$img.addClass('responsive-img--loading');
				$loading.insertBefore($img);

				$('<img />').load(function () {
					$img
						.attr('src', res)
						.removeClass('responsive-img--loading');

					$(this).remove();
					$loading.detach();
				}).attr('src', res);
			};

			new ImagesLoaded(this, function () {
				$img.waypoint({
					handler: function (dir) {
						if (dir === 'down') {
							doLoad();
						}
					},
					offset: '100%'
				});
				$img.waypoint({
					handler: function (dir) {
						if (dir === 'up') {
							doLoad();
						}
					},
					offset: function () {
						return -$(this).height();
					}
				});
			});
		});

		// Calendar
		$('.calendar').each(function () {
			new Calendar($(this));
		});
	});
});