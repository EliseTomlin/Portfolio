/*
	Miniport by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body'),
		$nav = $('#nav');

	// Breakpoints.
		breakpoints({
			xlarge:  [ '1281px',  '1680px' ],
			large:   [ '981px',   '1280px' ],
			medium:  [ '737px',   '980px'  ],
			small:   [ null,      '736px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Scrolly.
		$('#nav a, .scrolly').scrolly({
			speed: 1000,
			offset: function() { return $nav.height(); }
		});

})(jQuery);

//typed heading=====================

document.addEventListener('DOMContentLoaded', function () {
    const heading = document.getElementById('typing-heading'); // Get the heading element
    const typedText = document.getElementById('typed-text'); // Get the element where typed text will appear
    const cursor = document.getElementById('cursor'); // Get the cursor element

    const textBeforeStrong = "Hi. I'm "; // Text before the strong element
    const strongText = "Elise"; // Text inside the strong element

    heading.style.display = 'none'; // Hide the original heading
    cursor.style.display = 'inline'; // Display the cursor

    let charIndex = 0;

    function typeText() {
        if (charIndex < textBeforeStrong.length) {
            typedText.textContent += textBeforeStrong.charAt(charIndex);
            charIndex++;
            setTimeout(typeText, 100);
        } else if (charIndex === textBeforeStrong.length) {
            // Start typing strongText as bold
            typedText.innerHTML += `<strong style="font-weight: 700">${strongText}</strong>`;
            charIndex++;
            setTimeout(typeText, 1000);
        } else {
            cursor.style.display = 'none'; // Hide cursor when typing is done
        }
    }

    setTimeout(typeText, 100); // Start typing after 1 second
});



