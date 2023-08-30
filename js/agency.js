/*!
 * Start Bootstrap - Agnecy Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

const TIMELINE_DISPLAY_STEP = 3;
var timeline_cur_display = 0;

var timeline_entries = document.getElementById("timeline").getElementsByTagName("li");

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

$('div.modal').on('show.bs.modal', function() {
	var modal = this;
	var hash = modal.id;
	window.location.hash = hash;
	window.onhashchange = function() {
		if (!location.hash){
			$(modal).modal('hide');
		}
	}
});

function increment_timeline_display() {
    timeline_cur_display += TIMELINE_DISPLAY_STEP;
    for (let i = 0; i < timeline_entries.length - 1; i++) {
        if (i >= timeline_cur_display) {
            timeline_entries[i].style.display = "none";
        }
        else {
            timeline_entries[i].style.display = "block";
        }
    }

    if (timeline_cur_display >= (timeline_entries.length - 1)) {
        timeline_entries[timeline_entries.length - 1].innerHTML = `
        <div class="timeline-image">The beginning of time</div>
        `;
    }
}

increment_timeline_display();
