// REPL-->READ EVALUATE PRINT LOOP
const repl=require('repl');

const local=repl.start("START REPL-->>");

local.on("exit",()=>
{
    console.log("Exiting REPL...");
    process.exit();
})