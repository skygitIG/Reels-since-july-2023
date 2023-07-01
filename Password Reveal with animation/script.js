const container = document.querySelector(".container");
      const hidden = document.querySelector(".hidden");
      const hiddenInput = document.querySelector(".hidden-input");
      const revealed = document.querySelector(".revealed");
      const revealedInput = document.querySelector(".revealed-input");
      const button = document.querySelector(".button");
      const timeline = anime
        .timeline({
          duration: 300,
          easing: "cubicBezier(.4, 0, .2, 1)",
          autoplay: false,
        })
        .add(
          {
            targets: document.querySelector(".eye-lid"),
            d:
              "M -5,-5 V 37 H 15.6 C 15.6,37 21.35124,23.469343 34.312131,23.469343 47.273022,23.469343 53.4,37 53.4,37 H 77 V -5 Z",
          },
          0
        )
        .add(
          {
            targets: document.querySelector(".eye-lashes"),
            rotateX: ["180deg", "0deg"],
          },
          0
        );
      hiddenInput.addEventListener("input", () => {
        if (!container.classList.contains("active")) {
          revealedInput.value = hiddenInput.value;
        }
      });
      revealedInput.addEventListener("input", () => {
        if (container.classList.contains("active")) {
          hiddenInput.value = revealedInput.value;
        }
      });
      button.addEventListener("click", () => {
        container.classList.toggle("active");
        timeline.reverse();
        timeline.play();
        if (container.classList.contains("active")) {
          revealedInput.focus();
        } else {
          hiddenInput.focus();
        }
      });
      timeline.reverse();
      timeline.play();
