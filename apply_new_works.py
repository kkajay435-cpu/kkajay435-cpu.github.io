import re, os, shutil

index_path = '/Users/mac/Documents/web/index.html'
with open(index_path, 'r', encoding='utf-8') as f:
    html = f.read()

# 1. Update project tiles in featured-work
new_tiles = '''    <div class="project-tiles">
      <!-- Row 1: Flyro Russia & Afrin Dubai -->
      <div class="tiles-row">
        <a class="project-tile tile-wide" href="#playground" aria-label="Open Flyro Holidays Russia Campaign">
          <div class="cs-hero-mock tile-mock cs-mock-ipad">
            <div class="cs-hero-zoom">
              <img class="cs-hero-plate" src="/assets/works/work-flyro-russia.png" alt="Flyro Holidays — Discover Russia Campaign" style="object-fit:cover;width:100%;height:100%;">
            </div>
          </div>
          <div class="tile-overlay">
            <p class="tile-overlay-title">Flyro Holidays</p>
            <p class="tile-overlay-subtitle">Discover Russia holiday &amp; visa campaign<br class="tile-break"> for Flyro Holidays (Kerala &amp; Delhi).</p>
          </div>
        </a>
        <a class="project-tile tile-narrow" href="#playground" aria-label="Open Afrin Dubai Luxury Living">
          <div class="cs-hero-mock tile-mock cs-mock-phone">
            <div class="cs-hero-zoom">
              <img class="cs-hero-plate" src="/assets/works/work-afrin-dubai.jpg" alt="Afrin — Luxury Construction Dubai" style="object-fit:cover;width:100%;height:100%;">
            </div>
          </div>
          <div class="tile-overlay">
            <p class="tile-overlay-title">Afrin Dubai</p>
            <p class="tile-overlay-subtitle">Luxury smart home villa construction<br class="tile-break"> advertising campaign in Dubai.</p>
          </div>
        </a>
      </div>

      <!-- Row 2: AC Construction & Snoshers Musical Night -->
      <div class="tiles-row">
        <a class="project-tile tile-narrow" href="#playground" aria-label="Open AC Architecture & Construction">
          <div class="cs-hero-mock tile-mock cs-mock-ex">
            <div class="cs-hero-zoom">
              <img class="cs-hero-plate" src="/assets/works/work-ac-construction.jpg" alt="AC Construction — Built for Strength" style="object-fit:cover;width:100%;height:100%;">
            </div>
          </div>
          <div class="tile-overlay">
            <p class="tile-overlay-title">AC Architecture</p>
            <p class="tile-overlay-subtitle">Built for strength brand campaign<br class="tile-break"> and architectural miniature concept.</p>
          </div>
        </a>
        <a class="project-tile tile-wide" href="#playground" aria-label="Open Snoshers Musical Night">
          <div class="cs-hero-mock tile-mock cs-mock-watch">
            <div class="cs-hero-zoom">
              <img class="cs-hero-plate" src="/assets/works/work-snoshers-concert.jpg" alt="Snoshers Noodles — Musical Night Poster" style="object-fit:cover;width:100%;height:100%;">
            </div>
          </div>
          <div class="tile-overlay">
            <p class="tile-overlay-title">Snoshers Musical Night</p>
            <p class="tile-overlay-subtitle">Official festival launch &amp; live concert<br class="tile-break"> event poster design.</p>
          </div>
        </a>
      </div>

      <!-- Row 3: V-Care Dental & Wepack Packaging -->
      <div class="tiles-row">
        <a class="project-tile tile-wide" href="#playground" aria-label="Open V-Care Dental Campaign">
          <div class="cs-hero-mock tile-mock cs-mock-ipad">
            <div class="cs-hero-zoom">
              <img class="cs-hero-plate" src="/assets/works/work-vcare-dental.jpg" alt="V-Care Dental Hub Healthcare Campaign" style="object-fit:cover;width:100%;height:100%;">
            </div>
          </div>
          <div class="tile-overlay">
            <p class="tile-overlay-title">V-Care Dental Hub</p>
            <p class="tile-overlay-subtitle">Creative 3D character healthcare campaign<br class="tile-break"> &amp; clinic booking advertisement.</p>
          </div>
        </a>
        <a class="project-tile tile-narrow" href="#playground" aria-label="Open Wepack Packaging">
          <div class="cs-hero-mock tile-mock cs-mock-phone">
            <div class="cs-hero-zoom">
              <img class="cs-hero-plate" src="/assets/playground/pg-wepack-packaging.jpg" alt="Wepack Packaging and Branding" style="object-fit:cover;width:100%;height:100%;">
            </div>
          </div>
          <div class="tile-overlay">
            <p class="tile-overlay-title">Wepack Packaging</p>
            <p class="tile-overlay-subtitle">Luxury rigid box packaging &amp;<br class="tile-break"> gold foil identity design.</p>
          </div>
        </a>
      </div>
    </div>'''

html = re.sub(
    r'<div class=\"project-tiles\">[\s\S]*?</div>\s*</section>',
    new_tiles + '\n  </section>',
    html,
    count=1
)

# 2. Update Playground DATA Array with all 5 uploaded works at the top
new_data = '''      var DATA = [
        { src:'/assets/works/work-flyro-russia.png',      type:'img', title:'Discover Russia',          tool:'Flyro Holidays · 2025',         desc:'International tourism ad campaign and visa service poster for Flyro Holidays (Kerala & Delhi).' },
        { src:'/assets/works/work-afrin-dubai.jpg',       type:'img', title:'Afrin Dubai Luxury',       tool:'Afrin Construction · 2026',    desc:'Residential and commercial luxury villa construction marketing campaign in Dubai, UAE.' },
        { src:'/assets/works/work-ac-construction.jpg',   type:'img', title:'Built for Strength',       tool:'AC Architecture · 2025',       desc:'Architectural miniature diorama and brand campaign: Creating structures that stand strong for years to come.' },
        { src:'/assets/works/work-snoshers-concert.jpg',  type:'img', title:'Snoshers Musical Night',   tool:'Snoshers Noodles · 2025',      desc:'Official Diwali musical launch festival poster featuring Syd Hadi Om & Saeed Kurikkal at Nvio Park.' },
        { src:'/assets/works/work-vcare-dental.jpg',      type:'img', title:'V-Care Dental Campaign',   tool:'V-Care Dental Hub · 2025',      desc:'Creative 3D character healthcare campaign in Malayalam highlighting inner dental health and clinic bookings.' },
        { src:'/assets/playground/pg-wepack-packaging.jpg', type:'img', title:'Luxury Box Packaging',   tool:'Illustrator · Photoshop · 2025', desc:'Custom rigid box packaging and premium gold foil identity crafted for Wepack Packaging and Branding.' },
        { src:'/assets/playground/pg-beyond-ad.jpg',      type:'img', title:'Beyond Digital Ad',        tool:'Photoshop · Illustrator · 2026', desc:'High-impact social media advertising posters and digital campaign visual suite for Beyond Digital Marketing UAE.' },
        { src:'/assets/playground/pg-bloomsolve-brand.jpg', type:'img', title:'BloomSolve Stationery',  tool:'Illustrator · Figma · 2024',    desc:'Comprehensive corporate visual identity system, embossed stationery, business cards, and brand guidelines.' },
        { src:'/assets/playground/pg-swiss-typography.jpg', type:'img', title:'Swiss Typography Poster', tool:'Photoshop · InDesign · 2025',   desc:'International typographic poster study exploring architectural grid systems, high-contrast palette, and Bauhaus structure.' },
        { src:'/assets/playground/pg-streetwear-merch.jpg', type:'img', title:'Cyberpunk Streetwear',   tool:'Photoshop · Illustrator · 2025', desc:'Custom urban streetwear t-shirt graphics, screen-print artwork, and branded merchandise design.' }
      ];'''

html = re.sub(
    r'var DATA = \[[\s\S]*?\];',
    new_data,
    html,
    count=1
)

# 3. Update About page photos with the uploaded works
new_about_photos = '''          <div class="ai-photos">
            <figure class="ai-polaroid p1"><span class="ai-card"><span class="ai-photo"><img loading="lazy" decoding="async" src="/assets/works/work-flyro-russia.png" alt="Flyro Holidays Russia Campaign"></span></span></figure>
            <figure class="ai-polaroid p2"><span class="ai-card"><span class="ai-photo"><img loading="lazy" decoding="async" src="/assets/works/work-afrin-dubai.jpg" alt="Afrin Dubai Luxury Living"></span></span></figure>
            <figure class="ai-polaroid p3"><span class="ai-card"><span class="ai-photo"><img loading="lazy" decoding="async" src="/assets/works/work-vcare-dental.jpg" alt="V-Care Dental Healthcare campaign"></span></span></figure>
            <figure class="ai-polaroid p4"><span class="ai-card"><span class="ai-photo"><img loading="lazy" decoding="async" src="/assets/imgProfilePicture.jpg" alt="Portrait of Ajay K K" fetchpriority="high"></span></span></figure>

            <button type="button" class="ai-photos-reset" aria-label="Reset photo positions" title="Reset photos">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M3 12a9 9 0 1 0 3-6.7L3 8"></path>
                <path d="M3 3v5h5"></path>
              </svg>
            </button>
          </div>'''

html = re.sub(
    r'<div class=\"ai-photos\">[\s\S]*?</div>\s*</div>\s*</div>',
    new_about_photos + '\n        </div>\n       </div>',
    html,
    count=1
)

with open(index_path, 'w', encoding='utf-8') as f:
    f.write(html)

# Sync all routes
web_dir = '/Users/mac/Documents/web'
routes = ['playground', 'about', 'work/hatcha', 'work/fireflut', 'work/existence', 'work/jumpable']
for r in routes:
    d = os.path.join(web_dir, r)
    shutil.copy2(index_path, os.path.join(d, 'index.html'))
shutil.copy2(index_path, os.path.join(web_dir, 'playground.html'))

print('Applied all 5 new work images to Works, Playground, and About!')
