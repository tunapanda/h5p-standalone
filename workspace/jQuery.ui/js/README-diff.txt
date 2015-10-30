When making changes in the jQuery-ui.js file, it is important to add
changes to the diff file as well. The original unpatched jquery-ui.js is
provided as jquery-ui-original.js so the patch may be created against 
this using the following command:

  diff -u jquery-ui-original.js jquery-ui.js > apply-when-upgrading.diff

Please review the resulting diff file before committing too...

