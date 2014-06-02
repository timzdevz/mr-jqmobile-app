(function( skillet, $, undefined ) {
	var courseGAP = new Course("GAP012014", "Graphical application programming", "red");
	var courseMath = new Course("MATH012014", "Mathematics", "green");

	var lessons = [
		new Lesson(courseGAP, new Date(2014, 4, 8), "Sta 10 - E210", "08:00-11:00"),
		new Lesson(courseGAP, new Date(2014, 4, 13), "Sta 10 - E210", "08:00-11:00"),
		new Lesson(courseGAP, new Date(2014, 4, 15), "Sta 10 - E210", "08:00-11:00"),
		new Lesson(courseGAP, new Date(2014, 4, 28), "Sta 10 - E210", "08:00-11:00"),
		new Lesson(courseMath, new Date(2014, 4, 6), "Sta 10 - E210", "11:15-13:00"),
		new Lesson(courseMath, new Date(2014, 4, 8), "Sta 10 - E210", "11:15-13:00"),
		new Lesson(courseMath, new Date(2014, 4, 13), "Sta 10 - E210", "11:15-13:00"),
		new Lesson(courseMath, new Date(2014, 4, 20), "Sta 10 - E210", "11:15-13:00"),
		new Lesson(courseMath, new Date(2014, 4, 27), "Sta 10 - E210", "11:15-13:00")
	];

	var events = [
		new Event(15, "GAP final assignment", new Date(2014, 4, 22, 12), courseGAP),
		new Event(15, "Math Exam", new Date(2014, 4, 28, 12), courseMath),
		new Event(15, "GAP Exam", new Date(2014, 3, 24, 9), courseGAP)
	];

	var dateEvents = mapToDates(events);
	var dateLessons = mapToDates(lessons);


	function Course(id, name, color) {
		this.id = id;
		this.name = name;
		this.color = color;
	}

	function Lesson(course, date, location, time) {
		this.course = course;
		this.date = date;
		this.location = location;
		this.time = time;
	}

	function Event(id, name, date, course) {
		this.id = id;
		this.name = name;
		this.date = date;
		this.course = course;
	}


	function mapToDates(events) {
		var ev = {};
		for (var i = 0; i < events.length; i++) {
			var timestamp = getDateNoHours(events[i].date).getTime();
			if (ev[timestamp] === undefined)
				ev[timestamp] = [];

			ev[timestamp].push(events[i]);
		}

		return ev;
	}

	function getDateNoHours(date) {
		var tempDate = new Date(date);
		tempDate.setHours(0, 0, 0, 0);
		return tempDate;
	}

	function findEventsOnDate(date, events, onFoundCallback) {
		for (var i = 0; i < events.length; i++) {
			// compare dates only
			var tempDate = getDateNoHours(events[i].date);
			if (date.getTime() == tempDate.getTime()) {
				if (onFoundCallback !== undefined) {
					if (onFoundCallback() === false)
						break;
				}
			}
		}
	}

	function setMonthlyScheduleList(listItems, type) {

		$(".collapsibles-list").children().collapsible("collapse");


		$('.' + type + '-list').hide()
			.find('#date-' + type + '-list').children().remove();

		if (listItems == undefined)
			return;

		$.each(listItems, function(index, val) {
			var itemName, 
				courseName = val.course.name,
				lessonLocation,
				lessonTime,
				eventTime;

			if (type == 'lessons') {
				itemName = courseName;
				lessonLocation = val.location;
				lessonTime = val.time; 
			} else {
				itemName = val.name;
				eventTime = val.date.toTimeString().replace(/.*(\d{2}:\d{2}):\d{2}.*/, "$1");
			}

			$('<li data-course-color="' + val.course.color + '">' +
				'<a href="#">' +
					'<div class="course-color"></div>' +
					'<div class="list-item-name">' + itemName + '</div>' +
					'<div class="lesson-description">' + (lessonLocation || eventTime) + '</div>' +
					'<div class="lesson-description">' + (lessonTime || courseName) + '</div>' +
				'</a>' +
			'</li>').appendTo('#date-' + type + '-list');
		});

		$('#date-' + type + '-list').listview('refresh').closest('.' + type + '-list').show();
	}

	skillet.onSelectDateCalendar = function(dateStr, dateObj) {
		skillet.updateCalendarUI();
		var timestamp = new Date(dateObj.currentYear, dateObj.currentMonth, dateObj.currentDay).getTime();
		var lessons, events;

		if (dateLessons[timestamp])
			lessons = dateLessons[timestamp];

		if (dateEvents[timestamp])
			events = dateEvents[timestamp];

		setMonthlyScheduleList(lessons, 'lessons');
		setMonthlyScheduleList(events, 'events');
		$(".collapsibles-list").children(':visible').collapsible('expand');

	};

	// mobile datepicker calendar gets updated on
	// select date, change month/year
	skillet.updateCalendarUI = function() {
		var relativeWrapper = $('<div class="relative-wrapper" style="position: relative;" />');
		$('.ui-datepicker-calendar td')
			.filter('.event-td').append('<div class="event-icon" />').wrapInner(relativeWrapper).end()
			.filter('.lessons-td').each(function(index, el) {
				var lessonsCount = $(el).attr('class').match(/lessons-count-(\d)/)[1];
				lessonsCount = parseInt(lessonsCount);

				var lessonIcon = $('<div class="lesson-icon" />'),
					lessonsContainer = $('<div class="lessons-container" />').appendTo(el);
				for (var i = 0; i < lessonsCount; i++) {
					$(lessonsContainer).append(lessonIcon.clone());
				}

				if (!$('.relative-wrapper', el).length)
					$(el).wrapInner(relativeWrapper);
			});
	};

	skillet.onChangeMonthYear = function() {
		$(".collapsibles-list").children().hide();
		skillet.updateCalendarUI();
	};

	skillet.onBeforeShowCalendarDay = function(date) {

		var className = '',
			lessonsCount = 0,
			eventFound;

		findEventsOnDate(date, lessons, function() {
			lessonsCount++;
		});

		findEventsOnDate(date, events, function() {
			eventFound = true;

			// break loop by returning false
			return false;
		});

		if (eventFound)
			className += ' event-td';

		if (lessonsCount)
			className += ' lessons-td lessons-count-' + lessonsCount;

		return [true, className];
	};
}( window.monthlySchedule = window.monthlySchedule || {}, jQuery ));