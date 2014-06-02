(function() {
	"use strict";

	var isEventsPage = false;

	$(function(){
		// since the toolbar is fixed, 
		// on older phones the need for polyfill is possibly required
		// see: https://github.com/jquery/jquery-mobile/blob/master/js/widgets/fixedToolbar.js
		$( "[data-role='header'], [data-role='footer']" ).toolbar();
		$( "body>[data-role='panel']" ).panel();


		// if events are chosen,
		// show events and hide lessons in the list for that day
		$("#footer-navbar").on("tap", "a", function() {
			setDailySchedulePage($(this).hasClass('ui-btn-events'));
		});
	});

	// Update the contents of the toolbars
	$( document ).on( "pagebeforeshow", "[data-role='page']", function(e) {

		if (!$(e.target).children().first().hasClass('daily-schedule')) {
			$('#header-navbar, #footer-navbar').hide();
		}

	});

	$( document ).on( "pageshow", "[data-role='page']", function(e) {

		$(document.body).removeClass('events-page');

		// Change the heading
		var current = $( this ).jqmData( "title" );
		$("[data-role='header'] h1").text( current );

		// Remove active class from nav buttons
		$("#header-navbar a.ui-btn-active, " +
		  "#footer-navbar a.ui-btn-active").removeClass( "ui-btn-active" );
		
		$("#header-navbar a").each(function() {
			if ( $( this ).text().toLowerCase() == 
					current.substr(current.indexOf('e - ') + 4, 3).toLowerCase()) {
				$(this).addClass( "ui-btn-active" );
			}
		});

		if (isPage(e.target, 'daily-schedule')) {
			$('#header-navbar, #footer-navbar').show();
			setDailySchedulePage(isEventsPage);
		} else {
			// set color bars on Dashboard page
			setColorBars();
		}

		if (isPage(e.target, 'customize-courses')) {

			$('#simple-color-picker', e.target).simplecolorpicker({
				onSelectColor: function (color, triggerElem) {
            		triggerElem.find('.color-box').css('background-color', color);
				}
			});
		}

		if (~window.location.search.indexOf('courses_added')) {
			toast("Course(s) has been successfully added!");
		}

		// position date picker at the center of the page
		$('#start_date, #end_date').date(
			"option", "_beforeShow", function(input, inst) {
				setTimeout(function () {
				    inst.dpDiv.css({
				        left: '50%',
				        marginLeft: -inst.dpDiv.width() / 2,
				        top: '50%',
				        marginTop: -inst.dpDiv.height() / 2
				    });
				}, 0);
			}
		);

		/* Monthly schedule */

		$('#monthly-datepicker').date({
			defaultDate: new Date(2014, 4, 1),
			beforeShowDay: monthlySchedule.onBeforeShowCalendarDay,
			onChangeMonthYear: monthlySchedule.onChangeMonthYear,
			onSelect: monthlySchedule.onSelectDateCalendar,
			onChange: monthlySchedule.updateCalendarUI
		}); // create datepicker

		$('.monthly-schedule .lessons-list, ' + 
		  '.monthly-schedule .events-list').on( "collapsibleexpand", setColorBars);
	}); // onpageshow
	
	function isPage(page, className) {
		return $(page).children().first().hasClass(className);
	}

	// based on https://gist.github.com/kamranzafar/3136584
	function toast(msg) {
		$("<div class='ui-loader ui-overlay-shadow ui-mini ui-body-e ui-corner-all'>" + 
				"<h3>" + msg + "</h3></div>")
			.css({
				display: "block",
				backgroundColor: "#2f2f2f",
				color: "#fff",
				textShadow: "none",
				opacity: 0.9,
				position: "fixed",
				padding: "7px",
				"text-align": "center",
				width: "270px",
				left: ($(window).width() - 284) / 2,
				top: $(window).height() / 2
			})
			.appendTo($.mobile.pageContainer).delay(1500)
			.fadeOut(400, function() {
				$(this).remove();
			});
	}

	function setActiveFooterTab(isEventsPage) {
		$('#footer-navbar .ui-btn-lessons').toggleClass( "ui-btn-active", !isEventsPage);
		$('#footer-navbar .ui-btn-events').toggleClass( "ui-btn-active", isEventsPage);
	}

	function setDailySchedulePage(showEvents) {
		$(document.body).toggleClass('events-page', showEvents);
		isEventsPage = showEvents;
		setActiveFooterTab(isEventsPage);
		setColorBars();
	}

	function setColorBars() {
		$('.dashboard .lessons, .lessons-list, .events-list')
				.find('li:not(".ui-li-divider")').each(function(index, el) {
			var color = $(this).data('courseColor');
			var anchorHeight = $(this).find('a').height();
			$(this).find('.course-color').css({
				'background-color' : color,
				'height': anchorHeight
			});
		});
	}

})();
