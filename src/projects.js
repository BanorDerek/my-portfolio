// This is your single source of truth for all project data.
// All image paths have been updated to use the `new URL()` constructor,
// which is the modern, correct way to handle static assets in Vite.
// This ensures that Vite processes the images correctly during the build step.

export const projects = [
  // --- NEW PROJECT: Bluetidy (Latest Project - Make this first) ---
  {
    type: 'completed',
    slug: 'bluetidy',
    title: 'Bluetidy - Cleaning Operations Platform for Property Hosts',
    image: new URL('/src/assets/projectimage/bluetidy1.png', import.meta.url).href, // You'll need to add this image
    stack: {
      frontend: ['React Native', 'TypeScript', 'React Navigation'],
      backend: ['Node.js', 'Express.js'],
      database: ['PostgreSQL'],
      cloud: ['AWS S3'],
      auth: ['JWT', 'Role-based Access']
    },
    description: 'A mobile platform that streamlines cleaning operations for property hosts, enabling scheduling, bidding, and verification through photo-based checklists.',
    liveLink: 'https://www.linkedin.com/posts/derekbanor_bluetidy-proptech-cleantech-activity-7413837530820857857-1-lz',
    githubLink: '#',
    galleryImages: [
      new URL('/src/assets/projectimage/bluetidy1.png', import.meta.url).href,
      new URL('/src/assets/projectimage/bluetidy2.png', import.meta.url).href,
      new URL('/src/assets/projectimage/bluetidy3.png', import.meta.url).href,
      new URL('/src/assets/projectimage/bluetidy4.png', import.meta.url).href,
      new URL('/src/assets/projectimage/bluetidy5.png', import.meta.url).href,
      new URL('/src/assets/projectimage/bluetidy6.png', import.meta.url).href,
      new URL('/src/assets/projectimage/bluetidy7.png', import.meta.url).href,
      new URL('/src/assets/projectimage/bluetidy8.png', import.meta.url).href,
      new URL('/src/assets/projectimage/bluetidy9.png', import.meta.url).href,
      new URL('/src/assets/projectimage/bluetidy10.png', import.meta.url).href,
    ],
    fullDescription: [
      { type: 'paragraph', content: "Bluetidy is a mobile platform that transforms cleaning operations into a smooth, automated system, creating a seamless connection between property hosts and cleaners. With Bluetidy, property hosts can schedule cleaning jobs, list them for cleaners to bid on, select their preferred cleaner, negotiate bids, and finalize schedules upon mutual acceptance." },
      { type: 'paragraph', content: "The platform features three core checklists that ensure precision and accountability: a Cleaning Checklist with photo verification, a Property Condition Checklist for pre- and post-stay logging, and an Inventory Checklist that tracks consumables and sends restock alerts." },
      { type: 'heading', content: 'Key Technical Features' },
      { type: 'list', items: [
        'Real-time chat with 5-second polling implementation',
        'Photo-verified checklists for cleaning, property condition, and inventory with AWS S3 integration',
        'Secure role-based access system with JWT (Host/Cleaner/Admin)',
        'Bidding system with counter-offer capabilities',
        'Multi-property management with different cleaners assigned to different properties',
        'i18n localization support'
      ]},
      { type: 'heading', content: 'Our Three Core Checklists' },
      { type: 'list', items: [
        'Cleaning Checklist – Guides cleaners through required tasks with photo verification to confirm completion',
        'Property Condition Checklist – Logs pre- and post-stay conditions for maintenance, security, and transparency',
        'Inventory Checklist – Tracks consumable and non-consumable items, sending restock alerts when supplies run low'
      ]}
    ],
    codeSnippets: [
      { title: "Real-time Chat with Polling", language: "javascript", code: `// Polling implementation for real-time chat\nconst pollMessages = async () => {\n  try {\n    const response = await fetch(\n      \`/api/messages?roomId=\${roomId}&lastMessageId=\${lastMessageId}\`,\n      { headers: { Authorization: \`Bearer \${token}\` } }\n    );\n    const newMessages = await response.json();\n    \n    if (newMessages.length > 0) {\n      setMessages(prev => [...prev, ...newMessages]);\n      setLastMessageId(newMessages[newMessages.length - 1].id);\n    }\n  } catch (error) {\n    console.error('Polling error:', error);\n  }\n};\n\n// Setup polling interval\nuseEffect(() => {\n  const interval = setInterval(pollMessages, 5000); // Poll every 5 seconds\n  return () => clearInterval(interval);\n}, [roomId]);` },
      { title: "Photo-Verified Checklist with AWS S3 Upload", language: "javascript", code: `// Image upload to AWS S3\nconst uploadImage = async (imageUri, checklistId) => {\n  const formData = new FormData();\n  formData.append('image', {\n    uri: imageUri,\n    type: 'image/jpeg',\n    name: \`checklist-\${Date.now()}.jpg\`\n  });\n  formData.append('checklistId', checklistId);\n\n  try {\n    const response = await fetch('/api/upload-checklist-image', {\n      method: 'POST',\n      headers: {\n        'Authorization': \`Bearer \${token}\`,\n        'Content-Type': 'multipart/form-data'\n      },\n      body: formData\n    });\n    \n    const data = await response.json();\n    return data.imageUrl;\n  } catch (error) {\n    console.error('Upload failed:', error);\n    throw error;\n  }\n};` }
    ]
  },

  // --- EXISTING PROJECT: Give Tech to the Blind (Now standalone) ---
  {
    type: 'completed',
    slug: 'give-tech-to-the-blind',
    title: 'Give Tech to the Blind - Social Impact Platform',
    image: new URL('/src/assets/projectimage/givetech1.png', import.meta.url).href, // You'll need to add this image
    stack: {
      frontend: ['React.js', 'Tailwind CSS', 'React Router DOM'],
      backend: ['Node.js', 'Express.js'],
      database: ['PostgreSQL'],
      cloud: ['AWS S3'],
      auth: ['bcrypt', 'Passport.js', 'Google OAuth'],
      payments: ['Paystack']
    },
    description: 'A platform connecting donors with visually impaired recipients to provide assistive technology, exhibited at GITEX NIGERIA 2025.',
    liveLink: '#', // Add live link when available
    githubLink: '#',
    galleryImages: [
      new URL('/src/assets/projectimage/givetech1.png', import.meta.url).href,
      new URL('/src/assets/projectimage/givetech2.png', import.meta.url).href,
      new URL('/src/assets/projectimage/givetech3.png', import.meta.url).href,
      new URL('/src/assets/projectimage/givetech4.png', import.meta.url).href,
      new URL('/src/assets/projectimage/givetech5.png', import.meta.url).href,
      new URL('/src/assets/projectimage/givetech6.png', import.meta.url).href,
      new URL('/src/assets/projectimage/givetech7.png', import.meta.url).href,
      new URL('/src/assets/projectimage/givetech8.png', import.meta.url).href,
    ],
    fullDescription: [
      { type: 'paragraph', content: "Give Tech to the Blind is a platform that connects donors with visually impaired recipients to provide essential assistive technology. Since its soft launch, the platform has already connected donors with recipients, with the first batch of tech requests being fulfilled." },
      { type: 'paragraph', content: "The project was exhibited at GITEX NIGERIA - The Largest Tech & Startup Event in West Africa 2025 in Lagos on the 3rd-4th of September for its first public showcase. It was an amazing experience showcasing technology for social good and accessibility." },
      { type: 'heading', content: 'Key Technical Features' },
      { type: 'list', items: [
        'Smart Login/Register: A single page that routes donors or recipients to their personalized dashboards securely',
        'Secure Access: Complete email/password authentication (bcrypt, email verification, forgot password) plus Google OAuth for easy login',
        'Recipient Verification (KYC): Multi-step profiles for recipients to share details and securely upload documents to AWS S3',
        'Admin Control: Comprehensive panel to manage campaigns (approve, edit, feature), products (with S3 image uploads), and admin roles',
        'Donation System: Secure checkout via Paystack, automated notifications, and a "My Gifts" page for donors to track impact'
      ]},
      { type: 'heading', content: 'Tech Stack' },
      { type: 'list', items: [
        'Frontend: React.js, Tailwind CSS, React Router DOM',
        'Backend: Node.js, Express.js',
        'Database: PostgreSQL',
        'Cloud: AWS S3',
        'Payments: Paystack',
        'Auth: bcrypt, Passport.js, Google OAuth'
      ]}
    ],
    codeSnippets: [
      { title: "Smart Login/Register Routing", language: "javascript", code: `// Single page that routes users based on role\nconst handleLogin = async (e) => {\n  e.preventDefault();\n  try {\n    const response = await fetch('/api/auth/login', {\n      method: 'POST',\n      headers: { 'Content-Type': 'application/json' },\n      body: JSON.stringify({ email, password })\n    });\n    \n    const data = await response.json();\n    \n    if (data.success) {\n      // Route to appropriate dashboard based on role\n      if (data.user.role === 'donor') {\n        navigate('/donor-dashboard');\n      } else if (data.user.role === 'recipient') {\n        navigate('/recipient-dashboard');\n      } else if (data.user.role === 'admin') {\n        navigate('/admin-dashboard');\n      }\n    }\n  } catch (error) {\n    console.error('Login error:', error);\n  }\n};` },
      { title: "KYC Document Upload to AWS S3", language: "javascript", code: `// Multi-step KYC verification with document upload\nconst uploadKycDocuments = async (formData) => {\n  try {\n    // Upload documents to S3\n    const documentUrls = await Promise.all(\n      formData.documents.map(async (doc) => {\n        const uploadData = new FormData();\n        uploadData.append('document', doc);\n        uploadData.append('type', doc.type);\n        \n        const response = await fetch('/api/upload-kyc-document', {\n          method: 'POST',\n          headers: { 'Authorization': \`Bearer \${token}\` },\n          body: uploadData\n        });\n        \n        const { url } = await response.json();\n        return url;\n      })\n    );\n    \n    // Submit KYC data with document URLs\n    const kycResponse = await fetch('/api/recipient/kyc', {\n      method: 'POST',\n      headers: { \n        'Authorization': \`Bearer \${token}\`,\n        'Content-Type': 'application/json'\n      },\n      body: JSON.stringify({\n        ...formData,\n        documentUrls\n      })\n    });\n    \n    return await kycResponse.json();\n  } catch (error) {\n    console.error('KYC submission failed:', error);\n    throw error;\n  }\n};` }
    ]
  },

  // --- NEW PROJECT: AA Design (Interior Decor Website) ---
  {
    type: 'completed',
    slug: 'aa-design',
    title: 'AA Design - Interior Decor Website',
    image: new URL('/src/assets/projectimage/aadesign1.png', import.meta.url).href, // You'll need to add this image
    stack: {
      frontend: ['React', 'JavaScript (ES6+)'],
    },
    description: 'A static React website for an interior decor client, showcasing their portfolio and design services.',
    liveLink: 'https://aadesign-murex.vercel.app', // Add when available
    githubLink: '#',
    galleryImages: [
      new URL('/src/assets/projectimage/aadesign1.png', import.meta.url).href,
      new URL('/src/assets/projectimage/aadesign2.png', import.meta.url).href,
      new URL('/src/assets/projectimage/aadesign3.png', import.meta.url).href,
    ],
    fullDescription: [
      { type: 'paragraph', content: "AA Design is a static React website built for an interior decor client to showcase their portfolio and design services. The website presents their work in a clean, visually appealing format that highlights their design aesthetic and project portfolio." },
      { type: 'heading', content: 'Key Features' },
      { type: 'list', items: [
        'Responsive design for all devices',
        'Portfolio gallery showcasing interior design projects',
        'Service listings and contact information',
        'Clean, modern UI that reflects the client\'s design philosophy'
      ]}
    ],
    codeSnippets: [
      { title: "Portfolio Gallery Component", language: "javascript", code: `// Gallery component for showcasing design work\nconst PortfolioGallery = () => {\n  const [activeFilter, setActiveFilter] = useState('all');\n  \n  const filters = ['all', 'residential', 'commercial', 'office'];\n  \n  const filteredProjects = projects.filter(project => \n    activeFilter === 'all' || project.category === activeFilter\n  );\n  \n  return (\n    <div className="portfolio-gallery">\n      <div className="filter-buttons">\n        {filters.map(filter => (\n          <button\n            key={filter}\n            className={activeFilter === filter ? 'active' : ''}\n            onClick={() => setActiveFilter(filter)}\n          >\n            {filter.charAt(0).toUpperCase() + filter.slice(1)}\n          </button>\n        ))}\n      </div>\n      \n      <div className="gallery-grid">\n        {filteredProjects.map(project => (\n          <div key={project.id} className="gallery-item">\n            <img src={project.image} alt={project.title} />\n            <div className="overlay">\n              <h3>{project.title}</h3>\n              <p>{project.description}</p>\n            </div>\n          </div>\n        ))}\n      </div>\n    </div>\n  );\n};` }
    ]
  },

  // --- EXISTING PROJECT: Developer Portfolio ---
  {
    type: 'completed',
    slug: 'developer-portfolio',
    title: 'Personal Developer Portfolio',
    image: new URL('/src/assets/projectimage/project6.png', import.meta.url).href,
    stack: {
      frontend: ['Vue 3', 'Vite', 'Vue Router', 'JavaScript (ES6+)'],
      focus: ['SPA Architecture', 'Responsiveness', 'Accessibility']
    },
    description: 'A dynamic Single Page Application built with Vue 3 and Vite to serve as a comprehensive showcase of my projects and technical skills.',
    liveLink: '#',
    githubLink: '#',
    galleryImages: [
      new URL('/src/assets/projectimage/project6.1.png', import.meta.url).href,
      new URL('/src/assets/projectimage/project6.2.png', import.meta.url).href,
      new URL('/src/assets/projectimage/project6.3.png', import.meta.url).href,
    ],
    fullDescription: [
      { type: 'paragraph', content: "This portfolio is a Single Page Application (SPA) built from the ground up using Vue 3 and Vite. It serves as a dynamic and maintainable platform to showcase my work, providing detailed case studies for each project." },
      { type: 'paragraph', content: "The architecture is centered around a single data source (`projects.js`) that populates all project-related content, from the main grid to the detailed breakdown pages. This approach makes the site easy to update and scale. It uses Vue Router for seamless navigation and demonstrates a strong focus on modern UI/UX principles, including responsiveness and accessibility." },
      { type: 'heading', content: 'Key Technical Features' },
      { type: 'list', items: ['Component-Based Architecture: Built with reusable Vue 3 components using the modern <script setup> syntax for clean and efficient code.', 'Data-Driven Rendering: Project listings and detail pages are dynamically generated from a centralized JavaScript object, separating content from presentation.', 'Smart Routing: The navigation bar intelligently constructs URLs, ensuring hash links for smooth scrolling on the homepage and full path links when on other pages.', 'Accessibility Enhancements: Implements `aria-hidden` to conceal decorative animations and provides a screen-reader-only summary of skills for an inclusive user experience.'] }
    ],
    codeSnippets: [
      { title: "Component Logic: 'Smart' Navigation Links", language: "javascript", code: `// From Navbar.vue\nimport { useRoute } from 'vue-router';\nconst route = useRoute();\n\n// This function generates the correct URL for each navigation link.\nconst getLinkUrl = (href) => {\n  // If we are on the homepage ('/'), use a simple hash link for smooth scrolling.\n  if (route.path === '/') {\n    return href;\n  }\n  // If we are on any other page, prepend '/' to go back to the homepage first,\n  // then scroll to the correct section.\n  return \`/\${href}\`;\n};` },
      { title: "Accessibility: Hiding Visuals & Providing an SR-Only Summary", language: "html", code: `<!-- From Hero.vue -->\n\n<!-- 1. The visual, animated elements are hidden from screen readers -->\n<div class="typewriter-container" aria-hidden="true">\n  <span class="typed-text">{{ displayedText }}</span>\n  <span class="cursor"></span>\n</div>\n<div class="skills-list" aria-hidden="true">\n  <!-- ... animated skill bars ... -->\n</div>\n\n<!-- 2. A static, hidden list provides a clear summary for screen readers -->\n<div class="sr-only">\n  <h3>My Skills and Proficiency Levels:</h3>\n  <ul>\n    <li v-for="lang in languages" :key="lang.name + '-sr'">\n      {{ lang.name }}, proficiency level: {{ lang.label }}.\n    </li>\n  </ul>\n</div>` },
      { title: "Data-Driven UI: Rendering Structured Content", language: "html", code: `<!-- From ProjectDetails.vue -->\n<!-- This loop reads the structured data and builds the correct HTML tags -->\n<div v-for="(block, index) in project.fullDescription" :key="index">\n  <p v-if="block.type === 'paragraph'">{{ block.content }}</p>\n  \n  <h3 v-if="block.type === 'heading'">{{ block.content }}</h3>\n  \n  <ul v-if="block.type === 'list'">\n    <li v-for="(item, i) in block.items" :key="i">{{ item }}</li>\n  </ul>\n</div>` }
    ]
  },

  // --- EXISTING PROJECT: Chatbot Implementation ---
  {
    type: 'completed',
    slug: 'chatbot-implementation',
    title: 'Chatbot Feature Implementation',
    image: new URL('/src/assets/projectimage/project1.png', import.meta.url).href,
    stack: { frontend: ['React'], backend: ['Node.js'], apis_libraries: ['OpenAI API'] },
    description: 'Developed an interactive chatbot for an e-learning platform using the GPT-3.5-turbo API.',
    liveLink: 'https://chatbox-eight-lilac.vercel.app/',
    githubLink: 'https://github.com/BanorDerek/chatbox',
    galleryImages: [
      new URL('/src/assets/projectimage/project1.1.png', import.meta.url).href,
    ],
    fullDescription: [
      { type: 'paragraph', content: "This project involved developing an interactive chatbot feature for an e-learning platform, leveraging React for the frontend, Node.js for the backend, and OpenAI's GPT-3.5-turbo API to create dynamic, user-friendly interactions." },
      { type: 'paragraph', content: "A key design choice was a familiar chat interface where user messages align to the right and chatbot responses appear on the left, ensuring a clear and intuitive user experience. The message structure and UI were inspired by popular messaging platforms for maximum readability and responsiveness." },
    ],
    codeSnippets: [
      { language: 'javascript', title: 'Node.js API Endpoint for Chat', code: `router.post('/chat', async (req, res) => {\n  const { message } = req.body;\n  try {\n    const completion = await openai.chat.completions.create({\n      model: "gpt-3.5-turbo",\n      messages: [{ role: "user", content: message }],\n    });\n    res.json({ reply: completion.choices[0].message.content });\n  } catch (error) {\n    console.error('Error with OpenAI API:', error);\n    res.status(500).send('Error communicating with AI');\n  }\n});` }
    ]
  },

  // --- EXISTING PROJECT: Accesstech Store (Updated description) ---
  {
    type: 'completed',
    slug: 'accesstechstore',
    title: 'Accesstech Store - Assistive Technology E-commerce',
    image: new URL('/src/assets/projectimage/project2.png', import.meta.url).href,
    stack: { frontend: ['HTML5', 'CSS3', 'Vanilla JavaScript (ES6+)'], backend: ['PHP'], database: ['MySQL'], apis_libraries: ['Paystack API', 'IziToast.js'] },
    description: 'A full-stack e-commerce platform enabling users to purchase assistive technology products.',
    liveLink: 'https://accesstechstore.com/',
    githubLink: '#',
    galleryImages: [
      new URL('/src/assets/projectimage/project2.1.png', import.meta.url).href,
      new URL('/src/assets/projectimage/project2.2.png', import.meta.url).href,
      new URL('/src/assets/projectimage/project2.3.png', import.meta.url).href,
      new URL('/src/assets/projectimage/project2.4.png', import.meta.url).href,
      new URL('/src/assets/projectimage/project2.5.png', import.meta.url).href,
      new URL('/src/assets/projectimage/project2.6.png', import.meta.url).href,
      new URL('/src/assets/projectimage/project2.7.png', import.meta.url).href,
      new URL('/src/assets/projectimage/project2.8.png', import.meta.url).href,
    ],
    fullDescription: [
      { type: 'paragraph', content: `"Accesstech Store" is a full-stack e-commerce platform built with PHP, MySQL, and vanilla JavaScript. It provides a seamless shopping experience for assistive technology products.` },
      { type: 'paragraph', content: `The platform features a dynamic product catalog, AJAX-powered cart updates, and secure payment integration with Paystack.` },
      { type: 'heading', content: 'Key Technical Features' },
      { type: 'list', items: ['Dynamic Product Catalog: All product information is dynamically generated from a MySQL database.', 'AJAX-Powered Cart: Provides a smooth user experience by updating the cart without page reloads using the JavaScript Fetch API.', 'Secure Payment Integration: Fully integrated with the Paystack API for secure, real-time payment processing.', 'Session Management & Security: Implements user authentication, persistent carts, and protection against common vulnerabilities like SQL Injection and CSRF.'] }
    ],
    codeSnippets: [
      { title: "Backend: Conditional Checkout Logic", language: "php", code: `// Check if all products in the cart are for gifting ("buy_for_me")\n$all_buy_for_me = true;\nforeach ($_SESSION['cart'] as $item) {\n    // Robustly check for the gift flag\n    $isBuyForMe = isset($item['is_buy_for_me']) ? $item['is_buy_for_me'] : false;\n\n    if (!$isBuyForMe) {\n        $all_buy_for_me = false;\n        break; // Exit loop early if a personal item is found\n    }\n}\n\n// SERVER-SIDE VALIDATION: If all items are gifts, reject any delivery fee\nif ($all_buy_for_me && $delivery_option === 'delivery') {\n    $delivery_price = 0; // Force no delivery charge\n    error_log("Delivery attempted for gift-only cart. Price reset to 0.");\n}` },
      { title: "Security: Preventing SQL Injection", language: "php", code: `// Fetch product details using a prepared statement\n$stmt_product = $conn->prepare("SELECT id, name, price FROM products WHERE id = ?");\n\n// Bind the user-provided product ID as an integer parameter\n$stmt_product->bind_param("i", $productId);\n$stmt_product->execute();\n$result_product = $stmt_product->get_result();\n\nif ($result_product->num_rows > 0) {\n    // ... proceed with valid product ...\n}\n$stmt_product->close();` },
      { title: "Frontend: Asynchronous Cart Updates (AJAX)", language: "javascript", code: `function updateQuantity(productId, newQuantity) {\n    const formData = new FormData();\n    formData.append('update_quantity', true);\n    formData.append('product_id', productId);\n    formData.append('quantity', newQuantity);\n\n    // Disable buttons to prevent multiple clicks\n    const buttons = document.querySelectorAll(\`#product-\${productId}-buttons button\`);\n    buttons.forEach(btn => btn.disabled = true);\n\n    fetch(window.location.pathname, {\n        method: 'POST',\n        body: formData\n    })\n    .then(response => response.json())\n    .then(data => {\n        if (data.status === 'success') {\n            iziToast.success({ message: 'Quantity updated.' });\n            setTimeout(() => location.reload(), 1000); \n        } else {\n            iziToast.error({ message: data.message });\n        }\n    })\n    .finally(() => {\n        // Re-enable buttons after request completes\n        buttons.forEach(btn => btn.disabled = false);\n    });\n}` }
    ]
  },

  // --- EXISTING PROJECT: AccessTech Academy (UPDATED with new features) ---
{
  type: 'completed',
  slug: 'accesstech-academy',
  title: 'AccessTech Academy - An Accessible E-Learning Platform',
  image: new URL('/src/assets/projectimage/project3.1.png', import.meta.url).href,
  stack: { 
    frontend: ['React.js', 'React Router DOM', 'CSS3', 'Context API'], 
    backend: ['Node.js', 'Express.js'], 
    database: ['PostgreSQL'], 
    apis_libraries: ['Cloudflare Turnstile', 'AWS S3'],
    auth: ['JWT', 'bcrypt', 'Google OAuth'],
    features: ['Accessibility Wizard', 'Typing Tutor Game', 'Email Verification']
  },
  description: 'A full-stack e-learning platform engineered for accessibility, featuring a user-friendly accessibility wizard, secure authentication with Cloudflare Turnstile, and a fully accessible typing tutor game.',
  liveLink: 'https://accesstechacademy.com',
  githubLink: '#',
  galleryImages: [
    new URL('/src/assets/projectimage/atacad1.png', import.meta.url).href,
    new URL('/src/assets/projectimage/atacad2.png', import.meta.url).href,
    new URL('/src/assets/projectimage/atacad3.png', import.meta.url).href,
    new URL('/src/assets/projectimage/atacad4.png', import.meta.url).href,
    new URL('/src/assets/projectimage/atacad5.png', import.meta.url).href,
    new URL('/src/assets/projectimage/atacad6.png', import.meta.url).href,
    new URL('/src/assets/projectimage/atacad7.png', import.meta.url).href,
    new URL('/src/assets/projectimage/atacad8.png', import.meta.url).href,
    new URL('/src/assets/projectimage/atacad9.png', import.meta.url).href,
  ],
  fullDescription: [
    { type: 'paragraph', content: "AccessTech Academy is a full-stack, database-driven e-learning platform rebuilt with React and Node.js, specifically engineered to provide an inclusive educational experience for users with visual impairments. The platform's core principle is 'Accessibility First', enforced from the moment a user visits." },
    { type: 'paragraph', content: "The revamped platform features a comprehensive accessibility system that includes an onboarding wizard for first-time visitors, a persistent accessibility menu accessible from any page, and a fully voice-guided typing tutor game to help users improve their keyboard skills." },
    { type: 'heading', content: 'Key Technical Features' },
    { type: 'list', items: [
      'Accessibility Wizard: A first-time user experience that guides visitors through selecting their preferred contrast and font size settings with live previews before saving to localStorage',
      'Persistent Accessibility Menu: A sticky widget available on all pages allowing users to adjust contrast (Default, High Contrast, Gold Contrast, Blue Contrast) and font size (Small, Medium, Large) at any time',
      'Typing Tutor Game: A fully accessible typing practice game with voice guidance, three modes (letters/words), three difficulty levels, finger placement instructions, and real-time stats (WPM, accuracy, streak)',
      'Unified Authentication System: A single AuthPage handling login, registration, email verification, and password reset with role-based access (Student/Lecturer)',
      'Cloudflare Turnstile Integration: Bot protection without CAPTCHA challenges, improving accessibility while maintaining security',
      'Email Verification Flow: 6-digit code verification with resend timer and automatic error scrolling for better UX',
      'AWS S3 Integration: Secure storage for user-uploaded content and profile images',
      'Comprehensive Routing: Lazy-loaded routes with Suspense for optimal performance across 20+ pages including courses, quizzes, certificates, and learning paths'
    ]},
    { type: 'heading', content: 'Accessibility First Design' },
    { type: 'list', items: [
      'Screen reader optimized with proper ARIA labels and semantic HTML',
      'Keyboard navigable throughout with clear focus indicators',
      'Voice guidance in Typing Tutor with screen reader pause notice to prevent voice conflicts',
      'Multiple contrast options tested with WCAG guidelines',
      'Adjustable font sizes that scale all UI elements proportionally',
      'Persistent preferences saved to localStorage across sessions'
    ]}
  ],
  codeSnippets: [
    { 
      title: "Accessibility Wizard: Live Preview System", 
      language: "javascript", 
      code: `// Live preview in Accessibility Wizard
useEffect(() => {
  const tempPreferences = {
    contrast: selectedContrast,
    fontSize: selectedFontSize
  };
  
  // Remove existing theme classes
  document.body.className = document.body.className
    .split(' ')
    .filter(className => !className.startsWith('contrast-') && !className.startsWith('font-size-'))
    .join(' ');
  
  // Add new theme classes for preview
  document.body.classList.add(\`contrast-\${selectedContrast}\`);
  document.body.classList.add(\`font-size-\${selectedFontSize}\`);
}, [selectedContrast, selectedFontSize]);

const handleSave = () => {
  saveUserPreferences({
    contrast: selectedContrast,
    fontSize: selectedFontSize
  });
  navigate('/home');
};` 
    },
    { 
      title: "Accessibility Menu: Persistent Settings Widget", 
      language: "javascript", 
      code: `// Sticky accessibility menu with contrast and font size options
const AccessibilityMenu = () => {
  const { preferences, saveUserPreferences } = useAccessibility();
  const [isOpen, setIsOpen] = useState(false);
  
  const contrastOptions = [
    { id: 'default', name: 'Default', label: 'White/Black' },
    { id: 'high-contrast', name: 'High Contrast', label: 'Black/White' },
    { id: 'gold-contrast', name: 'Gold Contrast', label: 'Black/Gold' },
    { id: 'blue-contrast', name: 'Blue Contrast', label: 'Blue/Gold' }
  ];

  const fontSizeOptions = [
    { id: 'small', name: 'Small' },
    { id: 'medium', name: 'Medium' },
    { id: 'large', name: 'Large' }
  ];

  return (
    <div className="accessibility-widget">
      <button
        className={\`accessibility-toggle \${isOpen ? 'active' : ''}\`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Accessibility settings"
      >
        <img src={accessibilityIcon} alt="" className="accessibility-icon" />
      </button>
      
      {isOpen && (
        <div className="accessibility-panel" role="dialog">
          <h3>Accessibility Settings</h3>
          {/* Contrast and font size options */}
        </div>
      )}
    </div>
  );
};` 
    },
    { 
      title: "Typing Tutor: Voice-Guided Game with Screen Reader Notice", 
      language: "javascript", 
      code: `// Screen reader notice to prevent voice conflicts
const [showScreenReaderNotice, setShowScreenReaderNotice] = useState(
  localStorage.getItem('hideScreenReaderNotice') !== 'true'
);

const dismissScreenReaderNotice = useCallback(() => {
  setShowScreenReaderNotice(false);
  localStorage.setItem('hideScreenReaderNotice', 'true');
}, []);

// Voice guidance function
const speak = useCallback((text, priority = 'normal') => {
  if (!synthRef.current) return;
  if (priority === 'high') {
    synthRef.current.cancel();
    isSpeakingRef.current = false;
  }
  // ... speech synthesis logic
}, []);

// Announce target to type
const announceTarget = useCallback((target) => {
  if (mode === 'letters') {
    speak(\`Type \${getSpokenName(target)}\`, 'high');
    const guide = fingerGuide[target];
    if (guide) {
      setTimeout(() => {
        speak(\`\${guide.finger} finger. \${guide.homeRow ? 'Home row.' : 'Upper row.'}\`, 'normal');
      }, 1500);
    }
  } else {
    speak(\`Type the word \${target}\`, 'high');
  }
}, [mode, speak]);` 
    },
    { 
      title: "Unified Auth Page with Cloudflare Turnstile", 
      language: "javascript", 
      code: `// Sign In form with Turnstile CAPTCHA
const SignInForm = ({ onForgotPassword }) => {
  const [turnstileToken, setTurnstileToken] = useState(null);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!turnstileToken) {
      setServerError('Please complete the CAPTCHA verification');
      return;
    }
    
    try {
      const result = await login(formData.email, formData.password, turnstileToken);
      if (result.success) {
        navigate(from, { replace: true });
      } else if (result.requiresVerification) {
        navigate('/auth', { 
          state: { 
            verificationRequired: true,
            email: result.email || formData.email,
            defaultTab: 'signup'
          }
        });
      }
    } catch (error) {
      setServerError(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Form inputs */}
      <div className="captcha-container">
        <Turnstile
          sitekey={process.env.REACT_APP_TURNSTILE_SITE_KEY}
          onVerify={(token) => setTurnstileToken(token)}
        />
      </div>
      <button type="submit" disabled={isLoading || !turnstileToken}>
        Sign In
      </button>
    </form>
  );
};` 
    },
    { 
      title: "Route Structure with Lazy Loading", 
      language: "javascript", 
      code: `// Lazy loaded routes for optimal performance
const Home = lazy(() => import('../pages/Home'));
const About = lazy(() => import('../pages/normal/About'));
const CourseList = lazy(() => import('../pages/courses/CourseList'));
const LearningPage = lazy(() => import('../components/LearningPage/LearningPage'));
const QuizPage = lazy(() => import('../pages/quiz/QuizPage'));
const TypingTutor = lazy(() => import('../pages/TypingTutor/TypingTutor'));

const AppRoutes = () => {
  return (
    <Layout>
      <Suspense fallback={<LoadingFallback />}>
        <Routes>
          {/* Normal Pages */}
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* Unified Auth */}
          <Route path="/login" element={<Navigate to="/auth" replace />} />
          <Route path="/register" element={<Navigate to="/auth" replace />} />
          <Route path="/auth" element={<AuthPage />} />
          
          {/* Course Pages */}
          <Route path="/courses" element={<CourseList />} />
          <Route path="/courses/:slug" element={<CourseDetail />} />
          <Route path="/learn/:courseSlug" element={<LearningPage />} />
          
          {/* Quiz Pages */}
          <Route path="/learn/:courseSlug/quiz" element={<QuizPage />} />
          
          {/* Typing Tutor */}
          <Route path="/typing-tutor" element={<TypingTutor />} />
          <Route path="/learn/:courseId/typing-tutor" element={<TypingTutor />} />
        </Routes>
      </Suspense>
    </Layout>
  );
};` 
    }
  ]
},
  // --- EXISTING PROJECT: Visitor & Item Management System ---
  {
    type: 'completed',
    slug: 'visitors-signin-system',
    title: 'In-House Visitor & Item Management System',
    image: new URL('/src/assets/projectimage/project4.png', import.meta.url).href,
    stack: { backend: ['PHP'], database: ['MySQL'], frontend: ['HTML5', 'CSS3', 'JavaScript', 'jQuery'] },
    description: 'An in-house system for an organization providing secure visitor and item management with real-time tracking, reporting, and an admin dashboard.',
    liveLink: '#',
    githubLink: '#',
    galleryImages: [
      new URL('/src/assets/projectimage/project4.1.png', import.meta.url).href,
      new URL('/src/assets/projectimage/project4.2.png', import.meta.url).href,
      new URL('/src/assets/projectimage/project4.3.png', import.meta.url).href,
      new URL('/src/assets/projectimage/project4.4.png', import.meta.url).href,
      new URL('/src/assets/projectimage/project4.5.png', import.meta.url).href,
      new URL('/src/assets/projectimage/project4.6.png', import.meta.url).href
    ],
    fullDescription: [
      { type: 'paragraph', content: "This is a full-stack web application built with PHP and MySQL, designed to replace a manual sign-in book for the AccessTech Innovation and Research Center. The system provides a secure and efficient way for staff to manage the flow of visitors and their belongings." },
      { type: 'paragraph', content: "The application features a role-based authentication system, a centralized portal for signing in visitors and items, and a suite of reporting tools. A key automation feature is the system's ability to send a thank-you email with a Google review link to subscribed visitors upon sign-out, enhancing community engagement." },
      { type: 'heading', content: 'Key Technical Features' },
      { type: 'list', items: ['Secure Role-Based Authentication: Uses password_hash() and prepared statements to ensure a secure login process with distinct views for staff and administrators.', 'Combined Access Portal: A clean, tabbed interface allows for efficient sign-in of both visitors and their items, with an autocomplete feature to quickly find returning visitors.', 'Database Transactions: The sign-out process is wrapped in a MySQL transaction to ensure data integrity, where the visit is only updated if all steps succeed.', 'Comprehensive Reporting: Includes real-time logs for currently active visitors, pending items, and historical records with A-Z and date-based filtering.', 'Admin Dashboard: An admin-exclusive view that queries the database to present key metrics like total unique visitors, visits today, and visitor frequency reports.'] }
    ],
    codeSnippets: [
      { title: "Security: Secure Authentication with Prepared Statements", language: "php", code: `function authenticateUser($username, $password) {\n    global $conn;\n    // Prepared statements prevent SQL injection vulnerabilities\n    $sql = "SELECT user_id, username, password, role FROM users WHERE username = ?";\n    $stmt = $conn->prepare($sql);\n    $stmt->bind_param("s", $username);\n    $stmt->execute();\n    $result = $stmt->get_result();\n\n    if ($result->num_rows === 1) {\n        $user = $result->fetch_assoc();\n        // Verify the provided password against the stored hash\n        if (password_verify($password, $user['password'])) {\n            $_SESSION['user_id'] = $user['user_id'];\n            $_SESSION['username'] = $user['username'];\n            $_SESSION['user_role'] = $user['role'];\n            return true;\n        }\n    }\n    return false;\n}` },
      { title: "Backend: Transactional Sign-Out with Email Automation", language: "php", code: `if ($visitor_id_to_sign_out) {\n    // Start a transaction for data integrity\n    $conn->begin_transaction();\n\n    try {\n        // First, get visitor's email and subscription status\n        $sql_visitor_info = "SELECT email, subscribed FROM visitors WHERE visitor_id = ?";\n        // ... (prepared statement to fetch info) ...\n\n        // Second, update the latest active visit record\n        $sql_update_visit = "UPDATE visits SET sign_out_time = NOW(), signed_out_by = ?\n                             WHERE visitor_id = ? AND sign_out_time IS NULL\n                             ORDER BY sign_in_time DESC LIMIT 1";\n        $stmt_update = $conn->prepare($sql_update_visit);\n        $stmt_update->bind_param("ii", $user_id, $visitor_id_to_sign_out);\n        $stmt_update->execute();\n\n        if ($stmt_update->affected_rows > 0) {\n             // If the update was successful, commit the changes\n             $conn->commit();\n             $success_message = "Visitor signed out successfully.";\n\n             // After committing, send the automated email if they subscribed\n             if ($subscribed == 1 && $visitor_email) {\n                 sendThankYouEmail($visitor_email);\n             }\n        } else {\n            throw new Exception("Could not find an active visit to sign out.");\n        }\n    } catch (Exception $e) {\n        // If any step fails, roll back all database changes\n        $conn->rollback();\n        $error_message = "Error signing out visitor: " . $e->getMessage();\n    }\n}` },
      { title: "Database: Conditional Query for Filtered Reporting", language: "php", code: `// --- A-Z Filtering Logic ---\n$filter_char = null;\n$filter_param = '';\nif (isset($_GET['filter']) && preg_match('/^[A-Z]$/', $_GET['filter'])) {\n    $filter_char = $_GET['filter'];\n    $filter_param = $filter_char . '%'; // Prepare for LIKE clause\n}\n\n// Base SQL query\n$sql_visitors = "SELECT v.name, vi.sign_in_time, vi.sign_out_time\n                 FROM visitors v JOIN visits vi ON v.visitor_id = vi.visitor_id\n                 WHERE vi.sign_out_time IS NOT NULL";\n\n// Conditionally add the filter to the SQL query\nif ($filter_char) {\n    $sql_visitors .= " AND v.name LIKE ?";\n}\n\n$sql_visitors .= " ORDER BY v.name ASC";\n\n$stmt_visitors = $conn->prepare($sql_visitors);\n\nif ($stmt_visitors) {\n    // Bind the parameter ONLY if the filter is active\n    if ($filter_char) {\n        $stmt_visitors->bind_param("s", $filter_param);\n    }\n    $stmt_visitors->execute();\n    $result = $stmt_visitors->get_result();\n    // ... fetch and display results ...\n}` }
    ]
  },

  // --- EXISTING PROJECT: BanorInc Supply Chain ---
  {
    type: 'completed',
    slug: 'banorinc-supply-chain',
    title: 'BanorInc Supply Chain Website',
    image: new URL('/src/assets/projectimage/project5.png', import.meta.url).href,
    stack: { frontend: ['HTML5', 'CSS3', 'Bootstrap 4', 'jQuery', 'JavaScript'], backend: ['PHP'], services: ['Formspree'] },
    description: 'A responsive corporate website for a supply chain company, featuring an interactive JavaScript chatbot and integration with multiple jQuery libraries.',
    liveLink: 'https://banorinc.com/',
    githubLink: '#',
    galleryImages: [
      new URL('/src/assets/projectimage/project5.1.png', import.meta.url).href,
      new URL('/src/assets/projectimage/project5.2.png', import.meta.url).href,
      new URL('/src/assets/projectimage/project5.3.png', import.meta.url).href,
    ],
    fullDescription: [
      { type: 'paragraph', content: "This is a responsive, client-facing website for BanorInc, a supply chain and procurement company. Built with PHP for templating, Bootstrap 4 for its responsive grid, and jQuery for interactivity, the site serves as the company's primary online presence." },
      { type: 'paragraph', content: "A key feature is the custom JavaScript chatbot, 'Flora the Assistant,' designed to provide immediate answers to common user questions. This enhances user engagement and offers a quick support channel. The site also demonstrates proficiency in integrating and customizing third-party libraries, using Owl Carousel for the main hero slider and Slick Carousel for a partner logo showcase." },
      { type: 'heading', content: 'Key Technical Features' },
      { type: 'list', items: ['Responsive Design: Utilizes the Bootstrap 4 framework to ensure a seamless experience across all devices.', 'Interactive JavaScript Chatbot: A custom-coded chatbot with a predefined response map provides instant answers to FAQs, improving user experience.', 'Third-Party Library Integration: Integrates and configures Owl Carousel and Slick Carousel for dynamic and visually appealing content presentation.', 'Serverless Form Handling: The contact form leverages Formspree, demonstrating a modern approach to managing form submissions without a custom backend mailer.', 'Dynamic Content Elements: Incorporates animated counters and a tabbed interface to present information in an engaging and easy-to-digest format.'] }
    ],
    codeSnippets: [
      { title: "Frontend: Interactive JavaScript Chatbot Logic", language: "javascript", code: `// Function to get a response based on user input\nfunction getBotResponse(userMessage) {\n    userMessage = userMessage.toLowerCase();\n\n    if (userMessage.includes("services do you offer")) {\n        return "We offer a range of services, including local and international sourcing, consulting, and logistics solutions.";\n    } else if (userMessage.includes("how can i contact you")) {\n        return "You can contact us via email at info@banorinc.com or by phone at +234 817 002 8278.";\n    } else if (userMessage.includes("where are you located")) {\n        return "Our office is located at Plot 10CC Bosun Adekoya Street, Lekki, Lagos, Nigeria.";\n    } else if (userMessage.includes("hello") || userMessage.includes("hi")) {\n        return "Hello there! How can I assist you today?";\n    } else {\n        return "I'm sorry, I don't have information on that topic. Please try a suggested question or contact us directly.";\n    }\n}\n\n// Function to handle sending a message\nfunction sendMessage() {\n    var messageInput = document.getElementById("message-input");\n    var chatBody = document.getElementById("chat-bot-body");\n    var message = messageInput.value;\n\n    if (message.trim() === "") return;\n\n    // Display user's message\n    var userMessageDiv = document.createElement("div");\n    userMessageDiv.classList.add("user-message");\n    userMessageDiv.textContent = message;\n    chatBody.appendChild(userMessageDiv);\n\n    // Get and display bot's response\n    var botResponse = getBotResponse(message);\n    var botMessageDiv = document.createElement("div");\n    botMessageDiv.classList.add("bot-message");\n    botMessageDiv.textContent = botResponse;\n    chatBody.appendChild(botMessageDiv);\n\n    messageInput.value = ""; // Clear input\n    chatBody.scrollTop = chatBody.scrollHeight; // Scroll to the latest message\n}` },
      { title: "Library Integration: jQuery Slick Carousel for Client Logos", language: "javascript", code: `// Initialize the Slick Carousel for a continuous, automated scroll\n$(document).ready(function () {\n  $(".slider").slick({\n    slidesToShow: 5,       // Number of logos visible at once on desktop\n    slidesToScroll: 1,\n    autoplay: true,        // Automatically scrolls\n    autoplaySpeed: 1500,   // Speed of the scroll in milliseconds\n    arrows: false,         // Hide next/previous arrows\n    dots: false,           // Hide navigation dots\n    pauseOnHover: false,\n    responsive: [          // Adjust settings for smaller screens\n      {\n        breakpoint: 768,   // For tablets\n        settings: {\n          slidesToShow: 4\n        }\n      },\n      {\n        breakpoint: 520,   // For mobile phones\n        settings: {\n          slidesToShow: 3\n        }\n      }\n    ]\n  });\n});` },
      { title: "Backend: Serverless Form Handling with Formspree", language: "html", code: `<!-- \n  This HTML snippet demonstrates handling form submissions without a custom PHP backend.\n  By setting the 'action' attribute to a Formspree endpoint, the form data is\n  securely processed and emailed, simplifying deployment and maintenance.\n-->\n<div class="contact-form">\n  <div id="success"></div>\n  <form id="contactForm" action="https://formspree.io/f/your_form_id" method="POST">\n      <div class="control-group">\n          <label for="name">Your Name</label>\n          <input type="text" class="form-control" id="name" name="name" placeholder="Your Name" required />\n      </div>\n      <div class="control-group">\n          <label for="email">Your Email</label>\n          <input type="email" class="form-control" id="email" name="email" placeholder="Your Email" required />\n      </div>\n      <div class="control-group">\n          <label for="message">Message</label>\n          <textarea class="form-control" id="message" name="message" placeholder="Message" required></textarea>\n      </div>\n      <div>\n          <button class="btn" type="submit" id="sendMessageButton">Send Message</button>\n      </div>\n  </form>\n</div>` }
    ]
  },

  // --- PENDING PROJECTS ---
  {
    type: 'pending',
    slug: 'confidential-mobile-app-1',
    title: 'Confidential Mobile App',
    stack: { frontend: ['React Native'], backend: ['Node.js'], cloud: ['AWS'] },
    description: 'This project is currently under development. Details will be revealed upon its official release.'
  },
  {
    type: 'pending',
    slug: 'confidential-ecommerce-site',
    title: 'Confidential e-Commerce Site',
    stack: { frontend: ['React'], backend: ['Node.js'], cloud: ['Azure'] },
    description: 'Another exciting project in the pipeline, focusing on a scalable and modern e-commerce solution.'
  }
];