function calculateAge() {
    const birthday = new Date(document.getElementById("birthday").value);
    const today = new Date();

    if (isNaN(birthday)) {
        alert("Please select a valid date.");
        return;
    }

    let years = today.getFullYear() - birthday.getFullYear();
    let months = today.getMonth() - birthday.getMonth();
    let days = today.getDate() - birthday.getDate();

    // Adjust if the birthday hasn't happened yet this year
    if (months < 0 || (months === 0 && days < 0)) {
        years--;
        months += (months < 0) ? 12 : 0;
    }

    // If days are negative, adjust month and recalculate days
    if (days < 0) {
        const previousMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        days += previousMonth.getDate();
        months--;
    }

    // Display the result
    document.getElementById("years").innerText = ` ${years}`;
    document.getElementById("months").innerText = ` ${months}`;
    document.getElementById("days").innerText = `${days}`;
}