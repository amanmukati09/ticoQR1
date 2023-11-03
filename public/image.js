document.addEventListener("DOMContentLoaded", function () {
  const inputText = document.getElementById("input-text");
  const generateButton = document.getElementById("generate-button");
  const generatedImage = document.getElementById("generated-image");

  generateButton.addEventListener("click", () => {
    // You can replace this with code to generate the image based on the user's input.
    // For actual image generation, you'd typically use a library or API.
    const userText = inputText.value;

    // Replace this with the URL of the image you want to display.
    const imageUrl = `./images/IMG-20231102-WA0011.jpg`;

    // Set the src attribute of the image to display the generated image.
    generatedImage.src = imageUrl;
    generatedImage.style.display = "block"; // Show the generated image.
  });
});

// document.addEventListener("DOMContentLoaded", function () {
//   const generateButton = document.getElementById("generate-button");
//   const generatedImage = document.getElementById("generated-image");

//   generateButton.addEventListener("click", async () => {
//     const inputText = document.getElementById("input-text").value;

//     // Make a POST request to the server's /generate-image route to generate the image.
//     const response = await fetch("/generate-image", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ message: inputText }),
//     });

//     if (response.ok) {
//       const data = await response.json();

//       // Set the src attribute of the image to display the generated image.
//       generatedImage.src = data.imageUrl;
//       generatedImage.style.display = "block"; // Show the generated image.
//     } else {
//       console.error("An error occurred during image generation.");
//     }
//   });
// });
