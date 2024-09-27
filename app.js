    let pronoun = ['the', 'my'];
    let adj = ['hardest', 'demure'];
    let noun = ['space','cheese'];
    let finale = ['.es', '.dev'];

function generearUrl(){
    var t = [];
    for (let p of pronoun) {
      for (let a of adj) {
        for (let n of noun) {
            for(let f of finale)
            t.push(`${p}${a}${n}${f}`);         
        }
      }
    }
    console.log(t);
}
generearUrl();