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

const componentNames = [
  'FloatingWhatsapp', 'Footer', 'Navbar', 'ScrollToTop', 'ScrollToTopOnMount',
  'About', 'Contact', 'FAQ', 'Hero', 'OurProcess', 'Portfolio', 'Services', 'WhyChooseUs'
];

walkDir(srcDir, (filePath) => {
  let content = fs.readFileSync(filePath, 'utf-8');
  let changed = false;

  componentNames.forEach(comp => {
    // Replace: import Comp from '../components/Comp'; -> import Comp from '../components/Comp/Comp';
    const regexComponents = new RegExp(`(['"])(.*?\\/components\\/)${comp}\\1`, 'g');
    if (regexComponents.test(content)) {
      content = content.replace(regexComponents, `$1$2${comp}/${comp}$1`);
      changed = true;
    }

    // Replace: import Comp from '../sections/Comp'; -> import Comp from '../sections/Comp/Comp';
    const regexSections = new RegExp(`(['"])(.*?\\/sections\\/)${comp}\\1`, 'g');
    if (regexSections.test(content)) {
      content = content.replace(regexSections, `$1$2${comp}/${comp}$1`);
      changed = true;
    }
  });

  if (changed) {
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log('Updated imports in ' + filePath);
  }
});
