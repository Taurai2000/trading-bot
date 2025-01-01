
document.getElementById("startBot").addEventListener("click", () => {
    // Get user inputs
    const apiToken = document.getElementById("apiToken").value;
    const market = document.getElementById("market").value;
    const prediction = document.getElementById("prediction").value;

    // Validate inputs
    if (!apiToken || !prediction) {
        alert("Please fill in all fields.");
        return;
    }

    // Update status
    const status = document.getElementById("status");
    status.innerHTML = "Starting bot...";

    // Simulate bot logic (replace this with actual API calls later)
    setTimeout(() => {
        status.innerHTML = `Bot started on market ${market}, predicting ${prediction}.`;
    }, 1000);
});
