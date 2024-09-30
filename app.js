const generateDomain = () => {
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let domain = [ ".com", ".net", ".us", ".io"];
  for (let p of pronoun) {
    for (let a of adj) {
      for (let n of noun) {
          for(let d of domain)
           console.log(p+a+n+d);
          }
        }
      }
  };
console.log(generateDomain());