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
    }
  }
  var output = NaN;
  Blockly.JavaScript.init(workspace);
  var code = Blockly.JavaScript.blockToCode(rootBlock);
      // Generate JavaScript code and run it.
      window.LoopTrap = 1000;
      Blockly.JavaScript.INFINITE_LOOP_TRAP =
          'if (--window.LoopTrap == 0) throw "Infinite loop.";\n';

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
    OUTPUT.output_array[i] = output;
    //document.getElementById("output").innerHTML = output; 
    
  };

    //need to make this a choice, need to also delay painting of table, and also dynamically build table.
    runAnimation();

};

function displayInputs() {

   var inputDiv = document.getElementById("inputs");


for (var i = 0, len = INPUT.input_array.length; i < len; i++) {
    var comma =    document.createElement('span');
  comma.innerHTML = ", "
  var g = document.createElement('span');
  g.id = 'input-list' + i;
  
  g.innerHTML = INPUT.input_array[i]
  var g2 = inputDiv.appendChild(g);
  g2.classname = 'input';
  
  if (i != len - 1 ) {
  inputDiv.appendChild(comma);
}
  
  }

}

function buildTable() {

  var tableDiv = document.getElementById("output-table");

for (var i = 0, len = INPUT.input_array.length; i < len; i++) {

  var tr = document.createElement('tr');
  tr.innerHTML = INPUT.input_array[i];
  var newtr = tableDiv.appendChild(tr);
  var newtd1 = document.createElement('td');
  newtd1.id = "output" + i;
  var newtd2 = document.createElement('td');
  newtd2.id = "grade" + i;
  newtr.appendChild(newtd1);
  newtr.appendChild(newtd2);

}

}

function winScreen() {

  $("#winscreenDiv").animate({"top": "+=550px" }, "slow", function() {
  });

}

function runAnimation() {



    var blocks = workspace.getAllBlocks();
  for (var i = 0, block; block = blocks[i]; i++) {
    if (block.type == 'answer') {
      rootCoord = block.getRelativeToSurfaceXY();
    }
   
    else if (block.type == 'get_input') {
      var coord = block.getRelativeToSurfaceXY();
    }
  }
   
  var count = 0;
  var correct = 0;
    //while (count < INPUT.input_array.length) {
    function animationLoop(count) {


        //need to offset by count, to adjust for locations of input array spans
        $("#input-list" + count).animate({ "left": "+="+(coord.x + 100), "top": "+="+(coord.y+40) }, "slow", function() {

        $( "#input-list" + count).fadeOut("slow", function () {
           document.getElementById("input-list" + count).innerHTML = OUTPUT.output_array[count]; 
           if (OUTPUT.output_array[count] == CORRECT_OUTPUT.output_array[count]) {
            $("#input-list" + count).css('color', 'green');  //right or wrong? green or red?
           } else {
            $("#input-list" + count).css('color', 'red');
           }


            $("#input-list" + count).animate({ "left": "-="+(coord.x + 100), "top": "-="+(coord.y+40) }, 0, function() {

              $("#input-list" + count).animate({ "left": "+="+(rootCoord.x + 120), "top": "+="+(rootCoord.y+45) }, 0, function() {
                  
                  $( "#input-list" + count).fadeIn({queue: true, duration: "fast"});

                      $("#input-list" + count).animate({"top": "-=20"}, "slow", function() {

                            $( "#input-list" + count).fadeOut("slow", function () {
                              //fill out the chart now
                          document.getElementById("output" + count).innerHTML = OUTPUT.output_array[count]; 
                          if (OUTPUT.output_array[count] === CORRECT_OUTPUT.output_array[count]) {
                            document.getElementById("grade" + count).innerHTML = "correct!"; 
                            correct++;
                            } else {
                              document.getElementById("grade" + count).innerHTML = ""; 
                            };
                          //remove input span element, and remove comma
                          $( "#input-list" + count).remove();
                          $('#inputs span').first().remove();
                          if (count < (INPUT.input_array.length - 1)) {
                          count++;
                          animationLoop(count);
                          
                          } else {
                            //bring all input spand back for next try
                               displayInputs();
                               if (CORRECT_OUTPUT.output_array.length == correct) {
                                winScreen();
                               }


                          }

                        });

                  


                      });
                   });


                });  
        });
    });   
                   
  }

                     animationLoop(count);
                    


   
}

  


    