// This is your single source of truth for all project data.
// All image paths have been updated to use the `new URL()` constructor,
// which is the modern, correct way to handle static assets in Vite.
// This ensures that Vite processes the images correctly during the build step.

export const projects = [
  // --- COMPLETED PROJECTS ---
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
  {
    type: 'completed',
    slug: 'givetechtotheblind',
    title: 'Give Tech to the Blind (Social E-commerce Platform)',
    image: new URL('/src/assets/projectimage/project2.png', import.meta.url).href,
    stack: { frontend: ['HTML5', 'CSS3', 'Vanilla JavaScript (ES6+)'], backend: ['PHP'], database: ['MySQL'], apis_libraries: ['Paystack API', 'IziToast.js'] },
    description: 'A full-stack social enterprise e-commerce platform enabling users to buy or gift assistive technology.',
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
      { type: 'paragraph', content: `"Give Tech to the Blind" is a full-stack e-commerce platform built with PHP, MySQL, and vanilla JavaScript. It's designed with a unique social enterprise model that allows users to either purchase assistive technology for themselves or directly gift these life-changing devices to visually impaired individuals in need.` },
      { type: 'paragraph', content: `The platform's core is its dual-purpose functionality, which intelligently adapts the user experience. For example, it disables delivery options and fees when a user's entire cart consists of gifted items. This required robust backend logic to manage session data and enforce business rules securely.` },
      { type: 'heading', content: 'Key Technical Features' },
      { type: 'list', items: ['Dynamic Product Catalog: All product information is dynamically generated from a MySQL database.', 'AJAX-Powered Cart: Provides a smooth user experience by updating the cart without page reloads using the JavaScript Fetch API.', 'Secure Payment Integration: Fully integrated with the Paystack API for secure, real-time payment processing.', 'Session Management & Security: Implements user authentication, persistent carts, and protection against common vulnerabilities like SQL Injection and CSRF.'] }
    ],
    codeSnippets: [
      { title: "Backend: Conditional Checkout Logic", language: "php", code: `// Check if all products in the cart are for gifting ("buy_for_me")\n$all_buy_for_me = true;\nforeach ($_SESSION['cart'] as $item) {\n    // Robustly check for the gift flag\n    $isBuyForMe = isset($item['is_buy_for_me']) ? $item['is_buy_for_me'] : false;\n\n    if (!$isBuyForMe) {\n        $all_buy_for_me = false;\n        break; // Exit loop early if a personal item is found\n    }\n}\n\n// SERVER-SIDE VALIDATION: If all items are gifts, reject any delivery fee\nif ($all_buy_for_me && $delivery_option === 'delivery') {\n    $delivery_price = 0; // Force no delivery charge\n    error_log("Delivery attempted for gift-only cart. Price reset to 0.");\n}` },
      { title: "Security: Preventing SQL Injection", language: "php", code: `// Fetch product details using a prepared statement\n$stmt_product = $conn->prepare("SELECT id, name, price FROM products WHERE id = ?");\n\n// Bind the user-provided product ID as an integer parameter\n$stmt_product->bind_param("i", $productId);\n$stmt_product->execute();\n$result_product = $stmt_product->get_result();\n\nif ($result_product->num_rows > 0) {\n    // ... proceed with valid product ...\n}\n$stmt_product->close();` },
      { title: "Frontend: Asynchronous Cart Updates (AJAX)", language: "javascript", code: `function updateQuantity(productId, newQuantity) {\n    const formData = new FormData();\n    formData.append('update_quantity', true);\n    formData.append('product_id', productId);\n    formData.append('quantity', newQuantity);\n\n    // Disable buttons to prevent multiple clicks\n    const buttons = document.querySelectorAll(\`#product-\${productId}-buttons button\`);\n    buttons.forEach(btn => btn.disabled = true);\n\n    fetch(window.location.pathname, {\n        method: 'POST',\n        body: formData\n    })\n    .then(response => response.json())\n    .then(data => {\n        if (data.status === 'success') {\n            iziToast.success({ message: 'Quantity updated.' });\n            setTimeout(() => location.reload(), 1000); \n        } else {\n            iziToast.error({ message: data.message });\n        }\n    })\n    .finally(() => {\n        // Re-enable buttons after request completes\n        buttons.forEach(btn => btn.disabled = false);\n    });\n}` }
    ]
  },
  {
    type: 'completed',
    slug: 'accesstech-academy',
    title: 'AccessTech Academy - An Accessible E-Learning Platform',
    image: new URL('/src/assets/projectimage/project3.1.png', import.meta.url).href,
    stack: { frontend: ['HTML5', 'CSS3', 'Vanilla JavaScript (ES6+)'], backend: ['PHP'], database: ['MySQL'], apis_libraries: ['Google reCAPTCHA v3'] },
    description: 'A full-stack e-learning platform engineered for accessibility, featuring a user-centric theme/font-size selector, secure registration, and a stateful quizzing system.',
    liveLink: 'https://accesstechacademy.com',
    githubLink: '#',
    galleryImages: [
      new URL('/src/assets/projectimage/project3.2.png', import.meta.url).href,
      new URL('/src/assets/projectimage/project3.3.png', import.meta.url).href,
      new URL('/src/assets/projectimage/project3.4.png', import.meta.url).href,
      new URL('/src/assets/projectimage/project3.5.png', import.meta.url).href,
      new URL('/src/assets/projectimage/project3.6.png', import.meta.url).href,
      new URL('/src/assets/projectimage/project3.7.png', import.meta.url).href,
      new URL('/src/assets/projectimage/project3.8.png', import.meta.url).href,
    ],
    fullDescription: [
      { type: 'paragraph', content: "AccessTech Academy is a full-stack, database-driven e-learning platform built with PHP, MySQL, and vanilla JavaScript, specifically engineered to provide an inclusive educational experience for users with visual impairments. The platform's core principle is 'Accessibility First', enforced from the moment a user visits." },
      { type: 'paragraph', content: "A unique onboarding screen requires users to select their preferred contrast and font size before proceeding. These settings are then saved to the browser's localStorage, ensuring that their preferences are automatically applied on every subsequent page and visit, creating a consistently comfortable and accessible environment." },
      { type: 'heading', content: 'Key Technical Features' },
      { type: 'list', items: ['Secure User Authentication: A complete registration workflow featuring server-side validation, Google reCAPTCHA v3 bot detection, password hashing, and a 7-digit email verification process.', 'Dynamic Course Structure: The entire curriculum, including modules and lessons, is dynamically rendered from the MySQL database, allowing for easy content management.', 'Multi-Format Content Delivery: The lesson viewer intelligently handles and displays various content types, including text, embedded videos (YouTube/Vimeo), self-hosted media files, and an audio player with custom controls.', 'Stateful Quizzing System: A robust quiz module that securely manages user attempts, enforces business rules (e.g., attempt limits, passing scores), runs a timed session, and uses AJAX to save progress asynchronously, preventing data loss on page refresh.'] }
    ],
    codeSnippets: [
      { title: "Frontend: Persistent Accessibility Controls", language: "javascript", code: `// Applies a theme by adding a class to the <body> tag.\nfunction applyTheme(themeValue) {\n    document.body.className = ''; // Clear existing theme classes\n    let themeClass = 'theme-light';\n    switch (themeValue) {\n        case 2: themeClass = 'theme-dark'; break;\n        case 3: themeClass = 'theme-hc-1'; break; // Black/Gold\n        case 4: themeClass = 'theme-hc-2'; break; // Blue/Gold\n    }\n    document.body.classList.add(themeClass);\n}\n\n// Sets the contrast, applies it, and saves the choice to localStorage.\nfunction setContrast(value) {\n    applyTheme(value);\n    localStorage.setItem('contrastTheme', value.toString());\n}\n\n// On every page load, retrieve and apply the user's saved preferences.\ndocument.addEventListener('DOMContentLoaded', function () {\n    // Get saved theme or default to 1 (light theme)\n    const savedTheme = parseInt(localStorage.getItem('contrastTheme'), 10) || 1;\n    applyTheme(savedTheme);\n    \n    // ... similar logic for font size ...\n});` },
      { title: "Backend: Secure User Registration Flow", language: "php", code: `// --- (After form validation and reCAPTCHA check) ---\n\n// Check if username or email already exists using a prepared statement\n$sql_check = "SELECT user_name FROM users WHERE user_name = ? OR email = ?";\n$stmt_check = $conn->prepare($sql_check);\n$stmt_check->bind_param("ss", $user_name, $email);\n$stmt_check->execute();\nif ($stmt_check->get_result()->num_rows > 0) {\n    $errors[] = "Username or email is already taken.";\n}\n$stmt_check->close();\n\n// --- If no errors, proceed ---\nif (empty($errors)) {\n    // Generate a secure verification code and expiry time\n    $verification_code = (string) random_int(1000000, 9999999);\n    $expiry_time = time() + (15 * 60); // 15 minutes\n\n    // Hash the password securely\n    $password_hashed = password_hash($password_plain, PASSWORD_DEFAULT);\n\n    // Store pending user data in session, NOT in the database yet\n    $_SESSION['pending_verification'] = [\n        'email' => $email,\n        'user_name' => $user_name, \n        'password_hashed' => $password_hashed,\n        'code' => $verification_code,\n        'expiry_time' => $expiry_time\n    ];\n\n    // Send verification email and redirect to the 'verify.php' page\n    // ... mail() logic ...\n    header('Location: verify.php');\n    exit;\n}` },
      { title: "Backend: Course Access Control (Authorization)", language: "php", code: `// --- (After user is logged in and course_id is validated) ---\n\n// 1. Fetch course details to check if it requires payment\n$sql_course = "SELECT id, is_paid FROM courses WHERE id = ? LIMIT 1";\n$stmt_course = $conn->prepare($sql_course);\n$stmt_course->bind_param("i", $course_id);\n$stmt_course->execute();\n$course = $stmt_course->get_result()->fetch_assoc();\n$stmt_course->close();\n\nif (!$course) { /* ... handle course not found ... */ }\n\n$is_paid_course = (bool)$course['is_paid'];\n$has_access = false; // Assume no access by default\n\n// 2. Determine authorization\nif (!$is_paid_course) {\n    // Grant access for free courses\n    $has_access = true;\n} else {\n    // For paid courses, check the user_enrollments table\n    $sql_enroll_check = "SELECT 1 FROM user_enrollments WHERE user_id = ? AND course_id = ? LIMIT 1";\n    $stmt_enroll_check = $conn->prepare($sql_enroll_check);\n    $stmt_enroll_check->bind_param("ii", $user_id, $course_id);\n    $stmt_enroll_check->execute();\n    if ($stmt_enroll_check->get_result()->num_rows > 0) {\n        $has_access = true; // Grant access if enrolled\n    }\n    $stmt_enroll_check->close();\n}\n\n// 3. Enforce the decision\nif (!$has_access) {\n    $_SESSION['error_message'] = "You are not enrolled in this course.";\n    header('Location: /courses/course_page.php?course_id=' . $course_id);\n    exit;\n}\n\n// --- If code execution continues, the user is authorized to view the lesson ---` }
    ]
  },
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
  },
  {
    type: 'pending',
    slug: 'confidential-mobile-app-2',
    title: 'Confidential Mobile App',
    stack: { frontend: ['React Native'], backend: ['Node.js'], cloud: ['AWS'] },
    description: 'Working on a new mobile application set to launch soon. Stay tuned for more information!'
  }
];