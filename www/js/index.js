/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
 var theARRay=[];
var counter=2;
var lastRandom = 2;
IMAGETAKEN=0;
var app = {
    // Application Constructor
    initialize: function() {
        theARRay[0] = "img/rahaf.gif";
        theARRay[1] = "img/amr.gif";
        theARRay[2] = "img/qasem.gif";
        ion.sound({
    sounds: [
        {  name: "cheer" } ,
        {  name: "sad" }
    ],
    volume: 1,
    path: "media/",
    preload: true
});

         
        $("#resetButt").on("click", function(){
            app.shuffle();
        });

        $(".classno1, .classno2, .classno3").on("click", function(event){
            console.log(event.target.id+" : has been clicked");

            var divIdx = (event.target.id).slice(-1);
            $("#theImg").remove();
            var absol = ((lastRandom + 2)  % 3 ) ;

            var idxShifted = (( divIdx+lastRandom )  % 3 ) ;
       console.log(  "divIdx  " + divIdx + "   absol:"+absol +  "       idxShifted: " + idxShifted + " theARRay of the idx  " +theARRay[idxShifted]);
 
    var img = document.createElement("IMG");
                img.src = theARRay[idxShifted];
                img.id="theImg";
                img.className ="pic";

            if(parseInt(idxShifted) === 0) {
                  console.log( divIdx + "divIdx is MATCHINg .. Fireworks !! absol:"+absol);
                  if(IMAGETAKEN===1) {
                     var imag = document.getElementById('capImage');
                     img.src = imag.src; 
                    }
                    document.getElementById(event.target.id).appendChild(img);
                    ion.sound.play("cheer");
                   createFirework(25,187,5,1,null,null,null,null,false,true); 
                   createFirework(50,187,5,1,null,null,null,null,false,true); 
                   createFirework(100,100,1,null,50,100,50,50,false,true);

                 } else {
                    document.getElementById(event.target.id).appendChild(img);
                    ion.sound.play("sad");
            }

//            $('#'+event.target.id).prepend('<img class="pic" id="theImg" src=img/"' + theARRay[ arrIdx] + '" />')
        });
        this.bindEvents();
    },

    captureImage : function() {
        IMAGETAKEN =0;

        navigator.camera.getPicture(app.onImageSuccess, app.onFail, 
            {quality :50, destinationType:Camera.DestinationType.DATA_URL, correctOrientation: true });
    },

    onImageSuccess : function(imageData) {
        $("#capImage").attr("src",imageData);
        console.log("image updated");

          var image = document.getElementById('capImage');
         image.src = "data:image/jpeg;base64," + imageData;
            theARRay[0] =  image.src;
            IMAGETAKEN =1;
            app.shuffle();

    },  
    onFail : function(imageData) {
        alert("failed to take a pic !!");
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
 
    receivedEvent: function(id) {
     /*   var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');
        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');
  */      console.log('Received Event: ' + id);
    },

    shuffle : function() {
       $("#theImg").remove();
        console.log("shuffle");
          $("#div0").removeClass("classno1 classno2 classno3");
          $("#div1").removeClass("classno1 classno2 classno3");
          $("#div2").removeClass("classno1 classno2 classno3");
          if(counter == 1 )  {
            counter++;
            $("#div0").addClass("classno1");
            $("#div1").addClass("classno2");
            $("#div2").addClass("classno3");
          } else  if(counter == 2 )  {
            counter++;
            $("#div0").addClass("classno2");
            $("#div1").addClass("classno3");
            $("#div2").addClass("classno1");
          } else if(counter == 3 )  {
            counter=1;
            $("#div0").addClass("classno3");
            $("#div1").addClass("classno1");
            $("#div2").addClass("classno2");
          }
 
            lastRandom = app.getRandomInt(0,1,2);
/*            switch(lastrandom) {
                case 0: theARRay = ['rahaf.gif', 'amr.gif', 'qasem.gif' ];
                break;
                case 1: theARRay = [ 'amr.gif', 'qasem.gif', 'rahaf.gif' ];
                break;
                case 2: theARRay = [ 'qasem.gif', 'rahaf.gif', 'amr.gif' ];
                break;
            }

*/             console.log("thRandom=" + lastRandom);
  /*          var x = theARRay[0];
            theARRay[0] = theARRay[theRandom];
            theARRay[theRandom] = x; 
  */            
          
    },
   sleepFor:  function( sleepDuration ){
    var now = new Date().getTime();
    while(new Date().getTime() < now + sleepDuration){ /* do nothing */ } 
},
    redraw : function(arg1){
        console.log("Redrawing ... ");
      if(arg1 == 1){
                $("#butt0").css("background-color", "green");           
                                $("#butt1").css("background-color"   , "red");            
                                                $("#butt2").css("background-color" ,"yellow");           
        }

       if(arg1 == 2){
                $("#butt0").css("background-color" , "blue");           
                                $("#butt1").css("background-color",  "green");            
                                                $("#butt2").css("background-color", "red");           
        }
/*
        for(j=0; j<3; j++){

            //$("#butt"+j).removeAttr("style");
                         $("#butt"+j).css('background-color',"");
 

             $("#butt"+j).css('background-color',theARRay[j]);
                        console.log("theARRay["+j+"]="+theARRay[j]) ; 
        }*/
 

    },

 

   getRandomInt :   function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
};
