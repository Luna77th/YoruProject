// // Get the current URL
// const currentPage = window.location.pathname;


// const welcomeMessageContainer = document.getElementById('welcomeMessage');


// if (currentPage.endsWith("/") || currentPage.endsWith("index.html")) {
//     // Set the welcome message
//     welcomeMessageContainer.innerHTML = `
//         <div style="background-color: #f0f8ff; padding: 10px; text-align: center;">
//             <h1>Welcome to Yorushika Fansite!</h1>
//             <p>Enjoy exploring our content!</p>
//         </div>
//     `;
// }

document.querySelectorAll(".clickable-images img").forEach((img) => {
    img.addEventListener("click", () => {
        img.style.transition = "transform 0.3s";
        img.style.transform = "scale(1.2)";
        setTimeout(() => (img.style.transform = "scale(1)"), 300);
    });
});
