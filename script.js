if (!document.getElementById("nav_bar") || !document.getElementById("page")) {
    alert("Failed to load navigation bar")
}

document.addEventListener("DOMContentLoaded", (event) => {
    let pageName = query("#page").innerText;
    let navBar = query("#nav_bar");
    let footer = query("#footer");

    // Navigation Bar

    navBar.innerHTML = `
    <div class="location_nav">
        <p>Glasgow Italian Grill</p>
        <p>19 Hatfield Drive</p>
        <p>Anniesland</p>
        <p>Glasgow G12 0YE</p>
        <br>
        <p class="number">0141 9496 0555</p>
        <p class="email">Italian.grill@glasgow</p>
    </div>
    `

    navBar.innerHTML = navBar.innerHTML + "<h1>Glasgow Italian Grill</h1>"

    navBar.innerHTML = navBar.innerHTML + `<a href="index.html" class="nav_button${pageName == "Home" ? " selected" : ""}">Home</a>\n
    <a href="menu.html" class="nav_button${pageName == "Menu" ? " selected" : ""}">Menu</a>\n
    <a href="staff.html" class="nav_button${pageName == "Staff" ? " selected" : ""}">Staff</a>\n
    <a href="contact.html" class="nav_button${pageName == "Contact" ? " selected" : ""}">Contact</a>\n
    `;

    // Footer

    /*
    <div class="contact_details">
        <a class="links" href="index.html">Home</a>
        <a class="links" href="menu.html">Menu</a>
        <a class="links" href="staff.html">Staff</a>
        <a class="links" href="contact.html">Contact</a>
    </div>
    */

    footer.innerHTML = `
    <h1>&copy; Copyright 2026</h1>\n
    <div class="location_info">
        <p>Glasgow Italian Grill</p>
        <p>19 Hatfield Drive</p>
        <p>Anniesland</p>
        <p>Glasgow G12 0YE</p>
        <br>
        <p class="number">0141 9496 0555</p>
        <p class="email">Italian.grill@glasgow</p>
    </div>
    <div>
        <p class="opening_times"><strong>Sunday - Thursday</strong></p>
        <p class="opening_times">12 noon – 9:00pm</p>
        <p class="opening_times"><strong>Friday & Saturday</strong></p>
        <p class="opening_times">12 noon – 10:00pm</p>
    </div>
    <div class="socials-section">\n
        <h2 class="socials">Socials</h2>\n
        <a href="https://instagram.com/empty"><img src="images/socials/instagram.png"></a>
        <a href="https://facebook.com/empty"><img src="images/socials/facebook.png"></a>
        <a href="https://x.com/empty"><img src="images/socials/x.png"></a>
    </div>
    `
})

function getDocumentByClass(clazz) {
    return query(`.${clazz}`)
}

function query(selector) {
    return document.querySelector(selector);
}

function queryAll(selector) {
    return document.querySelectorAll(selector);
}

function sendEmail() {

    let subject = query("#subject");
    let inquiry = query("#inquiry");

    if (!subject.value || !inquiry.value) {
        alert("Please fill out all fields.");
        return;
    }

    window.open(`mailto:20329091@myclyde.ac.uk?subject=${subject.value}&body=${inquiry.value}`)
}