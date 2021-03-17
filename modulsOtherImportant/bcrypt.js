const bcrypt = require('bcrypt');
const password = 'khetSINGNH';
const hashCompare = async ()=>{


const hash = await bcrypt.hash(password, 10)
    console.log(hash);

const compare = await bcrypt.compare(password, hash);
console.log(compare);

}
hashCompare();