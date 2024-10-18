document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a[href*="arwall.ar-range.app"]').forEach(function(link) {
        link.setAttribute('target', '_blank');
    });
});