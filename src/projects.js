export const projects = [
  {
  type: 'completed',
  slug: 'developer-portfolio',
  title: 'Personal Developer Portfolio',
  image: '/src/assets/projectimage/project6.png', 

  stack: {
    frontend: ['Vue 3', 'Vite', 'Vue Router', 'JavaScript (ES6+)'],
    focus: ['SPA Architecture', 'Responsiveness', 'Accessibility']
  },

  description: 'A dynamic Single Page Application built with Vue 3 and Vite to serve as a comprehensive showcase of my projects and technical skills.',
  
  liveLink: '#', 
  githubLink: '#', 

  galleryImages: [
    '/src/assets/projectimage/project6.1.png',       
    '/src/assets/projectimage/project6.2.png',      
    '/src/assets/projectimage/project6.3.png',    
    
  ],

  fullDescription: [
    {
      type: 'paragraph',
      content: "This portfolio is a Single Page Application (SPA) built from the ground up using Vue 3 and Vite. It serves as a dynamic and maintainable platform to showcase my work, providing detailed case studies for each project."
    },
    {
      type: 'paragraph',
      content: "The architecture is centered around a single data source (`projects.js`) that populates all project-related content, from the main grid to the detailed breakdown pages. This approach makes the site easy to update and scale. It uses Vue Router for seamless navigation and demonstrates a strong focus on modern UI/UX principles, including responsiveness and accessibility."
    },
    {
      type: 'heading',
      content: 'Key Technical Features'
    },
    {
      type: 'list',
      items: [
        'Component-Based Architecture: Built with reusable Vue 3 components using the modern <script setup> syntax for clean and efficient code.',
        'Data-Driven Rendering: Project listings and detail pages are dynamically generated from a centralized JavaScript object, separating content from presentation.',
        'Smart Routing: The navigation bar intelligently constructs URLs, ensuring hash links for smooth scrolling on the homepage and full path links when on other pages.',
        'Accessibility Enhancements: Implements `aria-hidden` to conceal decorative animations and provides a screen-reader-only summary of skills for an inclusive user experience.'
      ]
    }
  ],

  codeSnippets: [
    {
      title: "Component Logic: 'Smart' Navigation Links",
      language: "javascript",
      code: `// From Navbar.vue
import { useRoute } from 'vue-router';
const route = useRoute();

// This function generates the correct URL for each navigation link.
const getLinkUrl = (href) => {
  // If we are on the homepage ('/'), use a simple hash link for smooth scrolling.
  if (route.path === '/') {
    return href;
  }
  // If we are on any other page, prepend '/' to go back to the homepage first,
  // then scroll to the correct section.
  return \`/\${href}\`;
};`
    },
    {
      title: "Accessibility: Hiding Visuals & Providing an SR-Only Summary",
      language: "html",
      code: `<!-- From Hero.vue -->

<!-- 1. The visual, animated elements are hidden from screen readers -->
<div class="typewriter-container" aria-hidden="true">
  <span class="typed-text">{{ displayedText }}</span>
  <span class="cursor"></span>
</div>
<div class="skills-list" aria-hidden="true">
  <!-- ... animated skill bars ... -->
</div>

<!-- 2. A static, hidden list provides a clear summary for screen readers -->
<div class="sr-only">
  <h3>My Skills and Proficiency Levels:</h3>
  <ul>
    <li v-for="lang in languages" :key="lang.name + '-sr'">
      {{ lang.name }}, proficiency level: {{ lang.label }}.
    </li>
  </ul>
</div>`
    },
    {
      title: "Data-Driven UI: Rendering Structured Content",
      language: "html",
      code: `<!-- From ProjectDetails.vue -->
<!-- This loop reads the structured data and builds the correct HTML tags -->
<div v-for="(block, index) in project.fullDescription" :key="index">
  <p v-if="block.type === 'paragraph'">{{ block.content }}</p>
  
  <h3 v-if="block.type === 'heading'">{{ block.content }}</h3>
  
  <ul v-if="block.type === 'list'">
    <li v-for="(item, i) in block.items" :key="i">{{ item }}</li>
  </ul>
</div>`
    }
  ]
},
  {
    type: 'completed',
    slug: 'chatbot-implementation',
    title: 'Chatbot Feature Implementation',
    image: '/src/assets/projectimage/project1.png',
    stack: {
      frontend: ['React'],
      backend: ['Node.js'],
      apis_libraries: ['OpenAI API']
    },
    description: 'Developed an interactive chatbot for an e-learning platform using the GPT-3.5-turbo API.',
    liveLink: 'https://chatbox-eight-lilac.vercel.app/',
    githubLink: 'https://github.com/BanorDerek/chatbox',
    galleryImages: [
      '/src/assets/projectimage/project1.1.png',
    ],
    fullDescription: [
      {
        type: 'paragraph',
        content: "This project involved developing an interactive chatbot feature for an e-learning platform, leveraging React for the frontend, Node.js for the backend, and OpenAI's GPT-3.5-turbo API to create dynamic, user-friendly interactions."
      },
      {
        type: 'paragraph',
        content: "A key design choice was a familiar chat interface where user messages align to the right and chatbot responses appear on the left, ensuring a clear and intuitive user experience. The message structure and UI were inspired by popular messaging platforms for maximum readability and responsiveness."
      },
    ],
    codeSnippets: [
      {
        language: 'javascript',
        title: 'Node.js API Endpoint for Chat',
        code: `
router.post('/chat', async (req, res) => {
  const { message } = req.body;
  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: message }],
    });
    res.json({ reply: completion.choices[0].message.content });
  } catch (error) {
    console.error('Error with OpenAI API:', error);
    res.status(500).send('Error communicating with AI');
  }
});`
      }
    ]
  },
  {
    type: 'completed',
    slug: 'givetechtotheblind',
    title: 'Give Tech to the Blind (Social E-commerce Platform)',
    image: '/src/assets/projectimage/project2.png',
    stack: {
      frontend: ['HTML5', 'CSS3', 'Vanilla JavaScript (ES6+)'],
      backend: ['PHP'],
      database: ['MySQL'],
      apis_libraries: ['Paystack API', 'IziToast.js']
    },
    description: 'A full-stack social enterprise e-commerce platform enabling users to buy or gift assistive technology.',
    liveLink: 'https://accesstechstore.com/',
    githubLink: '#',
    galleryImages: [
      '/src/assets/projectimage/project2.1.png',
      '/src/assets/projectimage/project2.2.png',
      '/src/assets/projectimage/project2.3.png',
      '/src/assets/projectimage/project2.4.png',
      '/src/assets/projectimage/project2.5.png',
      '/src/assets/projectimage/project2.6.png',
      '/src/assets/projectimage/project2.7.png',
      '/src/assets/projectimage/project2.8.png',
    ],
    fullDescription: [
      {
        type: 'paragraph',
        content: `"Give Tech to the Blind" is a full-stack e-commerce platform built with PHP, MySQL, and vanilla JavaScript. It's designed with a unique social enterprise model that allows users to either purchase assistive technology for themselves or directly gift these life-changing devices to visually impaired individuals in need.`
      },
      {
        type: 'paragraph',
        content: `The platform's core is its dual-purpose functionality, which intelligently adapts the user experience. For example, it disables delivery options and fees when a user's entire cart consists of gifted items. This required robust backend logic to manage session data and enforce business rules securely.`
      },
      {
        type: 'heading',
        content: 'Key Technical Features'
      },
      {
        type: 'list',
        items: [
          'Dynamic Product Catalog: All product information is dynamically generated from a MySQL database.',
          'AJAX-Powered Cart: Provides a smooth user experience by updating the cart without page reloads using the JavaScript Fetch API.',
          'Secure Payment Integration: Fully integrated with the Paystack API for secure, real-time payment processing.',
          'Session Management & Security: Implements user authentication, persistent carts, and protection against common vulnerabilities like SQL Injection and CSRF.'
        ]
      }
    ],
   codeSnippets: [
      {
        title: "Backend: Conditional Checkout Logic",
        language: "php",
        code: `// Check if all products in the cart are for gifting ("buy_for_me")
$all_buy_for_me = true;
foreach ($_SESSION['cart'] as $item) {
    // Robustly check for the gift flag
    $isBuyForMe = isset($item['is_buy_for_me']) ? $item['is_buy_for_me'] : false;

    if (!$isBuyForMe) {
        $all_buy_for_me = false;
        break; // Exit loop early if a personal item is found
    }
}

// SERVER-SIDE VALIDATION: If all items are gifts, reject any delivery fee
if ($all_buy_for_me && $delivery_option === 'delivery') {
    $delivery_price = 0; // Force no delivery charge
    error_log("Delivery attempted for gift-only cart. Price reset to 0.");
}`
      },
      {
        title: "Security: Preventing SQL Injection",
        language: "php",
        code: `// Fetch product details using a prepared statement
$stmt_product = $conn->prepare("SELECT id, name, price FROM products WHERE id = ?");

// Bind the user-provided product ID as an integer parameter
$stmt_product->bind_param("i", $productId);
$stmt_product->execute();
$result_product = $stmt_product->get_result();

if ($result_product->num_rows > 0) {
    // ... proceed with valid product ...
}
$stmt_product->close();`
      },
      {
        title: "Frontend: Asynchronous Cart Updates (AJAX)",
        language: "javascript",
        code: `function updateQuantity(productId, newQuantity) {
    const formData = new FormData();
    formData.append('update_quantity', true);
    formData.append('product_id', productId);
    formData.append('quantity', newQuantity);

    // Disable buttons to prevent multiple clicks
    const buttons = document.querySelectorAll(\`#product-\${productId}-buttons button\`);
    buttons.forEach(btn => btn.disabled = true);

    fetch(window.location.pathname, {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.status === 'success') {
            iziToast.success({ message: 'Quantity updated.' });
            setTimeout(() => location.reload(), 1000); 
        } else {
            iziToast.error({ message: data.message });
        }
    })
    .finally(() => {
        // Re-enable buttons after request completes
        buttons.forEach(btn => btn.disabled = false);
    });
}`
      }
    ]
  },
 {
  type: 'completed',
  slug: 'accesstech-academy',
  title: 'AccessTech Academy - An Accessible E-Learning Platform',
  image: '/src/assets/projectimage/project3.1.png',
  

  stack: {
    frontend: ['HTML5', 'CSS3', 'Vanilla JavaScript (ES6+)'],
    backend: ['PHP'],
    database: ['MySQL'],
    apis_libraries: ['Google reCAPTCHA v3']
  },

  description: 'A full-stack e-learning platform engineered for accessibility, featuring a user-centric theme/font-size selector, secure registration, and a stateful quizzing system.',
  
  liveLink: 'https://accesstechacademy.com', 
  githubLink: '#',

  galleryImages: [
    '/src/assets/projectimage/project3.2.png', 
    '/src/assets/projectimage/project3.3.png',   
    '/src/assets/projectimage/project3.4.png', 
    '/src/assets/projectimage/project3.5.png',  
    '/src/assets/projectimage/project3.6.png',
    '/src/assets/projectimage/project3.7.png',
    '/src/assets/projectimage/project3.8.png',
  ],
  
  fullDescription: [
    {
      type: 'paragraph',
      content: "AccessTech Academy is a full-stack, database-driven e-learning platform built with PHP, MySQL, and vanilla JavaScript, specifically engineered to provide an inclusive educational experience for users with visual impairments. The platform's core principle is 'Accessibility First', enforced from the moment a user visits."
    },
    {
      type: 'paragraph',
      content: "A unique onboarding screen requires users to select their preferred contrast and font size before proceeding. These settings are then saved to the browser's localStorage, ensuring that their preferences are automatically applied on every subsequent page and visit, creating a consistently comfortable and accessible environment."
    },
    {
      type: 'heading',
      content: 'Key Technical Features'
    },
    {
      type: 'list',
      items: [
        'Secure User Authentication: A complete registration workflow featuring server-side validation, Google reCAPTCHA v3 bot detection, password hashing, and a 7-digit email verification process.',
        'Dynamic Course Structure: The entire curriculum, including modules and lessons, is dynamically rendered from the MySQL database, allowing for easy content management.',
        'Multi-Format Content Delivery: The lesson viewer intelligently handles and displays various content types, including text, embedded videos (YouTube/Vimeo), self-hosted media files, and an audio player with custom controls.',
        'Stateful Quizzing System: A robust quiz module that securely manages user attempts, enforces business rules (e.g., attempt limits, passing scores), runs a timed session, and uses AJAX to save progress asynchronously, preventing data loss on page refresh.'
      ]
    }
  ],
  
  codeSnippets: [
    {
      title: "Frontend: Persistent Accessibility Controls",
      language: "javascript",
      code: `// Applies a theme by adding a class to the <body> tag.
function applyTheme(themeValue) {
    document.body.className = ''; // Clear existing theme classes
    let themeClass = 'theme-light';
    switch (themeValue) {
        case 2: themeClass = 'theme-dark'; break;
        case 3: themeClass = 'theme-hc-1'; break; // Black/Gold
        case 4: themeClass = 'theme-hc-2'; break; // Blue/Gold
    }
    document.body.classList.add(themeClass);
}

// Sets the contrast, applies it, and saves the choice to localStorage.
function setContrast(value) {
    applyTheme(value);
    localStorage.setItem('contrastTheme', value.toString());
}

// On every page load, retrieve and apply the user's saved preferences.
document.addEventListener('DOMContentLoaded', function () {
    // Get saved theme or default to 1 (light theme)
    const savedTheme = parseInt(localStorage.getItem('contrastTheme'), 10) || 1;
    applyTheme(savedTheme);
    
    // ... similar logic for font size ...
});`
    },
    {
      title: "Backend: Secure User Registration Flow",
      language: "php",
      code: `// --- (After form validation and reCAPTCHA check) ---

// Check if username or email already exists using a prepared statement
$sql_check = "SELECT user_name FROM users WHERE user_name = ? OR email = ?";
$stmt_check = $conn->prepare($sql_check);
$stmt_check->bind_param("ss", $user_name, $email);
$stmt_check->execute();
if ($stmt_check->get_result()->num_rows > 0) {
    $errors[] = "Username or email is already taken.";
}
$stmt_check->close();

// --- If no errors, proceed ---
if (empty($errors)) {
    // Generate a secure verification code and expiry time
    $verification_code = (string) random_int(1000000, 9999999);
    $expiry_time = time() + (15 * 60); // 15 minutes

    // Hash the password securely
    $password_hashed = password_hash($password_plain, PASSWORD_DEFAULT);

    // Store pending user data in session, NOT in the database yet
    $_SESSION['pending_verification'] = [
        'email' => $email,
        'user_name' => $user_name, 
        'password_hashed' => $password_hashed,
        'code' => $verification_code,
        'expiry_time' => $expiry_time
    ];

    // Send verification email and redirect to the 'verify.php' page
    // ... mail() logic ...
    header('Location: verify.php');
    exit;
}`
    },
    {
      title: "Backend: Course Access Control (Authorization)",
      language: "php",
      code: `// --- (After user is logged in and course_id is validated) ---

// 1. Fetch course details to check if it requires payment
$sql_course = "SELECT id, is_paid FROM courses WHERE id = ? LIMIT 1";
$stmt_course = $conn->prepare($sql_course);
$stmt_course->bind_param("i", $course_id);
$stmt_course->execute();
$course = $stmt_course->get_result()->fetch_assoc();
$stmt_course->close();

if (!$course) { /* ... handle course not found ... */ }

$is_paid_course = (bool)$course['is_paid'];
$has_access = false; // Assume no access by default

// 2. Determine authorization
if (!$is_paid_course) {
    // Grant access for free courses
    $has_access = true;
} else {
    // For paid courses, check the user_enrollments table
    $sql_enroll_check = "SELECT 1 FROM user_enrollments WHERE user_id = ? AND course_id = ? LIMIT 1";
    $stmt_enroll_check = $conn->prepare($sql_enroll_check);
    $stmt_enroll_check->bind_param("ii", $user_id, $course_id);
    $stmt_enroll_check->execute();
    if ($stmt_enroll_check->get_result()->num_rows > 0) {
        $has_access = true; // Grant access if enrolled
    }
    $stmt_enroll_check->close();
}

// 3. Enforce the decision
if (!$has_access) {
    $_SESSION['error_message'] = "You are not enrolled in this course.";
    header('Location: /courses/course_page.php?course_id=' . $course_id);
    exit;
}

// --- If code execution continues, the user is authorized to view the lesson ---`
    }
  ]
},
 {
  type: 'completed',
  slug: 'visitors-signin-system',
  title: 'In-House Visitor & Item Management System',
  image: '/src/assets/projectimage/project4.png',
  
  stack: {
    backend: ['PHP'],
    database: ['MySQL'],
    frontend: ['HTML5', 'CSS3', 'JavaScript', 'jQuery']
  },

  description: 'An in-house system for an organization providing secure visitor and item management with real-time tracking, reporting, and an admin dashboard.',
  
  liveLink: '#', 
  githubLink: '#', 

  galleryImages: [
    '/src/assets/projectimage/project4.1.png',    
    '/src/assets/projectimage/project4.2.png',    
    '/src/assets/projectimage/project4.3.png',     
    '/src/assets/projectimage/project4.4.png', 
    '/src/assets/projectimage/project4.5.png',
    '/src/assets/projectimage/project4.6.png'
  ],

  fullDescription: [
    {
      type: 'paragraph',
      content: "This is a full-stack web application built with PHP and MySQL, designed to replace a manual sign-in book for the AccessTech Innovation and Research Center. The system provides a secure and efficient way for staff to manage the flow of visitors and their belongings."
    },
    {
      type: 'paragraph',
      content: "The application features a role-based authentication system, a centralized portal for signing in visitors and items, and a suite of reporting tools. A key automation feature is the system's ability to send a thank-you email with a Google review link to subscribed visitors upon sign-out, enhancing community engagement."
    },
    {
      type: 'heading',
      content: 'Key Technical Features'
    },
    {
      type: 'list',
      items: [
        'Secure Role-Based Authentication: Uses password_hash() and prepared statements to ensure a secure login process with distinct views for staff and administrators.',
        'Combined Access Portal: A clean, tabbed interface allows for efficient sign-in of both visitors and their items, with an autocomplete feature to quickly find returning visitors.',
        'Database Transactions: The sign-out process is wrapped in a MySQL transaction to ensure data integrity, where the visit is only updated if all steps succeed.',
        'Comprehensive Reporting: Includes real-time logs for currently active visitors, pending items, and historical records with A-Z and date-based filtering.',
        'Admin Dashboard: An admin-exclusive view that queries the database to present key metrics like total unique visitors, visits today, and visitor frequency reports.'
      ]
    }
  ],

  codeSnippets: [
    {
      title: "Security: Secure Authentication with Prepared Statements",
      language: "php",
      code: `function authenticateUser($username, $password) {
    global $conn;
    // Prepared statements prevent SQL injection vulnerabilities
    $sql = "SELECT user_id, username, password, role FROM users WHERE username = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("s", $username);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows === 1) {
        $user = $result->fetch_assoc();
        // Verify the provided password against the stored hash
        if (password_verify($password, $user['password'])) {
            $_SESSION['user_id'] = $user['user_id'];
            $_SESSION['username'] = $user['username'];
            $_SESSION['user_role'] = $user['role'];
            return true;
        }
    }
    return false;
}`
    },
    {
      title: "Backend: Transactional Sign-Out with Email Automation",
      language: "php",
      code: `if ($visitor_id_to_sign_out) {
    // Start a transaction for data integrity
    $conn->begin_transaction();

    try {
        // First, get visitor's email and subscription status
        $sql_visitor_info = "SELECT email, subscribed FROM visitors WHERE visitor_id = ?";
        // ... (prepared statement to fetch info) ...

        // Second, update the latest active visit record
        $sql_update_visit = "UPDATE visits SET sign_out_time = NOW(), signed_out_by = ?
                             WHERE visitor_id = ? AND sign_out_time IS NULL
                             ORDER BY sign_in_time DESC LIMIT 1";
        $stmt_update = $conn->prepare($sql_update_visit);
        $stmt_update->bind_param("ii", $user_id, $visitor_id_to_sign_out);
        $stmt_update->execute();

        if ($stmt_update->affected_rows > 0) {
             // If the update was successful, commit the changes
             $conn->commit();
             $success_message = "Visitor signed out successfully.";

             // After committing, send the automated email if they subscribed
             if ($subscribed == 1 && $visitor_email) {
                 sendThankYouEmail($visitor_email);
             }
        } else {
            throw new Exception("Could not find an active visit to sign out.");
        }
    } catch (Exception $e) {
        // If any step fails, roll back all database changes
        $conn->rollback();
        $error_message = "Error signing out visitor: " . $e->getMessage();
    }
}`
    },
    {
      title: "Database: Conditional Query for Filtered Reporting",
      language: "php",
      code: `// --- A-Z Filtering Logic ---
$filter_char = null;
$filter_param = '';
if (isset($_GET['filter']) && preg_match('/^[A-Z]$/', $_GET['filter'])) {
    $filter_char = $_GET['filter'];
    $filter_param = $filter_char . '%'; // Prepare for LIKE clause
}

// Base SQL query
$sql_visitors = "SELECT v.name, vi.sign_in_time, vi.sign_out_time
                 FROM visitors v JOIN visits vi ON v.visitor_id = vi.visitor_id
                 WHERE vi.sign_out_time IS NOT NULL";

// Conditionally add the filter to the SQL query
if ($filter_char) {
    $sql_visitors .= " AND v.name LIKE ?";
}

$sql_visitors .= " ORDER BY v.name ASC";

$stmt_visitors = $conn->prepare($sql_visitors);

if ($stmt_visitors) {
    // Bind the parameter ONLY if the filter is active
    if ($filter_char) {
        $stmt_visitors->bind_param("s", $filter_param);
    }
    $stmt_visitors->execute();
    $result = $stmt_visitors->get_result();
    // ... fetch and display results ...
}`
    }
  ]
},
 {
  type: 'completed',
  slug: 'banorinc-supply-chain',
  title: 'BanorInc Supply Chain Website',
  image: '/src/assets/projectimage/project5.png',
  
  stack: {
    frontend: ['HTML5', 'CSS3', 'Bootstrap 4', 'jQuery', 'JavaScript'],
    backend: ['PHP'],
    services: ['Formspree']
  },

  description: 'A responsive corporate website for a supply chain company, featuring an interactive JavaScript chatbot and integration with multiple jQuery libraries.',
  
  liveLink: 'https://banorinc.com/', 
  githubLink: '#', 

  galleryImages: [
    '/src/assets/projectimage/project5.1',    
    '/src/assets/projectimage/project5.2.png',
    '/src/assets/projectimage/project5.3.png',
    
  ],

  fullDescription: [
    {
      type: 'paragraph',
      content: "This is a responsive, client-facing website for BanorInc, a supply chain and procurement company. Built with PHP for templating, Bootstrap 4 for its responsive grid, and jQuery for interactivity, the site serves as the company's primary online presence."
    },
    {
      type: 'paragraph',
      content: "A key feature is the custom JavaScript chatbot, 'Flora the Assistant,' designed to provide immediate answers to common user questions. This enhances user engagement and offers a quick support channel. The site also demonstrates proficiency in integrating and customizing third-party libraries, using Owl Carousel for the main hero slider and Slick Carousel for a partner logo showcase."
    },
    {
      type: 'heading',
      content: 'Key Technical Features'
    },
    {
      type: 'list',
      items: [
        'Responsive Design: Utilizes the Bootstrap 4 framework to ensure a seamless experience across all devices.',
        'Interactive JavaScript Chatbot: A custom-coded chatbot with a predefined response map provides instant answers to FAQs, improving user experience.',
        'Third-Party Library Integration: Integrates and configures Owl Carousel and Slick Carousel for dynamic and visually appealing content presentation.',
        'Serverless Form Handling: The contact form leverages Formspree, demonstrating a modern approach to managing form submissions without a custom backend mailer.',
        'Dynamic Content Elements: Incorporates animated counters and a tabbed interface to present information in an engaging and easy-to-digest format.'
      ]
    }
  ],
  
  codeSnippets: [
    {
      title: "Frontend: Interactive JavaScript Chatbot Logic",
      language: "javascript",
      code: `// Function to get a response based on user input
function getBotResponse(userMessage) {
    userMessage = userMessage.toLowerCase();

    if (userMessage.includes("services do you offer")) {
        return "We offer a range of services, including local and international sourcing, consulting, and logistics solutions.";
    } else if (userMessage.includes("how can i contact you")) {
        return "You can contact us via email at info@banorinc.com or by phone at +234 817 002 8278.";
    } else if (userMessage.includes("where are you located")) {
        return "Our office is located at Plot 10CC Bosun Adekoya Street, Lekki, Lagos, Nigeria.";
    } else if (userMessage.includes("hello") || userMessage.includes("hi")) {
        return "Hello there! How can I assist you today?";
    } else {
        return "I'm sorry, I don't have information on that topic. Please try a suggested question or contact us directly.";
    }
}

// Function to handle sending a message
function sendMessage() {
    var messageInput = document.getElementById("message-input");
    var chatBody = document.getElementById("chat-bot-body");
    var message = messageInput.value;

    if (message.trim() === "") return;

    // Display user's message
    var userMessageDiv = document.createElement("div");
    userMessageDiv.classList.add("user-message");
    userMessageDiv.textContent = message;
    chatBody.appendChild(userMessageDiv);

    // Get and display bot's response
    var botResponse = getBotResponse(message);
    var botMessageDiv = document.createElement("div");
    botMessageDiv.classList.add("bot-message");
    botMessageDiv.textContent = botResponse;
    chatBody.appendChild(botMessageDiv);

    messageInput.value = ""; // Clear input
    chatBody.scrollTop = chatBody.scrollHeight; // Scroll to the latest message
}`
    },
    {
      title: "Library Integration: jQuery Slick Carousel for Client Logos",
      language: "javascript",
      code: `// Initialize the Slick Carousel for a continuous, automated scroll
$(document).ready(function () {
  $(".slider").slick({
    slidesToShow: 5,       // Number of logos visible at once on desktop
    slidesToScroll: 1,
    autoplay: true,        // Automatically scrolls
    autoplaySpeed: 1500,   // Speed of the scroll in milliseconds
    arrows: false,         // Hide next/previous arrows
    dots: false,           // Hide navigation dots
    pauseOnHover: false,
    responsive: [          // Adjust settings for smaller screens
      {
        breakpoint: 768,   // For tablets
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 520,   // For mobile phones
        settings: {
          slidesToShow: 3
        }
      }
    ]
  });
});`
    },
    {
      title: "Backend: Serverless Form Handling with Formspree",
      language: "html",
      code: `<!-- 
  This HTML snippet demonstrates handling form submissions without a custom PHP backend.
  By setting the 'action' attribute to a Formspree endpoint, the form data is
  securely processed and emailed, simplifying deployment and maintenance.
-->
<div class="contact-form">
  <div id="success"></div>
  <form id="contactForm" action="https://formspree.io/f/your_form_id" method="POST">
      <div class="control-group">
          <label for="name">Your Name</label>
          <input type="text" class="form-control" id="name" name="name" placeholder="Your Name" required />
      </div>
      <div class="control-group">
          <label for="email">Your Email</label>
          <input type="email" class="form-control" id="email" name="email" placeholder="Your Email" required />
      </div>
      <div class="control-group">
          <label for="message">Message</label>
          <textarea class="form-control" id="message" name="message" placeholder="Message" required></textarea>
      </div>
      <div>
          <button class="btn" type="submit" id="sendMessageButton">Send Message</button>
      </div>
  </form>
</div>`
    }
  ]
},

  {
    type: 'pending',
    slug: 'confidential-mobile-app-1',
    title: 'Confidential Mobile App',
    stack: {
      frontend: ['React Native'],
      backend: ['Node.js'],
      cloud: ['AWS']
    },
    description: 'This project is currently under development. Details will be revealed upon its official release.'
  },
  {
    type: 'pending',
    slug: 'confidential-ecommerce-site',
    title: 'Confidential e-Commerce Site',
    stack: {
      frontend: ['React'],
      backend: ['Node.js'],
      cloud: ['Azure']
    },
    description: 'Another exciting project in the pipeline, focusing on a scalable and modern e-commerce solution.'
  },
  {
    type: 'pending',
    slug: 'confidential-mobile-app-2',
    title: 'Confidential Mobile App',
    stack: {
      frontend: ['React Native'],
      backend: ['Node.js'],
      cloud: ['AWS']
    },
    description: 'Working on a new mobile application set to launch soon. Stay tuned for more information!'
  }
];