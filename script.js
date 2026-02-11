// Supabase Configuration
const SUPABASE_URL = "https://ixuknrfmhotjjhpeupje.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml4dWtucmZtaG90ampocGV1cGplIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA1NzM5MTUsImV4cCI6MjA4NjE0OTkxNX0.8_BCi3Ay6wnqbsXt5mKB-pZGjwT60gR07ofsKa3w0UM";

let supabaseClient = null;
if (window.supabase) {
    supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
} else {
    console.error("Supabase CDN not loaded");
}

// Translations
const translations = {
    en: {
        hero: {
            bismillah: "بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ",
            bismillahTrans: "With the Blessings of Allah, The Most Gracious, The Most Merciful",
            request: "Request the Honor of Your Presence and Blessings on the auspicious occasion of the Wedding Ceremony of their beloved Granddaughter",
            tap: "Tap to continue",
            bridename: "Samra Fatima",
            groomname: "Abdul Sattar"
        },
        countdown: {
            days: "Days",
            hours: "Hours",
            minutes: "Minutes",
            seconds: "Seconds"
        },
        venue: {
            title: "The Venue",
            address: "Rana Pratap Marg, Hazratganj, Lucknow, Uttar Pradesh"
        },
        dressCode: {
            title: "Dress Code",
            description: "Formal Attire Requested"
        },
        songRequest: {
            title: "Help Us Curate Our Celebration!",
            subtitle: "Suggest a song for our wedding playlist!",
            namePlaceholder: "Your Name",
            songPlaceholder: "Song Title",
            artistPlaceholder: "Artist Name",
            eventLabel: "Which Event?",
            submit: "Submit Request"
        },
        blessings: {
            title: "Shower Us With Your Duas & Blessings",
            namePlaceholder: "Your Name",
            messagePlaceholder: "Write a message or dua...",
            submit: "Send Blessing"
        },
        rsvp: {
            title: "RSVP",
            name: "Full Name",
            email: "Email Address",
            attendance: "Will you attend?",
            attending: "Joyfully Accepts",
            declining: "Regretfully Declines",
            message: "Message for the Couple",
            submit: "Confirm Attendance"
        }
    },
    ur: {
        hero: {
            bismillah: "بِسْمِ اللّٰہِ الرَّحْمٰنِ الرَّحِیْم",
            bismillahTrans: "اللہ کے بابرکت نام سے، جو نہایت مہربان اور رحم کرنے والا ہے",
            request: "آپ کی باعزت موجودگی کی درخواست کرتے ہیں نکاح کی تقریب میں",
            tap: "جاری رکھنے کے لیے ٹیپ کریں",
            bridename: "سمرا فاطمہ",
            groomname: "عبد الستار"
        },
        countdown: {
            days: "دن",
            hours: "گھنٹے",
            minutes: "منٹ",
            seconds: "سیکنڈ"
        },
        venue: {
            title: "مقام",
            address: "رانا پرتاپ مارگ، حضرت گنج، لکھنؤ، اتر پردیش"
        },
        dressCode: {
            title: "ڈریس کوڈ",
            description: "مہربانی فرما کر باوقار/رسمی لباس زیب تن کریں"
        },
        songRequest: {
            title: "ہماری پلے لسٹ بنانے میں ہماری مدد کریں!",
            subtitle: "ہمارے شادی کے لیے ایک گانا تجویز کریں!",
            namePlaceholder: "آپ کا نام",
            songPlaceholder: "گانے کا عنوان",
            artistPlaceholder: "فنکار کا نام",
            eventLabel: "کس موقع کے لیے؟",
            submit: "درخواست جمع کریں"
        },
        blessings: {
            title: "اپنی دعاؤں اور نیک تمناؤں سے ہمیں نوازیں",
            namePlaceholder: "آپ کا نام",
            messagePlaceholder: "اپنا پیغام یا دعا لکھیں...",
            submit: "دعا بھیجیں"
        },
        rsvp: {
            title: "RSVP",
            name: "نام اور خاندانی نام",
            email: "ای میل پتہ",
            attendance: "کیا آپ شرکت کریں گے؟",
            attending: "خوشی کے ساتھ قبول کرتا/کرتی ہوں",
            declining: "افسوس کے ساتھ معذرت",
            message: "دولہا دلہن کے لیے پیغام",
            submit: "شرکت کی تصدیق کریں"
        }
    },
    hi: {
    hero: {
        bismillah: "بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ",
        bismillahTrans: "अल्लाह के नाम से, जो बड़ा मेहरबान और रहमत करने वाला है",
        request: "आपकी सम्मानित उपस्थिति का अनुरोध करते हैं निकाह समारोह में",
        tap: "जारी रखने के लिए टैप करें",
        bridename: "Samra Fatima",
        groomname: "Abdul Sattar"
    },
    countdown: {
        days: "दिन",
        hours: "घंटे",
        minutes: "मिनट",
        seconds: "सेकंड"
    },
    venue: {
        title: "स्थान",
        address: "राणा प्रताप मार्ग, हज़रतगंज, लखनऊ, उत्तर प्रदेश"
    },
    dressCode: {
        title: "ड्रेस कोड",
        description: "कृपया औपचारिक परिधान पहनें"
    },
    songRequest: {
        title: "हमारी प्लेलिस्ट बनाने में हमारी मदद करें!",
        subtitle: "हमारी शादी के लिए एक गाना सुझाएँ!",
        namePlaceholder: "आपका नाम",
        songPlaceholder: "गाने का शीर्षक",
        artistPlaceholder: "कलाकार का नाम",
        eventLabel: "किस कार्यक्रम के लिए?",
        submit: "अनुरोध भेजें"
    },
    blessings: {
        title: "अपनी दुआओं और शुभकामनाओं से हमें नवाज़ें",
        namePlaceholder: "आपका नाम",
        messagePlaceholder: "अपना संदेश या दुआ लिखें...",
        submit: "दुआ भेजें"
    },
    rsvp: {
        title: "RSVP",
        name: "पूरा नाम",
        email: "ईमेल पता",
        attendance: "क्या आप शामिल होंगे?",
        attending: "खुशी के साथ स्वीकार करता/करती हूँ",
        declining: "अफ़सोस के साथ मना करता/करती हूँ",
        message: "दूल्हा-दुल्हन के लिए संदेश",
        submit: "उपस्थिति की पुष्टि करें"
    }
}


};

let currentLanguage = 'en';

// Initialization
document.addEventListener('DOMContentLoaded', () => {
    initCurtains();
    initCountdown();
    renderCalendar();
    fetchBlessings();
    initForms();
    lucide.createIcons();
});

// Curtain Animation
function initCurtains() {
    const overlay = document.getElementById('curtain-overlay');
    const leftCurtain = document.getElementById('curtain-left');
    const rightCurtain = document.getElementById('curtain-right');
    const mainContent = document.getElementById('main-content');
    const entranceContent = document.getElementById('entrance-content');

    // Auto-enter logic
    setTimeout(() => {
        // Open curtains
        leftCurtain.classList.add('-translate-x-full');
        rightCurtain.classList.add('translate-x-full');
        entranceContent.classList.add('opacity-0');

        // Show main content
        mainContent.classList.remove('opacity-0');
        mainContent.classList.add('opacity-100');

        // Remove overlay after animation
        setTimeout(() => {
            overlay.style.opacity = '0';
            setTimeout(() => {
                overlay.style.display = 'none';
            }, 1000);
        }, 2500);
    }, 1000);
}

// Language Switcher
function setLanguage(lang) {
    currentLanguage = lang;
    const t = translations[lang];

    // Update buttons
    document.getElementById('lang-en').className = lang === 'en'
        ? "px-3 py-1 rounded-full text-xs font-serif transition-all duration-300 bg-teatro-gold text-teatro-dark font-bold shadow-lg transform scale-105"
        : "px-3 py-1 rounded-full text-xs font-serif transition-all duration-300 bg-white/50 text-teatro-warm hover:bg-white hover:text-teatro-gold";

    document.getElementById('lang-ur').className = lang === 'ur'
        ? "px-3 py-1 rounded-full text-xs font-serif transition-all duration-300 bg-teatro-gold text-teatro-dark font-bold shadow-lg transform scale-105"
        : "px-3 py-1 rounded-full text-xs font-serif transition-all duration-300 bg-white/50 text-teatro-warm hover:bg-white hover:text-teatro-gold";

    document.getElementById('lang-hi').className = lang === 'hi'
        ? "px-3 py-1 rounded-full text-xs font-serif transition-all duration-300 bg-teatro-gold text-teatro-dark font-bold shadow-lg transform scale-105"
        : "px-3 py-1 rounded-full text-xs font-serif transition-all duration-300 bg-white/50 text-teatro-warm hover:bg-white hover:text-teatro-gold";


    // Update text content
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        const keys = key.split('.');
        let value = t;
        keys.forEach(k => value = value[k]);

        if (value) {
            // Preserve HTML for certain keys/icons if needed, but for now textContent is safer
            // unless we specifically need HTML structure (like icons inside buttons)
            if (el.tagName === 'BUTTON') {
                // Special handling for buttons with icons
                const icon = el.querySelector('svg');
                el.childNodes.forEach(node => {
                    if (node.nodeType === Node.TEXT_NODE && node.textContent.trim()) {
                        node.textContent = " " + value + " ";
                    }
                });
            } else {
                el.textContent = value;
            }
        }
    });

    // Update placeholders
    document.querySelectorAll('[placeholder]').forEach(el => {
        // We'd need mapping for placeholders too, or reuse existing keys
        // Logic for specific IDs
        if (el.id === 'song-name' || el.id === 'blessing-name') el.placeholder = t.songRequest.namePlaceholder;
        if (el.id === 'song-title') el.placeholder = t.songRequest.songPlaceholder;
        if (el.id === 'song-artist') el.placeholder = t.songRequest.artistPlaceholder;
        if (el.id === 'blessing-message') el.placeholder = t.blessings.messagePlaceholder;
    });
}

window.setLanguage = setLanguage; // Make global

// Countdown Timer
function initCountdown() {
    const targetDate = new Date('2026-03-27T10:30:00').getTime();

    setInterval(() => {
        const now = new Date().getTime();
        const difference = targetDate - now;

        if (difference > 0) {
            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((difference % (1000 * 60)) / 1000);

            document.getElementById('timer-days').textContent = String(days).padStart(2, '0');
            document.getElementById('timer-hours').textContent = String(hours).padStart(2, '0');
            document.getElementById('timer-minutes').textContent = String(minutes).padStart(2, '0');
            document.getElementById('timer-seconds').textContent = String(seconds).padStart(2, '0');
        }
    }, 1000);
}

// Calendar
function renderCalendar() {
    const grid = document.getElementById('calendar-grid');
    const weddingDay = 27;
    const daysInMonth = 31;
    const startingDay = 0; // Sunday

    // Empty cells
    for (let i = 0; i < startingDay; i++) {
        const d = document.createElement('div');
        grid.appendChild(d);
    }

    // Days
    for (let i = 1; i <= daysInMonth; i++) {
        const d = document.createElement('div');
        d.className = `relative z-10 font-serif text-sm h-8 w-8 flex items-center justify-center rounded-full transition-colors ${i === weddingDay ? 'bg-teatro-gold text-white shadow-lg scale-110' : 'text-teatro-warm/70 hover:bg-teatro-gold/10'}`;
        d.textContent = i;
        grid.appendChild(d);
    }
}

// UI Helpers
function updateRadioStyles(input) {
    const name = input.name;
    const inputs = document.querySelectorAll(`input[name="${name}"]`);
    inputs.forEach(r => {
        const label = r.parentElement;
        const span = label.querySelector('span');
        if (r.checked) {
            label.className = "flex items-center gap-2 cursor-pointer px-3 py-1.5 rounded-full border transition-colors bg-teatro-gold text-teatro-dark border-teatro-gold";
            span.className = "text-xs text-teatro-dark font-bold";
        } else {
            label.className = "flex items-center gap-2 cursor-pointer px-3 py-1.5 rounded-full border transition-colors bg-teatro-dark/30 border-teatro-gold/10 hover:border-teatro-gold/40";
            span.className = "text-xs text-teatro-beige/80";
        }
    });
}
window.updateRadioStyles = updateRadioStyles;

function updateRsvpStyles(input) {
    const name = input.name;
    const inputs = document.querySelectorAll(`input[name="${name}"]`);
    inputs.forEach(r => {
        const container = r.nextElementSibling;
        const span = container.querySelector('span');

        // Reset basic style
        container.className = "border border-teatro-gold/20 p-4 text-center rounded hover:bg-teatro-gold/5 transition-all duration-300 group-hover:border-teatro-gold/40";
        span.className = "font-serif italic text-lg text-teatro-beige/70";

        if (r.checked) {
            if (r.value === 'attending') {
                container.classList.add('bg-teatro-gold', 'text-teatro-dark');
                container.classList.remove('text-teatro-beige/70'); // Ensure text color override works
                span.classList.remove('text-teatro-beige/70');
                span.classList.add('text-teatro-dark');
            } else {
                container.classList.add('bg-teatro-warm', 'text-teatro-dark', 'border-teatro-gold');
                span.classList.remove('text-teatro-beige/70');
                span.classList.add('text-teatro-dark');
            }
        }
    });
}
window.updateRsvpStyles = updateRsvpStyles;

// Forms & Data
async function fetchBlessings() {
    if (!supabaseClient) return;

    try {
        const { data, error } = await supabaseClient
            .from('blessings')
            .select('*')
            .order('created_at', { ascending: false })
            .limit(20);

        if (data) {
            const feed = document.getElementById('blessings-feed');
            feed.innerHTML = '';
            data.forEach(msg => {
                const div = document.createElement('div');
                div.className = "animate-fade-in bg-white p-4 rounded-lg border-l-2 border-teatro-gold shadow-sm";
                div.innerHTML = `
                    <p class="font-serif text-teatro-warm/90 italic mb-2 text-lg">"${msg.message}"</p>
                    <div class="flex justify-between items-end">
                        <span class="font-sans text-xs font-bold text-teatro-gold uppercase tracking-wider">${msg.name}</span>
                        <span class="text-[10px] text-teatro-beige/60 uppercase tracking-wider">${new Date(msg.created_at).toLocaleDateString()}</span>
                    </div>
                `;
                feed.appendChild(div);
            });
        }
    } catch (err) {
        console.warn("Error fetching blessings", err);
    }
}

function initForms() {
    // Song Request
    document.getElementById('song-form').addEventListener('submit', async (e) => {
        e.preventDefault();
        const btn = document.getElementById('song-submit');
        const originalText = btn.textContent;
        btn.textContent = "Sending...";
        btn.disabled = true;

        const formData = new FormData(e.target);

        try {
            if (supabaseClient) {
                const { error } = await supabaseClient.from('song_requests').insert([{
                    name: formData.get('name'),
                    song: formData.get('song'),
                    artist: formData.get('artist'),
                    event: formData.get('event'),
                    submitted_at: new Date()
                }]);
                if (error) throw error;
            }

            btn.textContent = "Request Sent!";
            e.target.reset();
            setTimeout(() => {
                btn.textContent = originalText;
                btn.disabled = false;
            }, 3000);
        } catch (error) {
            console.error(error);
            alert("Error submitting request.");
            btn.textContent = originalText;
            btn.disabled = false;
        }
    });

    // Blessings
    document.getElementById('blessing-form').addEventListener('submit', async (e) => {
        e.preventDefault();
        const btn = document.getElementById('blessing-submit');
        const originalText = btn.innerHTML;
        btn.textContent = "Sending...";
        btn.disabled = true;

        const name = document.getElementById('blessing-name').value;
        const message = document.getElementById('blessing-message').value;

        try {
            if (supabaseClient) {
                const { error } = await supabaseClient.from('blessings').insert([{
                    name,
                    message
                }]);
                if (error) throw error;

                // Refresh feed
                fetchBlessings();
            }

            btn.textContent = "Sent!";
            document.getElementById('blessing-form').reset();
            setTimeout(() => {
                btn.innerHTML = originalText;
                btn.disabled = false;
                lucide.createIcons(); // Re-init icons for the button
            }, 2000);
        } catch (error) {
            console.error(error);
            alert("Error sending blessing.");
            btn.innerHTML = originalText;
            btn.disabled = false;
        }
    });

    // RSVP
    document.getElementById('rsvp-form').addEventListener('submit', async (e) => {
        e.preventDefault();
        const btn = document.getElementById('rsvp-submit');
        const originalText = btn.textContent;
        btn.textContent = "Submitting...";
        btn.disabled = true;

        const formData = new FormData(e.target);

        try {
            if (supabaseClient) {
                const { error } = await supabaseClient.from('rsvps').insert([{
                    name: formData.get('name'),
                    email: formData.get('email'),
                    attendance: formData.get('attendance'),
                    message: formData.get('message'),
                    submitted_at: new Date()
                }]);
                if (error) throw error;
            }

            btn.textContent = "Attendance Confirmed!";
            e.target.reset();
            // Reset styles
            document.querySelectorAll('input[name="attendance"]').forEach(r => updateRsvpStyles(r));
        } catch (error) {
            console.error(error);
            alert("Error submitting RSVP.");
            btn.textContent = originalText;
            btn.disabled = false;
        }
    });
}
