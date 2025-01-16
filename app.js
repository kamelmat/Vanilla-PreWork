let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon', 'puedes'];
let extensions = ['.com', '.net', '.us', '.io', '.es'];

for (let p of pronoun) {
  for (let a of adj) {
    for (let n of noun) {
      for (let ext of extensions) {
        if (n.endsWith(ext.substring(1))) {
          console.log(`${p}${a}${n}`);
        } else {
          console.log(`${p}${a}${n}${ext}`);
        }
      }
    }
  }
}
