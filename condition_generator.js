function generate_dropdown (list,name)
{
    /*
    <select class="selectpicker">
                    <option value="Mustard">Mustard</option>
    </select>
    */
   let result = "";
   let options = "";

        list.forEach(function (element, i) {

            options += "<option value='"+i+"'>"+element+"</option>";

        });


     result = "<select name ='"+name+"' class='selectpicker'  >"+options+"</select>"; 

    return result;

}

//console.log(generate_dropdown(app.condition.source_type.name,'source'));

function generate_sql()
{
    generated_relatives = "";

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

            if(sourcetype == 26 && app.condition.generated_relatives == 1) // PHASE
                generated_relatives = source_PHASE(SourceGroup,SourceEntry,referencetype);



            $("#comment").html(generated_relatives+delete_query+"; \n"+instert_query+"; \n");



}


function source_PHASE(SourceGroup,SourceEntry,referencetype)
{
    return "REPLACE INTO `phase_area` (`AreaId`, `PhaseId`, `Comment`) VALUES ("+SourceEntry+", "+SourceGroup+", '"+app.condition.source_type.name[sourcetype]+" - "+app.condition.Reference_type.name[referencetype]+"'); \n"
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