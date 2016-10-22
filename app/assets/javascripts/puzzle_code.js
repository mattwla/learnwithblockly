var INPUT = {
    input: 2,
    input_array: [2,3,4,5]
 };


	var correct = 0;


  function showCode() {
      // Generate JavaScript code and display it.
      Blockly.JavaScript.INFINITE_LOOP_TRAP = null;
      var code = Blockly.JavaScript.workspaceToCode(workspace);
      alert(code);
    }

    function runCode() {

    	var rootBlock = null;
  var blocks = workspace.getTopBlocks(false);
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
    /*document.getElementById("output").innerHTML = output; 
    document.getElementById("output" + (i+1)).innerHTML = output; 
    if (output === correct) {
    	document.getElementById("grade" + (i+1)).innerHTML = "correct!"; 
    };*/
  };
};

    