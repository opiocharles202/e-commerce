import type { Category, Product, PromoBanner } from "@/types/domain";

export const dummyCategories: Category[] = [
  { id: "cat-1", name: "Smartphones", slug: "smartphones", icon: "Smartphone", productCount: 48 },
  { id: "cat-2", name: "Cases & Covers", slug: "cases-covers", icon: "Shield", productCount: 120 },
  { id: "cat-3", name: "Chargers", slug: "chargers", icon: "Zap", productCount: 64 },
  { id: "cat-4", name: "Audio", slug: "audio", icon: "Headphones", productCount: 32 },
  { id: "cat-5", name: "Tablets", slug: "tablets", icon: "Tablet", productCount: 18 },
  { id: "cat-6", name: "Cables", slug: "cables", icon: "Cable", productCount: 45 },
];

export const dummyProducts: Product[] = [
  {
    id: "p-1",
    name: "iPhone 16 Pro Max",
    slug: "iphone-16-pro-max",
    sku: "APL-IP16PM-256-NT",
    description: "Apple's most advanced smartphone with titanium design, A18 Pro chip, and 5x optical zoom camera system.",
    longDescription: `iPhone 16 Pro Max features a stunning Grade 5 titanium design that's both lighter and more durable than ever before. The expansive 6.9-inch Super Retina XDR display with ProMotion technology delivers breathtaking visuals with up to 2000 nits of peak HDR brightness, while the Always-On display keeps essential information visible at a glance.

Powered by the groundbreaking A18 Pro chip with a 6-core GPU, this is the most powerful iPhone ever created. Run console-quality games with hardware-accelerated ray tracing, edit 4K ProRes video on the go, and experience Apple Intelligence features that understand your personal context while keeping your data completely private.

The pro camera system takes mobile photography to an entirely new level. The 48MP Fusion camera captures extraordinary detail, the 48MP Ultra Wide opens up new perspectives, and the 12MP 5x Telephoto lens brings distant subjects dramatically closer. Capture stunning 4K Dolby Vision video at 120fps, and use the innovative Camera Control button for intuitive photo and video capture — press lightly to adjust exposure, zoom, and more.

With up to 33 hours of video playback, all-day battery life is never a concern. USB-C with USB 3 speeds enables blazing-fast data transfer up to 10 Gb/s. And with Crash Detection, Emergency SOS via satellite, and Roadside Assistance, iPhone 16 Pro Max has your safety covered wherever you go.`,
    highlights: [
      "6.9-inch Super Retina XDR OLED display with ProMotion (120Hz) and Always-On",
      "A18 Pro chip — fastest chip ever in a smartphone with 6-core GPU and hardware ray tracing",
      "48MP Fusion camera system with 5x optical zoom and 25x digital zoom",
      "Grade 5 titanium design — lightest Pro Max ever at just 227g",
      "Up to 33 hours of video playback with all-day battery life",
      "USB-C with USB 3 speeds (up to 10 Gb/s) for blazing-fast transfers",
      "Crash Detection, Emergency SOS via satellite, and Roadside Assistance",
      "iOS 18 with Apple Intelligence — on-device AI that respects your privacy",
    ],
    specifications: {
      "Display": "6.9\" Super Retina XDR OLED, 2868 × 1320, 120Hz ProMotion, Always-On",
      "Processor": "A18 Pro — 6-core CPU, 6-core GPU, 16-core Neural Engine",
      "Storage": "256GB / 512GB / 1TB",
      "Rear Camera": "48MP Fusion (f/1.78) + 48MP Ultra Wide (f/2.2) + 12MP 5x Telephoto (f/2.8)",
      "Front Camera": "12MP TrueDepth with autofocus, Smart HDR 5",
      "Battery Life": "Up to 33hrs video playback, MagSafe & Qi2 wireless charging",
      "Operating System": "iOS 18",
      "Water Resistance": "IP68 — submersible to 6m for 30 minutes",
      "Dimensions": "163.0 × 77.6 × 8.25 mm",
      "Weight": "227 g",
      "Connectivity": "5G (sub-6 GHz & mmWave), Wi-Fi 7, Bluetooth 5.3, NFC, UWB chip",
      "SIM": "Dual eSIM support (no physical SIM tray)",
      "Biometrics": "Face ID with TrueDepth camera",
      "Material": "Grade 5 Titanium frame, Ceramic Shield front, textured matte glass back",
    },
    whatsInTheBox: ["iPhone 16 Pro Max", "USB-C Charge Cable (1 m)", "Documentation"],
    warranty: "1 Year Apple Limited Warranty",
    price: 1199.00,
    compareAtPrice: undefined,
    brand: "Apple",
    inventory: 12,
    isActive: true,
    images: [
      "/iphone-16.png",
    ],
    categoryId: "cat-1",
    rating: 4.9,
    reviewCount: 342,
    isFeatured: true,
    isNew: true,
    isBestSeller: true,
    createdAt: "2024-09-20T00:00:00Z",
    updatedAt: "2024-09-20T00:00:00Z",
  },
  {
    id: "p-2",
    name: "Samsung Galaxy S25 Ultra",
    slug: "samsung-galaxy-s25-ultra",
    sku: "SAM-GS25U-256-TB",
    description: "Galaxy AI meets the most powerful Galaxy smartphone yet. Built-in S Pen, 200MP camera.",
    longDescription: `Samsung Galaxy S25 Ultra redefines what a smartphone can do with Galaxy AI — the most intelligent mobile experience ever created. From real-time language translation during phone calls to AI-powered photo editing that lets you move objects and fill backgrounds, every interaction is enhanced by advanced artificial intelligence that works on-device for complete privacy.

The stunning 6.8-inch Dynamic AMOLED 2X display delivers cinema-grade visuals with a 3120 × 1440 resolution, 120Hz adaptive refresh rate, and an incredible 2600 nits of peak brightness. The display features Corning Gorilla Armor 2 for superior scratch resistance and reduced reflections, making it perfect for outdoor use.

Photography reaches professional heights with the 200MP main sensor — the highest resolution camera ever on a Galaxy phone. Capture incredible detail even in low light, zoom up to 100x with Space Zoom, and let Nightography AI illuminate your night shots with stunning clarity. The S Pen, now built directly into the device, offers precise control for note-taking, sketching, and navigating Galaxy AI features.

Powered by the Snapdragon 8 Elite chipset with 12GB RAM, the S25 Ultra handles anything you throw at it — from demanding mobile games to multitasking across multiple apps. The 5000mAh battery with 45W super fast charging ensures you power through even the busiest days.`,
    highlights: [
      "Galaxy AI — real-time call translation, AI photo editing, Circle to Search, and more",
      "200MP main camera with 100x Space Zoom and Nightography AI for stunning low-light shots",
      "6.8-inch Dynamic AMOLED 2X display — 3120 × 1440, 120Hz, 2600 nits peak brightness",
      "Built-in S Pen for precise note-taking, sketching, and AI-powered interactions",
      "Snapdragon 8 Elite processor with 12GB RAM for blazing-fast performance",
      "5000mAh battery with 45W wired + 15W wireless charging",
      "Titanium frame with Gorilla Armor 2 — IP68 water and dust resistant",
      "7 years of OS and security updates guaranteed",
    ],
    specifications: {
      "Display": "6.8\" Dynamic AMOLED 2X, 3120 × 1440, 120Hz adaptive, 2600 nits",
      "Processor": "Snapdragon 8 Elite for Galaxy — 3nm, Octa-core",
      "RAM / Storage": "12GB RAM / 256GB, 512GB, or 1TB internal storage",
      "Rear Camera": "200MP Wide (f/1.7) + 50MP Ultra Wide (f/1.9) + 10MP 3x Tele + 50MP 5x Tele",
      "Front Camera": "12MP (f/2.2) with autofocus",
      "Battery": "5000mAh, 45W wired, 15W wireless, Wireless PowerShare",
      "Operating System": "Android 15 with One UI 7",
      "Water Resistance": "IP68 — 1.5m for 30 minutes",
      "Dimensions": "162.8 × 77.6 × 8.2 mm",
      "Weight": "218 g",
      "Connectivity": "5G, Wi-Fi 7, Bluetooth 5.4, NFC, UWB, GPS + GLONASS",
      "S Pen": "Built-in, Bluetooth LE, 4096 pressure levels",
      "Biometrics": "Ultrasonic fingerprint (in-display) + Face Recognition",
      "Material": "Titanium frame, Gorilla Armor 2 front, Gorilla Glass back",
    },
    whatsInTheBox: ["Galaxy S25 Ultra", "USB-C Cable", "S Pen (built-in)", "Quick Start Guide", "SIM Ejection Pin"],
    warranty: "1 Year Samsung Manufacturer Warranty",
    price: 1099.00,
    compareAtPrice: 1299.00,
    brand: "Samsung",
    inventory: 8,
    isActive: true,
    images: [
      "/samsung-s24.png",
    ],
    categoryId: "cat-1",
    rating: 4.8,
    reviewCount: 289,
    isFeatured: true,
    isNew: true,
    isBestSeller: false,
    createdAt: "2024-10-01T00:00:00Z",
    updatedAt: "2024-10-01T00:00:00Z",
  },
  {
    id: "p-3",
    name: "Google Pixel 9 Pro",
    slug: "google-pixel-9-pro",
    sku: "GOO-PX9P-128-OB",
    description: "Google's flagship phone with advanced AI photography, 7 years of updates, and Tensor G4 chip.",
    longDescription: `Google Pixel 9 Pro is built from the ground up around Gemini — Google's most capable AI model. With Gemini Nano running directly on your device, Pixel 9 Pro delivers AI experiences that feel almost magical: generate images from text prompts, get intelligent call screening, and use Magic Eraser to remove unwanted objects from photos with a single tap.

The 6.3-inch Super Actua display is the brightest Pixel screen ever, reaching up to 3000 nits of peak brightness for outstanding visibility even in direct sunlight. The LTPO OLED panel supports a silky-smooth 120Hz refresh rate and is protected by Corning Gorilla Glass Victus 2.

Pixel's camera system has always led the industry in computational photography, and the 9 Pro takes it further. The 50MP main sensor with a larger sensor area captures 21% more light than its predecessor. Night Sight, Magic Eraser, Photo Unblur, and Best Take are all powered by Google's AI and work together to ensure every photo looks incredible — no professional skills required.

With 7 years of guaranteed OS updates and security patches, Pixel 9 Pro is built to last. The Tensor G4 chip delivers Google's fastest on-device AI processing yet while maintaining excellent battery efficiency — expect a full day of use on a single charge with adaptive battery learning your usage patterns over time.`,
    highlights: [
      "Gemini Nano on-device AI — generate images, smart call screening, and AI-powered productivity",
      "50MP triple camera system with Magic Eraser, Photo Unblur, Night Sight, and Best Take",
      "6.3-inch Super Actua LTPO OLED display — 120Hz, up to 3000 nits peak brightness",
      "Google Tensor G4 chip — purpose-built for AI and machine learning",
      "7 years of OS and security updates guaranteed by Google",
      "All-day adaptive battery with 27W fast charging and wireless charging support",
      "IP68 water and dust resistance with Gorilla Glass Victus 2 protection",
      "Pure Android experience with Google One AI Premium included for 1 year",
    ],
    specifications: {
      "Display": "6.3\" Super Actua LTPO OLED, 2856 × 1280, 120Hz, 3000 nits peak",
      "Processor": "Google Tensor G4 with Titan M2 security chip",
      "RAM / Storage": "16GB RAM / 128GB, 256GB, 512GB, or 1TB",
      "Rear Camera": "50MP Wide (f/1.68) + 48MP Ultra Wide (f/1.7) + 48MP 5x Tele (f/2.8)",
      "Front Camera": "42MP (f/2.2) with autofocus",
      "Battery": "4700mAh, 27W wired, 21W wireless, Battery Share",
      "Operating System": "Android 15",
      "Water Resistance": "IP68 — 1.5m for 30 minutes",
      "Dimensions": "152.8 × 72.0 × 8.5 mm",
      "Weight": "199 g",
      "Connectivity": "5G (sub-6 & mmWave), Wi-Fi 7, Bluetooth 5.3, NFC, UWB",
      "Biometrics": "Under-display fingerprint sensor + Face Unlock",
      "Material": "Polished aluminum frame, Gorilla Glass Victus 2 front and back",
    },
    whatsInTheBox: ["Pixel 9 Pro", "USB-C to USB-C Cable (1 m)", "Quick Switch Adapter", "Quick Start Guide"],
    warranty: "1 Year Google Limited Warranty",
    price: 999.00,
    compareAtPrice: undefined,
    brand: "Google",
    inventory: 20,
    isActive: true,
    images: [
      "/google-9-pro.png",
      "/google-9-pro-front.png",
    ],
    categoryId: "cat-1",
    rating: 4.7,
    reviewCount: 156,
    isFeatured: true,
    isNew: false,
    isBestSeller: false,
    createdAt: "2024-08-15T00:00:00Z",
    updatedAt: "2024-08-15T00:00:00Z",
  },
  {
    id: "p-4",
    name: "AirPods Pro 2nd Gen",
    slug: "airpods-pro-2nd-gen",
    sku: "APL-APP2-USB-C",
    description: "Active Noise Cancellation, Adaptive Transparency, Personalised Spatial Audio. MagSafe charging case.",
    longDescription: `AirPods Pro 2nd Generation deliver an unparalleled listening experience with the Apple H2 chip powering advanced Active Noise Cancellation that silences up to 2x more background noise than the previous generation. Whether you're commuting through a busy city or trying to focus in a crowded office, AirPods Pro create a cocoon of immersive sound around you.

Adaptive Transparency lets you comfortably hear the world around you while reducing loud environmental noises like construction or sirens in real-time. Combined with Personalized Spatial Audio that uses the TrueDepth camera to create a custom profile tuned to your ears, music and movies sound precisely the way the artists and filmmakers intended.

The new Conversation Awareness feature automatically lowers your media volume and enhances voices in front of you when you start speaking — perfect for quick interactions without removing your AirPods. Touch-based controls on the stem let you adjust volume with a swipe, play/pause with a press, and switch between noise control modes effortlessly.

With up to 6 hours of listening time on a single charge (and up to 30 hours total with the MagSafe charging case), AirPods Pro keep up with your entire day. The USB-C charging case also supports Apple Watch charger, Qi wireless charging, and features a built-in speaker for precision Find My tracking using Ultra Wideband technology.`,
    highlights: [
      "Active Noise Cancellation — silences up to 2x more background noise with the H2 chip",
      "Adaptive Transparency mode reduces loud environmental noise in real-time",
      "Personalized Spatial Audio with dynamic head tracking for immersive 3D sound",
      "Conversation Awareness — automatically adjusts volume when you start speaking",
      "Touch control on stem for volume, playback, calls, and Siri",
      "Up to 6 hours listening / 30 hours total with MagSafe USB-C charging case",
      "IP54 dust and water resistance for AirPods and charging case",
      "Precision Finding with U1 chip and built-in speaker in case",
    ],
    specifications: {
      "Chip": "Apple H2 headphone chip, Apple U1 chip in case",
      "Active Noise Cancellation": "Yes — 2x more effective than 1st generation",
      "Transparency Mode": "Adaptive Transparency with loud noise reduction",
      "Spatial Audio": "Personalized with dynamic head tracking",
      "Driver": "Custom Apple high-excursion driver + custom high dynamic range amplifier",
      "Battery (AirPods)": "Up to 6hrs listening (ANC on), 5.5hrs talk time",
      "Battery (Case + AirPods)": "Up to 30hrs listening, 24hrs talk time",
      "Charging": "USB-C, MagSafe, Apple Watch charger, Qi wireless",
      "Water Resistance": "IP54 (AirPods and charging case)",
      "Weight (Each AirPod)": "5.3 g",
      "Weight (Charging Case)": "50.8 g",
      "Connectivity": "Bluetooth 5.3",
      "Ear Tips": "XS, S, M, L silicone tips included",
    },
    whatsInTheBox: ["AirPods Pro", "MagSafe Charging Case (USB-C)", "Silicone Ear Tips (4 sizes: XS, S, M, L)", "USB-C Charge Cable", "Documentation"],
    warranty: "1 Year Apple Limited Warranty",
    price: 249.00,
    compareAtPrice: 279.00,
    brand: "Apple",
    inventory: 35,
    isActive: true,
    images: [
      "/airpods-pro.png",
    ],
    categoryId: "cat-4",
    rating: 4.8,
    reviewCount: 521,
    isFeatured: true,
    isNew: false,
    isBestSeller: true,
    createdAt: "2023-11-01T00:00:00Z",
    updatedAt: "2023-11-01T00:00:00Z",
  },
  {
    id: "p-5",
    name: "Anker 65W GaN Charger",
    slug: "anker-65w-gan-charger",
    sku: "ANK-A2663-BK",
    description: "Compact 65W USB-C GaN fast charger. Charges MacBook, iPhone, and Android simultaneously.",
    longDescription: `The Anker 65W GaN Charger represents a breakthrough in charging technology. Using next-generation Gallium Nitride (GaN) semiconductors instead of traditional silicon, this charger delivers a massive 65W of power in a package that's 58% smaller than a standard MacBook charger. It's small enough to fit in your pocket yet powerful enough to charge a laptop.

Featuring Anker's proprietary PowerIQ 3.0 technology with Dynamic Power Distribution, this charger intelligently allocates power across its two USB-C ports and one USB-A port. Plug in your MacBook Pro, iPhone, and AirPods simultaneously — the charger automatically optimizes power delivery to charge each device at its maximum safe speed.

The 65W USB-C port supports USB Power Delivery 3.0 and PPS (Programmable Power Supply), making it compatible with virtually every fast-charging standard. Charge a MacBook Air from 0 to 50% in just 30 minutes, or top up your iPhone 16 to 50% in approximately 25 minutes. The secondary USB-C port delivers up to 20W for smaller devices.

Built with Anker's MultiProtect safety system featuring 10 layers of protection including over-voltage, over-current, and temperature monitoring, you can charge with complete peace of mind. The foldable plug design makes it the perfect travel companion, and the matte finish resists fingerprints and scratches.`,
    highlights: [
      "65W total output — powerful enough to fast-charge a MacBook Pro at full speed",
      "GaN technology — 58% smaller than a standard laptop charger",
      "3 ports: 2× USB-C (65W + 20W) + 1× USB-A (22.5W) for charging 3 devices at once",
      "PowerIQ 3.0 with Dynamic Power Distribution for intelligent charging",
      "USB PD 3.0 + PPS compatible — works with Apple, Samsung, Google, and more",
      "Foldable plug design — ultra-portable for travel and commuting",
      "MultiProtect 10-layer safety system with temperature and voltage monitoring",
      "Universal compatibility: laptops, phones, tablets, earbuds, and more",
    ],
    specifications: {
      "Total Output": "65W maximum",
      "USB-C 1": "65W max (5V/3A, 9V/3A, 15V/3A, 20V/3.25A, PPS: 3.3-21V/3A)",
      "USB-C 2": "20W max (5V/3A, 9V/2.22A)",
      "USB-A": "22.5W max (5V/3A, 9V/2A, 10V/2.25A)",
      "Technology": "GaN II (Gallium Nitride), PowerIQ 3.0",
      "Input": "100-240V ~ 1.7A, 50-60Hz (worldwide voltage)",
      "Dimensions": "71 × 30 × 42 mm",
      "Weight": "120 g",
      "Color": "Black",
      "Plug": "Foldable US 2-prong",
      "Certifications": "FCC, UL, CE, RoHS",
      "Safety": "MultiProtect 10-layer protection system",
    },
    whatsInTheBox: ["Anker 65W GaN Charger", "Welcome Guide", "18-Month Warranty Card"],
    warranty: "18 Months Anker Warranty + Lifetime Technical Support",
    price: 45.99,
    compareAtPrice: undefined,
    brand: "Anker",
    inventory: 3,
    isActive: true,
    images: [
      "/anker-charger.png",
    ],
    categoryId: "cat-3",
    rating: 4.6,
    reviewCount: 847,
    isFeatured: true,
    isNew: false,
    isBestSeller: true,
    createdAt: "2023-06-01T00:00:00Z",
    updatedAt: "2023-06-01T00:00:00Z",
  },
  {
    id: "p-6",
    name: "Spigen Tough Armor – iPhone 16",
    slug: "spigen-tough-armor-iphone-16",
    sku: "SPG-TA-IP16-BK",
    description: "Military-grade drop protection with dual-layer design. Air Cushion Technology for corner protection.",
    longDescription: `The Spigen Tough Armor for iPhone 16 is engineered for those who demand the highest level of protection without sacrificing style. Featuring a dual-layer construction of flexible TPU inner lining and rigid polycarbonate outer shell, this case absorbs and disperses impact forces across its entire surface — protecting your iPhone from drops up to 10 feet onto hard surfaces.

Spigen's signature Air Cushion Technology integrates raised air pockets into each corner of the case, providing targeted protection at the most impact-prone points. In independent drop testing conducted to MIL-STD-810G military standard, the Tough Armor consistently protected devices from damage in 26 different drop scenarios.

The reinforced kickstand pops out from the back panel for comfortable hands-free viewing in both portrait and landscape orientations — perfect for video calls, watching content, or following recipes in the kitchen. The kickstand mechanism features a satisfying click and holds firm at the optimal viewing angle.

Precise cutouts provide easy access to all ports, buttons, and cameras. Raised edges around the screen (1.5mm) and camera module (1.7mm) prevent contact with flat surfaces when placed face-down. The case is fully compatible with wireless charging and MagSafe accessories, so you never need to remove it.`,
    highlights: [
      "MIL-STD-810G military-grade drop protection — survives drops up to 10 feet",
      "Dual-layer design: flexible TPU inner + rigid polycarbonate outer shell",
      "Air Cushion Technology with raised air pockets in all four corners",
      "Built-in reinforced kickstand for portrait and landscape hands-free viewing",
      "Raised bezels: 1.5mm around screen, 1.7mm around camera for surface protection",
      "Compatible with wireless charging and MagSafe — no case removal needed",
      "Tactile button covers provide satisfying click feedback",
      "Slim profile at just 13.5mm — tough protection without excessive bulk",
    ],
    specifications: {
      "Compatibility": "iPhone 16 (6.1-inch, 2024)",
      "Material": "TPU (thermoplastic polyurethane) + Polycarbonate",
      "Drop Protection": "MIL-STD-810G certified — up to 10ft / 3m drops",
      "Screen Bezel": "1.5mm raised lip",
      "Camera Bezel": "1.7mm raised lip",
      "Kickstand": "Yes — reinforced, portrait & landscape",
      "Wireless Charging": "Compatible (including MagSafe)",
      "Weight": "42 g",
      "Dimensions": "153.2 × 78.0 × 13.5 mm",
      "Color Options": "Black, Navy Blue, Gunmetal",
    },
    whatsInTheBox: ["Spigen Tough Armor Case", "Microfiber Cleaning Cloth"],
    warranty: "Spigen Lifetime Warranty",
    price: 19.99,
    compareAtPrice: undefined,
    brand: "Spigen",
    inventory: 0,
    isActive: true,
    images: [
      "/iphone-16.png",
    ],
    categoryId: "cat-2",
    rating: 4.5,
    reviewCount: 1203,
    isFeatured: false,
    isNew: false,
    isBestSeller: false,
    createdAt: "2024-09-25T00:00:00Z",
    updatedAt: "2024-09-25T00:00:00Z",
  },
  {
    id: "p-7",
    name: "OnePlus 13",
    slug: "oneplus-13",
    sku: "OP-13-256-MG",
    description: "Snapdragon 8 Elite, 50MP Hasselblad triple camera, 100W SUPERVOOC charging.",
    longDescription: `OnePlus 13 represents the pinnacle of the "Never Settle" philosophy — a flagship smartphone that rivals devices costing hundreds more. Co-engineered with Hasselblad, the triple 50MP camera system captures images with natural color science and incredible dynamic range, bringing professional photography to everyone's pocket.

The massive 6.82-inch 2K+ LTPO AMOLED display features BOE's latest X2 panel with 4500 nits of peak brightness — the brightest ever on a OnePlus device. With Dolby Vision support and a 120Hz refresh rate, everything from scrolling social media to watching your favorite series feels smooth and vibrant. The display also features PWM dimming at 2160Hz, reducing eye strain during extended use.

Powered by the Snapdragon 8 Elite — Qualcomm's most powerful mobile processor — the OnePlus 13 delivers desktop-class performance. Combined with 16GB of LPDDR5X RAM and UFS 4.0 storage, apps launch instantly, games run at maximum settings, and multitasking is effortless. The advanced vapor chamber cooling system keeps temperatures in check during intensive workloads.

With 100W SUPERVOOC wired charging, the massive 6000mAh battery charges from 1% to 100% in just 36 minutes. 50W wireless charging is also supported. The device runs OxygenOS 15 based on Android 15, offering 4 years of major OS updates and 6 years of security patches.`,
    highlights: [
      "Hasselblad triple 50MP camera system with natural color science and 4K Dolby Vision video",
      "6.82-inch 2K+ LTPO AMOLED — 4500 nits peak brightness with Dolby Vision",
      "Snapdragon 8 Elite — fastest mobile processor with 16GB LPDDR5X RAM",
      "6000mAh battery with 100W SUPERVOOC — 0 to 100% in just 36 minutes",
      "50W wireless charging and 10W reverse wireless charging",
      "IP68 + IP69 water and dust resistance",
      "Advanced vapor chamber cooling for sustained gaming performance",
      "OxygenOS 15 with 4 years of OS updates + 6 years of security updates",
    ],
    specifications: {
      "Display": "6.82\" 2K+ LTPO AMOLED, 3168 × 1440, 120Hz, 4500 nits, 2160Hz PWM",
      "Processor": "Snapdragon 8 Elite — Octa-core, 3nm",
      "RAM / Storage": "16GB LPDDR5X / 256GB or 512GB UFS 4.0",
      "Rear Camera": "50MP Wide (f/1.6, OIS) + 50MP Ultra Wide (f/2.0) + 50MP 3x Tele (f/2.6, OIS)",
      "Front Camera": "32MP (f/2.4)",
      "Battery": "6000mAh, 100W wired, 50W wireless, 10W reverse wireless",
      "Operating System": "OxygenOS 15 (Android 15)",
      "Water Resistance": "IP68 + IP69",
      "Dimensions": "162.9 × 76.5 × 8.5 mm",
      "Weight": "213 g",
      "Connectivity": "5G, Wi-Fi 7, Bluetooth 5.4, NFC, IR blaster",
      "Biometrics": "Ultrasonic fingerprint (in-display) + Face Unlock",
      "Material": "Metal frame, micro-curved glass front and back",
    },
    whatsInTheBox: ["OnePlus 13", "100W SUPERVOOC Power Adapter", "USB-C Cable", "Protective Case", "SIM Ejection Tool", "Quick Start Guide"],
    warranty: "1 Year OnePlus Manufacturer Warranty",
    price: 799.00,
    compareAtPrice: undefined,
    brand: "OnePlus",
    inventory: 15,
    isActive: true,
    images: [
      "/onplus-front.png",
      "/oneplus-back.png",
    ],
    categoryId: "cat-1",
    rating: 4.6,
    reviewCount: 98,
    isFeatured: false,
    isNew: true,
    isBestSeller: false,
    createdAt: "2025-01-01T00:00:00Z",
    updatedAt: "2025-01-01T00:00:00Z",
  },
  {
    id: "p-8",
    name: "Sony WH-1000XM5",
    slug: "sony-wh-1000xm5",
    sku: "SNY-WH1000XM5-BK",
    description: "Industry-leading noise cancellation with 30-hour battery and crystal clear hands-free calling.",
    longDescription: `Sony WH-1000XM5 sets the gold standard for wireless noise-cancelling headphones. Featuring Sony's most advanced Integrated Processor V1 working in concert with the HD Noise Cancelling Processor QN1, these headphones analyze and neutralize ambient noise across an incredibly wide frequency range — from the low rumble of airplane engines to the high-pitched chatter of crowded cafés.

Eight microphones (four on each ear cup) work together using Multi Noise Sensor Technology to capture environmental sound with remarkable precision. The Auto NC Optimizer automatically calibrates noise cancellation in real-time based on your environment and how you're wearing the headphones, ensuring optimal performance without any manual adjustment.

The newly designed 30mm driver unit delivers exceptional audio quality with a wide frequency response from 4Hz to 40kHz. Support for LDAC, Sony's proprietary Hi-Res Audio codec, transmits approximately three times more data than conventional Bluetooth, bringing you closer to the original studio recording. DSEE Extreme upscaling intelligently restores compressed audio files to near Hi-Res Audio quality in real-time.

With an incredible 30-hour battery life (with ANC on) and quick charging that provides 3 hours of playback from just 3 minutes of charging, the XM5 is built for marathon listening sessions. The lightweight 250g design with soft-fit leather ear cushions ensures comfort even during extended wear, and the improved folding mechanism makes them easy to carry anywhere.`,
    highlights: [
      "Industry-leading noise cancellation with 8 microphones and dual processor system",
      "30-hour battery life with ANC on — 3 hours playback from just 3 minutes charging",
      "Hi-Res Audio with LDAC codec and DSEE Extreme upscaling technology",
      "30mm driver unit with 4Hz–40kHz frequency response for rich, detailed sound",
      "Multipoint Bluetooth — connect to 2 devices simultaneously and switch seamlessly",
      "Speak-to-Chat auto-pauses music when you start talking, resumes when done",
      "Lightweight 250g design with soft-fit leather cushions for all-day comfort",
      "Adaptive Sound Control learns your frequented locations and adjusts automatically",
    ],
    specifications: {
      "Driver Unit": "30mm, dome type (CCAW Voice Coil)",
      "Frequency Response": "4Hz – 40,000Hz (LDAC), 20Hz – 20,000Hz (SBC)",
      "Noise Cancellation": "Dual processor (Integrated Processor V1 + QN1), 8 microphones",
      "Bluetooth": "5.2 — SBC, AAC, LDAC codecs",
      "Multipoint": "Yes — connect to 2 devices simultaneously",
      "Battery Life": "30 hours (ANC on), 40 hours (ANC off)",
      "Quick Charge": "3 min charge = 3 hrs playback",
      "Charging": "USB-C, approximately 3.5 hours for full charge",
      "Weight": "250 g",
      "Ear Pad Material": "Soft-fit leather with memory foam",
      "Folding": "Yes — flat-fold and swivel design",
      "NFC": "Yes (one-touch pairing)",
      "Voice Assistant": "Google Assistant, Amazon Alexa, Siri",
      "App": "Sony Headphones Connect (iOS & Android)",
    },
    whatsInTheBox: ["WH-1000XM5 Headphones", "Carrying Case", "USB-C Charging Cable (approx. 20 cm)", "3.5mm Audio Cable (approx. 1.2 m)", "Airplane Adapter", "Documentation"],
    warranty: "1 Year Sony Manufacturer Warranty",
    price: 349.99,
    compareAtPrice: 399.99,
    brand: "Sony",
    inventory: 22,
    isActive: true,
    images: [
      "/song-beats.png",
    ],
    categoryId: "cat-4",
    rating: 4.9,
    reviewCount: 678,
    isFeatured: true,
    isNew: false,
    isBestSeller: true,
    createdAt: "2022-05-12T00:00:00Z",
    updatedAt: "2022-05-12T00:00:00Z",
  },
];

export const dummyBanners: PromoBanner[] = [
  {
    id: "banner-1",
    title: "New iPhone 16 Series",
    subtitle: "Titanium design. A18 Pro chip. Cinematic 4K camera.",
    ctaText: "Shop iPhones",
    ctaHref: "/categories/smartphones",
    image: "/iphone-16.png",
    badge: "Just Dropped",
  },
  {
    id: "banner-2",
    title: "Galaxy AI is Here",
    subtitle: "Samsung Galaxy S25 Ultra — the smartest phone ever made.",
    ctaText: "Explore Samsung",
    ctaHref: "/categories/smartphones",
    image: "/hero-galaxy-ai.png",
    badge: "Save $200",
  },
];

// Extra products for catalogue page
export const extraProducts: Product[] = [
  {
    id: "p-9",
    name: "Samsung Galaxy A55",
    slug: "samsung-galaxy-a55",
    sku: "SAM-GA55-128-BK",
    description: "Mid-range powerhouse with 50MP camera, 5000mAh battery, and IP67 rating.",
    longDescription: `Samsung Galaxy A55 proves you don't need to spend flagship prices to get a flagship experience. Featuring a stunning 6.6-inch Super AMOLED display with 120Hz refresh rate and 1000 nits peak brightness, every scroll and swipe feels buttery smooth. The Vision Booster technology enhances visibility in bright sunlight, while Eye Comfort Shield reduces blue light emission for comfortable extended viewing.

Under the hood, the Exynos 1480 octa-core processor paired with 8GB of RAM handles multitasking with ease. Whether you're gaming, streaming, or running multiple apps side by side, the Galaxy A55 keeps everything running smoothly. 128GB of built-in storage with microSD expansion up to 1TB means you'll never run out of space for photos, videos, and apps.

The versatile triple camera system features a 50MP main sensor with OIS for sharp, stable photos in any lighting condition. The 12MP ultra-wide lens captures expansive landscapes, and the 5MP macro lens reveals tiny details invisible to the naked eye. Nightography lets you capture impressive low-light photos without a flash.

With a massive 5000mAh battery and 25W Super Fast Charging, the Galaxy A55 lasts well beyond a full day of use. IP67 water and dust resistance, a Gorilla Glass Victus+ display, and Samsung Knox security make this one of the most durable and secure mid-range phones available.`,
    highlights: [
      "6.6-inch Super AMOLED, 120Hz, 1000 nits — vivid display rivaling flagships",
      "50MP triple camera with OIS, Nightography, and 4K video recording",
      "5000mAh battery with 25W Super Fast Charging — lasts well beyond a full day",
      "IP67 water and dust resistance with Gorilla Glass Victus+ protection",
      "Exynos 1480 processor with 8GB RAM for smooth multitasking",
      "128GB storage expandable up to 1TB via microSD",
      "Samsung Knox security platform for enterprise-grade data protection",
      "4 years OS updates + 5 years security updates",
    ],
    specifications: {
      "Display": "6.6\" Super AMOLED, 2340 × 1080, 120Hz, 1000 nits",
      "Processor": "Exynos 1480, Octa-core (4×2.75GHz + 4×2.0GHz)",
      "RAM / Storage": "8GB / 128GB + microSD up to 1TB",
      "Rear Camera": "50MP Wide (f/1.8, OIS) + 12MP Ultra Wide + 5MP Macro",
      "Front Camera": "13MP (f/2.2)",
      "Battery": "5000mAh, 25W wired charging",
      "Operating System": "Android 14 with One UI 6.1",
      "Water Resistance": "IP67",
      "Dimensions": "158.2 × 77.4 × 8.2 mm",
      "Weight": "202 g",
    },
    whatsInTheBox: ["Galaxy A55", "USB-C Cable", "SIM Ejection Pin", "Quick Start Guide"],
    warranty: "1 Year Samsung Manufacturer Warranty",
    price: 449.99,
    brand: "Samsung",
    inventory: 28,
    isActive: true,
    images: [
      "/samsungA55frontback.png",
      "/samsungA55front.png",
    ],
    categoryId: "cat-1",
    rating: 4.4,
    reviewCount: 203,
    isFeatured: false,
    isNew: true,
    createdAt: "2024-03-10T00:00:00Z",
    updatedAt: "2024-03-10T00:00:00Z",
  },
  {
    id: "p-10",
    name: "iPhone 15",
    slug: "iphone-15",
    sku: "APL-IP15-128-BL",
    description: "Dynamic Island, 48MP main camera, USB-C, and A16 Bionic chip.",
    longDescription: `iPhone 15 brings Dynamic Island to the entire iPhone lineup, fundamentally changing how you interact with your phone. Alerts, live activities, and background tasks bubble up in an intuitive, always-visible interface that adapts and morphs in real-time — showing you timers, navigation directions, music playback, and more without leaving your current app.

The 48MP main camera is a massive upgrade, capturing stunning detail with a quad-pixel sensor that intelligently combines pixels for beautiful 24MP photos in most conditions, or lets you harness the full 48MP resolution for incredible detail. A 2x telephoto option is now available using the center 12MP of the sensor, giving you three optical-quality zoom levels without a dedicated telephoto lens.

The gorgeous 6.1-inch Super Retina XDR display features the Ceramic Shield front cover — tougher than any smartphone glass — and reaches up to 2000 nits of peak HDR brightness for stunning visibility outdoors. The color-infused glass back comes in five beautiful colors and supports MagSafe and Qi2 wireless charging.

Switching to USB-C means iPhone 15 charges with the same cable as your iPad, Mac, and countless other devices. The A16 Bionic chip delivers incredible performance with industry-leading power efficiency, supporting features like Photonic Engine for enhanced low-light photos and advanced computational photography.`,
    highlights: [
      "Dynamic Island — interactive alerts, live activities, and smart notifications",
      "48MP main camera with 2x telephoto quality from the sensor crop",
      "6.1-inch Super Retina XDR OLED — Ceramic Shield, 2000 nits peak HDR",
      "USB-C connector — charge with the same cable as your other devices",
      "A16 Bionic chip with 5-core GPU and 16-core Neural Engine",
      "Color-infused glass design in 5 beautiful finishes",
      "Crash Detection, Emergency SOS via satellite",
      "MagSafe and Qi2 wireless charging compatible",
    ],
    specifications: {
      "Display": "6.1\" Super Retina XDR OLED, 2556 × 1179, 60Hz, 2000 nits HDR",
      "Processor": "A16 Bionic — 6-core CPU, 5-core GPU, 16-core Neural Engine",
      "Storage": "128GB / 256GB / 512GB",
      "Rear Camera": "48MP Main (f/1.6) + 12MP Ultra Wide (f/2.4)",
      "Front Camera": "12MP TrueDepth with autofocus",
      "Battery": "Up to 20hrs video playback, MagSafe & Qi2",
      "Operating System": "iOS 17 (upgradable to iOS 18)",
      "Water Resistance": "IP68 — 6m for 30 minutes",
      "Dimensions": "147.6 × 71.6 × 7.80 mm",
      "Weight": "171 g",
    },
    whatsInTheBox: ["iPhone 15", "USB-C Charge Cable (1 m)", "Documentation"],
    warranty: "1 Year Apple Limited Warranty",
    price: 799.00,
    compareAtPrice: 899.00,
    brand: "Apple",
    inventory: 14,
    isActive: true,
    images: [
      "/iphone15-front.jpg",
      "/iphone-15-back.jpg",
      "/iphone15-side.jpg",
    ],
    categoryId: "cat-1",
    rating: 4.7,
    reviewCount: 441,
    isFeatured: false,
    isNew: false,
    createdAt: "2023-09-22T00:00:00Z",
    updatedAt: "2023-09-22T00:00:00Z",
  },
  {
    id: "p-11",
    name: "USB-C to Lightning Cable 2m",
    slug: "usb-c-lightning-cable-2m",
    sku: "ANK-A8613-WH",
    description: "MFi certified braided cable for fast charging iPhone models.",
    longDescription: `The Anker USB-C to Lightning Cable is the gold standard in iPhone charging cables. MFi (Made for iPhone) certified by Apple, this cable is guaranteed to work flawlessly with every Lightning-equipped iPhone, iPad, and iPod — no compatibility issues, no warning popups, just reliable charging and data transfer every time.

The premium double-braided nylon exterior isn't just about looks — it's engineered for durability. Rated for over 35,000 bend cycles (12x more than standard cables), this cable withstands the daily abuse of being plugged, unplugged, tossed in bags, and wrapped around chargers. Internal aramid fiber reinforcement adds another layer of protection against fraying and breaking.

At 2 meters (6.6 feet) in length, this cable provides the perfect reach for charging from wall outlets behind furniture, using your phone while it charges on a nightstand, or connecting to a laptop across a desk. The slim, low-profile connector heads fit easily into most phone cases without removal.

Supporting USB Power Delivery, this cable delivers up to 20W fast charging when paired with a compatible USB-C power adapter — charging your iPhone from 0 to 50% in approximately 30 minutes. Data sync speeds of up to 480 Mbps make transferring photos and files quick and painless.`,
    highlights: [
      "MFi Certified — guaranteed compatibility with all Lightning Apple devices",
      "Double-braided nylon with aramid fiber core — survives 35,000+ bend cycles",
      "2m / 6.6ft length — extra reach for comfortable charging from any outlet",
      "Supports 20W USB-PD fast charging — 0 to 50% in ~30 minutes",
      "480 Mbps data sync speed for quick photo and file transfers",
      "Slim connector fits most phone cases without removal",
      "Universal USB-C end works with any USB-C charger, laptop, or power bank",
      "Available in Black and White to match your setup",
    ],
    specifications: {
      "Length": "2m / 6.6 ft",
      "Connectors": "USB-C to Lightning",
      "Certification": "Apple MFi Certified",
      "Fast Charging": "Up to 20W USB Power Delivery",
      "Data Transfer": "Up to 480 Mbps (USB 2.0)",
      "Bend Lifespan": "35,000+ cycles tested",
      "Material": "Double-braided nylon jacket, aramid fiber core",
      "Color": "White",
      "Compatibility": "iPhone 5 and later, iPad (Lightning models), iPod touch",
    },
    whatsInTheBox: ["USB-C to Lightning Cable (2m)", "Cable Strap", "Warranty Card"],
    warranty: "18 Months Anker Warranty",
    price: 14.99,
    brand: "Anker",
    inventory: 150,
    isActive: true,
    images: [
      "/iphone-charger.png",
    ],
    categoryId: "cat-6",
    rating: 4.3,
    reviewCount: 2890,
    isFeatured: false,
    isNew: false,
    createdAt: "2023-01-01T00:00:00Z",
    updatedAt: "2023-01-01T00:00:00Z",
  },
  {
    id: "p-12",
    name: "iPad Air M2",
    slug: "ipad-air-m2",
    sku: "APL-IPA-M2-256-SG",
    description: "Ultra-thin design, M2 chip, 11-inch Liquid Retina display, Apple Pencil Pro support.",
    longDescription: `iPad Air M2 delivers incredible performance in an impossibly thin and light design. Weighing just 462 grams and measuring only 6.1mm thin, it slips effortlessly into any bag while packing the power of the Apple M2 chip — the same chip that powers the MacBook Air. This means you can edit 4K video, create complex illustrations, run demanding apps, and multitask with ease.

The stunning 11-inch Liquid Retina display features P3 wide color, True Tone, and an anti-reflective coating for a gorgeous visual experience in any environment. The display supports Apple Pencil Pro with its new squeeze gesture, barrel roll, and haptic feedback — making it the most natural and responsive digital drawing and writing tool ever created.

With Wi-Fi 6E connectivity and optional 5G cellular, iPad Air keeps you connected at blazing speeds wherever you go. The 12MP front-facing camera with Center Stage automatically adjusts to keep you in frame during video calls, while the 12MP rear camera captures detailed photos and 4K video for content creation.

Stage Manager transforms how you work on iPad, letting you resize and overlap windows like on a Mac. Connect an external display for even more screen real estate. With support for Magic Keyboard and Smart Keyboard Folio, iPad Air becomes a productivity powerhouse that adapts to however you like to work.`,
    highlights: [
      "Apple M2 chip — same performance as MacBook Air for desktop-class apps",
      "11-inch Liquid Retina display with P3 wide color, True Tone, and anti-reflective coating",
      "Apple Pencil Pro support with squeeze gesture, barrel roll, and haptic feedback",
      "Ultra-thin 6.1mm design weighing just 462g — incredibly portable",
      "12MP front camera with Center Stage for natural video calls",
      "Wi-Fi 6E and optional 5G for blazing-fast connectivity",
      "Stage Manager for Mac-like window management and external display support",
      "All-day battery life — up to 10 hours of web browsing or video playback",
    ],
    specifications: {
      "Display": "11\" Liquid Retina IPS, 2360 × 1640, 500 nits, P3 wide color",
      "Processor": "Apple M2 — 8-core CPU, 10-core GPU, 16-core Neural Engine",
      "RAM / Storage": "8GB / 128GB or 256GB",
      "Rear Camera": "12MP Wide (f/1.8), 4K video at 60fps",
      "Front Camera": "12MP Ultra Wide with Center Stage",
      "Battery": "Up to 10 hours web / video, 28.6 Wh",
      "Operating System": "iPadOS 17",
      "Connector": "USB-C with USB 3.1 Gen 2 (10 Gbps)",
      "Dimensions": "247.6 × 178.5 × 6.1 mm",
      "Weight": "462 g (Wi-Fi) / 466 g (Cellular)",
      "Connectivity": "Wi-Fi 6E, Bluetooth 5.3, optional 5G",
      "Accessories": "Apple Pencil Pro, Magic Keyboard, Smart Keyboard Folio",
    },
    whatsInTheBox: ["iPad Air", "USB-C Charge Cable (1 m)", "20W USB-C Power Adapter", "Documentation"],
    warranty: "1 Year Apple Limited Warranty",
    price: 599.00,
    brand: "Apple",
    inventory: 9,
    isActive: true,
    images: [
      "/macbook-m5.png",
    ],
    categoryId: "cat-5",
    rating: 4.8,
    reviewCount: 127,
    isFeatured: false,
    isNew: false,
    createdAt: "2024-03-08T00:00:00Z",
    updatedAt: "2024-03-08T00:00:00Z",
  },
  {
    id: "p-13",
    name: "Magsafe Wallet Case – iPhone 16",
    slug: "magsafe-wallet-case-iphone-16",
    sku: "ESR-MWC-IP16-BK",
    description: "Slim wallet case with MagSafe ring, holds 3 cards, military-grade drop protection.",
    longDescription: `The ESR MagSafe Wallet Case for iPhone 16 combines everyday carry convenience with serious protection. The integrated wallet compartment holds up to 3 cards (credit cards, ID, transit pass) plus folded cash, eliminating the need to carry a separate wallet. A strong magnetic closure keeps your cards securely in place, while RFID-blocking material prevents unauthorized card scanning.

The built-in MagSafe ring with N52 magnets ensures perfect alignment with Apple's MagSafe charger and all MagSafe accessories. Charging speeds are not affected — you get the full 15W MagSafe wireless charging right through the case. The ring also works as a secure attachment point for MagSafe car mounts, wallets, and battery packs.

Protection is no afterthought. The dual-layer construction combines a shock-absorbing TPU inner cradle with a rigid polycarbonate back panel, providing military-grade drop protection (MIL-STD-810G) at up to 8 feet. Air Guard corners with extra cushioning absorb impact at the most vulnerable points. Raised bezels of 1.5mm around the screen and 1.2mm around the camera prevent surface contact.

The slim profile adds just 3mm of thickness while providing card storage and drop protection that would normally require a bulky folio case. A convenient kickstand built into the wallet flap lets you prop up your iPhone for video calls and content viewing. Available in Black, Navy Blue, and Forest Green with a premium vegan leather finish.`,
    highlights: [
      "3-card wallet with RFID blocking — replace your wallet entirely",
      "Built-in MagSafe ring (N52 magnets) for 15W wireless charging through the case",
      "MIL-STD-810G military-grade drop protection up to 8 feet",
      "Dual-layer TPU + polycarbonate construction with Air Guard corners",
      "Built-in kickstand for hands-free portrait and landscape viewing",
      "Premium vegan leather finish — looks and feels luxurious",
      "Raised bezels: 1.5mm screen + 1.2mm camera for flat-surface protection",
      "Slim profile adds only 3mm of thickness despite card storage",
    ],
    specifications: {
      "Compatibility": "iPhone 16 (6.1-inch, 2024)",
      "Card Capacity": "Up to 3 cards + folded cash",
      "RFID Blocking": "Yes",
      "MagSafe": "Built-in N52 magnet ring, 15W charging compatible",
      "Drop Protection": "MIL-STD-810G certified — up to 8ft / 2.4m",
      "Material": "TPU + Polycarbonate + Vegan Leather",
      "Kickstand": "Yes — folds out from wallet flap",
      "Screen Bezel": "1.5mm raised lip",
      "Camera Bezel": "1.2mm raised lip",
      "Weight": "58 g",
      "Color Options": "Black, Navy Blue, Forest Green",
    },
    whatsInTheBox: ["ESR MagSafe Wallet Case", "Installation Guide"],
    warranty: "1 Year ESR Warranty",
    price: 34.99,
    compareAtPrice: 44.99,
    brand: "ESR",
    inventory: 45,
    isActive: true,
    images: [
      "/magsafewalletonlyiphone.png",
      "/magsafewallet.png",
      "/magsafewalletonly.png",
    ],
    categoryId: "cat-2",
    rating: 4.6,
    reviewCount: 312,
    isFeatured: false,
    isNew: true,
    createdAt: "2024-10-01T00:00:00Z",
    updatedAt: "2024-10-01T00:00:00Z",
  },
  {
    id: "p-14",
    name: "Xiaomi 14 Ultra",
    slug: "xiaomi-14-ultra",
    sku: "XIA-14U-512-BK",
    description: "Leica quad-camera system, 90W HyperCharge, Snapdragon 8 Gen 3.",
    longDescription: `Xiaomi 14 Ultra is the ultimate camera phone, co-engineered with Leica to deliver a professional-grade photography experience that rivals dedicated cameras. The quad-camera system features a massive 1-inch Sony LYT-900 main sensor — the largest ever in a smartphone — capturing an extraordinary amount of light and detail. Combined with Leica's legendary Summilux optics and advanced computational photography, every shot looks like it was taken by a professional.

The variable aperture on the main lens (f/1.63 to f/4.0) gives you creative control previously only possible with DSLR and mirrorless cameras. Shoot wide open for beautiful bokeh portraits, or stop down for sharp landscape shots with incredible depth of field. The dedicated Photography Kit accessory (sold separately) adds a physical shutter button, lens filter mount, and battery grip for an even more camera-like experience.

The 6.73-inch LTPO AMOLED display features a 2K+ resolution with 3000 nits of peak brightness and Dolby Vision support. The display also uses Xiaomi's proprietary CrystalRes technology for enhanced clarity and C8 AMOLED material for deeper blacks and more vibrant colors. With a 1-120Hz adaptive refresh rate, the display dynamically adjusts to content for optimal battery life.

Powered by the Snapdragon 8 Gen 3 with up to 16GB of LPDDR5X RAM and 512GB of UFS 4.0 storage, performance is absolutely flagship. The 5300mAh silicon-carbon battery supports 90W wired HyperCharge (fully charged in 33 minutes), 50W wireless charging, and 10W reverse wireless charging. The IP68-rated titanium and ceramic body exudes premium craftsmanship from every angle.`,
    highlights: [
      "Leica Summilux quad-camera with 1-inch Sony LYT-900 sensor — largest in any smartphone",
      "Variable aperture f/1.63–f/4.0 on main lens for DSLR-like creative control",
      "6.73-inch 2K+ LTPO AMOLED — 3000 nits peak brightness, Dolby Vision, 120Hz",
      "Snapdragon 8 Gen 3 with 16GB LPDDR5X RAM for uncompromising performance",
      "5300mAh silicon-carbon battery with 90W HyperCharge — full in 33 minutes",
      "50W wireless + 10W reverse wireless charging",
      "IP68 water resistance with titanium frame and nano-tech ceramic back",
      "Optional Photography Kit adds physical shutter button and lens filter mount",
    ],
    specifications: {
      "Display": "6.73\" LTPO AMOLED, 3200 × 1440, 1-120Hz, 3000 nits, Dolby Vision",
      "Processor": "Snapdragon 8 Gen 3 — Octa-core, 4nm",
      "RAM / Storage": "16GB LPDDR5X / 512GB UFS 4.0",
      "Main Camera": "50MP, 1-inch Sony LYT-900, f/1.63-f/4.0 variable, OIS, Leica Summilux",
      "Ultra Wide": "50MP, f/1.8, 122° FoV",
      "Telephoto 1": "50MP, 3.2x optical, f/1.8, OIS",
      "Telephoto 2": "50MP, 5x periscope, f/2.5, OIS",
      "Front Camera": "32MP, f/2.0",
      "Battery": "5300mAh Si-C, 90W wired, 50W wireless, 10W reverse",
      "Operating System": "HyperOS (Android 14)",
      "Water Resistance": "IP68",
      "Dimensions": "161.4 × 75.3 × 9.2 mm",
      "Weight": "224.4 g",
      "Material": "Titanium frame, nano-tech ceramic back",
    },
    whatsInTheBox: ["Xiaomi 14 Ultra", "90W HyperCharge Adapter", "USB-C Cable", "Protective Case", "SIM Ejection Tool", "Quick Start Guide"],
    warranty: "1 Year Xiaomi Manufacturer Warranty",
    price: 899.00,
    brand: "Xiaomi",
    inventory: 7,
    isActive: true,
    images: [
      "/Xiaomi14Ultrafront.png",
      "/Xiaomi14Ultraback.png",
    ],
    categoryId: "cat-1",
    rating: 4.7,
    reviewCount: 76,
    isFeatured: false,
    isNew: true,
    createdAt: "2024-02-25T00:00:00Z",
    updatedAt: "2024-02-25T00:00:00Z",
  },
];

export const allProducts = [...dummyProducts, ...extraProducts];
export const featuredProducts = dummyProducts.filter((p) => p.isFeatured);

// Get products by category slug
export function getProductsByCategory(slug: string): Product[] {
  const cat = dummyCategories.find((c) => c.slug === slug);
  if (!cat) return [];
  return allProducts.filter((p) => p.categoryId === cat.id && p.isActive);
}

// Search products
export function searchProducts(query: string): Product[] {
  const q = query.toLowerCase();
  return allProducts.filter(
    (p) =>
      p.isActive &&
      (p.name.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.brand.toLowerCase().includes(q))
  );
}

// Get single product by slug
export function getProductBySlug(slug: string): Product | undefined {
  return allProducts.find((p) => p.slug === slug && p.isActive);
}
