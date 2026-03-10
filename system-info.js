const os = require(`os`);
const osu = require(`os-utils`);

console.log("System Information:");
console.log(`Platform: ${os.platform()}`);
console.log(`CPU Architecture: ${os.arch()}`);
console.log(`Total Memory: ${(os.totalmem() / 1e9).toFixed(2)} GB`);

osu.cpuUsage((usage)=> {
  console.log(`CPU Usage: ${(usage * 100).toFixed(2)}%`);
});
