(function() {
    var openFormButton = document.querySelector('.subheader__close-button');
    var nav = document.querySelector('.nav');

    if (openFormButton) {
        openFormButton.addEventListener('click', function(e) {
            e.preventDefault();
            pj.form.close();
        })
    }
    if (nav) {
        nav.addEventListener('click', function(e) {
            var target = e.target;

            if (target.tagName.toLowerCase() !== 'a') {
                return;
            }

            e.preventDefault();
            pj.navigation.toggleToActiveLink(target);
        });
    }
    
}());


