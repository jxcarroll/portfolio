function Calculate(){  
      $("#Currency" ).validate({

      });

       
    if ($("#Currency" ).valid()) {
        
        var Basecurrency = document.getElementById("Basecurrency").value;
        var Convert_tocurrency = document.getElementById("Convert_tocurrency").value;
        var Date_from = document.getElementById("Date_from").value;
        var Date_to = document.getElementById("Date_to").value; 

              
        
        var myURL= "https://api.worldtradingdata.com/api/v1/forex_history?base="+Basecurrency + "&convert_to=" + Convert_tocurrency + "&date_from=" +  Date_from + "&date_to=" + Date_to + "&sort=oldest&api_token=J7p0yroSa9Z4eyPILU6LKHt8D6rOVdzFFraxAtZZq71iNaryLh73nZOljbFf";

        var myMethod = "GET";
        
        
        $(document).ready(function() {
            
            $.ajax({
                method: myMethod,
                url: myURL
            })
            
            .done(function( msg ){
                
                var dates= [];
                var values= [];
                
                i = 0;
                
                for (var datekey in msg.history) {
                    dates[i] = datekey;
                    values [i] = msg.history[datekey];
                    i = i + 1;
                }
               var ctx = document.getElementById("chartjs-0");
                var myChart = new Chart(ctx, {
                    "type":"line",
                    "data": {
                        "labels": dates,
                        "datasets":[{"label" : "From" + Basecurrency + "to" + Convert_tocurrency,
                        "data": values,
                        "fill": false,
                        "borderColor":"rgb(75, 192, 192)",
                        "lineTension":0.1
                        }]
                    },
                     "options":{
                            responsive: false,
                            maintainAspectRatio: true,
                            title: {
                              display: true,
                              text: Basecurrency + "to" + Convert_tocurrency,
                              fontSize : 12 
                              },
                              scales: {
                              xAxes: [{
                                type: "time",
                                time: {
                                  displayFormats: {
                                    day: "MMM D"
                                  }
                                }
                              }],

                              yAxes: [{
                                scaleLabel:{
                                  display: true,
                                  labelString: Convert_tocurrency
                                }
                              }]
                              }
                            }
                });
                });
                });
                }
                }
                                        
                                        
                                    
                          
                          

function clearform(){
    "use strict"
    
    
    document.getElementById("Basecurrency").value ="";
    document.getElementById("Convert_tocurrency").value ="";
    document.getElementById("Date_from").value =""; 
    document.getElementById("Date_to").value =""; 
    document.getElementById("Result").innerHTML ="";
    document.getElementById("BasecurrencyMsg").innerHTML ="";
    document.getElementById("Convert_tocurrencyMsg").innerHTML ="";
    document.getElementById("Date_fromMsg").innerHTML =""; 
    document.getElementById("Date_toMsg").innerHTML =""; 
     document.getElementById("chartjs-0").innerHTML =""; 
    
}
