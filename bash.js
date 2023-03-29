const comandos = require("./commands");

// Un prompt como output
process.stdout.write('prompt > ');
// El evento STDIN 'data' se dispara cuando el usuario escribe una línea
process.stdin.on('data', function (data) {
    let arrData = data.toString().trim().split(" "); // Remueve la nueva línea
    let cmd = arrData[0]; 
    if (comandos[cmd]) comandos[cmd](arrData.slice(1).join(" "),done) ;
    else {
      process.stdout.write("This command doesn't exist: " + cmd + '\nprompt > ');
    }
  });


  const done = function(output) {
    // Muestra el output
    // Muestra el prompt
    process.stdout.write(output);
  }