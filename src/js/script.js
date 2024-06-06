document.addEventListener("DOMContentLoaded", function() {
    var headers = document.querySelectorAll(".accordion-header");
    var multipleCheckbox = document.getElementById("multiple");

    headers.forEach(function(header) {
        header.addEventListener("click", function() {
            var item = this.parentElement;
            var content = this.nextElementSibling;
            var isExpanded = item.classList.contains("expanded");

            if (multipleCheckbox.checked) {
                if (isExpanded) {
                    collapseItem(item);
                } else {
                    expandItem(item);
                }
            } else {
                if (!isExpanded) {
                    headers.forEach(function(h) {
                        collapseItem(h.parentElement);
                    });
                    expandItem(item);
                }
            }
        });
    });

    function expandItem(item) {
        item.classList.add("expanded");
        item.querySelector(".icon").textContent = "-";
        item.querySelector(".accordion-content").style.display = "block";
    }

    function collapseItem(item) {
        item.classList.remove("expanded");
        item.querySelector(".icon").textContent = "+";
        item.querySelector(".accordion-content").style.display = "none";
    }

    // Expande el primer item por defecto
    var firstItem = document.querySelector(".accordion-item");
    expandItem(firstItem);
});