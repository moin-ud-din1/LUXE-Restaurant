/* =========================================================
   LUXE RESTAURANT | Premium Vanilla JS
   ========================================================= */

(() => {
  "use strict";

  /* ---------- Helpers ---------- */
  const $ = (selector, context = document) =>
    context.querySelector(selector);

  const $$ = (selector, context = document) =>
    [...context.querySelectorAll(selector)];

  const img = (id, width = 800) =>
    `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${width}&q=85`;

  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;


  /* =========================================================
     DATA
     ========================================================= */

  const dishes = [
    [
      "Starters",
      "Bruschetta Trio",
      "Heirloom tomato, burrata and basil on grilled sourdough",
      12,
      "1572695157366-5e585ab2b69f"
    ],
    [
      "Starters",
      "Roasted Pumpkin Soup",
      "Toasted seeds, sage oil and crème fraîche",
      11,
      "1547592166-23ac45744acd"
    ],
    [
      "Starters",
      "Burrata Garden",
      "Creamy burrata, cherry tomatoes, basil oil and sea salt",
      15,
      "1601050690597-df0568f70950"
    ],
    [
      "Main Course",
      "Truffle Pasta",
      "Creamy parmesan, black truffle and fresh herbs",
      24,
      "1621996346565-e3dbc646d9a9"
    ],
    [
      "Main Course",
      "Grilled Salmon",
      "Herb butter, roasted vegetables and lemon",
      28,
      "1467003909585-2f8a72700288"
    ],
    [
      "Main Course",
      "Ribeye Steak",
      "Dry-aged 300g, bone marrow jus and pommes purée",
      42,
      "1600891964092-4316c288032e"
    ],
    [
      "Main Course",
      "Saffron Risotto",
      "Italian arborio rice, saffron, parmesan and mushrooms",
      26,
      "1476124369491-e7addf5db371"
    ],
    [
      "Desserts",
      "Chocolate Fondant",
      "Warm chocolate cake with vanilla ice cream",
      14,
      "1624353365286-3f8d62daad51"
    ],
    [
      "Desserts",
      "Classic Tiramisu",
      "Espresso-soaked savoiardi and mascarpone cream",
      13,
      "1571877227200-a0d98ea607e9"
    ],
    [
      "Desserts",
      "Crème Brûlée",
      "Madagascar vanilla custard with caramelized sugar",
      12,
      "1470324161839-ce2bb6fa6bc3"
    ],
    [
      "Drinks",
      "Smoked Old Fashioned",
      "Bourbon, demerara and orange bitters",
      16,
      "1514362545857-3bc16c4c7d1b"
    ],
    [
      "Drinks",
      "Luxe Berry Spritz",
      "Fresh berries, citrus and sparkling finish",
      10,
      "1544145945-f90425340c7e"
    ]
  ];


  const gallery = [
    "1414235077428-338989a2e8c0",
    "1517248135467-4c7edcad34c4",
    "1555396273-367ea4eb4db5",
    "1551218808-94e220e084d2",
    "1559339352-11d035aa65de",
    "1476224203421-9ac39bcb3327",
    "1504674900247-0877df9cc836",
    "1550966871-3ed3cdb5ed0c"
  ];


  const reviews = [
    [
      "An unforgettable dining experience. Every detail was perfect.",
      "Sarah Williams"
    ],
    [
      "The truffle pasta alone is worth the trip. Service felt effortless.",
      "Ahmed Raza"
    ],
    [
      "We celebrated our anniversary here and the team made it magical.",
      "Maria & Jonas"
    ],
    [
      "Beautiful atmosphere, excellent food and genuinely warm service.",
      "Daniel Khan"
    ],
    [
      "LUXE feels like a complete experience rather than just dinner.",
      "Ayesha Malik"
    ],
    [
      "Every course was beautifully presented and full of flavour.",
      "James Wilson"
    ]
  ];


  /* =========================================================
     RENDER MENU
     ========================================================= */

  const menuGrid = $("#menuGrid");

  if (menuGrid) {
    menuGrid.innerHTML = dishes
      .map(
        ([category, name, description, price, image], index) => `
          <div
            class="col-md-6 col-lg-3 dish-col reveal"
            data-cat="${category}"
            style="transition-delay:${(index % 4) * 80}ms"
          >
            <article class="dish">

              <div class="thumb">
                <img
                  loading="lazy"
                  src="${img(image, 700)}"
                  alt="${name}"
                >
              </div>

              <div class="body">

                <small>${category}</small>

                <h3>${name}</h3>

                <p>${description}</p>

                <div class="price">$${price}</div>

              </div>

            </article>
          </div>
        `
      )
      .join("");
  }


  /* =========================================================
     RENDER GALLERY
     ========================================================= */

  const galleryGrid = $("#galleryGrid");

  if (galleryGrid) {
    galleryGrid.innerHTML = gallery
      .map(
        (image, index) => `
          <div
            class="g-item"
            data-src="${img(image, 1600)}"
            style="transition-delay:${(index % 3) * 100}ms"
          >
            <img
              loading="lazy"
              src="${img(image, 900)}"
              alt="LUXE restaurant gallery image ${index + 1}"
            >
          </div>
        `
      )
      .join("");
  }


  /* =========================================================
     RENDER REVIEWS
     ========================================================= */

  const reviewGrid = $("#reviewGrid");

  if (reviewGrid) {
    reviewGrid.innerHTML = reviews
      .map(
        ([text, author], index) => `
          <div
            class="col-md-6 col-lg-4 reveal"
            style="transition-delay:${index * 100}ms"
          >

            <div class="review">

              <div class="stars">
                ★★★★★
              </div>

              <p>
                “${text}”
              </p>

              <cite>
                — ${author}
              </cite>

            </div>

          </div>
        `
      )
      .join("");
  }


  /* =========================================================
     LOADER
     ========================================================= */

  const loader = $("#loader");

  const finishLoader = () => {
    if (!loader) return;

    setTimeout(() => {
      document.body.classList.add("ready");

      setTimeout(() => {
        loader.classList.add("done");
      }, 500);

    }, 1500);
  };

  if (document.readyState === "complete") {
    finishLoader();
  } else {
    window.addEventListener("load", finishLoader, { once: true });
  }


  /* =========================================================
     NAVBAR
     ========================================================= */

  const nav = $("#nav");

  const updateNavbar = () => {

    if (!nav) return;

    nav.classList.toggle(
      "scrolled",
      window.scrollY > 60
    );

  };


  updateNavbar();


  let scrollTick = false;

  window.addEventListener(
    "scroll",
    () => {

      if (scrollTick) return;

      scrollTick = true;

      requestAnimationFrame(() => {

        updateNavbar();

        scrollTick = false;

      });

    },
    { passive: true }
  );


  /* =========================================================
     MOBILE NAV
     ========================================================= */

  $$(".nav-link").forEach((link) => {

    link.addEventListener("click", () => {

      const menu = $("#navMenu");

      if (!menu) return;

      if (
        menu.classList.contains("show") &&
        typeof bootstrap !== "undefined"
      ) {

        const collapse =
          bootstrap.Collapse.getOrCreateInstance(menu);

        collapse.hide();

      }

    });

  });


  /* =========================================================
     ACTIVE NAV LINK
     ========================================================= */

  const sections = $$(
    "header[id], section[id]"
  );

  const navLinks = $$(".nav-link");

  if (sections.length && navLinks.length) {

    const sectionObserver =
      new IntersectionObserver(
        (entries) => {

          entries.forEach((entry) => {

            if (!entry.isIntersecting) return;

            const id = entry.target.id;

            navLinks.forEach((link) => {

              link.classList.toggle(
                "active",
                link.getAttribute("href") === `#${id}`
              );

            });

          });

        },
        {
          rootMargin: "-35% 0px -55% 0px",
          threshold: 0
        }
      );


    sections.forEach((section) => {
      sectionObserver.observe(section);
    });

  }


  /* =========================================================
     SCROLL REVEAL
     ========================================================= */

  let revealObserver;


  const setupReveal = () => {

    const revealElements = $$(
      ".reveal, .img-reveal, .g-item"
    );

    if (!revealElements.length) return;


    revealObserver =
      new IntersectionObserver(
        (entries) => {

          entries.forEach((entry) => {

            if (!entry.isIntersecting) return;

            entry.target.classList.add("in");

            revealObserver.unobserve(
              entry.target
            );

          });

        },
        {
          threshold: 0.12,
          rootMargin: "0px 0px -40px 0px"
        }
      );


    revealElements.forEach((element) => {

      revealObserver.observe(element);

    });

  };


  setupReveal();


  /* =========================================================
     COUNTERS
     ========================================================= */

  const animatedCounters = new WeakSet();


  const countUp = (element) => {

    if (animatedCounters.has(element)) return;

    animatedCounters.add(element);


    const end =
      parseFloat(element.dataset.count) || 0;

    const decimals =
      parseInt(element.dataset.dec || "0", 10);

    const suffix =
      element.dataset.suffix || "";


    if (prefersReducedMotion) {

      element.textContent =
        end.toFixed(decimals) + suffix;

      return;

    }


    const startTime = performance.now();
    const duration = 1800;


    const animate = (currentTime) => {

      const progress = Math.min(
        (currentTime - startTime) / duration,
        1
      );


      const eased =
        1 - Math.pow(1 - progress, 3);


      const value =
        end * eased;


      element.textContent =
        value.toFixed(decimals) + suffix;


      if (progress < 1) {

        requestAnimationFrame(animate);

      }

    };


    requestAnimationFrame(animate);

  };


  const counterObserver =
    new IntersectionObserver(
      (entries) => {

        entries.forEach((entry) => {

          if (!entry.isIntersecting) return;

          $$(
            "[data-count]",
            entry.target
          ).forEach(countUp);

          counterObserver.unobserve(
            entry.target
          );

        });

      },
      {
        threshold: 0.5
      }
    );


  $$("[data-count]").forEach((counter) => {

    const parent =
      counter.closest(".stats") ||
      counter.parentElement;

    if (parent) {

      counterObserver.observe(parent);

    }

  });


  /* =========================================================
     MENU FILTER
     ========================================================= */

  const filters = $("#filters");

  if (filters) {

    filters.addEventListener("click", (event) => {

      const button =
        event.target.closest("button");

      if (!button) return;


      const filter =
        button.dataset.f;


      $$("#filters button").forEach((item) => {

        item.classList.toggle(
          "active",
          item === button
        );

      });


      $$(".dish-col").forEach((card, index) => {

        const shouldShow =
          filter === "all" ||
          card.dataset.cat === filter;


        if (shouldShow) {

          card.classList.remove("hide");

          card.classList.remove("in");

          if (!prefersReducedMotion) {

            card.style.transitionDelay =
              `${(index % 4) * 70}ms`;

          }


          requestAnimationFrame(() => {

            requestAnimationFrame(() => {

              card.classList.add("in");

            });

          });

        } else {

          card.classList.remove("in");
          card.classList.add("hide");

        }

      });

    });

  }


  /* =========================================================
     PARALLAX
     ========================================================= */

  const parallaxElements =
    $$("[data-parallax]");


  const updateParallax = () => {

    if (
      prefersReducedMotion ||
      window.innerWidth < 768
    ) return;


    parallaxElements.forEach((element) => {

      const parent =
        element.parentElement;

      if (!parent) return;


      const rect =
        parent.getBoundingClientRect();


      if (
        rect.bottom < 0 ||
        rect.top > window.innerHeight
      ) {
        return;
      }


      const speed =
        parseFloat(
          element.dataset.parallax
        ) || 0.1;


      const centerOffset =
        rect.top * speed;


      element.style.transform =
        `translate3d(0, ${-centerOffset}px, 0)`;

    });

  };


  updateParallax();


  window.addEventListener(
    "scroll",
    () => {

      if (prefersReducedMotion) return;

      requestAnimationFrame(
        updateParallax
      );

    },
    { passive: true }
  );


  /* =========================================================
     LIGHTBOX
     ========================================================= */

  const lightbox = $("#lightbox");
  const lightboxImage = $("#lbImg");


  if (
    lightbox &&
    lightboxImage &&
    galleryGrid &&
    typeof bootstrap !== "undefined"
  ) {

    const modal =
      bootstrap.Modal.getOrCreateInstance(
        lightbox
      );


    galleryGrid.addEventListener(
      "click",
      (event) => {

        const item =
          event.target.closest(".g-item");

        if (!item) return;


        const source =
          item.dataset.src;

        const image =
          item.querySelector("img");


        lightboxImage.src =
          source ||
          image?.src ||
          "";


        lightboxImage.alt =
          image?.alt ||
          "LUXE gallery image";


        modal.show();

      }
    );

  }


  /* =========================================================
     RESERVATION FORM
     ========================================================= */

  const form = $("#resForm");
  const toast = $("#toast");


  if (form) {

    const dateInput =
      form.querySelector(
        'input[name="date"]'
      );


    if (dateInput) {

      const today =
        new Date();

      const year =
        today.getFullYear();

      const month =
        String(
          today.getMonth() + 1
        ).padStart(2, "0");

      const day =
        String(
          today.getDate()
        ).padStart(2, "0");


      dateInput.min =
        `${year}-${month}-${day}`;

    }


    const fields =
      $$(
        "input, select",
        form
      );


    fields.forEach((field) => {

      field.addEventListener(
        "input",
        () => {
          field.classList.remove("err");
        }
      );


      field.addEventListener(
        "change",
        () => {
          field.classList.remove("err");
        }
      );

    });


    form.addEventListener(
      "submit",
      (event) => {

        event.preventDefault();


        let valid = true;


        fields.forEach((field) => {

          const isValid =
            field.checkValidity();


          field.classList.toggle(
            "err",
            !isValid
          );


          if (!isValid) {
            valid = false;
          }

        });


        if (!valid) {

          const firstInvalid =
            fields.find(
              (field) =>
                !field.checkValidity()
            );


          firstInvalid?.focus();

          return;

        }


        form.reset();


        if (toast) {

          toast.classList.add("show");


          setTimeout(() => {

            toast.classList.remove("show");

          }, 4500);

        }

      }
    );

  }


  /* =========================================================
     BUTTON RIPPLE EFFECT
     ========================================================= */

  if (!prefersReducedMotion) {

    $$(".btn-gold, .btn-ghost").forEach(
      (button) => {

        button.addEventListener(
          "click",
          (event) => {

            const ripple =
              document.createElement("span");


            ripple.style.position =
              "absolute";

            ripple.style.width =
              "10px";

            ripple.style.height =
              "10px";

            ripple.style.borderRadius =
              "50%";

            ripple.style.background =
              "rgba(255,255,255,.25)";

            ripple.style.pointerEvents =
              "none";

            ripple.style.transform =
              "translate(-50%, -50%) scale(0)";

            ripple.style.left =
              `${event.offsetX}px`;

            ripple.style.top =
              `${event.offsetY}px`;

            ripple.style.transition =
              "transform .55s ease, opacity .55s ease";


            const previousPosition =
              getComputedStyle(
                button
              ).position;


            if (
              previousPosition ===
              "static"
            ) {
              button.style.position =
                "relative";
            }


            button.style.overflow =
              "hidden";


            button.appendChild(
              ripple
            );


            requestAnimationFrame(() => {

              ripple.style.transform =
                "translate(-50%, -50%) scale(20)";

              ripple.style.opacity =
                "0";

            });


            setTimeout(() => {

              ripple.remove();

            }, 600);

          }
        );

      }
    );

  }


  /* =========================================================
     IMAGE HOVER PARALLAX
     ========================================================= */

  if (
    !prefersReducedMotion &&
    window.innerWidth >= 992
  ) {

    $$(".dish").forEach((card) => {

      const image =
        card.querySelector("img");

      if (!image) return;


      card.addEventListener(
        "mousemove",
        (event) => {

          const rect =
            card.getBoundingClientRect();


          const x =
            (event.clientX - rect.left) /
            rect.width -
            0.5;


          const y =
            (event.clientY - rect.top) /
            rect.height -
            0.5;


          image.style.transform =
            `scale(1.07) translate(${x * 10}px, ${y * 10}px)`;

        }
      );


      card.addEventListener(
        "mouseleave",
        () => {

          image.style.transform =
            "";

        }
      );

    });

  }


  /* =========================================================
     CONSOLE BRANDING
     ========================================================= */

  console.log(
    "%c LUXE RESTAURANT ",
    "background:#c8a96b;color:#0b0b0b;padding:8px 14px;font-weight:bold;font-size:14px;"
  );

})();