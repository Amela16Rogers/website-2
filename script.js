// script.js - Complete Version with Local Media Files

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeWebsite();
});
// Preloader functionality
window.addEventListener('load', function() {
    const preloader = document.querySelector('.preloader');
    setTimeout(() => {
        preloader.style.opacity = '0';
        preloader.style.visibility = 'hidden';
    }, 2000);
});

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Gallery filter functionality
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            const filter = this.getAttribute('data-filter');
            
            galleryItems.forEach(item => {
                if (filter === 'all' || item.getAttribute('data-category') === filter) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
});

// Testimonials view more functionality
document.querySelector('.view-more-btn').addEventListener('click', function() {
    const hiddenTestimonials = document.querySelectorAll('.testimonial-card:nth-child(n+4)');
    hiddenTestimonials.forEach(testimonial => {
        testimonial.style.display = testimonial.style.display === 'none' ? 'block' : 'none';
    });
    
    this.textContent = this.textContent.includes('More') ? 
        'View Less Stories' : 'View More Stories';
});

// Contact form submission
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const submitBtn = this.querySelector('.btn-submit');
    const originalText = submitBtn.querySelector('span').textContent;
    const loadingSpinner = submitBtn.querySelector('.btn-loading');
    
    // Show loading state
    submitBtn.querySelector('span').textContent = 'Sending...';
    loadingSpinner.style.display = 'block';
    submitBtn.disabled = true;
    
    // Simulate form submission
    setTimeout(() => {
        // Reset button state
        submitBtn.querySelector('span').textContent = originalText;
        loadingSpinner.style.display = 'none';
        submitBtn.disabled = false;
        
        // Show success message
        alert('Thank you for your message! We will get back to you soon.');
        this.reset();
    }, 2000);
});

// Scroll to contact function
function scrollToContact() {
    document.getElementById('contact').scrollIntoView({
        behavior: 'smooth'
    });
}

// Mobile menu toggle (if you add hamburger menu later)
function toggleMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    const hamburger = document.querySelector('.hamburger');
    
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', function() {
    const animateElements = document.querySelectorAll('.team-card, .destination-card, .package-card, .service-card, .testimonial-card');
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

function initializeWebsite() {
    // Preloader - Improved version
    const preloader = document.querySelector('.preloader');
    if (preloader) {
        let isPageLoaded = false;
        let isTimeoutReached = false;

        function hidePreloader() {
            if (!preloader.parentNode) return;
            
            preloader.style.opacity = '0';
            preloader.style.visibility = 'hidden';
            
            setTimeout(() => {
                if (preloader.parentNode) {
                    preloader.style.display = 'none';
                }
            }, 500);
        }

        window.addEventListener('load', function() {
            isPageLoaded = true;
            if (isTimeoutReached) {
                hidePreloader();
            }
        });

        setTimeout(() => {
            isTimeoutReached = true;
            if (isPageLoaded) {
                hidePreloader();
            } else {
                hidePreloader();
            }
        }, 3000);

        setTimeout(() => {
            if (isPageLoaded && isTimeoutReached) {
                hidePreloader();
            }
        }, 1000);
    }

    // Mobile Navigation Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navBtns = document.querySelector('.nav-btns');

    if (hamburger && navLinks && navBtns) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
            navBtns.classList.toggle('active');
        });
    }

    // Navbar Scroll Effect
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (navbar) {
            if (window.scrollY > 100) {
                navbar.style.background = 'rgba(255, 255, 255, 0.98)';
                navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
                navbar.style.padding = '10px 0';
            } else {
                navbar.style.background = 'rgba(255, 255, 255, 0.95)';
                navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
                navbar.style.padding = '20px 0';
            }
        }
    });

    // Smooth Scrolling for Navigation Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const target = document.querySelector(targetId);
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 100,
                    behavior: 'smooth'
                });
                
                if (hamburger && hamburger.classList.contains('active')) {
                    hamburger.classList.remove('active');
                    if (navLinks) navLinks.classList.remove('active');
                    if (navBtns) navBtns.classList.remove('active');
                }
            }
        });
    });

    // Initialize Gallery
    initializeGallery();

    // Initialize Testimonials
    initializeTestimonials();

    // Initialize Forms
    initializeForms();

    // Initialize Image Loading
    initializeImageLoading();
}
// CORRECTED MEDIA FUNCTIONS WITH SOUND ENABLED
function initializeMedia() {
    // Initialize videos
    const videos = document.querySelectorAll('.gallery-item-video video');
    console.log(`Found ${videos.length} videos to initialize`);
    
    videos.forEach((video, index) => {
        console.log(`Initializing video ${index + 1}:`, video.src);
        
        // Set video properties - ENABLE SOUND
        video.volume = 0.7; // Set volume to 70%
        video.muted = false; // Allow sound by default
        video.preload = 'metadata';
        video.playsInline = true;
        
        // Add event listeners for debugging
        video.addEventListener('loadstart', function() {
            console.log(`Video ${index + 1}: loadstart - loading started`);
        });
        
        video.addEventListener('loadeddata', function() {
            console.log(`Video ${index + 1}: loadeddata - first frame loaded`);
            this.closest('.gallery-item').classList.add('video-ready');
            console.log(`Video ${index + 1} volume: ${this.volume}, muted: ${this.muted}`);
        });
        
        video.addEventListener('canplay', function() {
            console.log(`Video ${index + 1}: canplay - video can start playing`);
        });
        
        video.addEventListener('canplaythrough', function() {
            console.log(`Video ${index + 1}: canplaythrough - video can play through without stopping`);
        });
        
        video.addEventListener('error', function(e) {
            console.error(`Video ${index + 1} error:`, e);
            console.error('Video error details:', this.error);
            console.error('Video source:', this.src);
        });
        
        video.addEventListener('play', function() {
            console.log(`Video ${index + 1}: started playing`);
            this.closest('.gallery-item').classList.add('playing');
            this.closest('.media-container').querySelector('.play-overlay').style.opacity = '0';
            console.log(`Playing - Volume: ${this.volume}, Muted: ${this.muted}`);
        });
        
        video.addEventListener('pause', function() {
            console.log(`Video ${index + 1}: paused`);
            this.closest('.gallery-item').classList.remove('playing');
            this.closest('.media-container').querySelector('.play-overlay').style.opacity = '1';
        });
        
        video.addEventListener('volumechange', function() {
            console.log(`Video ${index + 1} volume changed - Volume: ${this.volume}, Muted: ${this.muted}`);
        });
        
        // Load the video
        video.load();
    });

    // Initialize video controls
    initializeVideoControls();
    
    // Initialize image click handlers
    initializeImageHandlers();
}

// Enhanced video playback with user interaction handling
function toggleVideoPlayback(video) {
    console.log('Toggle video playback called for:', video.src);

    if (!video) {
        console.error('Video element not found');
        return;
    }

    if (video.readyState < 2) {
        console.log('Video not ready, loading...');
        video.load();
        setTimeout(() => toggleVideoPlayback(video), 500);
        return;
    }

    if (video.paused) {
        console.log('Playing video...');
        
        // Unmute when user interacts with video
        if (video.muted) {
            video.muted = false;
            video.volume = 0.7;
            // Update mute button icon if exists
            const muteBtn = video.closest('.media-container').querySelector('.mute-unmute i');
            if (muteBtn) {
                muteBtn.className = 'fas fa-volume-up';
            }
        }
        
        const playPromise = video.play();
        
        if (playPromise !== undefined) {
            playPromise.then(() => {
                console.log('Video started playing');
                // Update play button icon
                const playBtn = video.closest('.media-container').querySelector('.play-pause i');
                if (playBtn) {
                    playBtn.className = 'fas fa-pause';
                }
            }).catch(error => {
                console.error('Video play failed:', error);
                showNotification('Cannot play video. It may be corrupted or in an unsupported format.', 'error');
            });
        }
    } else {
        console.log('Pausing video...');
        video.pause();
        // Update play button icon
        const playBtn = video.closest('.media-container').querySelector('.play-pause i');
        if (playBtn) {
            playBtn.className = 'fas fa-play';
        }
    }
}

// Enhanced mute function
function toggleVideoMute(video, button) {
    if (!video) return;
    
    video.muted = !video.muted;
    const icon = button.querySelector('i');
    if (icon) {
        icon.className = video.muted ? 'fas fa-volume-mute' : 'fas fa-volume-up';
    }
    console.log(`Video muted: ${video.muted}, volume: ${video.volume}`);
}

// Add this function to handle direct video clicks
function initializeVideoClickHandlers() {
    document.querySelectorAll('.gallery-item-video video').forEach(video => {
        video.addEventListener('click', function(e) {
            e.stopPropagation();
            // Unmute when user directly clicks video
            if (this.muted) {
                this.muted = false;
                this.volume = 0.7;
                // Update mute button icon
                const muteBtn = this.closest('.media-container').querySelector('.mute-unmute i');
                if (muteBtn) {
                    muteBtn.className = 'fas fa-volume-up';
                }
            }
            toggleVideoPlayback(this);
        });
    });
}

// Update video HTML creation to remove muted attribute
function createVideoHTML(item, index) {
    return `
        <div class="media-container">
            <video 
                loop 
                playsinline
                preload="metadata"
                poster="${item.poster || ''}"
                data-duration="${item.duration || 600}"
            >
                <source src="${item.src}" type="video/mp4">
                Your browser does not support the video tag.
            </video>
            <div class="play-overlay">
                <i class="fas fa-play"></i>
                <div class="video-duration">10:00</div>
            </div>
            <div class="video-controls">
                <button class="video-btn play-pause">
                    <i class="fas fa-play"></i>
                </button>
                <button class="video-btn mute-unmute">
                    <i class="fas fa-volume-up"></i>
                </button>
                <button class="video-btn fullscreen">
                    <i class="fas fa-expand"></i>
                </button>
                <div class="video-time">
                    <span class="current-time">0:00</span> / 
                    <span class="total-time">10:00</span>
                </div>
            </div>
            <div class="video-progress">
                <div class="progress-bar">
                    <div class="progress"></div>
                </div>
            </div>
        </div>
        <div class="gallery-item-overlay">
            <div class="media-badge">
                <i class="fas fa-video"></i>
                Full Experience (10 min)
            </div>
            <h4>${item.title}</h4>
            <p>${item.description}</p>
        </div>
    `;
}

// Add video progress and time update functionality
function initializeVideoProgress() {
    const videos = document.querySelectorAll('.gallery-item-video video');
    
    videos.forEach(video => {
        video.addEventListener('timeupdate', function() {
            updateVideoProgress(this);
        });
        
        video.addEventListener('loadedmetadata', function() {
            updateVideoTimeDisplay(this);
        });
    });
}

function updateVideoTimeDisplay(video) {
    const container = video.closest('.media-container');
    const currentTimeEl = container.querySelector('.current-time');
    const totalTimeEl = container.querySelector('.total-time');
    
    if (currentTimeEl && totalTimeEl) {
        const currentTime = formatTime(video.currentTime);
        const totalTime = formatTime(video.duration || 600);
        
        currentTimeEl.textContent = currentTime;
        totalTimeEl.textContent = totalTime;
    }
}

function updateVideoProgress(video) {
    const container = video.closest('.media-container');
    const progressBar = container.querySelector('.progress');
    
    if (progressBar && video.duration) {
        const progress = (video.currentTime / video.duration) * 100;
        progressBar.style.width = `${progress}%`;
    }
    
    updateVideoTimeDisplay(video);
}

function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
}

// Enhanced video controls initialization
function initializeVideoControls() {
    // Play/Pause buttons
    document.querySelectorAll('.video-btn.play-pause').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            const video = this.closest('.media-container').querySelector('video');
            toggleVideoPlayback(video);
        });
    });

    // Mute/Unmute buttons
    document.querySelectorAll('.video-btn.mute-unmute').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            const video = this.closest('.media-container').querySelector('video');
            toggleVideoMute(video, this);
        });
    });

    // Fullscreen buttons
    document.querySelectorAll('.video-btn.fullscreen').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            const mediaContainer = this.closest('.media-container');
            toggleFullscreen(mediaContainer);
        });
    });

    // Play overlay click
    document.querySelectorAll('.play-overlay').forEach(overlay => {
        overlay.addEventListener('click', function(e) {
            e.stopPropagation();
            const video = this.parentElement.querySelector('video');
            if (video) {
                // Unmute when user clicks play overlay
                if (video.muted) {
                    video.muted = false;
                    video.volume = 0.7;
                    const muteBtn = video.closest('.media-container').querySelector('.mute-unmute i');
                    if (muteBtn) {
                        muteBtn.className = 'fas fa-volume-up';
                    }
                }
                toggleVideoPlayback(video);
            }
        });
    });

    // Initialize video click handlers
    initializeVideoClickHandlers();
    
    // Initialize video progress tracking
    initializeVideoProgress();
}

// Enhanced fullscreen function with better video sizing
function toggleFullscreen(mediaContainer) {
    if (!document.fullscreenElement) {
        // Store original video styles before entering fullscreen
        const video = mediaContainer.querySelector('video');
        if (video) {
            video.dataset.originalStyle = video.style.cssText;
            video.style.objectFit = 'contain';
            video.style.backgroundColor = '#000';
        }

        if (mediaContainer.requestFullscreen) {
            mediaContainer.requestFullscreen();
        } else if (mediaContainer.webkitRequestFullscreen) {
            mediaContainer.webkitRequestFullscreen();
        } else if (mediaContainer.msRequestFullscreen) {
            mediaContainer.msRequestFullscreen();
        }
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
    }
}

// Handle fullscreen change events to restore original styles
document.addEventListener('fullscreenchange', handleFullscreenChange);
document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
document.addEventListener('msfullscreenchange', handleFullscreenChange);

function handleFullscreenChange() {
    if (!document.fullscreenElement) {
        // Restore original video styles when exiting fullscreen
        const videos = document.querySelectorAll('.media-container video');
        videos.forEach(video => {
            if (video.dataset.originalStyle) {
                video.style.cssText = video.dataset.originalStyle;
                delete video.dataset.originalStyle;
            }
        });
    }
}

// Add CSS for better fullscreen video presentation
function addFullscreenStyles() {
    if (!document.querySelector('#fullscreen-styles')) {
        const styleSheet = document.createElement('style');
        styleSheet.id = 'fullscreen-styles';
        styleSheet.textContent = `
            /* Fullscreen video styling */
            .media-container:fullscreen {
                width: 100vw;
                height: 100vh;
                background: #000;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            
            .media-container:-webkit-full-screen {
                width: 100vw;
                height: 100vh;
                background: #000;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            
            .media-container:-ms-fullscreen {
                width: 100vw;
                height: 100vh;
                background: #000;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            
            .media-container:fullscreen video {
                max-width: 100%;
                max-height: 100%;
                object-fit: contain;
                width: auto;
                height: auto;
            }
            
            .media-container:-webkit-full-screen video {
                max-width: 100%;
                max-height: 100%;
                object-fit: contain;
                width: auto;
                height: auto;
            }
            
            .media-container:-ms-fullscreen video {
                max-width: 100%;
                max-height: 100%;
                object-fit: contain;
                width: auto;
                height: auto;
            }
            
            /* Enhanced video controls for fullscreen */
            .media-container:fullscreen .video-controls {
                position: fixed;
                bottom: 20px;
                left: 50%;
                transform: translateX(-50%);
                background: rgba(0,0,0,0.8);
                padding: 10px 20px;
                border-radius: 25px;
                opacity: 1;
                z-index: 10000;
            }
            
            .media-container:-webkit-full-screen .video-controls {
                position: fixed;
                bottom: 20px;
                left: 50%;
                transform: translateX(-50%);
                background: rgba(0,0,0,0.8);
                padding: 10px 20px;
                border-radius: 25px;
                opacity: 1;
                z-index: 10000;
            }
            
            .media-container:-ms-fullscreen .video-controls {
                position: fixed;
                bottom: 20px;
                left: 50%;
                transform: translateX(-50%);
                background: rgba(0,0,0,0.8);
                padding: 10px 20px;
                border-radius: 25px;
                opacity: 1;
                z-index: 10000;
            }
            
            /* Hide play overlay in fullscreen */
            .media-container:fullscreen .play-overlay {
                display: none;
            }
            
            .media-container:-webkit-full-screen .play-overlay {
                display: none;
            }
            
            .media-container:-ms-fullscreen .play-overlay {
                display: none;
            }
        `;
        document.head.appendChild(styleSheet);
    }
}

// Enhanced video controls initialization with fullscreen support
function initializeVideoControls() {
    // Play/Pause buttons
    document.querySelectorAll('.video-btn.play-pause').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            const video = this.closest('.media-container').querySelector('video');
            toggleVideoPlayback(video);
        });
    });

    // Mute/Unmute buttons
    document.querySelectorAll('.video-btn.mute-unmute').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            const video = this.closest('.media-container').querySelector('video');
            toggleVideoMute(video, this);
        });
    });

    // Fullscreen buttons
    document.querySelectorAll('.video-btn.fullscreen').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            const mediaContainer = this.closest('.media-container');
            toggleFullscreen(mediaContainer);
        });
    });

    // Play overlay click
    document.querySelectorAll('.play-overlay').forEach(overlay => {
        overlay.addEventListener('click', function(e) {
            e.stopPropagation();
            const video = this.parentElement.querySelector('video');
            if (video) {
                // Unmute when user clicks play overlay
                if (video.muted) {
                    video.muted = false;
                    video.volume = 0.7;
                    const muteBtn = video.closest('.media-container').querySelector('.mute-unmute i');
                    if (muteBtn) {
                        muteBtn.className = 'fas fa-volume-up';
                    }
                }
                toggleVideoPlayback(video);
            }
        });
    });

    // Initialize video click handlers
    initializeVideoClickHandlers();
    
    // Initialize video progress tracking
    initializeVideoProgress();
    
    // Add fullscreen styles
    addFullscreenStyles();
}

// Alternative: Use a modal for better fullscreen experience
function toggleFullscreenModal(mediaContainer) {
    const video = mediaContainer.querySelector('video');
    if (!video) return;
    
    // Create fullscreen modal
    const modal = document.createElement('div');
    modal.className = 'video-fullscreen-modal';
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background: #000;
        z-index: 10000;
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0;
        transition: opacity 0.3s ease;
    `;
    
    modal.innerHTML = `
        <div class="video-container" style="
            position: relative;
            max-width: 90vw;
            max-height: 90vh;
            width: auto;
            height: auto;
        ">
            <video 
                src="${video.src}" 
                controls
                autoplay
                style="
                    max-width: 100%;
                    max-height: 100%;
                    width: auto;
                    height: auto;
                    object-fit: contain;
                "
            ></video>
            <button class="close-fullscreen" style="
                position: absolute;
                top: -40px;
                right: 0;
                background: rgba(0,0,0,0.7);
                border: none;
                color: white;
                padding: 10px 15px;
                border-radius: 5px;
                cursor: pointer;
                font-size: 1rem;
            ">
                <i class="fas fa-times"></i> Close
            </button>
        </div>
    `;
    
    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';
    
    // Animate in
    setTimeout(() => {
        modal.style.opacity = '1';
    }, 10);
    
    // Close button
    const closeBtn = modal.querySelector('.close-fullscreen');
    closeBtn.addEventListener('click', () => {
        modal.style.opacity = '0';
        setTimeout(() => {
            if (modal.parentNode) {
                modal.remove();
            }
            document.body.style.overflow = 'auto';
        }, 300);
    });
    
    // Close on ESC key
    const escHandler = (e) => {
        if (e.key === 'Escape') {
            closeBtn.click();
            document.removeEventListener('keydown', escHandler);
        }
    };
    document.addEventListener('keydown', escHandler);
    
    // Close on background click
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeBtn.click();
        }
    });
}

// Updated fullscreen function to use modal approach
function toggleFullscreen(mediaContainer) {
    // Use modal approach for better control
    toggleFullscreenModal(mediaContainer);
}

// Add modal styles
function addFullscreenStyles() {
    if (!document.querySelector('#fullscreen-styles')) {
        const styleSheet = document.createElement('style');
        styleSheet.id = 'fullscreen-styles';
        styleSheet.textContent = `
            /* Modal fullscreen styles */
            .video-fullscreen-modal {
                position: fixed;
                top: 0;
                left: 0;
                width: 100vw;
                height: 100vh;
                background: #000;
                z-index: 10000;
                display: flex;
                align-items: center;
                justify-content: center;
                opacity: 0;
                transition: opacity 0.3s ease;
            }
            
            .video-fullscreen-modal .video-container {
                position: relative;
                max-width: 90vw;
                max-height: 90vh;
                width: auto;
                height: auto;
            }
            
            .video-fullscreen-modal video {
                max-width: 100%;
                max-height: 100%;
                width: auto;
                height: auto;
                object-fit: contain;
                border-radius: 10px;
            }
            
            .video-fullscreen-modal .close-fullscreen {
                position: absolute;
                top: -50px;
                right: 0;
                background: rgba(0,0,0,0.8);
                border: none;
                color: white;
                padding: 12px 20px;
                border-radius: 25px;
                cursor: pointer;
                font-size: 1rem;
                transition: all 0.3s ease;
                display: flex;
                align-items: center;
                gap: 8px;
            }
            
            .video-fullscreen-modal .close-fullscreen:hover {
                background: rgba(255,255,255,0.2);
                transform: scale(1.05);
            }
            
            /* Native fullscreen fallback styles */
            .media-container:fullscreen {
                background: #000;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            
            .media-container:fullscreen video {
                max-width: 90vw;
                max-height: 90vh;
                object-fit: contain;
            }
        `;
        document.head.appendChild(styleSheet);
    }
}

// Update your initializeWebsite function to include fullscreen styles
function initializeWebsite() {
    // ... your existing code ...
    
    // Initialize Gallery
    initializeGallery();

    // Initialize Testimonials
    initializeTestimonials();

    // Initialize Forms
    initializeForms();

    // Initialize Image Loading
    initializeImageLoading();
    
    // Initialize video click handlers globally
    initializeVideoClickHandlers();
    
    // Add fullscreen styles
    addFullscreenStyles();
}

// Rest of your functions (Testimonials, Forms, etc.)...
function initializeTestimonials() {
// Your existing testimonials code
}

function initializeForms() {
// Your existing forms code
}

function initializeImageLoading() {
const images = document.querySelectorAll('img');
images.forEach(img => {
    img.addEventListener('load', function() {
        this.style.opacity = '1';
    });
    if (!img.complete) {
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.5s ease';
    }
});
}

// Notification System
function showNotification(message, type = 'info') {
// Your existing notification code
}

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navBtns = document.querySelector('.nav-btns');

if (hamburger && hamburger.classList.contains('active') && 
    !e.target.closest('.nav-content')) {
    hamburger.classList.remove('active');
    if (navLinks) navLinks.classList.remove('active');
    if (navBtns) navBtns.classList.remove('active');
}
});

// Call this function to test your video files
// testVideoFiles();

function initializeGallery() {
    const galleryGrid = document.querySelector('.gallery-grid');
    if (!galleryGrid) return;

    // Enhanced gallery data with local images and videos
    const galleryData = [
        // Luxury Category - 10 images
        { 
            type: 'image', 
            src: 'images/i1.jpg',
            category: 'Falls',
            title: 'Busowoko Falls',
            description: 'Refreshing swimming experience'
        },
        { 
            type: 'image', 
            src: 'images/i3.jpg',
            category: 'luxury',
            title: 'Masaka Cultural Resort',
            description: 'Nestled in the heart of Masaka with a panoramic view'
        },
        { 
            type: 'image', 
            src: 'images/i4.jpg',
            category: 'luxury',
            title: 'Private Kalangala Island Retreat',
            description: 'Exclusive island escape with personal staff'
        },
        { 
            type: 'image', 
            src: 'images/i5.jpg',
            category: 'luxury',
            title: 'Mountain Luxury view',
            description: 'Alpine retreat with refreshment winds'
        },
        { 
            type: 'image', 
            src: 'images/i6.jpg',
            category: 'luxury',
            title: 'Water massaging at Busowoko Falls ',
            description: ' Busowoko Falls provides a natural and invigorating form of water massaging'
        },
        { 
            type: 'image', 
            src: 'images/i7.jpg',
            category: 'luxury',
            title: 'Water massaging at Busowoko Falls',
            description: 'Busowoko Falls provides a natural and invigorating form of water massaging with Family'
        },
        { 
            type: 'image', 
            src: 'images/i8.jpg',
            category: 'luxury',
            title: 'Surprise Birthday',
            description: 'successful surprise birthday lies in meticulous secrecy'
        },
        { 
            type: 'image', 
            src: 'images/i9.jpg',
            category: 'luxury',
            title: 'Refreshment with Leg water messaging',
            description: 'Wellness retreat with holistic treatments underwater'
        },
        { 
            type: 'image', 
            src: 'images/i11.jpg',
            category: 'luxury',
            title: 'Private Yacht Charter',
            description: 'Luxury yacht with professional crew'
        },
        { 
            type: 'image', 
            src: 'images/i10.jpg',
            category: 'luxury',
            title: 'UP Country Roadside Stop over',
            description: 'quintessential upcountry roadside stopover offers a vital respite with its lively chaos of hawkers selling fresh-roasted Chicken and many foods'
        },

        // Adventure Category - 10 images
        { 
            type: 'image', 
            src: 'images/i12.jpg',
            category: 'adventure',
            title: 'Mountain Trekking',
            description: 'Guided hikes through majestic peaks'
        },
        { 
            type: 'image', 
            src: 'images/i13.jpg',
            category: 'adventure',
            title: 'Rock Climbing',
            description: 'Expert-led climbing expeditions'
        },
        { 
            type: 'image', 
            src: 'images/i14.jpg',
            category: 'adventure',
            title: 'Wildlife Safari',
            description: 'Close encounters with exotic animals'
        },
        { 
            type: 'image', 
            src: 'images/i15.jpg',
            category: 'adventure',
            title: 'Jungle Exploration',
            description: 'Rainforest adventures and canopy walks'
        },
        { 
            type: 'image', 
            src: 'images/i16.jpg',
            category: 'adventure',
            title: 'Desert Area Expedition',
            description: 'People treks and desert Walking in Northern Uganda'
        },
        { 
            type: 'image', 
            src: 'images/i18.jpg',
            category: 'adventure',
            title: 'White Water Rafting',
            description: 'Thrilling river rapids adventure'
        },
        { 
            type: 'image', 
            src: 'images/i17.jpg',
            category: 'adventure',
            title: 'Mountain Climbing',
            description: 'Explore vibrant mountain features'
        },
        { 
            type: 'image', 
            src: 'images/i20.jpg',
            category: 'adventure',
            title: 'Advert of the Jinja Epic Tour',
            description: 'Passing through and allover scenic landscapes of Jinja'
        },
        { 
            type: 'image', 
            src: 'images/i21.jpg',
            category: 'adventure',
            title: 'Ice viewing on mountain Rwenzori',
            description: 'Frozen waterfall expeditions'
        },
        { 
            type: 'image', 
            src: 'images/i22.jpg',
            category: 'adventure',
            title: 'murchison falls tour',
            description: 'wildness views of stunning landscapes'
        },

        // Cultural Category - 10 images
        { 
            type: 'image', 
            src: 'images/i23.jpg',
            category: 'cultural',
            title: 'Bahai temple in kampala tour',
            description: 'Explore historic religious sites'
        },
        { 
            type: 'image', 
            src: 'images/i32.jpg',
            category: 'cultural',
            title: 'Traditional Markets',
            description: 'Local crafts and authentic cuisine'
        },
        { 
            type: 'image', 
            src: 'images/i24.jpg',
            category: 'cultural',
            title: 'Friendship celebrations',
            description: 'Colorful Friendship celebrations'
        },
        { 
            type: 'image', 
            src: 'images/i25.jpg',
            category: 'cultural',
            title: 'Friends of JEC Tours and Travel',
            description: 'Having a nice meeting with friends'
        },
        { 
            type: 'image', 
            src: 'images/i26.jpg',
            category: 'cultural',
            title: 'CEO JEC at Workshops',
            description: 'At Masaka Mayors Garden'
        },
        { 
            type: 'image', 
            src: 'images/i27.jpg',
            category: 'cultural',
            title: 'Masaka Cultural resort Camp fire',
            description: 'A simple outdoor space into a realm of primal comfort'
        },
        { 
            type: 'image', 
            src: 'images/i28.jpg',
            category: 'cultural',
            title: 'Execrises Performances of our Friends',
            description: 'Local music and Execrises'
        },
        { 
            type: 'image', 
            src: 'images/i31.jpg',
            category: 'cultural',
            title: 'Morning View at Banana Resort',
            description: 'Cool Morning View at Banana Resort in Jinja'
        },
        { 
            type: 'image', 
            src: 'images/i30.jpg',
            category: 'cultural',
            title: 'Archaeological Sites of Uganda',
            description: 'Ancient ruins and excavations'
        },
        { 
            type: 'image', 
            src: 'images/i29.jpg',
            category: 'cultural',
            title: 'Local Villages',
            description: 'Authentic community experiences'
        },

        // Videos - 10 entries
        { 
            type: 'video', 
            src: 'videos/high-quality/v1-hd.mp4',
            poster: 'images/i1.jpg',
            category: 'adventure',
            title: 'Busowoko Falls',
            description: 'Aerial views of Busowoko Falls in Jinja',
            duration: 600 // 10 minutes in seconds
        },
        { 
            type: 'video', 
            src: 'videos/v2.mp4',
            poster: 'images/m1.jpg',
            category: 'adventure',
            title: 'Waterfall View',
            description: 'Scenic drives through mountain passes',
            duration: 600 // 10 minutes in seconds
        },
        { 
            type: 'video', 
            src: 'videos/v8.mp4',
            poster: 'images/i3.jpg',
            category: 'luxury',
            title: 'Masaka Views',
            description: 'Relaxing  at Masaka Cultural resort waterfront',
            duration: 600 // 10 minutes in seconds
        },
        { 
            type: 'video', 
            src: 'videos/v4.mp4',
            poster: 'images/i4.jpg',
            category: 'adventure',
            title: 'Forest Exploration',
            description: 'Peaceful walks through ancient forests',
            duration: 600 // 10 minutes in seconds
        },
        { 
            type: 'video', 
            src: 'videos/v5.mp4',
            poster: 'images/i5.jpg',
            category: 'cultural',
            title: 'City Exploration',
            description: 'Walking tours of vibrant cities',
            duration: 600 // 10 minutes in seconds
        },
        { 
            type: 'video', 
            src: 'videos/v6.mp4',
            poster: 'images/i6.jpg',
            category: 'adventure',
            title: 'Mountain Peaks',
            description: 'Breathtaking mountain landscapes',
            duration: 600 // 10 minutes in seconds
        },
        { 
            type: 'video', 
            src: 'videos/v7.mp4',
            poster: 'images/i7.jpg',
            category: 'cultural',
            title: 'Ancient Ruins',
            description: 'Exploring historical sites',
            duration: 600 // 10 minutes in seconds
        },
        { 
            type: 'video', 
            src: 'videos/v11.mp4',
            poster: 'images/m2.jpg',
            category: 'luxury',
            title: 'Sailing Adventure',
            description: 'Luxury yacht experiences',
            duration: 600 // 10 minutes in seconds
        },
        { 
            type: 'video', 
            src: 'videos/v9.mp4',
            poster: 'images/m3.JPEG',
            category: 'cultural',
            title: 'Medieval Towns',
            description: 'Historic European villages',
            duration: 600 // 10 minutes in seconds
        },
        { 
            type: 'video', 
            src: 'videos/v10.mp4',
            poster: 'images/m4.JPEG',
            category: 'adventure',
            title: 'Waterfall Discovery',
            description: 'Natural wonders and waterfalls',
            duration: 600 // 10 minutes in seconds
        
        },
        { 
            type: 'video', 
            src: 'videos/v12.mp4',
            poster: 'images/m5.jpg',
            category: 'cultural',
            title: 'Medieval Towns',
            description: 'Historic European villages',
            duration: 600 // 10 minutes in seconds
        },
        { 
            type: 'video', 
            src: 'videos/v13.mp4',
            poster: 'images/m7.jpg',
            category: 'adventure',
            title: 'Waterfall Discovery',
            description: 'Natural wonders and waterfalls',
            duration: 600 // 10 minutes in seconds
        }
    ];

   
    const filterBtns = document.querySelectorAll('.filter-btn');

    function renderGalleryItems(items) {
        galleryGrid.innerHTML = '';
        
        items.forEach((item, index) => {
            const galleryItem = document.createElement('div');
            galleryItem.className = `gallery-item gallery-item-${item.type}`;
            galleryItem.setAttribute('data-category', item.category);
            galleryItem.style.animationDelay = `${index * 0.1}s`;
            
            if (item.type === 'video') {
                galleryItem.innerHTML = `
                    <div class="media-container">
                        <video 
                            muted 
                            loop 
                            playsinline
                            preload="metadata"
                            poster="${item.poster || ''}"
                            data-duration="${item.duration || 600}"
                        >
                            <source src="${item.src}" type="video/mp4">
                            Your browser does not support the video tag.
                        </video>
                        <div class="play-overlay">
                            <i class="fas fa-play"></i>
                            <div class="video-duration">10:00</div>
                        </div>
                        <div class="video-controls">
                            <button class="video-btn play-pause">
                                <i class="fas fa-play"></i>
                            </button>
                            <button class="video-btn mute-unmute">
                                <i class="fas fa-volume-up"></i>
                            </button>
                            <button class="video-btn fullscreen">
                                <i class="fas fa-expand"></i>
                            </button>
                            <div class="video-time">
                                <span class="current-time">0:00</span> / 
                                <span class="total-time">10:00</span>
                            </div>
                        </div>
                        <div class="video-progress">
                            <div class="progress-bar">
                                <div class="progress"></div>
                            </div>
                        </div>
                    </div>
                    <div class="gallery-item-overlay">
                        <div class="media-badge">
                            <i class="fas fa-video"></i>
                            Full Experience (10 min)
                        </div>
                        <h4>${item.title}</h4>
                        <p>${item.description}</p>
                    </div>
                `;
            } else {
                galleryItem.innerHTML = `
                    <div class="media-container">
                        <img src="${item.src}" alt="${item.title}" loading="lazy">
                    </div>
                    <div class="gallery-item-overlay">
                        <div class="media-badge">
                            <i class="fas fa-image"></i>
                            Photo
                        </div>
                        <h4>${item.title}</h4>
                        <p>${item.description}</p>
                        <button class="expand-btn">
                            <i class="fas fa-expand"></i>
                        </button>
                    </div>
                `;
            }
            
            galleryGrid.appendChild(galleryItem);
        });

        // Initialize videos and images after rendering
        initializeMedia();
        addGalleryStyles();
    }

    function filterGalleryItems(filter) {
        if (filter === 'all') {
            renderGalleryItems(galleryData);
        } else {
            const filteredItems = galleryData.filter(item => item.category === filter);
            renderGalleryItems(filteredItems);
        }
    }

    // Update the video HTML creation to include quality indicators
function createVideoHTML(item, index) {
    return `
        <div class="media-container">
            <video 
                muted 
                loop 
                playsinline
                preload="auto"
                poster="${item.poster || ''}"
                class="hd-video"
            >
                <source src="${item.src}" type="video/mp4">
                Your browser does not support HD video.
            </video>
            <div class="play-overlay">
                <i class="fas fa-play"></i>
                <div class="quality-badge">
                    <i class="fas fa-hd"></i> HD
                </div>
            </div>
            <div class="video-controls">
                <button class="video-btn play-pause">
                    <i class="fas fa-play"></i>
                </button>
                <button class="video-btn mute-unmute">
                    <i class="fas fa-volume-up"></i>
                </button>
                <button class="video-btn quality-toggle" title="Toggle Quality">
                    <i class="fas fa-hd"></i>
                </button>
                <button class="video-btn fullscreen">
                    <i class="fas fa-expand"></i>
                </button>
            </div>
            <div class="video-loading-indicator">
                <i class="fas fa-spinner fa-spin"></i>
                Loading HD...
            </div>
        </div>
        <div class="gallery-item-overlay">
            <div class="media-badge">
                <i class="fas fa-video"></i>
                High Definition
            </div>
            <h4>${item.title}</h4>
            <p>${item.description}</p>
        </div>
    `;
}

    // Enhanced video initialization for 10-minute videos
function initializeExtendedVideos() {
    const videos = document.querySelectorAll('.gallery-item-video video');
    
    videos.forEach((video, index) => {
        // Set extended video properties
        video.volume = 0.5;
        video.muted = false;
        video.preload = 'metadata';
        video.playsInline = true;
        
        // Force 10-minute duration (you'll need actual 10-minute video files)
        video.addEventListener('loadedmetadata', function() {
            console.log(`Video ${index + 1} duration:`, this.duration);
            updateVideoTimeDisplay(this);
        });
        
        // Progress tracking
        video.addEventListener('timeupdate', function() {
            updateVideoProgress(this);
        });
        
        video.addEventListener('ended', function() {
            this.currentTime = 0;
            const playBtn = this.closest('.media-container').querySelector('.play-pause i');
            if (playBtn) {
                playBtn.className = 'fas fa-play';
            }
        });
        
        // Load the video
        video.load();
    });
}

// Update video time display
function updateVideoTimeDisplay(video) {
    const container = video.closest('.media-container');
    const currentTimeEl = container.querySelector('.current-time');
    const totalTimeEl = container.querySelector('.total-time');
    
    if (currentTimeEl && totalTimeEl) {
        const currentTime = formatTime(video.currentTime);
        const totalTime = formatTime(video.duration || 600); // Default to 10 minutes
        
        currentTimeEl.textContent = currentTime;
        totalTimeEl.textContent = totalTime;
    }
}

// Update video progress bar
function updateVideoProgress(video) {
    const container = video.closest('.media-container');
    const progressBar = container.querySelector('.progress');
    
    if (progressBar && video.duration) {
        const progress = (video.currentTime / video.duration) * 100;
        progressBar.style.width = `${progress}%`;
    }
    
    updateVideoTimeDisplay(video);
}

// Format time in MM:SS
function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
}

// Enhanced play/pause with progress updates
function toggleVideoPlayback(video) {
    if (!video) return;
    
    if (video.readyState < 2) {
        video.load();
        setTimeout(() => toggleVideoPlayback(video), 500);
        return;
    }
    
    if (video.paused) {
        const playPromise = video.play();
        
        if (playPromise !== undefined) {
            playPromise.then(() => {
                const playBtn = video.closest('.media-container').querySelector('.play-pause i');
                if (playBtn) {
                    playBtn.className = 'fas fa-pause';
                }
            }).catch(error => {
                console.error('Video play failed:', error);
            });
        }
    } else {
        video.pause();
        const playBtn = video.closest('.media-container').querySelector('.play-pause i');
        if (playBtn) {
            playBtn.className = 'fas fa-play';
        }
    }
    
    updateVideoTimeDisplay(video);
}

    function initializeMedia() {
        // Initialize videos
        const videos = document.querySelectorAll('.gallery-item-video video');
        console.log(`Found ${videos.length} videos to initialize`);
        
        videos.forEach((video, index) => {
            console.log(`Initializing video ${index + 1}:`, video.src);
            
            // Set video properties
            video.volume = 0;
            video.muted = true; // Start muted for autoplay policies
            video.preload = 'metadata';
            video.playsInline = true;
            
            // Add event listeners
            video.addEventListener('loadeddata', function() {
                console.log(`Video ${index + 1} loaded successfully`);
                this.closest('.gallery-item').classList.add('video-ready');
            });
            
            video.addEventListener('error', function(e) {
                console.error(`Video ${index + 1} error:`, e);
                console.error('Video source:', this.src);
                // Removed the showNotification call that was causing errors
            });
            
            video.addEventListener('play', function() {
                this.closest('.gallery-item').classList.add('playing');
                const playOverlay = this.closest('.media-container').querySelector('.play-overlay');
                if (playOverlay) playOverlay.style.opacity = '0';
            });
            
            video.addEventListener('pause', function() {
                this.closest('.gallery-item').classList.remove('playing');
                const playOverlay = this.closest('.media-container').querySelector('.play-overlay');
                if (playOverlay) playOverlay.style.opacity = '1';
            });
            
            // Load the video
            video.load();
        });

        // Initialize video controls
        initializeVideoControls();
        
        // Initialize image click handlers
        initializeImageHandlers();
    }

    function initializeVideoControls() {
        // Play/Pause buttons
        document.querySelectorAll('.video-btn.play-pause').forEach(btn => {
            btn.addEventListener('click', function(e) {
                e.stopPropagation();
                const video = this.closest('.media-container').querySelector('video');
                toggleVideoPlayback(video);
            });
        });

        // Mute/Unmute buttons
        document.querySelectorAll('.video-btn.mute-unmute').forEach(btn => {
            btn.addEventListener('click', function(e) {
                e.stopPropagation();
                const video = this.closest('.media-container').querySelector('video');
                toggleVideoMute(video, this);
            });
        });

        // Fullscreen buttons
        document.querySelectorAll('.video-btn.fullscreen').forEach(btn => {
            btn.addEventListener('click', function(e) {
                e.stopPropagation();
                const mediaContainer = this.closest('.media-container');
                toggleFullscreen(mediaContainer);
            });
        });

        // Play overlay click
        document.querySelectorAll('.play-overlay').forEach(overlay => {
            overlay.addEventListener('click', function(e) {
                e.stopPropagation();
                const video = this.parentElement.querySelector('video');
                if (video) {
                    toggleVideoPlayback(video);
                }
            });
        });

        // Video click to play/pause
        document.querySelectorAll('.gallery-item-video video').forEach(video => {
            video.addEventListener('click', function(e) {
                e.stopPropagation();
                toggleVideoPlayback(this);
            });
        });
    }

    function initializeImageHandlers() {
        // Image click to expand
        document.querySelectorAll('.gallery-item-image img').forEach(img => {
            img.addEventListener('click', function(e) {
                e.stopPropagation();
                expandImage(this);
            });
        });

        // Expand button click
        document.querySelectorAll('.expand-btn').forEach(btn => {
            btn.addEventListener('click', function(e) {
                e.stopPropagation();
                const img = this.closest('.gallery-item').querySelector('img');
                expandImage(img);
            });
        });
    }

    // Initialize gallery
    renderGalleryItems(galleryData);
    
    // Filter functionality
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            const filter = this.getAttribute('data-filter');
            filterGalleryItems(filter);
        });
    });
}

// Video control functions
function toggleVideoPlayback(video) {
    console.log('Toggling video playback:', video.src);
    
    if (!video) {
        console.error('Video element not found');
        return;
    }
    
    if (video.readyState < 2) {
        console.log('Video not ready, loading...');
        video.load();
        setTimeout(() => toggleVideoPlayback(video), 500);
        return;
    }
    
    if (video.paused) {
        console.log('Playing video...');
        const playPromise = video.play();
        
        if (playPromise !== undefined) {
            playPromise.then(() => {
                console.log('Video started playing');
                // Update play button icon
                const playBtn = video.closest('.media-container').querySelector('.play-pause i');
                if (playBtn) {
                    playBtn.className = 'fas fa-pause';
                }
            }).catch(error => {
                console.error('Video play failed:', error);
                // Removed the showNotification call that was causing errors
            });
        }
    } else {
        console.log('Pausing video...');
        video.pause();
        // Update play button icon
        const playBtn = video.closest('.media-container').querySelector('.play-pause i');
        if (playBtn) {
            playBtn.className = 'fas fa-play';
        }
    }
}

function toggleVideoMute(video, button) {
    if (!video) return;
    
    video.muted = !video.muted;
    const icon = button.querySelector('i');
    if (icon) {
        icon.className = video.muted ? 'fas fa-volume-mute' : 'fas fa-volume-up';
    }
}

function toggleFullscreen(mediaContainer) {
    if (!document.fullscreenElement) {
        if (mediaContainer.requestFullscreen) {
            mediaContainer.requestFullscreen();
        } else if (mediaContainer.webkitRequestFullscreen) {
            mediaContainer.webkitRequestFullscreen();
        } else if (mediaContainer.msRequestFullscreen) {
            mediaContainer.msRequestFullscreen();
        }
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
    }
}

// Image expansion function
function expandImage(img) {
    console.log('Expanding image:', img.src);
    
    if (!img) {
        console.error('Image element not found');
        return;
    }
    
    // Create modal overlay
    const overlay = document.createElement('div');
    overlay.className = 'image-modal-overlay';
    overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.95);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
        opacity: 0;
        transition: opacity 0.3s ease;
    `;
    
    overlay.innerHTML = `
        <div class="image-modal-content" style="
            position: relative;
            max-width: 90%;
            max-height: 90%;
            transform: scale(0.8);
            transition: transform 0.3s ease;
        ">
            <button class="modal-close" style="
                position: absolute;
                top: -50px;
                right: 0;
                background: none;
                border: none;
                color: white;
                font-size: 2rem;
                cursor: pointer;
                padding: 10px;
                z-index: 10001;
            ">
                <i class="fas fa-times"></i>
            </button>
            <img src="${img.src}" alt="${img.alt}" style="
                max-width: 100%;
                max-height: 80vh;
                object-fit: contain;
                border-radius: 10px;
                display: block;
            ">
            <div class="image-caption" style="
                position: absolute;
                bottom: -60px;
                left: 0;
                right: 0;
                text-align: center;
                color: white;
                font-size: 1.2rem;
            ">
                <h3 style="margin: 0; font-weight: 500;">${img.alt}</h3>
            </div>
        </div>
    `;
    
    document.body.appendChild(overlay);
    document.body.style.overflow = 'hidden';
    
    // Animate in
    setTimeout(() => {
        overlay.style.opacity = '1';
        overlay.querySelector('.image-modal-content').style.transform = 'scale(1)';
    }, 10);
    
    // Close button handler
    const closeBtn = overlay.querySelector('.modal-close');
    closeBtn.addEventListener('click', closeImageModal);
    
    // Close on overlay click
    overlay.addEventListener('click', function(e) {
        if (e.target === overlay) {
            closeImageModal();
        }
    });
    
    // Close on ESC key
    document.addEventListener('keydown', function escHandler(e) {
        if (e.key === 'Escape') {
            closeImageModal();
            document.removeEventListener('keydown', escHandler);
        }
    });
}

function closeImageModal() {
    const overlay = document.querySelector('.image-modal-overlay');
    if (overlay) {
        // Animate out
        overlay.style.opacity = '0';
        overlay.querySelector('.image-modal-content').style.transform = 'scale(0.8)';
        
        setTimeout(() => {
            if (overlay.parentNode) {
                overlay.remove();
            }
            document.body.style.overflow = 'auto';
        }, 300);
    }
}

// Add enhanced gallery styles
function addGalleryStyles() {
    if (!document.querySelector('#enhanced-gallery-styles')) {
        const styleSheet = document.createElement('style');
        styleSheet.id = 'enhanced-gallery-styles';
        styleSheet.textContent = `
            .gallery-grid {
                display: grid;
                grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
                gap: 20px;
                padding: 20px 0;
            }
            
            .gallery-item {
                position: relative;
                border-radius: 15px;
                overflow: hidden;
                box-shadow: 0 5px 15px rgba(0,0,0,0.1);
                transition: all 0.3s ease;
                background: #000;
                cursor: pointer;
            }
                    /* Add this for better video controls visibility */
            .video-controls {
                position: absolute;
                bottom: 10px;
                left: 10px;
                display: flex;
                gap: 5px;
                opacity: 0;
                transition: opacity 0.3s ease;
                z-index: 3;
                background: rgba(0,0,0,0.7);
                padding: 5px;
                border-radius: 8px;
            }

            
            .gallery-item:hover {
                transform: translateY(-5px);
                box-shadow: 0 15px 30px rgba(0,0,0,0.2);
            }
                .gallery-item:hover .video-controls {
                opacity: 1;
            }
            
            .video-btn {
                background: rgba(255,255,255,0.2);
                border: none;
                color: white;
                padding: 8px 12px;
                border-radius: 5px;
                cursor: pointer;
                transition: all 0.3s ease;
                font-size: 0.9rem;
            }
            
            .video-btn:hover {
                background: rgba(255,255,255,0.3);
                transform: scale(1.1);
            }
            
            .media-container {
                position: relative;
                width: 100%;
                height: 300px;
                overflow: hidden;
            }
            
            .media-container img,
            .media-container video {
                width: 100%;
                height: 100%;
                object-fit: cover;
                transition: transform 0.3s ease;
            }
            
            .gallery-item:hover .media-container img,
            .gallery-item:hover .media-container video {
                transform: scale(1.05);
            }
            
            .play-overlay {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0,0,0,0.3);
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;
                transition: all 0.3s ease;
                z-index: 2;
            }
            
            .play-overlay i {
                font-size: 3rem;
                color: white;
                opacity: 0.8;
                transition: all 0.3s ease;
            }
            
            .play-overlay:hover i {
                transform: scale(1.2);
                opacity: 1;
            }
            
            .gallery-item.playing .play-overlay {
                opacity: 0;
                pointer-events: none;
            }
            
            .video-controls {
                position: absolute;
                bottom: 10px;
                left: 10px;
                display: flex;
                gap: 5px;
                opacity: 0;
                transition: opacity 0.3s ease;
                z-index: 3;
            }
            
            .gallery-item:hover .video-controls {
                opacity: 1;
            }
            
            .video-btn {
                background: rgba(0,0,0,0.7);
                border: none;
                color: white;
                padding: 8px 12px;
                border-radius: 5px;
                cursor: pointer;
                transition: all 0.3s ease;
                font-size: 0.9rem;
            }
            
            .video-btn:hover {
                background: rgba(0,0,0,0.9);
                transform: scale(1.1);
            }
            
            .gallery-item-overlay {
                position: absolute;
                bottom: 0;
                left: 0;
                right: 0;
                background: linear-gradient(transparent, rgba(0,0,0,0.9));
                color: white;
                padding: 20px;
                transform: translateY(100%);
                transition: transform 0.3s ease;
                z-index: 2;
            }
            
            .gallery-item:hover .gallery-item-overlay {
                transform: translateY(0);
            }
            
            .media-badge {
                display: inline-flex;
                align-items: center;
                gap: 5px;
                background: rgba(255,255,255,0.2);
                padding: 5px 10px;
                border-radius: 20px;
                font-size: 0.8rem;
                margin-bottom: 10px;
                backdrop-filter: blur(10px);
            }
            
            .gallery-item-overlay h4 {
                margin: 0 0 5px 0;
                font-size: 1.1rem;
                font-weight: 600;
            }
            
            .gallery-item-overlay p {
                margin: 0;
                font-size: 0.9rem;
                opacity: 0.9;
                line-height: 1.4;
            }
            
            .expand-btn {
                position: absolute;
                top: 10px;
                right: 10px;
                background: rgba(255,255,255,0.2);
                border: none;
                color: white;
                padding: 10px;
                border-radius: 5px;
                cursor: pointer;
                backdrop-filter: blur(10px);
                transition: all 0.3s ease;
                z-index: 3;
            }
            
            .expand-btn:hover {
                background: rgba(255,255,255,0.3);
                transform: scale(1.1);
            }
        `;
        document.head.appendChild(styleSheet);
    }
}

// Rest of your functions (Testimonials, Forms, etc.)...
function initializeTestimonials() {
    // Your existing testimonials code
}

function initializeForms() {
    // Your existing forms code
}

function initializeImageLoading() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.style.opacity = '1';
        });
        if (!img.complete) {
            img.style.opacity = '0';
            img.style.transition = 'opacity 0.2s ease';
        }
    });
}

// Notification System
function showNotification(message, type = 'info') {
    // Your existing notification code
}

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navBtns = document.querySelector('.nav-btns');
    
    if (hamburger && hamburger.classList.contains('active') && 
        !e.target.closest('.nav-content')) {
        hamburger.classList.remove('active');
        if (navLinks) navLinks.classList.remove('active');
        if (navBtns) navBtns.classList.remove('active');
    }
});

// CORRECTED TESTIMONIALS FUNCTION - Replace your current one with this
function initializeTestimonials() {
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    const viewMoreBtn = document.querySelector('.view-more-btn');
    const sectionTitle = document.querySelector('.testimonials .section-title');
    const statsSection = document.querySelector('.testimonial-stats');
    const moreButton = document.querySelector('.testimonials-more');

    // If no testimonial cards found, return early
    if (testimonialCards.length === 0) {
        console.log('No testimonial cards found');
        return;
    }

    console.log(`Found ${testimonialCards.length} testimonial cards`);

    // Reset animations for scroll-triggered approach
    function resetAnimations() {
        // Section title
        if (sectionTitle) {
            sectionTitle.style.opacity = '0';
            sectionTitle.style.transform = 'translateX(-100px)';
        }

        // Testimonial cards
        testimonialCards.forEach((card) => {
            card.style.opacity = '0';
            card.style.transform = 'translateX(-100px)';
            card.style.animation = 'none';
        });

        // Stats section
        if (statsSection) {
            statsSection.style.opacity = '0';
            statsSection.style.transform = 'translateX(-100px)';
        }

        // More button
        if (moreButton) {
            moreButton.style.opacity = '0';
            moreButton.style.transform = 'translateX(-100px)';
        }
    }

    // Initialize animations on scroll
    function initScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const sectionObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    console.log('Testimonials section in view - starting animations');
                    
                    // Animate section title
                    if (sectionTitle) {
                        sectionTitle.style.animation = 'slideInFromLeft 1s ease 0.2s forwards';
                    }

                    // Animate cards with staggered delay
                    testimonialCards.forEach((card, index) => {
                        const delay = 0.3 + (index * 0.15); // Reduced delay for faster animation
                        card.style.animation = `slideInFromLeft 0.6s ease ${delay}s forwards`;
                    });

                    // Animate stats
                    if (statsSection) {
                        statsSection.style.animation = 'slideInFromLeft 1s ease 1s forwards';
                    }

                    // Animate more button
                    if (moreButton) {
                        moreButton.style.animation = 'slideInFromLeft 0.8s ease 1.2s forwards';
                    }
                }
            });
        }, observerOptions);

        // Observe the testimonials section
        const testimonialsSection = document.querySelector('.testimonials');
        if (testimonialsSection) {
            sectionObserver.observe(testimonialsSection);
        } else {
            console.log('Testimonials section not found');
        }
    }

    // Add hover effects
    testimonialCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.zIndex = '10';
        });

        card.addEventListener('mouseleave', function() {
            this.style.zIndex = '1';
        });
    });

    // View More functionality
    if (viewMoreBtn) {
        viewMoreBtn.addEventListener('click', function() {
            showNotification('Loading more amazing travel stories...', 'info');
            
            // Add a little bounce effect
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);

            // Simulate loading more testimonials
            setTimeout(() => {
                showNotification('More testimonials loaded successfully!', 'success');
            }, 1500);
        });
    }

    // Initialize
    resetAnimations();
    initScrollAnimations();
    
    // Force show testimonials if animations don't trigger
    setTimeout(() => {
        const testimonialsSection = document.querySelector('.testimonials');
        if (testimonialsSection && testimonialCards[0].style.opacity === '0') {
            console.log('Forcing testimonial animations');
            testimonialCards.forEach((card, index) => {
                const delay = 0.3 + (index * 0.15);
                card.style.animation = `slideInFromLeft 0.6s ease ${delay}s forwards`;
            });
        }
    }, 1000);
}

    // Initialize
    resetAnimations();
    initScrollAnimations();
function initializeTestimonials() {
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    const viewMoreBtn = document.querySelector('.view-more-btn');
    const sectionTitle = document.querySelector('.testimonials .section-title');
    const statsSection = document.querySelector('.testimonial-stats');
    const moreButton = document.querySelector('.testimonials-more');

    // Reset animations for scroll-triggered approach
    function resetAnimations() {
        // Section title
        if (sectionTitle) {
            sectionTitle.style.opacity = '0';
            sectionTitle.style.transform = 'translateX(-100px)';
        }

        // Testimonial cards
        testimonialCards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateX(-100px)';
            card.style.animation = 'none';
        });

        // Stats section
        if (statsSection) {
            statsSection.style.opacity = '0';
            statsSection.style.transform = 'translateX(-100px)';
        }

        // More button
        if (moreButton) {
            moreButton.style.opacity = '0';
            moreButton.style.transform = 'translateX(-100px)';
        }
    }

    // Initialize animations on scroll
    function initScrollAnimations() {
        const observerOptions = {
            threshold: 0.2,
            rootMargin: '0px 0px -50px 0px'
        };

        const sectionObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Animate section title
                    if (sectionTitle) {
                        sectionTitle.style.animation = 'slideInFromLeft 1s ease 0.2s forwards';
                    }

                    // Animate cards with staggered delay
                    testimonialCards.forEach((card, index) => {
                        const delay = 0.3 + (index * 0.2);
                        card.style.animation = `slideInFromLeft 0.8s ease ${delay}s forwards`;
                    });

                    // Animate stats
                    if (statsSection) {
                        statsSection.style.animation = 'slideInFromLeft 1s ease 1.5s forwards';
                    }

                    // Animate more button
                    if (moreButton) {
                        moreButton.style.animation = 'slideInFromLeft 0.8s ease 2s forwards';
                    }
                }
            });
        }, observerOptions);

        // Observe the testimonials section
        const testimonialsSection = document.querySelector('.testimonials');
        if (testimonialsSection) {
            sectionObserver.observe(testimonialsSection);
        }
    }

    // Add hover effects
    testimonialCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.zIndex = '10';
        });

        card.addEventListener('mouseleave', function() {
            this.style.zIndex = '1';
        });
    });

    // View More functionality
    if (viewMoreBtn) {
        viewMoreBtn.addEventListener('click', function() {
            showNotification('Loading more amazing travel stories...', 'info');
            
            // Add a little bounce effect
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);

            // Simulate loading more testimonials
            setTimeout(() => {
                showNotification('More testimonials loaded successfully!', 'success');
            }, 1500);
        });
    }

    // Initialize
    resetAnimations();
    initScrollAnimations();
}

function initializeTestimonials() {
    const testimonialsGrid = document.querySelector('.testimonials-grid');
    const testimonialsMore = document.querySelector('.testimonials-more');
    const sectionTitle = document.querySelector('.testimonials .section-title');
    const statsSection = document.querySelector('.testimonial-stats');

    // All testimonials data
    const allTestimonials = [
        // First 6 testimonials (initially visible)
        {
            name: "Amela Graphics",
            image: "images/i2.jpg",
            location: "Jinja",
            type: "Romantic Getaway",
            text: "Our Jinja trip was pure magic. JEC arranged overwater villas with private pools and romantic dinners on the beach. Every moment felt like a dream come true!",
            rating: 4
        },
        {
            name: "Jane Beauty centre",
            image: "images/i32i.jpg",
            location: "Kasese",
            type: "Adventure",
            text: "The Kasese trekking expedition was life-changing. Expert guides, stunning landscapes, and comfortable eco-lodges made this the adventure of a lifetime!",
            rating: 5
        },
        {
            name: "Tracy",
            image: "images/m2m.jpg",
            location: "Jinja Tour",
            type: "Cultural",
            text: "Our Jinja tour was incredibly immersive. From tea ceremonies with masters to staying in traditional ryokans, JEC provided authentic experiences we'll cherish forever.",
            rating: 5
        },
        {
            name: "Annie",
            image: "images/Annie.jpg",
            location: "Kabala Tour",
            type: "Wellness",
            text: "Our family Mru in Kable was absolutely incredible. The we loved seeing the animals up close, and our private guide made every game drive educational and exciting!",
            rating: 5
        },
        {
            name: "Richmon",
            image: "images/rich.jpg",
            location: "Jinja Tour",
            type: "Luxury",
            text: "The Jinja Tour charter exceeded all expectations. From the professional crew to the curated island-hopping itinerary of jinja, every detail was perfectly executed by JEC.",
            rating: 5
        },
        {
            name: "Deo",
            image: "images/Deo.jpg",
            location: "Kasese",
            type: "Wellness",
            text: "The Kasese wellness retreat was transformative. Daily yoga, healing treatments, and organic cuisine helped me reconnect with myself. JEC created the perfect sanctuary.",
            rating: 5
        },
        // Additional testimonials (load more)
        {
            name: "Lunkuse",
            image: "images/lu.jpg",
            location: "Kabale",
            type: "Western Tour",
            text: "Our Western Tour in Kabale was absolutely perfect! JEC handled every detail from the venue to guest accommodations. The sunset ceremony was straight out of a fairytale!",
            rating: 5
        },
        {
            name: "Arsenal",
            image: "images/faith.jpg",
            location: "Mountain Rwenzori ski Trip",
            type: "Adventure",
            text: "The Mountain Rwenzori ski trip to Kasese was exceptional. Private chalet, gourmet dining, and breathtaking slopes. JEC made our winter vacation unforgettable!",
            rating: 5
        },
        {
            name: "Pavin",
            image: "images/pavin.jpg",
            location: "Kalangala Island Hopping",
            type: "Luxury",
            text: "Island hopping in kalangala was a dream come true. From Ssese island sunsets to kalangala Beach, every moment was perfectly curated by the JEC team.",
            rating: 5
        },
        {
            name: "Gang Group",
            image: "images/hang.jpg",
            location: "Nabugabo Sand Beach",
            type: "Luxury",
            text: "Our Gang trip to Nabugabo Beach was stress-free and magical. Fast passes, and character dining. - JEC thought of everything for our kids!",
            rating: 5
        },
        {
            name: "Suma",
            image: "images/suma.jpg",
            location: "Fort Portal Historical Tour",
            type: "Cultural",
            text: "The Fort Portal tour was academically enriching. Private access to archaeological sites and expert fort portologists made this trip extraordinary. Highly recommended!",
            rating: 5
        },
        {
            name: "Derick & Dora",
            image: "images/derick.jpg",
            location: "Kasese Anniversary Trip",
            type: "Romantic Getaway",
            text: "Our 5th anniversary in Kasese was pure romance. Private lake boutique hostel,dining. - JEC created memories we'll treasure forever.",
            rating: 5
        },
        /*{
            name: "Carlos Martinez",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
            location: "Costa Rica Eco Adventure",
            type: "Adventure",
            text: "The eco-adventure in Costa Rica was incredible! Zip-lining, wildlife spotting, and sustainable lodges. JEC delivered the perfect balance of adventure and comfort.",
            rating: 5
        },
        {
            name: "Emma Wilson",
            image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
            location: "Thailand Culinary Tour",
            type: "Cultural",
            text: "The culinary tour through Thailand was a food lover's dream! Cooking classes, street food tours, and luxury resorts. JEC crafted the perfect gastronomic journey.",
            rating: 5
        },
        {
            name: "The Garcia Family",
            image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
            location: "Hawaii Multi-Island Tour",
            type: "Family",
            text: "Our Hawaii vacation was beyond expectations! Volcano tours, luaus, and beach activities for all ages. JEC made it the perfect family adventure.",
            rating: 5
        },
        {
            name: "Dr. Andrew Kim",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
            location: "Dubai Luxury Experience",
            type: "Luxury",
            text: "The Dubai experience was opulent and seamless. Burj Khalifa suite, desert safari, and private yacht. JEC's attention to luxury details was impressive.",
            rating: 5
        }*/
    ];

    let visibleCount = 6; // Start with 6 testimonials visible
    const testimonialsPerLoad = 6;
    let currentPage = 1;

    // Function to create testimonial HTML
    function createTestimonialHTML(testimonial, index) {
        return `
            <div class="testimonial-card" style="animation-delay: ${index * 0.1}s">
                <div class="rating">
                    ${Array.from({length: testimonial.rating}, (_, i) => 
                        `<i class="fas fa-star"></i>`
                    ).join('')}
                </div>
                <div class="testimonial-content">
                    <p>"${testimonial.text}"</p>
                </div>
                <div class="client-info">
                    <div class="client-avatar">
                        <img src="${testimonial.image}" alt="${testimonial.name}" loading="lazy">
                    </div>
                    <div class="client-details">
                        <h4>${testimonial.name}</h4>
                        <span>${testimonial.location}</span>
                        <div class="travel-type">${testimonial.type}</div>
                    </div>
                </div>
            </div>
        `;
    }

    // Function to render testimonials
    function renderTestimonials() {
        if (!testimonialsGrid) return;
        
        const testimonialsToShow = allTestimonials.slice(0, visibleCount);
        testimonialsGrid.innerHTML = testimonialsToShow.map((testimonial, index) => 
            createTestimonialHTML(testimonial, index)
        ).join('');

        // Update button state
        updateButtonState();
        
        // Re-initialize animations for new testimonials
        initializeTestimonialAnimations();
        
        console.log(`Rendered ${testimonialsToShow.length} testimonials`);
    }

    // Function to create button container
    function createButtonContainer() {
        return `
            <div class="testimonials-buttons">
                <button class="view-more-btn" id="viewMoreBtn">
                    <span class="btn-text">View More Stories</span>
                    <i class="fas fa-arrow-down"></i>
                </button>
                <button class="go-back-btn" id="goBackBtn" style="display: none;">
                    <i class="fas fa-arrow-up"></i>
                    <span class="btn-text">Show Less</span>
                </button>
            </div>
        `;
    }

    // Function to update button container
    function updateButtonContainer() {
        if (!testimonialsMore) return;
        
        testimonialsMore.innerHTML = createButtonContainer();
        
        // Add event listeners to new buttons
        const viewMoreBtn = document.getElementById('viewMoreBtn');
        const goBackBtn = document.getElementById('goBackBtn');
        
        if (viewMoreBtn) {
            viewMoreBtn.addEventListener('click', loadMoreTestimonials);
        }
        
        if (goBackBtn) {
            goBackBtn.addEventListener('click', goBackToTop);
        }
        
        updateButtonState();
    }

    // Function to load more testimonials
    function loadMoreTestimonials() {
        if (visibleCount >= allTestimonials.length) {
            showNotification('All travel stories have been loaded!', 'success');
            return;
        }

        // Show loading state
        const viewMoreBtn = document.getElementById('viewMoreBtn');
        if (viewMoreBtn) {
            viewMoreBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Loading...';
            viewMoreBtn.disabled = true;
        }

        // Simulate loading delay
        setTimeout(() => {
            visibleCount += testimonialsPerLoad;
            currentPage++;
            renderTestimonials();
            
            // Show Go Back button
            const goBackBtn = document.getElementById('goBackBtn');
            if (goBackBtn) {
                goBackBtn.style.display = 'flex';
            }
            
            // Show success message
            const loadedCount = Math.min(visibleCount, allTestimonials.length);
            showNotification(`Loaded ${loadedCount} amazing travel stories!`, 'success');
            
            // Smooth scroll to new testimonials
            setTimeout(() => {
                const newTestimonials = testimonialsGrid.children;
                if (newTestimonials.length > 6) {
                    newTestimonials[6].scrollIntoView({ 
                        behavior: 'smooth', 
                        block: 'center' 
                    });
                }
            }, 300);
        }, 800);
    }

    // Function to go back to top
    function goBackToTop() {
        // Scroll to top of testimonials section
        testimonialsGrid.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start' 
        });
        
        // Reset to initial state after scroll
        setTimeout(() => {
            visibleCount = 6;
            currentPage = 1;
            renderTestimonials();
            
            // Hide Go Back button
            const goBackBtn = document.getElementById('goBackBtn');
            if (goBackBtn) {
                goBackBtn.style.display = 'none';
            }
            
            showNotification('Showing initial stories', 'info');
        }, 500);
    }

    // Function to update button state
    function updateButtonState() {
        const viewMoreBtn = document.getElementById('viewMoreBtn');
        const goBackBtn = document.getElementById('goBackBtn');
        
        if (!viewMoreBtn) return;
        
        if (visibleCount >= allTestimonials.length) {
            viewMoreBtn.innerHTML = '<i class="fas fa-check"></i> All Stories Loaded';
            viewMoreBtn.disabled = true;
            viewMoreBtn.style.opacity = '0.6';
        } else {
            const remaining = allTestimonials.length - visibleCount;
            viewMoreBtn.innerHTML = `
                <span class="btn-text">View ${Math.min(remaining, testimonialsPerLoad)} More</span>
                <i class="fas fa-arrow-down"></i>
            `;
            viewMoreBtn.disabled = false;
            viewMoreBtn.style.opacity = '1';
        }
        
        // Show Go Back button only if we've loaded more than initial
        if (goBackBtn) {
            goBackBtn.style.display = visibleCount > 6 ? 'flex' : 'none';
        }
    }

    // Function to initialize testimonial animations
    function initializeTestimonialAnimations() {
        const testimonialCards = document.querySelectorAll('.testimonial-card');
        
        testimonialCards.forEach(card => {
            // Reset animation
            card.style.animation = 'none';
            void card.offsetWidth; // Trigger reflow
            
            // Add entrance animation with delay
            const index = Array.from(testimonialCards).indexOf(card);
            const delay = 0.3 + (index * 0.1);
            card.style.animation = `slideInFromLeft 0.6s ease ${delay}s forwards`;

            card.addEventListener('mouseenter', function() {
                this.style.zIndex = '10';
            });

            card.addEventListener('mouseleave', function() {
                this.style.zIndex = '1';
            });
        });
    }

    // Function to initialize scroll animations
    function initScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const sectionObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Animate section title
                    if (sectionTitle) {
                        sectionTitle.style.animation = 'slideInFromLeft 1s ease 0.2s forwards';
                    }

                    // Animate stats
                    if (statsSection) {
                        statsSection.style.animation = 'slideInFromLeft 1s ease 1s forwards';
                    }
                }
            });
        }, observerOptions);

        // Observe the testimonials section
        const testimonialsSection = document.querySelector('.testimonials');
        if (testimonialsSection) {
            sectionObserver.observe(testimonialsSection);
        }
    }

    // Initialize everything
    updateButtonContainer();
    renderTestimonials();
    initScrollAnimations();
    
    // Force show testimonials if needed
    setTimeout(() => {
        const testimonialCards = document.querySelectorAll('.testimonial-card');
        if (testimonialCards.length > 0 && testimonialCards[0].style.opacity === '0') {
            initializeTestimonialAnimations();
        }
    }, 100);
}

function initializeForms() {
    // Contact Form
    const contactForm = document.querySelector('.contact-form form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            showNotification('Thank you for your message! Our travel expert will contact you within 24 hours.', 'success');
            contactForm.reset();
        });
    }

    // Newsletter Subscription
    const newsletterForm = document.querySelector('.newsletter');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const emailInput = newsletterForm.querySelector('input[type="email"]');
            const email = emailInput.value;
            
            if (email) {
                showNotification('Thank you for subscribing to our newsletter!', 'success');
                emailInput.value = '';
            }
        });
    }

    // Search Form
    const searchForm = document.querySelector('.search-form');
    if (searchForm) {
        searchForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const destination = searchForm.querySelector('input[type="text"]').value;
            showNotification(`Searching for luxury experiences in ${destination || 'your dream destination'}...`, 'info');
        });
    }

    // Package Booking Buttons
    document.querySelectorAll('.package-card .btn').forEach(button => {
        button.addEventListener('click', function() {
            const packageTitle = this.closest('.package-card').querySelector('h3').textContent;
            showNotification(`Excellent choice! Our luxury travel consultant will contact you to discuss "${packageTitle}".`, 'success');
        });
    });
}

function initializeImageLoading() {
    // Add loading animation to images
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.style.opacity = '1';
        });
        // Only set opacity to 0 if image hasn't loaded yet
        if (!img.complete) {
            img.style.opacity = '0';
            img.style.transition = 'opacity 0.5s ease';
        }
    });
}

// Notification System
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${type === 'success' ? 'check-circle' : 'info-circle'}"></i>
            <span>${message}</span>
        </div>
        <button class="notification-close">
            <i class="fas fa-times"></i>
        </button>
    `;
    
    // Add CSS for notification
    const notificationStyles = `
        .notification {
            position: fixed;
            top: 100px;
            right: 20px;
            padding: 15px 20px;
            border-radius: 10px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.2);
            z-index: 10000;
            display: flex;
            align-items: center;
            gap: 15px;
            max-width: 400px;
            transform: translateX(400px);
            transition: transform 0.3s ease;
        }
        .notification-success {
            background: #4CAF50;
            color: white;
        }
        .notification-info {
            background: #2196F3;
            color: white;
        }
        .notification-close {
            background: none;
            border: none;
            color: inherit;
            cursor: pointer;
            padding: 0;
        }
    `;

    // Add styles if not already added
    if (!document.querySelector('#notification-styles')) {
        const styleSheet = document.createElement('style');
        styleSheet.id = 'notification-styles';
        styleSheet.textContent = notificationStyles;
        document.head.appendChild(styleSheet);
    }
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Close button
    notification.querySelector('.notification-close').addEventListener('click', () => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 300);
    });
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.transform = 'translateX(400px)';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.remove();
                }
            }, 300);
        }
    }, 5000);
}

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navBtns = document.querySelector('.nav-btns');
    
    if (hamburger && hamburger.classList.contains('active') && 
        !e.target.closest('.nav-content')) {
        hamburger.classList.remove('active');
        if (navLinks) navLinks.classList.remove('active');
        if (navBtns) navBtns.classList.remove('active');
    }
});
// Preloader
window.addEventListener('load', function() {
    const preloader = document.querySelector('.preloader');
    setTimeout(() => {
        preloader.style.opacity = '0';
        preloader.style.visibility = 'hidden';
    }, 2000);
});

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navBtns = document.querySelector('.nav-btns');

hamburger.addEventListener('click', function() {
    this.classList.toggle('active');
    navLinks.classList.toggle('active');
    navBtns.classList.toggle('active');
});

// Gallery filter
const filterBtns = document.querySelectorAll('.filter-btn');
const galleryItems = document.querySelectorAll('.gallery-item');

// Gallery filter with error handling
function initializeGalleryFilter() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');

    // Check if elements exist before adding event listeners
    if (filterBtns.length === 0 || galleryItems.length === 0) {
        console.log('Gallery filter elements not found');
        return;
    }

    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            const filter = this.getAttribute('data-filter');
            
            galleryItems.forEach(item => {
                if (filter === 'all' || item.getAttribute('data-category') === filter) {
                    item.style.display = 'block';
                    // Add fade in animation
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'scale(1)';
                    }, 50);
                } else {
                    // Add fade out animation
                    item.style.opacity = '0';
                    item.style.transform = 'scale(0.8)';
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 300);
                }
            });
        });
    });

    // Initialize first filter as active
    if (filterBtns.length > 0) {
        filterBtns[0].classList.add('active');
    }
}

// Add this to your script.js file
function scrollToTeam() {
    const teamSection = document.getElementById('leadership');
    if (teamSection) {
        teamSection.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Enhanced smooth scrolling for all navigation links
function initializeSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const target = document.querySelector(targetId);
            
            if (target) {
                // Close mobile menu if open
                const hamburger = document.querySelector('.hamburger');
                const navLinks = document.querySelector('.nav-links');
                const navBtns = document.querySelector('.nav-btns');
                
                if (hamburger && hamburger.classList.contains('active')) {
                    hamburger.classList.remove('active');
                    if (navLinks) navLinks.classList.remove('active');
                    if (navBtns) navBtns.classList.remove('active');
                }
                
                // Smooth scroll to target
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Form Submission Handler
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            // Optional: Add loading state
            const submitBtn = this.querySelector('.btn-submit');
            const btnText = submitBtn.querySelector('span');
            const btnIcon = submitBtn.querySelector('.fa-paper-plane');
            const btnLoading = submitBtn.querySelector('.btn-loading');
            
            // Show loading
            submitBtn.disabled = true;
            btnText.textContent = 'Sending...';
            btnIcon.style.display = 'none';
            btnLoading.style.display = 'inline-block';
            
            // FormSubmit will handle the rest automatically
            // The form will submit and redirect to your thank you page
        });
    }
});

// Mobile menu functionality
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navBtns = document.querySelector('.nav-btns');
    
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            // Toggle active class on hamburger
            this.classList.toggle('active');
            
            // Toggle mobile menu visibility
            if (navLinks) navLinks.classList.toggle('active');
            if (navBtns) navBtns.classList.toggle('active');
            
            // Prevent body scroll when menu is open
            document.body.style.overflow = this.classList.contains('active') ? 'hidden' : '';
        });
    }
    
    // Close mobile menu when clicking on a link
    const navLinksList = document.querySelectorAll('.nav-links a');
    navLinksList.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            if (navLinks) navLinks.classList.remove('active');
            if (navBtns) navBtns.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
});