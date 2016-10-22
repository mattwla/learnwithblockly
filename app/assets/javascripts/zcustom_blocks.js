Blockly.Blocks['answer'] = {
  init: function() {
    this.appendValueInput("answer")
        .setCheck(null)
        .appendField("answer");
    this.setColour(210);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['block_8'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("8");
    this.setOutput(true, "Number");
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['block_6'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("6");
    this.setOutput(true, "Number");
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['get_input'] = {
  // Block for row variable getter.
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(330);
    this.appendDummyInput()
        .appendField('input');
    this.setOutput(true, 'Number');
  },
  /*customUpdate: function() {
    this.setFieldValue(
        Plane.getMsg('Plane_getRows').replace('%1', Plane.rows1st), 'title');
  }*/
};



/*Blockly.JavaScript['answer'] = function(block) {
    var argument0 = Blockly.JavaScript.valueToCode(block, 'answer',
      Blockly.JavaScript.ORDER_ASSIGNMENT) || 'NaN';
  return argument0 + ';';
};*/

Blockly.JavaScript['block_8'] = function(block) {


    var code = 8;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['block_6'] = function(block) {


    var code = 6;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['get_input'] = function(block) {
  // Generate JavaScript for row variable getter.
  return [INPUT.input, Blockly.JavaScript.ORDER_MEMBER];
};
