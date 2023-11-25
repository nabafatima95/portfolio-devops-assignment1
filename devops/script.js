document.addEventListener('DOMContentLoaded', function() {
    let filterBox = document.getElementById('filterBox');

    filterBox.addEventListener('keyup', function() {
        let filterValue = this.value.toLowerCase();
        let projects = document.querySelectorAll('.project');

        projects.forEach(function(project) {
            let tech = project.getAttribute('data-tech').toLowerCase();
            if (tech.indexOf(filterValue) > -1) {
                project.style.display = "";
            } else {
                project.style.display = "none";
            }
        });
    });
});
