import re

with open('/Users/mac/Documents/web/index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# 1. Hero text
html = re.sub(
    r'<p class=\"hero-eyebrow\">[\s\S]*?Hello, I&rsquo;m[\s\S]*?</p>',
    '<p class="hero-eyebrow">\n      <img src="/assets/imgEllipse14.svg" alt="">\n      Hello, I&rsquo;m Ajay K K. A &ndash;\n    </p>',
    html
)

html = re.sub(
    r'<span class=\"sr-only\">[\s\S]*?</span>\s*<!-- inside h1[\s\S]*?<span class=\"hero-vertical\"[^>]*>[\s\S]*?</span>\s*<span class=\"h-line multidisciplinary\">[\s\S]*?</span>\s*<span class=\"h-line designer\" id=\"scramble\">[\s\S]*?</span>',
    '<span class="sr-only">Ajay K K, Graphics Designer in Kozhikode, Kerala — </span>\n      <span class="hero-vertical" aria-hidden="true">BRAND / PRINT / VECTOR</span>\n      <span class="h-line multidisciplinary">Designer who</span>\n      <span class="h-line designer" id="scramble">Brands</span>',
    html
)

html = re.sub(
    r'<p class=\"rec-title\">[\s\S]*?</p>',
    '<p class="rec-title">Creative Soundtrack</p>',
    html,
    count=1
)

# 2. Intro copy
new_intro = '''    <div class="intro-copy">
      <p class="intro-type">I am a designer driven by a deep passion for design strategy, illustration, and typography. With a proven track record in graphic design across digital marketing and packaging, I create meaningful visual solutions that align user needs with business goals.</p>
      <p class="bold intro-type">My strength lies in transforming complex problems into clear, impactful designs that feel both intuitive and inspiring.</p>
    </div>'''

html = re.sub(
    r'<div class=\"intro-copy\">[\s\S]*?</div>\s*</section>',
    new_intro + '\n  </section>',
    html,
    count=1
)

# 3. Featured Heading
html = re.sub(
    r'<h2 class=\"featured-heading\">[\s\S]*?</h2>',
    '<h2 class="featured-heading">Selected Graphic &amp; Brand Projects</h2>',
    html,
    count=1
)

# 4. Featured Tiles
new_tiles = '''    <div class="project-tiles">
      <div class="tiles-row">
        <a class="project-tile tile-wide" href="#playground" aria-label="Open Wepack Packaging study">
          <div class="cs-hero-mock tile-mock cs-mock-ipad">
            <div class="cs-hero-zoom">
              <img class="cs-hero-plate" src="/assets/playground/pg-wepack-packaging.jpg" alt="Wepack — Brand & Box Packaging Design" style="object-fit:cover;width:100%;height:100%;">
            </div>
          </div>
          <div class="tile-overlay">
            <p class="tile-overlay-title">Wepack Packaging</p>
            <p class="tile-overlay-subtitle">Luxury rigid box packaging, paper bags &amp;<br class="tile-break"> merchandise branding.</p>
          </div>
        </a>
        <a class="project-tile tile-narrow" href="#playground" aria-label="Open Beyond Digital campaign">
          <div class="cs-hero-mock tile-mock cs-mock-phone">
            <div class="cs-hero-zoom">
              <img class="cs-hero-plate" src="/assets/playground/pg-beyond-ad.jpg" alt="Beyond Digital Marketing — Social & Ad Campaign" style="object-fit:cover;width:100%;height:100%;">
            </div>
          </div>
          <div class="tile-overlay">
            <p class="tile-overlay-title">Beyond Digital UAE</p>
            <p class="tile-overlay-subtitle">High-impact social media creatives, ad campaign<br class="tile-break"> &amp; promotional posters.</p>
          </div>
        </a>
      </div>
      <div class="tiles-row">
        <a class="project-tile tile-narrow" href="#playground" aria-label="Open BloomSolve branding">
          <div class="cs-hero-mock tile-mock cs-mock-ex">
            <div class="cs-hero-zoom">
              <img class="cs-hero-plate" src="/assets/playground/pg-bloomsolve-brand.jpg" alt="BloomSolve — Corporate Identity System" style="object-fit:cover;width:100%;height:100%;">
            </div>
          </div>
          <div class="tile-overlay">
            <p class="tile-overlay-title">BloomSolve Branding</p>
            <p class="tile-overlay-subtitle">Corporate visual identity system, embossed stationery<br class="tile-break"> &amp; logo suite.</p>
          </div>
        </a>
        <a class="project-tile tile-wide" href="#playground" aria-label="Open Grand Hypermarket campaign">
          <div class="cs-hero-mock tile-mock cs-mock-watch">
            <div class="cs-hero-zoom">
              <img class="cs-hero-plate" src="/assets/playground/pg-retail-campaign.jpg" alt="Grand Hyper Market — Retail Campaign" style="object-fit:cover;width:100%;height:100%;">
            </div>
          </div>
          <div class="tile-overlay">
            <p class="tile-overlay-title">Grand Hyper Market</p>
            <p class="tile-overlay-subtitle">Retail advertising, promotional in-store artwork<br class="tile-break"> &amp; seasonal campaigns.</p>
          </div>
        </a>
      </div>
    </div>'''

html = re.sub(
    r'<div class=\"project-tiles\">[\s\S]*?</div>\s*</div>\s*</section>',
    new_tiles + '\n  </section>',
    html,
    count=1
)

# 5. Testimonials
new_testimonials = '''      <div class="t-cards" id="t-cards">
        <!-- front / centre of the stack -->
        <figure class="t-card t-card--front" style="--pos: 0; z-index: 3;">
          <img class="t-quoteicon" src="/assets/t-quote.svg" alt="" aria-hidden="true">
          <blockquote class="t-quote">Ajay is a detailed and highly creative graphic designer with an exceptional eye for typography, packaging, and visual identity. His ability to translate marketing concepts into high-converting visual assets helped our campaigns succeed across multiple UAE and international client accounts.</blockquote>
          <hr class="t-divider">
          <figcaption class="t-author">
            <div class="t-authorrow">
              <img class="t-avatar" src="/assets/t-jared-bell.jpeg" alt="Creative Lead">
              <span class="t-name">Creative Director</span>
            </div>
            <span class="t-role">Beyond Digital Marketing (UAE)</span>
          </figcaption>
        </figure>
        <!-- right of the stack -->
        <figure class="t-card t-card--side" style="--pos: 1; z-index: 2;">
          <img class="t-quoteicon" src="/assets/t-quote.svg" alt="" aria-hidden="true">
          <blockquote class="t-quote">Working with Ajay on packaging and branding was an absolute pleasure. He understands structural packaging, dielines, and prepress production, delivering standout box and print merchandise designs that elevated our clients&rsquo; product launches.</blockquote>
          <hr class="t-divider">
          <figcaption class="t-author">
            <div class="t-authorrow">
              <img class="t-avatar" src="/assets/t-roopam-mishra.jpeg" alt="Production Lead">
              <span class="t-name">Production Head</span>
            </div>
            <span class="t-role">Wepack Packing and Branding</span>
          </figcaption>
        </figure>
        <!-- left of the stack -->
        <figure class="t-card t-card--side" style="--pos: -1; z-index: 1;">
          <img class="t-quoteicon" src="/assets/t-quote.svg" alt="" aria-hidden="true">
          <blockquote class="t-quote">Ajay brings strong creative thinking, fresh ideas, and fast turnaround. From retail promotions to digital marketing graphics, his visual solutions are always polished, impactful, and on-brand. He is a truly reliable design partner.</blockquote>
          <hr class="t-divider">
          <figcaption class="t-author">
            <div class="t-authorrow">
              <img class="t-avatar" src="/assets/t-anna-groat.jpeg" alt="Marketing Strategist">
              <span class="t-name">Marketing Lead</span>
            </div>
            <span class="t-role">BloomSolve Digital Marketing</span>
          </figcaption>
        </figure>
      </div>'''

html = re.sub(
    r'<div class=\"t-cards\" id=\"t-cards\">[\s\S]*?</div>\s*</div>\s*</section>',
    new_testimonials + '\n    </div>\n  </section>',
    html,
    count=1
)

# 6. About Page Content
new_about_intro = '''    <section class="about-intro" aria-label="About Ajay K K">
      <div class="about-intro-stage">
       <div class="ai-scene" id="ai-scene">
        <img loading="lazy" decoding="async" class="ai-sun-clouds" src="/assets/about-sun-clouds.png" alt="" aria-hidden="true">

        <div class="ai-content">
          <div class="ai-copy">
            <h1 class="ai-heading">I craft visual identities, packaging &amp; typography that make brands unforgettable.</h1>
            <div class="ai-body">
              <p>I am a graphics designer based in Kozhikode, Kerala, driven by a deep passion for <strong>design strategy, illustration, and typography</strong>. With a proven track record across digital marketing agencies and packaging studios, I create meaningful visual solutions that align user needs with business goals.</p>
              <p>I bring strong creative thinking, fresh ideas, and the ability to view every challenge from the user&rsquo;s perspective. My strength lies in transforming complex problems into clear, impactful designs that feel both intuitive and inspiring &ndash; from luxury packaging boxes to high-impact ad campaigns.</p>
            </div>
          </div>

          <div class="ai-photos">
            <figure class="ai-polaroid p1"><span class="ai-card"><span class="ai-photo"><img loading="lazy" decoding="async" src="/assets/playground/pg-wepack-packaging.jpg" alt="Packaging design study"></span></span></figure>
            <figure class="ai-polaroid p2"><span class="ai-card"><span class="ai-photo"><img loading="lazy" decoding="async" src="/assets/playground/pg-swiss-typography.jpg" alt="Swiss typography poster"></span></span></figure>
            <figure class="ai-polaroid p3"><span class="ai-card"><span class="ai-photo"><img loading="lazy" decoding="async" src="/assets/playground/pg-beyond-ad.jpg" alt="Digital marketing campaign"></span></span></figure>
            <figure class="ai-polaroid p4"><span class="ai-card"><span class="ai-photo"><img loading="lazy" decoding="async" src="/assets/imgProfilePicture.jpg" alt="Portrait of Ajay K K" fetchpriority="high"></span></span></figure>

            <button type="button" class="ai-photos-reset" aria-label="Reset photo positions" title="Reset photos">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M3 12a9 9 0 1 0 3-6.7L3 8"></path>
                <path d="M3 3v5h5"></path>
              </svg>
            </button>
          </div>
        </div>
       </div>
      </div>
    </section>'''

html = re.sub(
    r'<section class=\"about-intro\"[\s\S]*?</section>',
    new_about_intro,
    html,
    count=1
)

new_experience = '''    <section class="about-exp" aria-label="Professional experience">
      <img loading="lazy" decoding="async" class="ai-land" src="/assets/about-land.png" alt="" aria-hidden="true">
      <div class="about-exp-stage">
        <p class="aexp-label">Professional Experience</p>

        <div class="aexp-list">
          <div class="aexp-divider"></div>

          <div class="aexp-item is-open">
            <button class="aexp-head" type="button" aria-expanded="true">
              <span class="aexp-company">
                <span class="aexp-name">Beyond Digital Marketing (UAE)</span>
                <span class="aexp-role">Graphics Designer</span>
              </span>
              <span class="aexp-meta">
                <span class="aexp-date">Jan 2026 &ndash; Present</span>
                <span class="aexp-toggle" aria-hidden="true"></span>
              </span>
            </button>
            <div class="aexp-panel">
              <div class="aexp-panel-inner">
                <p>Lead graphic designer creating comprehensive social media campaigns, print collateral, and visual identities for regional and international clients.</p>
                <ul class="aexp-bullets">
                  <li>Creating high-converting social media posters, visiting cards, brochures, logos, branding guidelines, and promotional flyers.</li>
                  <li>Designing ad creatives across varied formats, ensuring strict brand compliance, visual clarity, and high engagement metrics.</li>
                  <li>Collaborating directly with marketing strategists and copywriters to produce fast-turnaround creative assets for fast-paced digital campaigns.</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="aexp-divider"></div>

          <div class="aexp-item">
            <button class="aexp-head" type="button" aria-expanded="false">
              <span class="aexp-company">
                <span class="aexp-name">Wepack Packing And Branding</span>
                <span class="aexp-role">Graphics Designer</span>
              </span>
              <span class="aexp-meta">
                <span class="aexp-date">Jan 2025 &ndash; Sep 2025</span>
                <span class="aexp-toggle" aria-hidden="true"></span>
              </span>
            </button>
            <div class="aexp-panel">
              <div class="aexp-panel-inner">
                <p>Specialized in structural and visual packaging design, luxury gift boxes, print production, and brand merchandise.</p>
                <ul class="aexp-bullets">
                  <li>Designed custom visiting cards, brochures, logos, brand packaging, paper bag layouts, and product box packaging.</li>
                  <li>Created apparel merchandise graphics, t-shirt artwork, printing posters, creative event posters, and keychain designs.</li>
                  <li>Supervised print-ready files, color separations, die-lines, and material finishing options for flawless factory production.</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="aexp-divider"></div>

          <div class="aexp-item">
            <button class="aexp-head" type="button" aria-expanded="false">
              <span class="aexp-company">
                <span class="aexp-name">BloomSolve Digital Marketing</span>
                <span class="aexp-role">Graphics Designer</span>
              </span>
              <span class="aexp-meta">
                <span class="aexp-date">Jun 2024 &ndash; Dec 2024</span>
                <span class="aexp-toggle" aria-hidden="true"></span>
              </span>
            </button>
            <div class="aexp-panel">
              <div class="aexp-panel-inner">
                <p>Designed a wide range of marketing visuals, product illustrations, and campaign collateral using Adobe Photoshop and Illustrator.</p>
                <ul class="aexp-bullets">
                  <li>Created versatile graphics and layouts for product illustrations, social media posts, brand logos, and marketing flyers.</li>
                  <li>Conducted visual research and developed creative concepts aligned with client objectives and market trends.</li>
                  <li>Delivered multi-channel creative assets on strict deadlines while maintaining high aesthetic standards.</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="aexp-divider"></div>

          <div class="aexp-item">
            <button class="aexp-head" type="button" aria-expanded="false">
              <span class="aexp-company">
                <span class="aexp-name">Grand Hyper Market UAE (Calicut)</span>
                <span class="aexp-role">Graphics Designer</span>
              </span>
              <span class="aexp-meta">
                <span class="aexp-date">Jan 2024 &ndash; Jun 2024</span>
                <span class="aexp-toggle" aria-hidden="true"></span>
              </span>
            </button>
            <div class="aexp-panel">
              <div class="aexp-panel-inner">
                <p>Retail graphic designer planning promotional advertising, retail signage, and seasonal sales campaign collateral.</p>
                <ul class="aexp-bullets">
                  <li>Planned concepts by analyzing promotional requirements, illustrating examples of art arrangement, typography, and color palette.</li>
                  <li>Designed promotional posters, discount announcements, newspaper advertisements, and in-store visual displays.</li>
                  <li>Communicated with team leaders and print vendors about layout specifications, print formats, and quality control.</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="aexp-divider"></div>
        </div>
      </div>
    </section>'''

html = re.sub(
    r'<section class=\"about-exp\"[\s\S]*?</section>',
    new_experience,
    html,
    count=1
)

# 7. About Fun facts / Education & Tools
new_fun = '''    <section class="about-fun" aria-label="Education and Skills">
      <div class="aff-bg" aria-hidden="true"></div>
      <div class="about-fun-stage">

        <!-- Education Card -->
        <div class="ff-card b1 pos-lt ff-hikes">
          <div class="ff-hikes-label"><span class="k">Education</span><span class="y">&amp; Training</span></div>
          <div style="padding:24px;color:#1a1918;font-size:13px;line-height:1.5;">
            <p style="font-weight:700;margin-bottom:2px;">Image Creative Education (2023 &ndash; 2024)</p>
            <p style="color:#666;margin-bottom:12px;">Graphics Design and UI UX Design</p>
            <p style="font-weight:700;margin-bottom:2px;">JDT Islam Polytechnic (2020 &ndash; 2023)</p>
            <p style="color:#666;margin-bottom:12px;">Electronics Engineering</p>
            <p style="font-weight:700;margin-bottom:2px;">Govt ITI Koyilandy (2017 &ndash; 2018)</p>
            <p style="color:#666;">Mechanical Auto Electrical And Electronics</p>
          </div>
        </div>

        <!-- Software Skills Card -->
        <div class="ff-card b1 pos-ct ff-wk">
          <span class="ff-wk-friday">Software</span>
          <span class="ff-wk-dots"><i></i><i></i><i></i></span>
          <div class="ff-wk-panel">
            <div class="ff-wk-inner">
              <p class="ff-wk-title">Core Design Tools</p>
              <div class="ff-wk-list">
                <div class="r"><span class="cb"></span><span class="t">Adobe Photoshop (Ps)</span></div>
                <div class="r"><span class="cb"></span><span class="t">Adobe Illustrator (Ai)</span></div>
                <div class="r"><span class="cb"></span><span class="t">Adobe XD (Xd)</span></div>
                <div class="r"><span class="cb"></span><span class="t">Figma</span></div>
                <div class="r"><span class="cb"></span><span class="t">Packaging &amp; Die-Cut Layouts</span></div>
              </div>
            </div>
          </div>
        </div>

        <!-- Language Proficiency -->
        <div class="ff-card pos-rt ff-gully">
          <div class="ff-gully-pill" style="top:18px;">
            <span class="meta">
              <span class="a">Languages Known</span>
              <span class="b">Malayalam · English · Hindi</span>
            </span>
          </div>
          <div style="position:absolute;inset:60px 20px 20px;display:flex;flex-direction:column;justify-content:center;gap:12px;color:#fff;">
            <div><span style="font-size:12px;text-transform:uppercase;letter-spacing:1px;">Malayalam</span> <strong style="float:right;">100%</strong></div>
            <div style="height:6px;background:rgba(255,255,255,0.2);border-radius:3px;"><div style="width:100%;height:100%;background:#F4D24A;border-radius:3px;"></div></div>
            <div><span style="font-size:12px;text-transform:uppercase;letter-spacing:1px;">English</span> <strong style="float:right;">90%</strong></div>
            <div style="height:6px;background:rgba(255,255,255,0.2);border-radius:3px;"><div style="width:90%;height:100%;background:#F4D24A;border-radius:3px;"></div></div>
            <div><span style="font-size:12px;text-transform:uppercase;letter-spacing:1px;">Hindi</span> <strong style="float:right;">60%</strong></div>
            <div style="height:6px;background:rgba(255,255,255,0.2);border-radius:3px;"><div style="width:60%;height:100%;background:#F4D24A;border-radius:3px;"></div></div>
          </div>
        </div>

        <!-- Quote Card -->
        <div class="ff-card b1 pos-lb ff-quote">
          <div class="ff-quote-grid" aria-hidden="true"></div>
          <span class="ff-quote-mark" aria-hidden="true"><img loading="lazy" decoding="async" src="/assets/about-quote-mark.svg" alt=""></span>
          <p class="ff-quote-text"><span class="a">Design </span><span class="b">is thinking made </span><span class="c">visual.</span></p>
          <p class="ff-quote-cite">&ndash; saul bass</p>
          <span class="ff-quote-ruler" aria-hidden="true"><img loading="lazy" decoding="async" src="/assets/about-quote-ruler.svg" alt=""></span>
          <div class="ff-quote-spine" aria-hidden="true">
            <i>1</i><i>2</i><i>3</i><i>4</i><i>5</i><i>6</i><i>7</i>
          </div>
        </div>

        <!-- Contact details Card -->
        <div class="ff-card b1 pos-cb ff-blog">
          <p class="ff-blog-title" style="padding:16px 20px 4px;">Direct Contact</p>
          <div style="padding:0 20px;font-size:13px;line-height:1.6;color:#333;">
            <p><strong>Phone:</strong> 7356511350 | 8848168060</p>
            <p><strong>Email:</strong> kkajay4352@gmail.com</p>
            <p><strong>Location:</strong> Kozhikode, Kerala</p>
          </div>
          <div class="ff-blog-foot">
            <span class="rl">View Behance Portfolio</span>
            <span class="rl-icon" aria-hidden="true"></span>
          </div>
          <a class="ff-blog-link" href="https://www.behance.net/ajayk14" target="_blank" rel="noopener noreferrer" aria-label="View Behance portfolio"></a>
        </div>

        <!-- Skills Summary Card -->
        <div class="ff-card pos-rb ff-starry" style="background:#131d31;">
          <div style="padding:24px;color:#fff;">
            <span style="font-size:11px;letter-spacing:1px;text-transform:uppercase;color:#F4D24A;">Specialties</span>
            <h3 style="font-size:20px;margin:8px 0 14px;font-weight:400;font-family:'DM Serif Display',serif;">Core Skills</h3>
            <ul style="font-size:13px;line-height:1.8;padding-left:16px;color:rgba(255,255,255,0.85);">
              <li>Content Planning</li>
              <li>Graphics Designing</li>
              <li>Illustration Designing</li>
              <li>Poster Designing</li>
              <li>Logo Designing</li>
              <li>Packaging &amp; Branding</li>
            </ul>
          </div>
        </div>

      </div>
    </section>'''

html = re.sub(
    r'<section class=\"about-fun\"[\s\S]*?</section>',
    new_fun,
    html,
    count=1
)

# 8. Playground lead
html = re.sub(
    r'<p class=\"pgf-lead\">[\s\S]*?</p>',
    '<p class="pgf-lead">A curated collection of graphic design studies in branding, packaging, typography, poster art, and visual identity &ndash; where strategy meets imagination.</p>',
    html,
    count=1
)

# 9. Playground DATA Array
new_data = '''      var DATA = [
        { src:'/assets/playground/pg-wepack-packaging.jpg', type:'img', title:'Luxury Box Packaging', tool:'Illustrator · Photoshop · 2025', desc:'Custom rigid box packaging and premium gold foil identity crafted for Wepack Packaging and Branding.' },
        { src:'/assets/playground/pg-beyond-ad.jpg', type:'img', title:'Beyond Digital Ad Campaign', tool:'Photoshop · Illustrator · 2026', desc:'High-impact social media advertising posters and digital campaign visual suite for Beyond Digital Marketing UAE.' },
        { src:'/assets/playground/pg-bloomsolve-brand.jpg', type:'img', title:'BloomSolve Brand Stationery', tool:'Illustrator · Figma · 2024', desc:'Comprehensive corporate visual identity system, embossed stationery, business cards, and brand guidelines.' },
        { src:'/assets/playground/pg-swiss-typography.jpg', type:'img', title:'Swiss Typography Poster', tool:'Photoshop · InDesign · 2025', desc:'International typographic poster study exploring architectural grid systems, high-contrast palette, and Bauhaus structure.' },
        { src:'/assets/playground/pg-retail-campaign.jpg', type:'img', title:'Hypermarket Summer Campaign', tool:'Photoshop · Illustrator · 2024', desc:'Promotional retail poster design, dynamic seasonal typography, and discount campaign collateral for Grand Hyper Market.' },
        { src:'/assets/playground/pg-coffee-packaging.jpg', type:'img', title:'Artisan Coffee Packaging', tool:'Illustrator · Photoshop · 2025', desc:'Eco-friendly craft pouch packaging with custom botanical line illustration and gold-foil emblem.' },
        { src:'/assets/playground/pg-streetwear-merch.jpg', type:'img', title:'Cyberpunk Streetwear Merch', tool:'Photoshop · Illustrator · 2025', desc:'Custom urban streetwear t-shirt graphics, screen-print artwork, and branded merchandise design.' },
        { src:'/assets/playground/pg-logo-identity.jpg', type:'img', title:'Geometric Logo Suite', tool:'Illustrator · 2024', desc:'Precision grid-based logo exploration showcasing monogram construction, golden-ratio balance, and brand icons.' },
        { src:'/assets/playground/pg-neon-event.jpg', type:'img', title:'Neon Music Festival Poster', tool:'Photoshop · Illustrator · 2025', desc:'Vibrant cyberpunk electronic music festival poster featuring glowing duotone gradients and futuristic display type.' },
        { src:'/assets/playground/pg-vector-workspace.jpg', type:'img', title:'Creative Workspace Illustration', tool:'Illustrator · 2024', desc:'Detailed isometric vector artwork and creative workspace illustration created for digital editorial layouts.' }
      ];'''

html = re.sub(
    r'var DATA = \[[\s\S]*?\];',
    new_data,
    html,
    count=1
)

# 10. Word roll array
html = re.sub(
    r"const WORDS = \['Builds', 'Codes', 'Ships', 'Solves'\];",
    "const WORDS = ['Brands', 'Creates', 'Crafts', 'Designs'];",
    html,
    count=1
)

# 11. Route titles
new_route_titles = '''      const ROUTE_TITLES = {
        '#about': 'About Ajay K K — Graphics Designer, Kozhikode, Kerala',
        '#playground': 'Playground — Design & Graphic Experiments | Ajay K K',
        '#hatcha': 'Wepack — Brand & Packaging Design | Ajay K K',
        '#fireflut': 'Beyond Digital — Advertising & Social Media | Ajay K K',
        '#existence': 'BloomSolve — Corporate Identity System | Ajay K K',
        '#jumpable': 'Grand Hyper Market — Retail Campaign | Ajay K K',
      };'''

html = re.sub(
    r'const ROUTE_TITLES = \{[\s\S]*?\};',
    new_route_titles,
    html,
    count=1
)

# 12. Replace any lingering Zainab occurrences
html = html.replace('Zainab Kabira', 'Ajay K K')
html = html.replace('Zainab', 'Ajay')
html = html.replace('Kabira', 'K K')

with open('/Users/mac/Documents/web/index.html', 'w', encoding='utf-8') as f:
    f.write(html)

print('Updated index.html with Ajay K K CV content and Graphic Design images successfully!')
