(function() {
    var me = {};
    var form = document.querySelector('.subheader__top');

    me.close = function() {
      form.classList.add('is-hidden');
    };
  
    pj.form = me;
}());