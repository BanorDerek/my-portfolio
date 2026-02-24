<script setup>
import { ref, reactive, computed, watch, onMounted } from 'vue';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

// Refs for DOM elements and state
const quoteRef = ref(null);
const showPhoneNumber = ref(false);

// Form data
const formData = reactive({
  customerName: '',
  customerEmail: '',
  customerPhone: '',
  websiteType: '',
  websiteStructure: 'multiPage',
  selectedSections: ['hero', 'about', 'contact'],
  selectedPages: ['home', 'about', 'services', 'contact'],
  hasDashboard: '',
  maintenancePlan: '',
  paymentGateway: '',
  additionalServices: {
    seo: false,
    hosting: false,
    branding: false,
    contentWriting: false
  },
  contentWritingCount: 0
});

// Quote data
const quote = reactive({
  basePrice: 0,
  pageCost: 0,
  sectionCost: 0,
  dashboardCost: 0,
  maintenanceCost: 0,
  paymentGatewayCost: 0,
  additionalCost: 0,
  contentWritingCost: 0,
  discount: 0,
  discountAmount: 0,
  total: 0,
  isSinglePage: false,
  itemCount: 0
});

// Common sections for single-page websites
const commonSections = [
  { id: 'hero', name: 'Hero/Banner', description: 'Top section with main headline and call-to-action', price: 15000 },
  { id: 'about', name: 'About Us', description: 'Tells your story and mission', price: 10000 },
  { id: 'services', name: 'Services/Products', description: 'Shows what you offer with details', price: 10000 },
  { id: 'portfolio', name: 'Portfolio/Gallery', description: 'Showcase your work with images', price: 10000 },
  { id: 'team', name: 'Team Members', description: 'Introduce your team with photos', price: 10000 },
  { id: 'testimonials', name: 'Testimonials/Reviews', description: 'Customer feedback and reviews', price: 10000 },
  { id: 'features', name: 'Features/Benefits', description: 'Highlight key benefits of your service', price: 10000 },
  { id: 'pricing', name: 'Pricing Tables', description: 'Show your packages and prices', price: 10000 },
  { id: 'faq', name: 'FAQ Section', description: 'Answer common questions', price: 10000 },
  { id: 'contact', name: 'Contact Form', description: 'Let visitors send you messages', price: 10000 },
  { id: 'blog', name: 'Blog/News Section', description: 'Share updates and articles', price: 10000 },
  { id: 'cta', name: 'Call-to-Action', description: 'Final section to encourage action', price: 5000 }
];

// Common pages for multi-page websites
const commonPages = [
  { id: 'home', name: 'Home Page', description: 'Main landing page of your website', price: 30000 },
  { id: 'about', name: 'About Us Page', description: 'Detailed information about your company', price: 25000 },
  { id: 'services', name: 'Services Page', description: 'Complete list of your services', price: 25000 },
  { id: 'portfolio', name: 'Portfolio Page', description: 'Showcase of your work/projects', price: 20000 },
  { id: 'team', name: 'Team Page', description: 'Meet your team members', price: 20000 },
  { id: 'testimonials', name: 'Testimonials Page', description: 'Customer reviews and feedback', price: 20000 },
  { id: 'blog', name: 'Blog/News Page', description: 'Articles and updates', price: 15000 },
  { id: 'contact', name: 'Contact Page', description: 'Contact form and details', price: 15000 },
  { id: 'products', name: 'Products Page', description: 'Your products with details', price: 15000 },
  { id: 'gallery', name: 'Gallery Page', description: 'Photo gallery or media display', price: 15000 },
  { id: 'faq', name: 'FAQ Page', description: 'Frequently asked questions', price: 15000 },
  { id: 'pricing', name: 'Pricing Page', description: 'Detailed pricing information', price: 15000 }
];

const pricingStructure = {
  static: {
    basePrice: 50000,
    singlePageBase: 70000,
    dashboard: { min: 50000, max: 100000 }
  },
  dynamic: {
    basePrice: 150000,
    singlePageBase: 180000,
    dashboard: { min: 80000, max: 150000 },
    paymentGateway: { min: 50000, max: 120000 }
  }
};

// Computed values for summary displays
const selectedSectionsTotal = computed(() => {
  return formData.selectedSections.reduce((sum, id) => {
    const section = commonSections.find(s => s.id === id);
    return sum + (section?.price || 0);
  }, 0);
});

const selectedPagesTotal = computed(() => {
  return formData.selectedPages.reduce((sum, id) => {
    const page = commonPages.find(p => p.id === id);
    return sum + (page?.price || 0);
  }, 0);
});

// Calculate development cost
const calculateDevelopmentCost = () => {
  const { websiteType, websiteStructure, selectedSections, selectedPages } = formData;
  const structure = pricingStructure[websiteType];
  
  if (websiteStructure === 'singlePage') {
    const baseCost = structure.singlePageBase;
    let sectionCost = 0;
    
    selectedSections.forEach(sectionId => {
      const section = commonSections.find(s => s.id === sectionId);
      if (section) {
        sectionCost += section.price;
      }
    });
    
    return {
      base: baseCost,
      additional: sectionCost,
      total: baseCost + sectionCost,
      isSinglePage: true,
      itemCount: selectedSections.length
    };
  } else {
    const baseCost = structure.basePrice;
    let pageCost = 0;
    
    selectedPages.forEach(pageId => {
      const page = commonPages.find(p => p.id === pageId);
      if (page) {
        pageCost += page.price;
      }
    });
    
    return {
      base: baseCost,
      additional: pageCost,
      total: baseCost + pageCost,
      isSinglePage: false,
      itemCount: selectedPages.length
    };
  }
};

// Calculate full quote
const calculateQuote = () => {
  if (!formData.websiteType) return;

  const developmentCost = calculateDevelopmentCost();
  const websiteType = formData.websiteType;
  
  let dashboardCost = 0;
  let maintenanceCost = 0;
  let paymentGatewayCost = 0;
  let additionalCost = 0;
  let contentWritingCost = 0;

  // Dashboard cost
  if (formData.hasDashboard === 'yes') {
    dashboardCost = pricingStructure[websiteType].dashboard.min;
  }

  // Maintenance cost
  if (formData.maintenancePlan && formData.maintenancePlan !== 'no') {
    const maintenanceRates = {
      static: { monthly: 15000, biweekly: 25000, weekly: 40000 },
      dynamic: { monthly: 25000, biweekly: 35000, weekly: 50000 }
    };
    maintenanceCost = maintenanceRates[websiteType][formData.maintenancePlan];
  }

  // Payment gateway
  if (websiteType === 'dynamic' && formData.paymentGateway === 'yes') {
    paymentGatewayCost = pricingStructure.dynamic.paymentGateway.min;
  }

  // Additional services
  const additionalServicesCosts = {
    seo: 30000,
    hosting: 30000,
    branding: 20000,
    contentWriting: 15000
  };

  if (formData.additionalServices.seo) additionalCost += additionalServicesCosts.seo;
  if (formData.additionalServices.hosting) additionalCost += additionalServicesCosts.hosting;
  if (formData.additionalServices.branding) additionalCost += additionalServicesCosts.branding;
  
  // Content writing
  if (formData.additionalServices.contentWriting && formData.contentWritingCount > 0) {
    contentWritingCost = formData.contentWritingCount * additionalServicesCosts.contentWriting;
    additionalCost += contentWritingCost;
  }

  // Apply volume discount
  let discount = 0;
  if (developmentCost.itemCount > 10) discount = 0.15;
  else if (developmentCost.itemCount > 6) discount = 0.10;
  else if (developmentCost.itemCount > 3) discount = 0.05;

  const subtotal = developmentCost.total + dashboardCost + paymentGatewayCost + additionalCost;
  const discountAmount = subtotal * discount;
  const total = subtotal - discountAmount;

  // Update quote object
  quote.basePrice = developmentCost.base;
  quote.pageCost = developmentCost.isSinglePage ? 0 : developmentCost.additional;
  quote.sectionCost = developmentCost.isSinglePage ? developmentCost.additional : 0;
  quote.dashboardCost = dashboardCost;
  quote.maintenanceCost = maintenanceCost;
  quote.paymentGatewayCost = paymentGatewayCost;
  quote.additionalCost = additionalCost;
  quote.contentWritingCost = contentWritingCost;
  quote.discount = discount * 100;
  quote.discountAmount = discountAmount;
  quote.total = Math.round(total);
  quote.isSinglePage = developmentCost.isSinglePage;
  quote.itemCount = developmentCost.itemCount;
};

// Watch for changes to recalculate quote
watch(
  () => ({ ...formData }),
  () => {
    if (formData.websiteType) {
      calculateQuote();
    }
  },
  { deep: true }
);

// Handle input changes
const handleInputChange = (e) => {
  const { name, value, type, checked } = e.target;
  
  if (type === 'checkbox' && name.startsWith('service_')) {
    // Handle service checkboxes
    const serviceId = name.replace('service_', '');
    if (formData.websiteStructure === 'singlePage') {
      if (checked) {
        if (!formData.selectedSections.includes(serviceId)) {
          formData.selectedSections.push(serviceId);
        }
      } else {
        const index = formData.selectedSections.indexOf(serviceId);
        if (index > -1) {
          formData.selectedSections.splice(index, 1);
        }
      }
    } else {
      if (checked) {
        if (!formData.selectedPages.includes(serviceId)) {
          formData.selectedPages.push(serviceId);
        }
      } else {
        const index = formData.selectedPages.indexOf(serviceId);
        if (index > -1) {
          formData.selectedPages.splice(index, 1);
        }
      }
    }
  } else if (type === 'checkbox') {
    formData.additionalServices[name] = checked;
  } else if (type === 'number') {
    formData[name] = Math.max(0, parseInt(value) || 0);
  } else {
    formData[name] = value;
  }
};

// Download quote as PDF
const downloadQuoteAsPDF = async () => {
  if (!quoteRef.value) return;
  
  const canvas = await html2canvas(quoteRef.value, {
    scale: 2,
    useCORS: true,
    logging: false,
    backgroundColor: '#ffffff'
  });
  
  const imgData = canvas.toDataURL('image/png');
  const pdf = new jsPDF('p', 'mm', 'a4');
  const imgWidth = 190;
  const pageHeight = pdf.internal.pageSize.height;
  const imgHeight = (canvas.height * imgWidth) / canvas.width;
  let heightLeft = imgHeight;
  let position = 10;

  pdf.addImage(imgData, 'PNG', 10, position, imgWidth, imgHeight);
  heightLeft -= pageHeight;

  while (heightLeft >= 0) {
    position = heightLeft - imgHeight;
    pdf.addPage();
    pdf.addImage(imgData, 'PNG', 10, position, imgWidth, imgHeight);
    heightLeft -= pageHeight;
  }

  const fileName = `Website_Quote_${Date.now()}.pdf`;
  pdf.save(fileName);
};

// Download quote as HTML
const downloadQuoteAsHTML = () => {
  const quoteContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <title>Website Development Quote</title>
      <style>
        body { font-family: Arial, sans-serif; max-width: 800px; margin: 0 auto; padding: 20px; }
        .header { text-align: center; border-bottom: 3px solid #667eea; padding-bottom: 20px; margin-bottom: 30px; }
        .section { margin-bottom: 30px; padding: 20px; border: 1px solid #ddd; border-radius: 10px; }
        .section-title { color: #667eea; border-bottom: 2px solid #667eea; padding-bottom: 10px; }
        .quote-item { display: flex; justify-content: space-between; padding: 10px 0; border-bottom: 1px solid #eee; }
        .quote-total { display: flex; justify-content: space-between; padding: 20px 0; border-top: 3px solid #667eea; font-size: 24px; font-weight: bold; }
        .contact-info { background: #f8f9ff; padding: 20px; border-radius: 10px; margin-top: 30px; }
      </style>
    </head>
    <body>
      <div class="header">
        <h1>Website Development Quote</h1>
        <p>Generated on: ${new Date().toLocaleDateString()}</p>
        <p>Quote ID: WEB-${Date.now().toString().slice(-8)}</p>
      </div>
      <!-- Mobile App Notice (NEW SECTION) -->
<div class="form-section highlight-section">
  <h2>📱 Need a Mobile App?</h2>
  <div class="mobile-app-notice">
    <div class="notice-icon">📲</div>
    <div class="notice-content">
      <h3>Mobile App Development</h3>
      <p class="notice-main">Mobile applications require a custom approach based on your specific needs, features, and platform requirements.</p>
      <div class="notice-features">
        <div class="feature-item">
          <span class="feature-icon">✓</span>
          <span>iOS & Android (React Native)</span>
        </div>
        <div class="feature-item">
          <span class="feature-icon">✓</span>
          <span>Native performance</span>
        </div>
        <div class="feature-item">
          <span class="feature-icon">✓</span>
          <span>App Store deployment</span>
        </div>
        <div class="feature-item">
          <span class="feature-icon">✓</span>
          <span>Push notifications</span>
        </div>
      </div>
      <div class="notice-cta">
        <p class="cta-text">📞 <strong>Contact me to discuss your mobile app idea!</strong></p>
        <button 
          class="contact-mobile-btn"
          @click="handleShowPhoneNumber"
        >
          Discuss Mobile App
        </button>
      </div>
    </div>
  </div>
</div>
      <div class="section">
        <h2 class="section-title">Customer Information</h2>
        <p><strong>Name:</strong> ${formData.customerName || 'Not provided'}</p>
        <p><strong>Email:</strong> ${formData.customerEmail || 'Not provided'}</p>
        <p><strong>Phone:</strong> ${formData.customerPhone || 'Not provided'}</p>
      </div>
      
      <div class="section">
        <h2 class="section-title">Project Details</h2>
        <p><strong>Website Type:</strong> ${formData.websiteType === 'static' ? 'Static Website' : 'Dynamic Website'}</p>
        <p><strong>Structure:</strong> ${formData.websiteStructure === 'singlePage' ? 'Single-Page Website' : 'Multi-Page Website'}</p>
        <p><strong>Content:</strong> ${quote.isSinglePage ? `${formData.selectedSections.length} sections` : `${formData.selectedPages.length} pages`}</p>
      </div>
      
      <div class="section">
        <h2 class="section-title">Cost Breakdown</h2>
        ${quote.basePrice > 0 ? `<div class="quote-item"><span>Base Development</span><span>₦${quote.basePrice.toLocaleString()}</span></div>` : ''}
        ${quote.pageCost > 0 ? `<div class="quote-item"><span>Page Development (${formData.selectedPages.length} pages)</span><span>₦${quote.pageCost.toLocaleString()}</span></div>` : ''}
        ${quote.sectionCost > 0 ? `<div class="quote-item"><span>Section Development (${formData.selectedSections.length} sections)</span><span>₦${quote.sectionCost.toLocaleString()}</span></div>` : ''}
        ${quote.dashboardCost > 0 ? `<div class="quote-item"><span>Admin Dashboard</span><span>₦${quote.dashboardCost.toLocaleString()}</span></div>` : ''}
        ${quote.paymentGatewayCost > 0 ? `<div class="quote-item"><span>Payment Gateway</span><span>₦${quote.paymentGatewayCost.toLocaleString()}</span></div>` : ''}
        ${quote.additionalCost > 0 ? `<div class="quote-item"><span>Additional Services</span><span>₦${quote.additionalCost.toLocaleString()}</span></div>` : ''}
        ${quote.discount > 0 ? `<div class="quote-item" style="color: #28a745;"><span>Volume Discount (${quote.discount}%)</span><span>-₦${Math.round(quote.discountAmount).toLocaleString()}</span></div>` : ''}
        <div class="quote-total">
          <span>Total Estimated Cost</span>
          <span>₦${quote.total?.toLocaleString()}</span>
        </div>
      </div>
      
      <div class="contact-info">
        <h2 class="section-title">Next Steps</h2>
        <p><strong>To proceed with this project:</strong></p>
        <p>1. Call us at: <strong>+234 801 234 5678</strong></p>
        <p>2. Mention your quote reference</p>
        <p>3. We'll discuss details and timeline</p>
        <p><strong>Available:</strong> Mon-Fri 8AM-6PM, Sat 10AM-4PM</p>
      </div>
    </body>
    </html>
  `;
  
  const blob = new Blob([quoteContent], { type: 'text/html' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `Website_Quote_${Date.now()}.html`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};

const handleShowPhoneNumber = () => {
  showPhoneNumber.value = true;
};
</script>

<template>
  <div class="quote-form-container">
    <h1>Website Development Quote Calculator</h1>
    
    <div class="quote-form">
      <!-- Customer Information -->
      <div class="form-section">
        <h2>1. Your Information (Optional)</h2>
        <div class="customer-info-grid">
          <div class="form-group">
            <label>Your Name:</label>
            <input
              type="text"
              name="customerName"
              :value="formData.customerName"
              @input="handleInputChange"
              placeholder="John Doe"
            />
          </div>
          <div class="form-group">
            <label>Email Address:</label>
            <input
              type="email"
              name="customerEmail"
              :value="formData.customerEmail"
              @input="handleInputChange"
              placeholder="john@example.com"
            />
          </div>
          <div class="form-group">
            <label>Phone Number:</label>
            <input
              type="tel"
              name="customerPhone"
              :value="formData.customerPhone"
              @input="handleInputChange"
              placeholder="0801 234 5678"
            />
          </div>
        </div>
        <small class="info-note">This helps us personalize your quote. We won't spam you.</small>
      </div>

      <!-- Website Type -->
      <div class="form-section">
        <h2>2. What kind of website do you need?</h2>
        <div class="explanation-box">
          <p>💡 <strong>Not sure?</strong> Choose <strong>Static</strong> for basic websites (like online brochure). Choose <strong>Dynamic</strong> if you need user accounts, online payments, or frequent content updates.</p>
        </div>
        
        <div class="radio-grid">
          <label class="option-card">
            <input 
              type="radio" 
              name="websiteType" 
              value="static"
              :checked="formData.websiteType === 'static'"
              @change="handleInputChange"
              required
            />
            <div class="option-content">
              <div class="option-header">
                <h3>Static Website</h3>
                <div class="price-badge">₦80K - 250K</div>
              </div>
              <ul class="option-features">
                <li>✓ Fixed content (like a digital brochure)</li>
                <li>✓ No login or user accounts</li>
                <li>✓ Faster and cheaper</li>
                <li>✓ Perfect for small businesses</li>
              </ul>
              <p class="option-example"><strong>Examples:</strong> Restaurant menu, Portfolio site, Service business website</p>
            </div>
          </label>
          
          <label class="option-card premium">
            <input 
              type="radio" 
              name="websiteType" 
              value="dynamic"
              :checked="formData.websiteType === 'dynamic'"
              @change="handleInputChange"
            />
            <div class="option-content">
              <div class="option-header">
                <h3>Dynamic Website</h3>
                <div class="price-badge">₦200K - 700K</div>
              </div>
              <ul class="option-features">
                <li>✓ Users can create accounts</li>
                <li>✓ Online payments possible</li>
                <li>✓ You can update content easily</li>
                <li>✓ More interactive features</li>
              </ul>
              <p class="option-example"><strong>Examples:</strong> E-commerce store, Membership site, Booking system, Social platform</p>
            </div>
          </label>
        </div>
      </div>

      <!-- Structure Selection -->
      <div v-if="formData.websiteType" class="form-section">
        <h2>3. How should your website be organized?</h2>
        <div class="explanation-box">
          💡 <strong>Which is better for you?</strong>
          <p><strong>One-Page (Modern & Focused):</strong> Perfect for a simple story, product launch, or portfolio. Creates a smooth, scrolling experience on mobile. <em>Note: Offers very limited SEO benefits.</em></p>
          <p><strong>Multi-Page (Traditional & Powerful for SEO):</strong> Best for businesses, blogs, or services. Separate pages let you target different search keywords, which helps your site rank higher on Google and attract more visitors.</p>
        </div>
        
        <div class="structure-options">
          <label class="structure-option">
            <input
              type="radio"
              name="websiteStructure"
              value="multiPage"
              :checked="formData.websiteStructure === 'multiPage'"
              @change="handleInputChange"
            />
            <div class="structure-content">
              <h4>Multi-Page Website (Traditional)</h4>
              <p>Separate pages like: about.html, services.html, contact.html</p>
              <div class="structure-visual">
                <div class="visual-page">Home</div>
                <div class="visual-page">About</div>
                <div class="visual-page">Services</div>
                <div class="visual-page">Contact</div>
              </div>
              <small>Visitors click menu links to navigate</small>
            </div>
          </label>
          
          <label class="structure-option">
            <input
              type="radio"
              name="websiteStructure"
              value="singlePage"
              :checked="formData.websiteStructure === 'singlePage'"
              @change="handleInputChange"
            />
            <div class="structure-content">
              <h4>One-Page Website (Modern)</h4>
              <p>All content on one page with smooth scrolling</p>
              <div class="visual-single-page">
                <div class="visual-section">Home Section</div>
                <div class="visual-section">About Section</div>
                <div class="visual-section">Services Section</div>
                <div class="visual-section">Contact Section</div>
              </div>
              <small>Visitors scroll through sections on same page</small>
            </div>
          </label>
        </div>
      </div>

      <!-- Content Selection -->
      <div v-if="formData.websiteType" class="form-section">
        <h2>4. What content do you need?</h2>
        
        <!-- Single Page Sections -->
        <div v-if="formData.websiteStructure === 'singlePage'" class="form-group">
          <label>Select the sections you want on your one-page website:</label>
          <div class="explanation-box">
            <p>💡 <strong>One-page website?</strong> All your content stays on a single page. Visitors scroll through different sections like Home, About, Services, etc.</p>
            <p>Each section is like a mini-page with its own design and purpose.</p>
          </div>
          
          <div class="selection-grid">
            <label v-for="section in commonSections" :key="section.id" class="selection-option">
              <input
                type="checkbox"
                :name="'service_' + section.id"
                :checked="formData.selectedSections.includes(section.id)"
                @change="handleInputChange"
              />
              <div class="selection-content">
                <div class="selection-header">
                  <h4>{{ section.name }}</h4>
                  <span class="selection-price">₦{{ section.price.toLocaleString() }}</span>
                </div>
                <p class="selection-description">{{ section.description }}</p>
              </div>
            </label>
          </div>
          
          <div class="selection-summary">
            <p><strong>Selected: {{ formData.selectedSections.length }} sections</strong></p>
            <p>Total sections cost: ₦{{ selectedSectionsTotal.toLocaleString() }}</p>
          </div>
        </div>

        <!-- Multi Page Pages -->
        <div v-else class="form-group">
          <label>Select the pages you need for your website:</label>
          <div class="explanation-box">
            <p>💡 <strong>Multi-page website?</strong> Each page is separate (like about.html, services.html). Visitors click menu links to navigate between them.</p>
            <p>Better for SEO and organizing lots of content.</p>
          </div>
          
          <div class="selection-grid">
            <label v-for="page in commonPages" :key="page.id" class="selection-option">
              <input
                type="checkbox"
                :name="'service_' + page.id"
                :checked="formData.selectedPages.includes(page.id)"
                @change="handleInputChange"
              />
              <div class="selection-content">
                <div class="selection-header">
                  <h4>{{ page.name }}</h4>
                  <span class="selection-price">₦{{ page.price.toLocaleString() }}</span>
                </div>
                <p class="selection-description">{{ page.description }}</p>
              </div>
            </label>
          </div>
          
          <div class="selection-summary">
            <p><strong>Selected: {{ formData.selectedPages.length }} pages</strong></p>
            <p>Total pages cost: ₦{{ selectedPagesTotal.toLocaleString() }}</p>
          </div>
        </div>
      </div>

      <!-- Additional Features -->
      <div v-if="formData.websiteType" class="form-section">
        <h2>5. Extra features</h2>
        
        <div class="form-group">
          <label>Do you want an Admin Dashboard?</label>
          <div class="explanation-box mini">
            <p>📊 <strong>Admin Dashboard:</strong> A special page where YOU can update website content (text, images) without calling a developer.</p>
          </div>
          <div class="radio-group">
            <label class="radio-option">
              <input 
                type="radio" 
                name="hasDashboard" 
                value="yes"
                :checked="formData.hasDashboard === 'yes'"
                @change="handleInputChange"
              />
              <span class="radio-content">
                <strong>Yes, I want to update content myself</strong>
                <span class="price-tag">+₦{{ formData.websiteType === 'static' ? '50,000' : '80,000' }}</span>
              </span>
            </label>
            <label class="radio-option">
              <input 
                type="radio" 
                name="hasDashboard" 
                value="no"
                :checked="formData.hasDashboard === 'no'"
                @change="handleInputChange"
              />
              <span class="radio-content">
                <strong>No, I'll call you to make updates</strong>
              </span>
            </label>
          </div>
        </div>

        <div v-if="formData.websiteType === 'dynamic'" class="form-group">
          <label>Do you need online payments?</label>
          <div class="explanation-box mini">
            <p>💳 <strong>Payment Gateway:</strong> Lets customers pay you online via cards, bank transfers, etc. (Like Paystack, Flutterwave)</p>
          </div>
          <div class="radio-group">
            <label class="radio-option">
              <input 
                type="radio" 
                name="paymentGateway" 
                value="yes"
                :checked="formData.paymentGateway === 'yes'"
                @change="handleInputChange"
              />
              <span class="radio-content">
                <strong>Yes, I want to accept online payments</strong>
                <span class="price-tag">+₦50,000</span>
              </span>
            </label>
            <label class="radio-option">
              <input 
                type="radio" 
                name="paymentGateway" 
                value="no"
                :checked="formData.paymentGateway === 'no'"
                @change="handleInputChange"
              />
              <span class="radio-content">
                <strong>No payments needed</strong>
              </span>
            </label>
          </div>
        </div>

        <div class="form-group">
          <label>Maintenance & Support</label>
          <div class="explanation-box mini">
            <p>🔧 <strong>Maintenance:</strong> We keep your website updated, secure, and fix any issues that come up.</p>
          </div>
          <select 
            name="maintenancePlan" 
            :value="formData.maintenancePlan"
            @change="handleInputChange"
          >
            <option value="no">No maintenance needed (I'll call if issues come up)</option>
            <template v-if="formData.websiteType === 'static'">
              <option value="monthly">Once a month checkup (+₦15,000/month)</option>
              <option value="biweekly">Twice a month checkup (+₦25,000/month)</option>
              <option value="weekly">Weekly checkup (+₦40,000/month)</option>
            </template>
            <template v-else>
              <option value="monthly">Once a month checkup (+₦25,000/month)</option>
              <option value="biweekly">Twice a month checkup (+₦35,000/month)</option>
              <option value="weekly">Weekly checkup (+₦50,000/month)</option>
            </template>
          </select>
        </div>
      </div>

      <!-- Additional Services -->
      <div class="form-section">
        <h2>6. Optional Services</h2>
        <div class="explanation-box">
          <p>➕ <strong>These are optional add-ons</strong> that can make your website even better.</p>
        </div>
        
        <div class="services-grid">
          <label class="service-option">
            <input 
              type="checkbox" 
              name="seo"
              :checked="formData.additionalServices.seo"
              @change="handleInputChange"
            />
            <div class="service-content">
              <div class="service-header">
                <h4>SEO Optimization</h4>
                <span class="service-price-tag">₦30,000</span>
              </div>
              <p class="service-description">Help your website appear on Google search</p>
            </div>
          </label>
          
          <label class="service-option">
            <input 
              type="checkbox" 
              name="hosting"
              :checked="formData.additionalServices.hosting"
              @change="handleInputChange"
            />
            <div class="service-content">
              <div class="service-header">
                <h4>Domain + Hosting</h4>
                <span class="service-price-tag">₦30,000/year</span>
              </div>
              <p class="service-description">We buy your website address (like www.yourbusiness.com) and hosting</p>
            </div>
          </label>
          
          <label class="service-option">
            <input 
              type="checkbox" 
              name="branding"
              :checked="formData.additionalServices.branding"
              @change="handleInputChange"
            />
            <div class="service-content">
              <div class="service-header">
                <h4>Logo & Branding</h4>
                <span class="service-price-tag">₦20,000</span>
              </div>
              <p class="service-description">Professional logo and brand colors for your business</p>
            </div>
          </label>
          
          <label class="service-option">
            <input 
              type="checkbox" 
              name="contentWriting"
              :checked="formData.additionalServices.contentWriting"
              @change="handleInputChange"
            />
            <div class="service-content">
              <div class="service-header">
                <h4>Content Writing</h4>
                <span class="service-price-tag">₦15,000 per {{ formData.websiteStructure === 'singlePage' ? 'section' : 'page' }}</span>
              </div>
              <p class="service-description">We write professional text for your website</p>
              <div v-if="formData.additionalServices.contentWriting" class="service-suboption">
                <label>How many {{ formData.websiteStructure === 'singlePage' ? 'sections' : 'pages' }} need writing?</label>
                <input
                  type="number"
                  name="contentWritingCount"
                  min="0"
                  :max="formData.websiteStructure === 'singlePage' ? formData.selectedSections.length : formData.selectedPages.length"
                  :value="formData.contentWritingCount"
                  @input="handleInputChange"
                />
              </div>
            </div>
          </label>
        </div>
      </div>
    </div>

    <!-- Quote Results -->
    <div v-if="formData.websiteType && quote.total > 0" class="quote-results" ref="quoteRef">
      <h2>Your Website Quote Summary</h2>
      
      <div class="quote-breakdown">
        <!-- Quote header -->
        <div class="quote-header">
          <h3>Website Development Quote</h3>
          <p class="quote-date">Generated: {{ new Date().toLocaleDateString() }}</p>
          <p class="quote-id">Reference: WEB-{{ Date.now().toString().slice(-8) }}</p>
        </div>

        <!-- Customer info if provided -->
        <div v-if="formData.customerName || formData.customerEmail || formData.customerPhone" class="quote-section">
          <h4>👤 Customer Information</h4>
          <div class="customer-details">
            <p v-if="formData.customerName"><strong>Name:</strong> {{ formData.customerName }}</p>
            <p v-if="formData.customerEmail"><strong>Email:</strong> {{ formData.customerEmail }}</p>
            <p v-if="formData.customerPhone"><strong>Phone:</strong> {{ formData.customerPhone }}</p>
          </div>
        </div>

        <!-- Project details -->
        <div class="quote-section">
          <h4>📝 Project Details</h4>
          <div class="project-details">
            <p><strong>Website Type:</strong> {{ formData.websiteType === 'static' ? 'Static Website' : 'Dynamic Website' }}</p>
            <p><strong>Structure:</strong> {{ formData.websiteStructure === 'singlePage' ? 'One-Page Website' : 'Multi-Page Website' }}</p>
            <p><strong>Content Included:</strong> {{
              quote.isSinglePage 
                ? `${formData.selectedSections.length} sections`
                : `${formData.selectedPages.length} pages`
            }}</p>
            <p v-if="formData.hasDashboard === 'yes'"><strong>✅ Includes Admin Dashboard</strong></p>
            <p v-if="formData.paymentGateway === 'yes'"><strong>✅ Includes Payment Gateway</strong></p>
          </div>
        </div>

        <!-- Cost breakdown -->
        <div class="quote-section">
          <h4>💰 Cost Breakdown</h4>
          <div class="cost-items">
            <div class="cost-item">
              <span>{{ quote.isSinglePage ? 'One-Page Base Development' : 'Project Base Setup' }}</span>
              <span>₦{{ quote.basePrice.toLocaleString() }}</span>
            </div>
            
            <div v-if="quote.pageCost > 0" class="cost-item">
              <span>Page Development ({{ formData.selectedPages.length }} pages)</span>
              <span>+₦{{ quote.pageCost.toLocaleString() }}</span>
            </div>
            
            <div v-if="quote.sectionCost > 0" class="cost-item">
              <span>Section Development ({{ formData.selectedSections.length }} sections)</span>
              <span>+₦{{ quote.sectionCost.toLocaleString() }}</span>
            </div>
            
            <div v-if="quote.dashboardCost > 0" class="cost-item">
              <span>Admin Dashboard</span>
              <span>+₦{{ quote.dashboardCost.toLocaleString() }}</span>
            </div>
            
            <div v-if="quote.paymentGatewayCost > 0" class="cost-item">
              <span>Payment Gateway Integration</span>
              <span>+₦{{ quote.paymentGatewayCost.toLocaleString() }}</span>
            </div>
            
            <div v-if="quote.additionalCost > 0" class="cost-item">
              <span>Additional Services</span>
              <span>+₦{{ quote.additionalCost.toLocaleString() }}</span>
            </div>
            
            <div v-if="quote.discount > 0" class="cost-item discount">
              <span>Volume Discount ({{ quote.discount }}%)</span>
              <span>-₦{{ Math.round(quote.discountAmount).toLocaleString() }}</span>
            </div>
          </div>
          
          <div class="cost-total">
            <span>TOTAL ESTIMATED COST</span>
            <span class="total-amount">₦{{ quote.total.toLocaleString() }}</span>
          </div>
          
          <div v-if="quote.maintenanceCost > 0" class="maintenance-note">
            <p>➕ <strong>Monthly Maintenance:</strong> ₦{{ quote.maintenanceCost.toLocaleString() }}/month</p>
          </div>
        </div>

        <!-- Next steps -->
        <div class="quote-section">
          <h4>📞 Next Steps</h4>
          <div class="next-steps">
            <p>This is an <strong>estimated quote</strong>. Final price may vary slightly based on specific requirements.</p>
            
            <div class="action-buttons">
              <template v-if="!showPhoneNumber">
                <button 
                  class="get-final-quote-btn"
                  @click="handleShowPhoneNumber"
                >
                  📞 Call Now for Final Quote
                </button>
              </template>
              <div v-else class="phone-display">
                <div class="phone-number-large">
                  <span class="phone-icon">📞</span>
                  <div class="phone-details">
                    <h4>Call Us Now!</h4>
                    <div class="phone-number">
                      <strong>+234 801 234 5678</strong>
                    </div>
                    <p class="phone-hours">Available: Mon-Fri 8AM-6PM, Sat 10AM-4PM</p>
                  </div>
                </div>
              </div>
              
              <div class="download-buttons">
                <button 
                  class="download-btn pdf"
                  @click="downloadQuoteAsPDF"
                >
                  📥 Download as PDF
                </button>
                <button 
                  class="download-btn html"
                  @click="downloadQuoteAsHTML"
                >
                  💾 Save as HTML
                </button>
              </div>
            </div>
            
            <div class="quote-notes">
              <p><strong>Important Notes:</strong></p>
              <ul>
                <li>50% deposit required to start project</li>
                <li>Estimated timeline: {{ Math.max(2, Math.ceil(quote.itemCount / 2)) }} weeks</li>
                <li>All prices in Nigerian Naira (₦)</li>
                <li>Quote valid for 30 days</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.quote-form-container {
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
}

.quote-form-container::before {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.95);
  z-index: -1;
}

h1 {
  text-align: center;
  color: #333;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 3px solid #667eea;
  background: white;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

h2 {
  color: #444;
  font-size: 1.3rem;
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #667eea;
}

.form-section {
  background: white;
  padding: 2rem;
  margin-bottom: 2rem;
  border-radius: 15px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
  border-left: 5px solid #667eea;
  transition: transform 0.3s ease;
}

.form-section:hover {
  transform: translateY(-2px);
}

.form-group {
  margin-bottom: 2rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.8rem;
  font-weight: 600;
  color: #444;
  font-size: 1.1rem;
}

.form-group select {
  width: 100%;
  padding: 1rem;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  font-size: 1rem;
  background: white;
  transition: all 0.3s;
}

.form-group select:focus {
  outline: none;
  border-color: #667eea;
  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
}

.radio-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}

.option-card {
  border: 2px solid #e0e0e0;
  border-radius: 12px;
  padding: 1.5rem;
  cursor: pointer;
  transition: all 0.3s;
  background: white;
  position: relative;
  overflow: hidden;
}

.option-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: #e0e0e0;
  transition: all 0.3s;
}

.option-card:hover::before {
  background: #667eea;
}

.option-card.premium {
  border-color: #ffc107;
}

.option-card.premium::before {
  background: #ffc107;
}

.option-card input[type="radio"] {
  position: absolute;
  opacity: 0;
}

.option-card:hover {
  border-color: #667eea;
  transform: translateY(-4px);
  box-shadow: 0 8px 25px rgba(102, 126, 234, 0.15);
}

.option-content {
  padding: 1rem;
  border-radius: 8px;
  transition: background 0.3s;
}

.option-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.option-header h3 {
  margin: 0;
  color: #333;
  font-size: 1.3rem;
}

.price-badge {
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-weight: bold;
  font-size: 0.9rem;
}

.option-features {
  list-style: none;
  padding: 0;
  margin: 0 0 1rem 0;
}

.option-features li {
  padding: 0.5rem 0;
  color: #555;
  position: relative;
  padding-left: 1.5rem;
}

.option-features li:before {
  content: '✓';
  position: absolute;
  left: 0;
  color: #28a745;
  font-weight: bold;
}

.option-description {
  color: #666;
  font-size: 0.95rem;
  font-style: italic;
  padding-top: 1rem;
  border-top: 1px solid #eee;
  margin-top: 1rem;
}

.structure-options {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}

.structure-option {
  border: 2px solid #e0e0e0;
  border-radius: 12px;
  padding: 1.5rem;
  cursor: pointer;
  transition: all 0.3s;
  display: flex;
  align-items: flex-start;
  background: white;
}

.structure-option:hover {
  border-color: #667eea;
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(102, 126, 234, 0.1);
}

.structure-option input[type="radio"] {
  margin-right: 1rem;
  margin-top: 0.5rem;
}

.structure-content h4 {
  margin: 0 0 0.5rem 0;
  color: #333;
  font-size: 1.1rem;
}

.structure-content p {
  margin: 0.3rem 0;
  color: #555;
  line-height: 1.4;
}

.structure-content small {
  color: #666;
  font-size: 0.9rem;
  display: block;
  margin-top: 0.5rem;
}

/* Selection grid for sections/pages */
.selection-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1rem;
  margin: 1.5rem 0;
}

.selection-option {
  border: 2px solid #e0e0e0;
  border-radius: 10px;
  padding: 1rem;
  cursor: pointer;
  transition: all 0.3s;
  background: white;
  display: flex;
  align-items: flex-start;
}

.selection-option:hover {
  border-color: #007bff;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 123, 255, 0.1);
}

.selection-option input[type="checkbox"] {
  margin-right: 1rem;
  margin-top: 0.3rem;
}

.selection-content {
  flex: 1;
}

.selection-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 0.5rem;
}

.selection-header h4 {
  margin: 0;
  color: #333;
  font-size: 1.1rem;
}

.selection-price {
  background: #28a745;
  color: white;
  padding: 0.3rem 0.8rem;
  border-radius: 4px;
  font-size: 0.9rem;
  font-weight: bold;
}

.selection-description {
  color: #666;
  font-size: 0.9rem;
  margin: 0;
  line-height: 1.4;
}

.selection-summary {
  background: #f8f9fa;
  padding: 1rem;
  border-radius: 8px;
  margin-top: 1.5rem;
  text-align: center;
  border: 1px solid #e0e0e0;
}

/* Visual representations */
.structure-visual {
  display: flex;
  gap: 0.5rem;
  margin: 1rem 0;
  flex-wrap: wrap;
}

.visual-page {
  background: #667eea;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  font-size: 0.9rem;
}

.visual-single-page {
  background: #ffc107;
  border-radius: 8px;
  padding: 0.5rem;
  margin: 1rem 0;
}

.visual-section {
  background: white;
  margin: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  border-left: 3px solid #667eea;
}

/* Explanation boxes for non-technical users */
.explanation-box {
  background: #e8f4ff;
  padding: 1.2rem;
  border-radius: 8px;
  margin-bottom: 1.5rem;
  border-left: 4px solid #007bff;
}

.explanation-box p {
  margin: 0.5rem 0;
  color: #333;
  line-height: 1.5;
}

.explanation-box.mini {
  padding: 0.8rem;
  margin-bottom: 1rem;
  font-size: 0.9rem;
}

/* Customer information grid */
.customer-info-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-bottom: 1rem;
}

.customer-info-grid input {
  width: 100%;
  padding: 0.8rem;
  border: 2px solid #ddd;
  border-radius: 6px;
  font-size: 1rem;
}

.info-note {
  color: #666;
  font-size: 0.9rem;
  display: block;
  margin-top: 0.5rem;
}

/* Radio group styles */
.radio-group {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.radio-option {
  display: flex;
  align-items: flex-start;
  padding: 1.2rem;
  border: 2px solid #e0e0e0;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s;
  background: white;
}

.radio-option:hover {
  border-color: #667eea;
  background: #f8f9ff;
}

.radio-option input[type="radio"] {
  margin-right: 1rem;
  margin-top: 0.3rem;
}

.radio-content {
  flex: 1;
}

.radio-content strong {
  display: block;
  margin-bottom: 0.3rem;
  font-size: 1.1rem;
  color: #333;
}

.price-tag {
  background: #28a745;
  color: white;
  padding: 0.3rem 0.8rem;
  border-radius: 4px;
  font-size: 0.9rem;
  margin-left: 0.5rem;
  display: inline-block;
}

/* Services grid */
.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.service-option {
  border: 2px solid #e0e0e0;
  border-radius: 10px;
  padding: 1.5rem;
  cursor: pointer;
  transition: all 0.3s;
  background: white;
}

.service-option:hover {
  border-color: #667eea;
  transform: translateY(-3px);
  box-shadow: 0 6px 15px rgba(102, 126, 234, 0.1);
}

.service-option input[type="checkbox"] {
  margin-right: 0.8rem;
}

.service-content {
  display: inline-block;
}

.service-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 0.5rem;
}

.service-header h4 {
  margin: 0;
  color: #333;
  font-size: 1.1rem;
}

.service-price-tag {
  background: #28a745;
  color: white;
  padding: 0.2rem 0.6rem;
  border-radius: 4px;
  font-size: 0.85rem;
  font-weight: bold;
}

.service-description {
  color: #666;
  font-size: 0.9rem;
  margin: 0.5rem 0 0 0;
  line-height: 1.4;
}

.service-suboption {
  margin-top: 1.5rem;
  padding: 1rem;
  background: #f8f9fa;
  border-radius: 6px;
  border-left: 3px solid #667eea;
}

.service-suboption label {
  display: block;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
  color: #555;
  font-weight: 600;
}

.service-suboption input {
  width: 80px;
  padding: 0.8rem;
  border: 2px solid #ddd;
  border-radius: 6px;
  font-size: 1rem;
}

/* Quote results styling */
.quote-results {
  margin-top: 3rem;
  animation: fadeIn 0.5s ease-out;
}

.quote-breakdown {
  background: white;
  padding: 2.5rem;
  border-radius: 15px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
  border: 1px solid #e0e0e0;
}

.quote-header {
  text-align: center;
  padding-bottom: 1.5rem;
  border-bottom: 2px solid #667eea;
  margin-bottom: 2rem;
}

.quote-header h3 {
  color: #333;
  margin-bottom: 0.5rem;
}

.quote-date, .quote-id {
  color: #666;
  font-size: 0.9rem;
  margin: 0.3rem 0;
}

.quote-section {
  margin-bottom: 2rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid #eee;
}

.quote-section h4 {
  color: #444;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #667eea;
  display: inline-block;
}

.customer-details p, .project-details p {
  margin: 0.5rem 0;
  color: #555;
}

.cost-items {
  margin: 1.5rem 0;
}

.cost-item {
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  border-bottom: 1px solid #eee;
}

.cost-item.discount {
  background: #f0fff4;
  color: #28a745;
  font-weight: bold;
  border-radius: 6px;
  margin: 0.5rem 0;
}

.cost-total {
  display: flex;
  justify-content: space-between;
  padding: 1.5rem;
  background: #667eea;
  color: white;
  border-radius: 10px;
  margin-top: 1.5rem;
  font-size: 1.2rem;
  font-weight: bold;
}

.total-amount {
  font-size: 1.5rem;
}

.maintenance-note {
  margin-top: 1rem;
  padding: 1rem;
  background: #f8f9ff;
  border-radius: 8px;
  text-align: center;
}

.action-buttons {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 2rem 0;
}

.get-final-quote-btn {
  background: linear-gradient(135deg, #28a745, #20c997);
  color: white;
  padding: 1.2rem;
  border: none;
  border-radius: 10px;
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s;
}

.get-final-quote-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(40, 167, 69, 0.3);
}

.download-buttons {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
}

.download-btn {
  flex: 1;
  padding: 1rem;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
}

.download-btn.pdf {
  background: linear-gradient(135deg, #dc3545, #c82333);
  color: white;
}

.download-btn.html {
  background: linear-gradient(135deg, #6c757d, #545b62);
  color: white;
}

.download-btn:hover {
  transform: translateY(-2px);
  opacity: 0.9;
}

.phone-display {
  background: linear-gradient(135deg, #667eea, #764ba2);
  padding: 2rem;
  border-radius: 10px;
  text-align: center;
  color: white;
  animation: fadeIn 0.5s ease-out;
}

.phone-number-large {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.phone-icon {
  font-size: 3rem;
  animation: pulse 2s infinite;
}

.phone-details h4 {
  color: white;
  margin-bottom: 0.5rem;
}

.phone-number {
  font-size: 2rem;
  font-weight: bold;
  margin: 1rem 0;
}

.phone-hours {
  color: rgba(255, 255, 255, 0.9);
  font-size: 0.9rem;
}

.quote-notes {
  background: #fff3cd;
  padding: 1rem;
  border-radius: 8px;
  margin-top: 1.5rem;
}

.quote-notes ul {
  margin: 0.5rem 0;
  padding-left: 1.5rem;
}

.quote-notes li {
  color: #856404;
  margin: 0.3rem 0;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
}

/* Responsive Design */
@media (max-width: 768px) {
  .quote-form-container {
    padding: 1rem;
  }
  
  .phone-number {
    font-size: 2rem;
    flex-direction: column;
    gap: 0.5rem;
  }
  
  .radio-grid,
  .structure-options,
  .services-grid {
    grid-template-columns: 1fr;
  }
  
  .quote-breakdown {
    padding: 1.5rem;
  }
}

@media (max-width: 480px) {
  .phone-number {
    font-size: 1.8rem;
  }
  
  .download-buttons {
    flex-direction: column;
  }
  
  .quote-total {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
}
/* Mobile App Notice Styles */
.highlight-section {
  background: linear-gradient(135deg, #f6f9fc, #e3f2fd);
  border-left: 5px solid #2196F3 !important;
}

.mobile-app-notice {
  display: flex;
  gap: 1.5rem;
  align-items: flex-start;
  padding: 1rem;
  background: rgba(33, 150, 243, 0.05);
  border-radius: 12px;
}

.notice-icon {
  font-size: 3rem;
  line-height: 1;
  animation: bounce 2s infinite;
}

.notice-content {
  flex: 1;
}

.notice-content h3 {
  color: #1976D2;
  margin: 0 0 0.5rem 0;
  font-size: 1.3rem;
}

.notice-main {
  font-size: 1.1rem;
  color: #333;
  margin-bottom: 1rem;
  font-weight: 500;
}

.notice-features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 0.8rem;
  margin: 1.2rem 0;
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.95rem;
  color: #555;
}

.feature-icon {
  color: #4CAF50;
  font-weight: bold;
  font-size: 1.1rem;
}

.notice-cta {
  margin-top: 1.2rem;
  padding-top: 1.2rem;
  border-top: 2px dashed #2196F3;
}

.cta-text {
  font-size: 1.1rem;
  margin: 0 0 1rem 0;
  color: #1976D2;
}

.contact-mobile-btn {
  background: linear-gradient(135deg, #2196F3, #1976D2);
  color: white;
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
  box-shadow: 0 4px 15px rgba(33, 150, 243, 0.3);
}

.contact-mobile-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(33, 150, 243, 0.4);
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

/* Responsive */
@media (max-width: 600px) {
  .mobile-app-notice {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  
  .notice-features {
    grid-template-columns: 1fr;
  }
  
  .feature-item {
    justify-content: center;
  }
}
</style>