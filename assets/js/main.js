var html = $("html");

$(function () {
	darkMode();
	carousel();
});

function darkMode() {
	$(".toggle-track").on("click", function () {
		if (html.hasClass("dark-mode")) {
			html.removeClass("dark-mode");
			localStorage.setItem("alto_dark", false);
		} else {
			html.addClass("dark-mode");
			localStorage.setItem("alto_dark", true);
		}
	});
}

function carousel() {}
