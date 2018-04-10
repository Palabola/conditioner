
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


function generate_sql()
{

    SourceGroup = $( "#ex1" ).val();
    SourceEntry = $( "#ex2" ).val();
    SourceId = $( "#ex3" ).val();
    ElseGroup = $( "#ex8" ).val();
    ConditionTarget = $( "#ex4" ).val();
    ConditionValue1 = $( "#ex5" ).val();
    ConditionValue2 = $( "#ex6" ).val();
    ConditionValue3 = $( "#ex7" ).val();
    NegativeCondition = $( "#ex9" ).val();
    ErrorType = $( "#ex10" ).val();
    ErrorTextId = $( "#ex11" ).val();
    ScriptName = $( "#ex12" ).val();
    Comment = $( "#ex13" ).val();


   // console.log( 
        delete_query = squel.delete()
            .from("conditions")
            .where("SourceTypeOrReferenceId = "+sourcetype)
            .where("ConditionTypeOrReference ="+referencetype)
            .where("SourceGroup ="+SourceGroup)
            .where("SourceEntry ="+SourceEntry)
            .where("ConditionValue1 ="+ConditionValue1)
            .toString();
      //  );


      //  console.log(  
        instert_query =  squel.insert()
            .into("conditions")
            .set("SourceTypeOrReferenceId", sourcetype)
            .set("SourceGroup", SourceGroup)
            .set("SourceEntry", SourceEntry)
            .set("SourceId", SourceId)
            .set("ElseGroup", ElseGroup)
            .set("ConditionTypeOrReference", referencetype)
            .set("ConditionTarget", ConditionTarget)
            .set("ConditionValue1", ConditionValue1)
            .set("ConditionValue2", ConditionValue2)
            .set("ConditionValue3", ConditionValue3)
            .set("NegativeCondition", NegativeCondition)
            .set("ErrorType", ErrorType)
            .set("ErrorTextId", ErrorTextId)
            .set("ScriptName", ScriptName)
            .set("Comment", Comment)
            .toString();

       // );


            $("#comment").html(delete_query+"; \n"+instert_query+"; \n");



}


function update_source_field(entry)
{
    if(app.condition.source_type.param1[entry])    
        $("[for='ex1']").html(app.condition.source_type.param1[entry]);
    else
        $("[for='ex1']").html(app.condition.source_type.param1[0]);

    if(app.condition.source_type.param2[entry])    
        $("[for='ex2']").html(app.condition.source_type.param2[entry]);
    else
        $("[for='ex2']").html(app.condition.source_type.param2[0]);
        
    if(app.condition.source_type.param3[entry])    
        $("[for='ex3']").html(app.condition.source_type.param3[entry]);
    else
        $("[for='ex3']").html(app.condition.source_type.param3[0]);    

        if(app.condition.source_type.param4[entry])    
        $("[for='ex4']").html(app.condition.source_type.param4[entry]);
    else
        $("[for='ex4']").html(app.condition.source_type.param4[0]);        

}

function update_reference_field(entry)
{
    if(app.condition.Reference_type.param1[entry])    
        $("[for='ex5']").html(app.condition.Reference_type.param1[entry]);
    else
        $("[for='ex5']").html(app.condition.Reference_type.param1[0]);

    if(app.condition.Reference_type.param2[entry])    
        $("[for='ex6']").html(app.condition.Reference_type.param2[entry]);
    else
        $("[for='ex6']").html(app.condition.Reference_type.param2[0]);
        
    if(app.condition.Reference_type.param3[entry])    
        $("[for='ex7']").html(app.condition.Reference_type.param3[entry]);
    else
        $("[for='ex7']").html(app.condition.Reference_type.param3[0]);    
    

}