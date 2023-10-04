import {javascriptGenerator} from 'blockly/javascript';

javascriptGenerator.forBlock['custom_block'] = function(block, generator) {
  // Collect argument strings.
  const fieldValue = block.getFieldValue('MY_FIELD');
  const innerCode = generator.statementToCode(block, 'MY_STATEMENT_INPUT');

  // Return code.
  return 'my code string';
}
