document.addEventListener('DOMContentLoaded', function() {
    var links = document.querySelectorAll('a');
    links.forEach(function(link) {
        if (link.href.includes('arwall.ar-range.app')) {
            link.setAttribute('target', '_blank');
        }
    });
});