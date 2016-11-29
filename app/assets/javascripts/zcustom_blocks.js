Blockly.Blocks['output'] = {
  init: function() {
    this.appendValueInput("output")
        .setCheck(null)
        .appendField("output");
    this.setColour(210);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    //below is code that allows the output block to attach below other blocks, caused unwanted behavior
    //this.setPreviousStatement(true, null);
  }
};


Blockly.Blocks['block_1'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("1");
    this.setOutput(true, "Number");
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['block_2'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("2");
    this.setOutput(true, "Number");
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['block_3'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("3");
    this.setOutput(true, "Number");
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['block_4'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("4");
    this.setOutput(true, "Number");
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['block_5'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("5");
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


Blockly.Blocks['block_7'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("7");
    this.setOutput(true, "Number");
    this.setColour(230);
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


Blockly.Blocks['block_9'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("9");
    this.setOutput(true, "Number");
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};


Blockly.Blocks['block_10'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("10");
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
  //below is commented out code from original source, the blockly plane demo
  /*customUpdate: function() {
    this.setFieldValue(
        Plane.getMsg('Plane_getRows').replace('%1', Plane.rows1st), 'title');
  }*/
};

Blockly.Blocks['math_add'] = {
  /**
   * Block for basic arithmetic operator.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "%1 + %2 %3",
      "args0": [
        {
          "type": "input_value",
          "name": "A",
          "check": "Number"
        },
        {
          "type": "input_dummy",
        },
        {
          "type": "input_value",
          "name": "B",
          "check": "Number"
        }
      ],
      "inputsInline": true,
      "output": "Number",
      "colour": Blockly.Blocks.math.HUE,
      "helpUrl": Blockly.Msg.MATH_ARITHMETIC_HELPURL
    });

    // Assign 'this' to a variable for use in the tooltip closure below.
    var thisBlock = this;
    this.setTooltip(function() {
      var mode = thisBlock.getFieldValue('OP');
      var TOOLTIPS = {
        'ADD': Blockly.Msg.MATH_ARITHMETIC_TOOLTIP_ADD,
        'MINUS': Blockly.Msg.MATH_ARITHMETIC_TOOLTIP_MINUS,
        'MULTIPLY': Blockly.Msg.MATH_ARITHMETIC_TOOLTIP_MULTIPLY,
        'DIVIDE': Blockly.Msg.MATH_ARITHMETIC_TOOLTIP_DIVIDE,
        'POWER': Blockly.Msg.MATH_ARITHMETIC_TOOLTIP_POWER
      };
      return TOOLTIPS[mode];
    });
  }
};

//BEGIN JS//


Blockly.JavaScript['output'] = function(block) {
  var argument0 = Blockly.JavaScript.valueToCode(block, 'output',
  Blockly.JavaScript.ORDER_ASSIGNMENT) || 'NaN';
  return argument0 + ';';
};

Blockly.JavaScript['block_1'] = function(block) {
  var code = 1;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['block_2'] = function(block) {
  var code = 2;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['block_3'] = function(block) {
  var code = 3;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['block_4'] = function(block) {
  var code = 4;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['block_5'] = function(block) {
  var code = 5;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};


Blockly.JavaScript['block_6'] = function(block) {
  var code = 6;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};


Blockly.JavaScript['block_7'] = function(block) {
  var code = 7;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};


Blockly.JavaScript['block_8'] = function(block) {
  var code = 8;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};


Blockly.JavaScript['block_9'] = function(block) {
  var code = 9;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};


Blockly.JavaScript['block_10'] = function(block) {
  var code = 10;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};





Blockly.JavaScript['get_input'] = function(block) {
  // Generate JavaScript for row variable getter.
  return [INPUT.input, Blockly.JavaScript.ORDER_MEMBER];
};

Blockly.JavaScript['math_add'] = function(block) {
  var value_first = Blockly.JavaScript.valueToCode(block, 'first', Blockly.JavaScript.ORDER_ATOMIC);
  var value_second = Blockly.JavaScript.valueToCode(block, 'second', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['math_add'] = function(block) {
  // Basic arithmetic operators, and power.
  var OPERATORS = {
    'ADD': [' + ', Blockly.JavaScript.ORDER_ADDITION],
    'MINUS': [' - ', Blockly.JavaScript.ORDER_SUBTRACTION],
    'MULTIPLY': [' * ', Blockly.JavaScript.ORDER_MULTIPLICATION],
    'DIVIDE': [' / ', Blockly.JavaScript.ORDER_DIVISION],
    'POWER': [null, Blockly.JavaScript.ORDER_COMMA]  // Handle power separately.
  };
  var tuple = OPERATORS['ADD'];
  var operator = tuple[0];
  var order = tuple[1];
  var argument0 = Blockly.JavaScript.valueToCode(block, 'A', order) || '0';
  var argument1 = Blockly.JavaScript.valueToCode(block, 'B', order) || '0';
  var code;
  // Power in JavaScript requires a special case since it has no operator.

  code = argument0 + operator + argument1;
  return [code, order];
};
