
const paperTabs = document.querySelectorAll(".paper-tab");

const internalContent = document.getElementById("internal-content");
const externalContent = document.getElementById("external-content");

paperTabs.forEach(tab => {

    tab.addEventListener("click", () => {

        // Remove active class from all tabs
        paperTabs.forEach(item => {
            item.classList.remove("active");
        });

        // Activate clicked tab
        tab.classList.add("active");

        // Show selected content
        const selectedTab = tab.dataset.tab;

        if (selectedTab === "internal") {

            internalContent.hidden = false;
            externalContent.hidden = true;

        } else {

            internalContent.hidden = true;
            externalContent.hidden = false;

        }

    });

});
