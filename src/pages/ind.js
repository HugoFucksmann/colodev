function countdown(el, options, callback) {
  var thisEl = document.querySelector(el);
  var settings = {
    date: null,
    format: null,
  };

  if (options) {
    for (var key in options) {
      if (options.hasOwnProperty(key)) {
        settings[key] = options[key];
      }
    }
  }

  function countdown_proc() {
    var eventDate = Date.parse(settings.date) / 1000;
    var currentDate = Math.floor(Date.now() / 1000);

    if (eventDate <= currentDate) {
      callback.call(this);
      clearInterval(interval);
    }

    var seconds = eventDate - currentDate;
    var days = Math.floor(seconds / (60 * 60 * 24));
    seconds -= days * 60 * 60 * 24;
    var hours = Math.floor(seconds / (60 * 60));
    seconds -= hours * 60 * 60;
    var minutes = Math.floor(seconds / 60);
    seconds -= minutes * 60;

    if (days === 1) {
      thisEl.querySelector(".timeRefDays").textContent = "day";
    } else {
      thisEl.querySelector(".timeRefDays").textContent = "days";
    }
    if (hours === 1) {
      thisEl.querySelector(".timeRefHours").textContent = "hour";
    } else {
      thisEl.querySelector(".timeRefHours").textContent = "hours";
    }
    if (minutes === 1) {
      thisEl.querySelector(".timeRefMinutes").textContent = "minute";
    } else {
      thisEl.querySelector(".timeRefMinutes").textContent = "minutes";
    }
    if (seconds === 1) {
      thisEl.querySelector(".timeRefSeconds").textContent = "second";
    } else {
      thisEl.querySelector(".timeRefSeconds").textContent = "seconds";
    }

    if (settings.format === "on") {
      days = String(days).length >= 2 ? days : "0" + days;
      hours = String(hours).length >= 2 ? hours : "0" + hours;
      minutes = String(minutes).length >= 2 ? minutes : "0" + minutes;
      seconds = String(seconds).length >= 2 ? seconds : "0" + seconds;
    }

    thisEl.querySelector(".days").textContent = days;
    thisEl.querySelector(".hours").textContent = hours;
    thisEl.querySelector(".minutes").textContent = minutes;
    thisEl.querySelector(".seconds").textContent = seconds;
  }

  countdown_proc();
  var interval = setInterval(countdown_proc, 1000);
}

(function () {
  window.countdown = countdown;
})();

//Provide the plugin settings
countdown(
  "#countdown",
  {
    date: "1 January 2022 12:00:00",
    format: "on",
  },
  function () {
    // This will run when the countdown ends
    //alert("We're Out Now");
  }
);

function setHeights() {
  var windowHeight = window.innerHeight;
  var slides = document.querySelectorAll(".slide");
  slides.forEach(function (slide) {
    slide.style.height = windowHeight + "px";
  });
}

setHeights();

window.addEventListener("resize", function () {
  setHeights();
});

function addSticky() {
  var slides = document.querySelectorAll(".slide");
  slides.forEach(function (slide) {
    var scrollerAnchor = slide.offsetTop;
    if (window.scrollY >= scrollerAnchor) {
      slide.classList.add("fix-it");
    } else {
      slide.classList.remove("fix-it");
    }
  });
}

window.addEventListener("scroll", function () {
  addSticky();
});
