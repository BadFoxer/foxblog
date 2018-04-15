$(document).ready(function(){
      $('.field').bind("paste",function(e) {
      e.preventDefault();
  });

$(function() {//<-- wrapped here
  $('.field').on('input', function() {
   this.value = this.value.replace(/[^a-zA-Z0-9@,.?!:'"\- \+ \t]+$/,'');  //<-- replace all other than given set of values and allow space key
  })
});

});