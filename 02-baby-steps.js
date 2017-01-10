let args = process.argv;
// Remove the 'node' and 'file' arguments
args.splice(0,2);

let sum = 0

for (i in args) {
    sum = sum + Number(args[i])
}

console.log(sum)
