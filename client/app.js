function onPageLoad(){
    console.lof( "Document Loaded");
    var url="http://127.0.0.1:5000/get_location_names";
    $.get(url,function(data,status){
        console.log("Got response for get_locaiton_names request");
        if(data){
            var locations=data.locations;
            var uiLocations=document.getElementById("uiLocations");
            $('#uiLocations').empty();
            for(var i in locations){
                var opt=new Option(locations[i]);
                $('uiLocations').append(opt);
            }
        }
    });
}




window.onload=onPageLoad;