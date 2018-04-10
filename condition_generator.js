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