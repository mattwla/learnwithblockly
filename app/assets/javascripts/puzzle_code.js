var correct = 0;

  function showCode() {
      // Generate JavaScript code and display it.
      Blockly.JavaScript.INFINITE_LOOP_TRAP = null;
      var code = Blockly.JavaScript.workspaceToCode(workspace);
      alert(code);
    }

    function runCode() {

     

    	var rootBlock = null;
  //why do I get all here and not get by id?
  var blocks = workspace.getAllBlocks();
  for (var i = 0, block; block = blocks[i]; i++) {
    if (block.type == 'answer') {
      rootBlock = block;
      var rootCoord = block.getRelativeToSurfaceXY();
      
    }
    else if (block.type == 'get_input') {
      var coord = block.getRelativeToSurfaceXY();
    }
  }
  var output = NaN;
  Blockly.JavaScript.init(workspace);
  var code = Blockly.JavaScript.blockToCode(rootBlock);
      // Generate JavaScript code and run it.
      window.LoopTrap = 1000;
      Blockly.JavaScript.INFINITE_LOOP_TRAP =
          'if (--window.LoopTrap == 0) throw "Infinite loop.";\n';

          //Input to output animation

  

      document.getElementById("coord").innerHTML = coord.x + " " + coord.y;     
    
      

for (var i = 0, len = INPUT.input_array.length; i < len; i++) {
    
  INPUT.input = INPUT.input_array[i];
    var code = Blockly.JavaScript.workspaceToCode(workspace);
      Blockly.JavaScript.INFINITE_LOOP_TRAP = null;



      try {
        eval(code);
      } catch (e) {
        alert(e);
      }
          var output = 0;
    output = eval(code);
    //document.getElementById("output").innerHTML = output; 

        $("#input-list" ).animate({ "left": "+="+(coord.x + 100), "top": "+="+(coord.y+40) }, "slow", function() {

        $( "#input-list" ).fadeOut("slow", function () {
           document.getElementById("input-list").innerHTML = output; 

            $("#input-list" ).animate({ "left": "-="+(coord.x + 100), "top": "-="+(coord.y+40) }, 0, function() {

              $("#input-list" ).animate({ "left": "+="+(rootCoord.x + 130), "top": "+="+(rootCoord.y+45) }, 0, function() {
                  
                  $( "#input-list" ).fadeIn({queue: false, duration: "fast"});

                      $("#input-list" ).animate({"top": "-=20"}, "slow", function() {

                      //});



                      });
                   });


                });  
        });
    });   
   
    
    document.getElementById("output" + (i+1)).innerHTML = output; 
    if (output === correct) {
    	document.getElementById("grade" + (i+1)).innerHTML = "correct!"; 
    };
  };
};

  


    