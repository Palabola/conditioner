
$( document ).ready(function() {

    sourcetype = 0;
    referencetype = 0;

  $("[name='source']").on('changed.bs.select', function (e) {
    console.log(this.value);
    sourcetype = this.value;
    update_source_field(this.value);
  });

  $("[name='reference']").on('changed.bs.select', function (e) {
    console.log(this.value);
    referencetype = this.value;
    update_reference_field(this.value);
  });


  //setup before functions
        var typingTimer;                //timer identifier
        var doneTypingInterval = 100;  //time in ms, 5 second for example
        var $input = $('.container');

        //on keyup, start the countdown
        $input.on('keyup', function () {
        clearTimeout(typingTimer);
        typingTimer = setTimeout(doneTyping, doneTypingInterval);
        });

        //on keydown, clear the countdown 
        $input.on('keydown', function () {
        clearTimeout(typingTimer);
        });

        //user is "finished typing," do something
        function doneTyping () {
            generate_sql();
        }

});





