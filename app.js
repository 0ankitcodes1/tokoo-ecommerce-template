function timer(expiry) {
  return {
    expiry: expiry,
    remaining: null,
    init() {
      this.setRemaining();
      setInterval(() => {
        this.setRemaining();
      }, 1000);
    },
    setRemaining() {
      const diff = this.expiry - new Date().getTime();
      this.remaining = parseInt(diff / 1000);
    },
    days() {
      return {
        value: this.remaining / 86400,
        remaining: this.remaining % 86400,
      };
    },
    hours() {
      return {
        value: this.days().remaining / 3600,
        remaining: this.days().remaining % 3600,
      };
    },
    minutes() {
      return {
        value: this.hours().remaining / 60,
        remaining: this.hours().remaining % 60,
      };
    },
    seconds() {
      return {
        value: this.minutes().remaining,
      };
    },
    format(value) {
      return ("0" + parseInt(value)).slice(-2);
    },
    time() {
      return {
        days: this.format(this.days().value),
        hours: this.format(this.hours().value),
        minutes: this.format(this.minutes().value),
        seconds: this.format(this.seconds().value),
      };
    },
  };
}

var sidenavbarContainer = document.querySelector(".sidenavbar-container");

function sidenavToggle() {
  if (sidenavbarContainer.classList.contains('hidden')) {
    sidenavbarContainer.classList.remove('hidden');
  }
  else {
    sidenavbarContainer.classList.add('hidden');
  }
}

document.addEventListener("DOMContentLoaded", function () {
    var getSplide = document.querySelector("#splide");
    var bestRatedProduct = document.querySelector("#best-rated-product");
    var dealsOfTheDay = document.querySelector("#deals-of-the-day");
    var brandSlider = document.querySelector("#brand-slider");


    if (getSplide) {
      new Splide(getSplide, {
        type: "loop",
        perPage: 1,
        focus: "center",
        autoplay: true,
        interval: 8000,
        updateOnMove: true,
        throttle: 300,
      }).mount();
    }

    if (bestRatedProduct) {
      new Splide(bestRatedProduct, {
        type: "loop",
        perPage: 5,
        autoplay: true,
        interval: 8000,
        updateOnMove: true,
        throttle: 300,
        gap: '1rem',
        breakpoints: {
          500: { perPage: 2, gap: '1rem' },
          766: { perPage: 2, gap: '1rem' },
          950: { perPage: 3, gap: '1rem' }
        }
      }).mount();
    }
    if (dealsOfTheDay) {
      new Splide(dealsOfTheDay, {
        type: "loop",
        perPage: 5,
        autoplay: true,
        interval: 8000,
        updateOnMove: true,
        throttle: 300,
        gap: '1rem',
        breakpoints: {
          500: { perPage: 2, gap: '1rem' },
          766: { perPage: 2, gap: '1rem' },
          950: { perPage: 3, gap: '1rem' }
        }
      }).mount();
    }
    if (brandSlider) {
      new Splide(brandSlider, {
        type: "loop",
        perPage: 6,
        autoplay: true,
        interval: 8000,
        updateOnMove: true,
        focus: "center",
        throttle: 300,
        gap: '2rem',
        breakpoints: {
          500: { perPage: 3, gap: '2rem' },
          766: { perPage: 4, gap: '2rem' },
          950: { perPage: 5, gap: '2rem' }
        }
      }).mount();
    }
  });