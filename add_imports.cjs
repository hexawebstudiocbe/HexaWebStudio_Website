const fs = require('fs');
const path = require('path');

const filesToUpdate = [
  { jsx: 'src/components/Navbar/Navbar.jsx', css: './Navbar.css' },
  { jsx: 'src/sections/Hero/Hero.jsx', css: './Hero.css' },
  { jsx: 'src/sections/About/About.jsx', css: './About.css' },
  { jsx: 'src/sections/Services/Services.jsx', css: './Services.css' },
  { jsx: 'src/sections/WhyChooseUs/WhyChooseUs.jsx', css: './WhyChooseUs.css' },
  { jsx: 'src/sections/OurProcess/OurProcess.jsx', css: './OurProcess.css' },
  { jsx: 'src/sections/Portfolio/Portfolio.jsx', css: './Portfolio.css' },
  { jsx: 'src/sections/FAQ/FAQ.jsx', css: './FAQ.css' },
  { jsx: 'src/sections/Contact/Contact.jsx', css: './Contact.css' },
  { jsx: 'src/components/Footer/Footer.jsx', css: './Footer.css' },
  { jsx: 'src/components/FloatingWhatsapp/FloatingWhatsapp.jsx', css: './FloatingWhatsapp.css' },
  { jsx: 'src/components/ScrollToTop/ScrollToTop.jsx', css: '../FloatingWhatsapp/FloatingWhatsapp.css' } // importing the shared one for now
];

filesToUpdate.forEach(({ jsx, css }) => {
  const fullPath = path.join(__dirname, jsx);
  if (fs.existsSync(fullPath)) {
    let content = fs.readFileSync(fullPath, 'utf-8');
    // Find the last import statement
    const importRegex = /^import\s+.*?(?:'|")[^'"]+(?:'|");?$/gm;
    let match;
    let lastImportIndex = 0;
    while ((match = importRegex.exec(content)) !== null) {
      lastImportIndex = match.index + match[0].length;
    }
    
    const importStatement = `\nimport '${css}';`;
    
    // Check if it already has this import
    if (!content.includes(`import '${css}'`)) {
      content = content.slice(0, lastImportIndex) + importStatement + content.slice(lastImportIndex);
      fs.writeFileSync(fullPath, content, 'utf-8');
      console.log('Added import to ' + jsx);
    }
  } else {
    console.log('Not found: ' + jsx);
  }
});

// For Contact, append CTA.css to Contact.css
const contactCssPath = path.join(__dirname, 'src/sections/Contact/Contact.css');
const ctaCssPath = path.join(__dirname, 'src/sections/Contact/CTA.css');
if (fs.existsSync(contactCssPath) && fs.existsSync(ctaCssPath)) {
  const ctaContent = fs.readFileSync(ctaCssPath, 'utf-8');
  fs.appendFileSync(contactCssPath, '\n' + ctaContent, 'utf-8');
  fs.unlinkSync(ctaCssPath);
  console.log('Merged CTA.css into Contact.css');
}
