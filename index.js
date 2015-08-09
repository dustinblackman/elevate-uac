path = require('path');
spawn = require('child_process').spawn;

module.exports = function(cmd, done) {
  var elevate_path = path.join(__dirname, 'bin/elevate.exe');
  cmd = ['-c'].concat(cmd.split(' '));

  var proc = spawn(elevate_path, cmd)
  proc.stdout.on('data', function(data) { console.log(data.toString()); })
  proc.stderr.on('data', function(data) { console.log(data.toString()); })
  proc.on('close', function() { return done() })
}
