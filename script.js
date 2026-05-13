document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            
            // Toggle hamburger icon between bars and times
            const icon = hamburger.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }

    // 2. Hero Image Slider
    const slides = document.querySelectorAll('.slide');
    const nextBtn = document.querySelector('.slider-btn.next');
    const prevBtn = document.querySelector('.slider-btn.prev');
    let currentSlide = 0;
    
    function goToSlide(index) {
        slides.forEach((slide) => slide.classList.remove('active'));
        slides[index].classList.add('active');
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        goToSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        goToSlide(currentSlide);
    }

    if (nextBtn && prevBtn && slides.length > 0) {
        nextBtn.addEventListener('click', nextSlide);
        prevBtn.addEventListener('click', prevSlide);
        
        // Auto slide every 5 seconds
        setInterval(nextSlide, 5000);
    }

    // 3. Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // Close mobile menu if open
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    hamburger.querySelector('i').classList.remove('fa-times');
                    hamburger.querySelector('i').classList.add('fa-bars');
                }

                // Update active class on nav links
                document.querySelectorAll('.nav-links a').forEach(link => link.classList.remove('active'));
                this.classList.add('active');

                // Get header height for offset
                const headerHeight = document.querySelector('.header').offsetHeight;
                
                window.scrollTo({
                    top: targetElement.offsetTop - headerHeight,
                    behavior: 'smooth'
                });
            }
        });
    });
    // 4. Product Details Dynamic Loading
    const productsData = {
        'agricultural-equipment': {
            title: 'Agricultural Equipment (HTP Sprayer)',
            shortDesc: 'Our range of products include HTP Sprayer pumps.',
            longDesc: 'This HTP sprayer is widely used for agricultural spraying in farms, orchards, and plantations. It ensures efficient liquid delivery at high pressure.',
            specs: {
                'Minimum Order Quantity': '1 Piece',
                'Pump Type': 'Piston Pump',
                'Pressure': '20-45 Bar',
                'Power Type': 'Electric/Engine Driven',
                'Color': 'Red and Brass',
                'Automation Grade': 'Semi-Automatic',
                'I Deal In': 'New Only'
            },
            delivery: 'Delivery Time: 7 DAYS',
            packaging: 'Packaging Details: WOODEN BOX PACKING 1 PC',
            images: [
                'images/product-1.png',
                'images/product-1-thumb1.png',
                'images/product-1-thumb2.png',
                'images/product-1-thumb3.png'
            ]
        },
        'power-weeder': {
            title: 'Power Weeder',
            shortDesc: 'Our range of products include high-performance power weeders.',
            longDesc: 'The power weeder is designed for efficient de-weeding in agricultural fields. It saves time and labor costs by effortlessly removing weeds from the roots.',
            specs: {
                'Minimum Order Quantity': '1 Piece',
                'Engine Power': '5-7 HP',
                'Cutting Width': '400-600 mm',
                'Power Type': 'Petrol',
                'Color': 'Green and Black',
                'Automation Grade': 'Semi-Automatic',
                'I Deal In': 'New Only'
            },
            delivery: 'Delivery Time: 7 DAYS',
            packaging: 'Packaging Details: WOODEN BOX PACKING 1 PC',
            images: [
                'images/product-2.png',
                'images/product-2-thumb1.png',
                'images/product-2-thumb2.png',
                'images/product-2-thumb3.png'
            ]
        },
        'agricultural-implements': {
            title: 'Agricultural Implements And Machinery',
            shortDesc: 'Comprehensive range of agricultural implements for various farming needs.',
            longDesc: 'We offer robust and durable machinery designed to enhance farming efficiency, from soil preparation to post-harvest processing.',
            specs: {
                'Minimum Order Quantity': '1 Piece',
                'Material': 'Mild Steel / Cast Iron',
                'Application': 'Farming and Agriculture',
                'Power Type': 'Electric/Tractor Driven',
                'Color': 'Blue',
                'Automation Grade': 'Automatic/Semi-Automatic',
                'I Deal In': 'New Only'
            },
            delivery: 'Delivery Time: 7-10 DAYS',
            packaging: 'Packaging Details: AS PER REQUIREMENT',
            images: [
                'images/product-3.png',
                'images/product-3-thumb1.png',
                'images/product-3-thumb2.png',
                'images/product-3-thumb3.png'
            ]
        },
        'brush-cutter': {
            title: 'Brush Cutter',
            shortDesc: 'Our range of products include powerful brush cutters.',
            longDesc: 'Ride-on lawn mowers provide superior comfort and efficiency for maintaining large lawns and sports fields. Features include adjustable cutting heights and easy maneuverability.',
            specs: {
                'Minimum Order Quantity': '1 Piece',
                'Engine Power': '12-18 HP',
                'Cutting Deck': '42 Inches',
                'Power Type': 'Petrol/Diesel',
                'Color': 'Green and Yellow',
                'Automation Grade': 'Automatic',
                'Brand': 'Nilkanth Agrotech'
            },
            delivery: 'Delivery Time: 15 DAYS',
            packaging: 'Packaging Details: SECURE CRATE PACKING',
            images: [
                'images/product-4.png',
                'images/product-4-thumb1.png',
                'images/product-4-thumb2.png',
                'images/product-4-thumb3.png'
            ]
        },
        'rice-mill': {
            title: 'Rice Mill',
            shortDesc: 'Our range of products include mini rice mill machines.',
            longDesc: 'This wood chipper is a machine used for reducing woods into smaller woodchips. The GT-WC-7 wood chipper is portable and mounted on wheels. The wood chipper converts tree trunk, limbs and branches into fine chips.',
            specs: {
                'Minimum Order Quantity': '1 Piece',
                'Shredding Material': 'Waste',
                'Shredding Capacity': '1-500 KG/hr',
                'Power Type': 'Petrol',
                'Color': 'Orange and Black',
                'Main Shaft Speed': '2400 RPM',
                'Automation Grade': 'Automatic',
                'I Deal in': 'New only',
                'Brand': 'NAT - WC- 7'
            },
            delivery: 'Delivery Time: 7 DAYS',
            packaging: 'Packaging Details: WOODEN BOX PACKING 1 PC',
            images: [
                'images/product-5.png',
                'images/product-5-thumb1.png',
                'images/product-5-thumb2.png',
                'images/product-5-thumb3.png'
            ]
        },
        'diesel-generator': {
            title: 'Diesel Generator',
            shortDesc: 'High-efficiency diesel generators.',
            longDesc: 'Our thresher machines are engineered for maximum grain recovery with minimal breakage. Suitable for crops like wheat, maize, soybean, and more.',
            specs: {
                'Minimum Order Quantity': '1 Piece',
                'Capacity': '1-2 Ton/hr',
                'Crop Type': 'Multi-Crop',
                'Power Source': 'Tractor PTO / Electric Motor',
                'Color': 'Orange and Blue',
                'Automation Grade': 'Semi-Automatic',
                'I Deal In': 'New Only'
            },
            delivery: 'Delivery Time: 10 DAYS',
            packaging: 'Packaging Details: STANDARD PACKING',
            images: [
                'images/product-6.png',
                'images/product-6-thumb1.png',
                'images/product-6-thumb2.png',
                'images/product-6-thumb3.png'
            ]
        }
    };

    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');

    if (productId && productsData[productId] && document.getElementById('product-title')) {
        const product = productsData[productId];
        
        // Update banner title if it exists
        const bannerTitle = document.getElementById('banner-title');
        if (bannerTitle) {
            bannerTitle.textContent = product.title;
        }

        document.getElementById('product-title').textContent = product.title;
        document.getElementById('product-short-desc').textContent = product.shortDesc;
        document.getElementById('product-long-desc').textContent = product.longDesc;
        document.getElementById('product-delivery').textContent = product.delivery;
        document.getElementById('product-packaging').textContent = product.packaging;
        
        const tbody = document.getElementById('spec-table-body');
        for (const [key, value] of Object.entries(product.specs)) {
            const tr = document.createElement('tr');
            tr.innerHTML = `<th>${key}</th><td>${value}</td>`;
            tbody.appendChild(tr);
        }

        const mainImage = document.getElementById('main-product-image');
        mainImage.src = product.images[0];

        // If thumbnail image doesn't exist, hide it completely instead of duplicating main image
        const thumbContainer = document.getElementById('thumbnail-container');
        product.images.forEach((imgSrc, index) => {
            const div = document.createElement('div');
            div.className = `thumbnail ${index === 0 ? 'active' : ''}`;
            const img = document.createElement('img');
            img.src = imgSrc;
            img.alt = product.title + ' thumbnail';
            img.onerror = function() {
                // Hide the entire thumbnail container div if the image fails to load
                this.parentElement.style.display = 'none';
            };
            div.appendChild(img);
            
            div.addEventListener('click', () => {
                mainImage.src = img.src;
                document.querySelectorAll('.thumbnail').forEach(t => t.classList.remove('active'));
                div.classList.add('active');
            });
            thumbContainer.appendChild(div);
        });
    }
});
