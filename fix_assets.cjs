const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    const dirPath = path.join(dir, f);
    const isDirectory = fs.statSync(dirPath).isDirectory();
    if (isDirectory) {
      walkDir(dirPath, callback);
    } else if (dirPath.endsWith('.jsx')) {
      callback(path.join(dir, f));
    }
  });
}

// Only update components and sections directories
const targetDirs = [path.join(srcDir, 'components'), path.join(srcDir, 'sections')];

targetDirs.forEach(dir => {
  walkDir(dir, (filePath) => {
    let content = fs.readFileSync(filePath, 'utf-8');
    
    // Replace '../assets/' with '../../assets/' 
    // BUT only if they are not already '../../assets/' 
    // And actually since we moved them 1 level deeper, ALL of them in these folders should be ../../assets
    
    let changed = false;
    
    // Some might be import img from '../assets/img.png'
    if (content.includes('../assets/')) {
       // We replace exactly '../assets/' if it's not preceded by '.'
       // e.g. import img from '../assets/img.png'
       // A safe regex:
       const regex = /(?<!\.)\.\.\/assets\//g;
       if (regex.test(content)) {
         content = content.replace(regex, '../../assets/');
         changed = true;
       }
    }

    if (changed) {
      fs.writeFileSync(filePath, content, 'utf-8');
      console.log('Fixed asset imports in ' + filePath);
    }
  });
});
