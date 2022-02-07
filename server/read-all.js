const fs = require('fs');
const yaml = require('js-yaml');

try {
    let fileContents = fs.readFileSync('./data.yml', 'utf8');
    let data = yaml.loadAll(fileContents);

    console.log(data);
} catch (e) {
    console.log(e);
}