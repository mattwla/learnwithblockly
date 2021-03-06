var correct = 0;

function showCode() {
  // Generate JavaScript code and display it.
  Blockly.JavaScript.INFINITE_LOOP_TRAP = null;
  var code = Blockly.JavaScript.workspaceToCode(workspace);
  alert(code);
};

function runCode(animMode) {

  //if we don't specify to skip the animation, or we don't specify a special animaiton, resort to default behavior which is to animate
  if (animMode === undefined) {
    animMode = "animate";
  }
  $("#run-code-button").attr("onclick",""); //prevent from clicking run code again during processing

  var output = NaN;
  var rootBlock = null;
  var blocks = workspace.getAllBlocks();
  for (var i = 0, block; block = blocks[i]; i++) {
    if (block.type == 'output') {
      rootBlock = block;
    };
  };
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
  };
    //need to make this a choice.
    if (animMode === "animate") {
    runAnimation();
  } else if (animMode === "demo2") {
    runAnimation(animMode);
  };

};

//This takes inputs from the puzzle html.erb and puts them into the DOM
function displayInputs() {
  var inputDiv = document.getElementById("inputs");
  for (var i = 0, len = INPUT.input_array.length; i < len; i++) {
    var comma =    document.createElement('span');
    comma.innerHTML = ", ";
    var gc = document.createElement('div');
    gc.id = 'input-container' + i;
    var g = document.createElement('span');
    g.id = 'input-list' + i;
    g.innerHTML = INPUT.input_array[i]
    var g2 = inputDiv.appendChild(gc);
    gc.appendChild(g);
    if (i != len - 1 ) {
      inputDiv.appendChild(comma);
    };
  };
};

//This builds the output table, which keeps track of program outputs and grades the correctness of each.
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
  };
};

function winScreen() {
  $("#winscreenDiv").animate({"top": "+=550px" }, "slow");
  $("#run-code-button").attr("onclick", "");
}

function runAnimation(animMode) {
  var coords_arr = []
  var blocks = workspace.getAllBlocks();
  for (var i = 0, block; block = blocks[i]; i++) {
    if (block.type == 'output') {
      rootCoord = block.getRelativeToSurfaceXY();
    } else if (block.type == 'get_input') {
      coords_arr.push(block.getRelativeToSurfaceXY());
    }
  }
  var count = 0;
  var correct = 0;
  //calculate how much input must travel depenidng on presence of categories in toolbox
  if (workspace.toolbox_ == null) {
      if (workspace.flyout_ == null) {
        var xoffset = -90;
      } else {
        var xoffset = workspace.flyout_.getWidth() - 90;
      }   
  } else {
    var xoffset = workspace.toolbox_.getWidth() - 90;
  }
  if (animMode === "demo2") {
    xoffset = -50;
    var yOffset = 10;
  } else {
    var yOffset = 0;
  };
  
  function animateExtraInputs(count) {
    for (var anim = 1; anim < (coords_arr.length); anim++ ) {
      var clone = $("#input-list" + count).clone();
      clone.appendTo($("#input-container" + count));
      clone.animate({ "left": "+="+(coords_arr[anim].x + xoffset), "top": "+="+(coords_arr[anim].y+45) }, "slow", function() {
        clone.fadeOut("fast", function () {
        clone.remove();
        });
      });
    }
  }
  
  function animationLoop(count) {
    var coord = coords_arr[0];
    animateExtraInputs(count);
    //offset by count, to adjust for locations of input array spans
    $("#input-list" + count).animate({ "left": "+="+(coord.x + xoffset), "top": "+="+(coord.y+45+yOffset) }, "slow", function() {
    $( "#input-list" + count).fadeOut("fast", function () {
    document.getElementById("input-list" + count).innerHTML = OUTPUT.output_array[count]; 
    if (OUTPUT.output_array[count] == CORRECT_OUTPUT.output_array[count]) {
      $("#input-list" + count).css('color', 'green');  //right or wrong? green or red?
    } else {
      $("#input-list" + count).css('color', 'red');
    }
    $("#input-list" + count).animate({ "left": "-="+(coord.x + 80), "top": "-="+(coord.y+45) }, 0, function() {
      $("#input-list" + count).animate({ "left": "+="+(rootCoord.x + 80), "top": "+="+(rootCoord.y+45) }, 0, function() {
        $( "#input-list" + count).fadeIn({queue: true, duration: "fast"});
          $("#input-list" + count).animate({"top": "-=40"}, "slow", function() {
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
              $("#input-container" + count).remove();
              $('#inputs span').first().remove(); //remove the comma span
              if (count < (INPUT.input_array.length - 1)) {
                count++;
                animationLoop(count);
                } else {
                   $("#run-code-button").attr("onclick","runCode()"); //make button available again
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

function runDemoAnimation() {

    var count = 0;
    function animationLoop(count) {

        $("#input-list" + count).animate({ "left": "+= 50", "top": ("+=" + $('#computerDiv').height())}, 1500, function() {
        $("#input-list" + count).fadeTo(1500, 0, function() { 
        $("#demo-output-value").fadeTo(1500, 100, function() {
        $("#demo-output-value").animate({"top": ("-=" + $('#computerDiv').height())}, 1500, function() { 

         
                $("#input-list" + count).remove();
                displayInputs();
                endDemoScreen();
              });
                
               });
                          });
          });
      //});
    //});
  }
  animationLoop(count);
}



function demoScreen() {
  $("#demoscreenDiv").animate({"top": "+=550px" }, "slow");
};

function hideDemoScreen() {
  setUpOutput();
  $("#demoscreenDiv").animate({"top": "-=500px" }, "slow");
$("#run-code-button").attr("onclick","runCode()");
};


function hideWinScreen() {
  setUpOutput();
  $("#winscreenDiv").animate({"top": "-=500px" }, "slow");
  $("#run-code-button").attr("onclick","runCode()");
  
};

function endDemoScreen() {
  document.getElementById("winscreenHeader").innerHTML = "The program added 1 to the input!";
  $(".play-button").hide();
  $(".button-hidden").show();
  demoScreen();
}



function setUpOutput() {
$('#demo-output-value').css("opacity", 0);
$('#demo-output-value').css("top", 300);


}


  


    