function setActiveBlogImage(imageNumber) {
  const images = document.querySelectorAll(".blog-images");
  images.forEach((image, index) => {
    if (index === imageNumber) {
      image.classList.add("blog-active-image");
      return;
    }
    image.classList.remove("blog-active-image");
  });

  const blogArrows = document.querySelectorAll(
    ".arrow-right-blog-div-2,.arrow-right-blog-div",
  );
  console.log(blogArrows);
  blogArrows.forEach((arrow) => {
    arrow.classList.remove("active-blog-arrow");
  });
  blogArrows.forEach((arrow, index) => {
    if (index === imageNumber) {
      arrow.classList.add("active-blog-arrow");
    }
  });
}

function toggleActiveService(serviceNumber) {
  const serviceContents = document.querySelectorAll(".contentDiv");
  serviceContents.forEach((content, index) => {
    if (index === serviceNumber) {
      content.classList.toggle("activeContent");
      return;
    }
    content.classList.remove("activeContent");
  });

  const serviceLines = document.querySelectorAll(".line-break-2");
  serviceLines.forEach((line, index) => {
    if (index === serviceNumber) {
      line.classList.toggle("active-line-break");
      return;
    }
    line.classList.remove("active-line-break");
  });

  const serviceArrows = document.querySelectorAll(".arrow-image-right");
  serviceArrows.forEach((arrow, index) => {
    if (index === serviceNumber) {
      if (arrow.src.includes("images/arrow-up-right-blue-svg.svg")) {
        arrow.src = "images/arrow-image-right-svg.svg";
        return;
      } else {
        arrow.src = "images/arrow-up-right-blue-svg.svg";
        return;
      }
    }
    arrow.src = "images/arrow-image-right-svg.svg";
  });
}

function toggleFAQAnswer(faqNumber) {
  faqNumber = Number(faqNumber);
  const FaqAnswers = document.querySelectorAll(".FAQ-answer-div");
  FaqAnswers.forEach((answer, index) => {
    if (faqNumber == index) {
      answer.classList.toggle("active-faq-answer");
      return;
    }
    answer.classList.remove("active-faq-answer");
  });

  const faqIcons = document.querySelectorAll(".minus-SVG-icon");
  faqIcons.forEach((icon, index) => {
    if (index === faqNumber) {
      if (icon.src.includes("images/add-svg-FAQ.svg")) {
        icon.src = "images/minus-icon-svg.svg";
        return;
      } else {
        icon.src = "images/add-svg-FAQ.svg";
        return;
      }
    }
    icon.src = "images/add-svg-FAQ.svg";
  });
}

function toggleActiveProject(projectNumber) {
  const projects = document.querySelectorAll(".");
}

document
  .getElementById("Free-estimate-button")
  .addEventListener("click", () => {
    document.getElementById("Financing-anchor").scrollIntoView({
      behavior: "smooth",
    });
  });
