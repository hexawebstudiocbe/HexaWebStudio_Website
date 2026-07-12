const fs = require('fs');
const path = require('path');

const appCssPath = path.join(__dirname, 'src', 'App.css');
const content = fs.readFileSync(appCssPath, 'utf-8');

// Split by the section delimiter
const sections = content.split('/* ==========================================');

let newAppCss = '';

const config = {
  'Navbar Styles': 'src/components/Navbar/Navbar.css',
  'Hero Section': 'src/sections/Hero/Hero.css',
  'About Us Section': 'src/sections/About/About.css',
  'Services Section & Cards': 'src/sections/Services/Services.css',
  'Why Choose Us Section': 'src/sections/WhyChooseUs/WhyChooseUs.css',
  'Our Process Section': 'src/sections/OurProcess/OurProcess.css',
  'Portfolio Section & Cards': 'src/sections/Portfolio/Portfolio.css',
  'FAQ Section': 'src/sections/FAQ/FAQ.css',
  'Contact Section & Validation Form': 'src/sections/Contact/Contact.css',
  'CTA Section': 'src/sections/Contact/CTA.css', // We will merge this into Contact.css later or just create it and import
  'Footer Styles': 'src/components/Footer/Footer.css',
  'Floating Action Elements': 'src/components/FloatingWhatsapp/FloatingWhatsapp.css'
};

const extracted = {};

sections.forEach((section, index) => {
  if (index === 0 && section.trim() === '') return;
  
  const fullSection = '/* ==========================================' + section;
  
  let matched = false;
  for (const [title, outputPath] of Object.entries(config)) {
    if (section.includes(title)) {
      if (!extracted[outputPath]) extracted[outputPath] = '';
      extracted[outputPath] += fullSection;
      matched = true;
      break;
    }
  }
  
  if (!matched) {
    newAppCss += fullSection;
  }
});

// Write the new component CSS files
for (const [outputPath, cssContent] of Object.entries(extracted)) {
  const fullPath = path.join(__dirname, outputPath);
  fs.writeFileSync(fullPath, cssContent.trim() + '\n', 'utf-8');
  console.log('Created ' + outputPath);
}

// Overwrite App.css
fs.writeFileSync(appCssPath, newAppCss.trim() + '\n', 'utf-8');
console.log('Updated src/App.css');
