import re, os, shutil

web_dir = '/Users/mac/Documents/web'
index_path = os.path.join(web_dir, 'index.html')

with open(index_path, 'r', encoding='utf-8') as f:
    base_text = f.read()

# Route-specific metadata
route_meta = {
    'home': {
        'title': 'Ajay K K — Graphics Designer &amp; Brand Strategist | Portfolio',
        'desc': 'Independent graphic designer in Kozhikode, Kerala — specializing in branding, packaging, poster design, and visual identity. Explore selected works and brand systems.',
        'canonical': '/'
    },
    'about': {
        'title': 'About — Ajay K K | Independent Graphics Designer',
        'desc': 'Independent graphic designer in Kozhikode, Kerala — specializing in branding, packaging, poster design, and visual identity.',
        'canonical': '/about'
    },
    'playground': {
        'title': 'Playground — Design &amp; Graphic Experiments | Ajay K K',
        'desc': 'Interactive visual experiments, packaging design, branding studies, and typography — where design meets impact. A graphic designer\'s playground by Ajay K K.',
        'canonical': '/playground'
    },
    'work': {
        'title': 'Work — Selected Projects &amp; Brand Systems | Ajay K K',
        'desc': 'Explore brand identity, packaging design, editorial layout, and visual design projects by Ajay K K.',
        'canonical': '/#work'
    },
    'work/hatcha': {
        'title': 'Hatcha Matcha — Brand Identity &amp; Packaging | Ajay K K',
        'desc': 'Artisan Japanese matcha brand identity and packaging design system by Ajay K K.',
        'canonical': '/work/hatcha'
    },
    'work/fireflut': {
        'title': 'FireFlut — Brand Identity &amp; Packaging | Ajay K K',
        'desc': 'Flame-crafted flavor brand identity and packaging design system by Ajay K K.',
        'canonical': '/work/fireflut'
    },
    'work/existence': {
        'title': 'Existence — Exhibition Catalog &amp; Editorial | Ajay K K',
        'desc': 'Editorial typography and exhibition catalog design by Ajay K K.',
        'canonical': '/work/existence'
    },
    'work/jumpable': {
        'title': 'Jumpable — Sports App UX/UI | Ajay K K',
        'desc': 'High-performance jump rope app UX/UI and motion design by Ajay K K.',
        'canonical': '/work/jumpable'
    }
}

def make_seo(meta):
    return f'''  <!--SEO:START-->
  <title>{meta['title']}</title>
  <meta name="description" content="{meta['desc']}">
  <link rel="canonical" href="{meta['canonical']}">
  <meta name="theme-color" content="#fff9f1">
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="Ajay K K">
  <meta property="og:title" content="{meta['title']}">
  <meta property="og:description" content="{meta['desc']}">
  <meta property="og:url" content="{meta['canonical']}">
  <meta property="og:image" content="/assets/imgProfilePicture.jpg">
  <meta property="og:image:width" content="856">
  <meta property="og:image:height" content="1024">
  <meta property="og:image:alt" content="Ajay K K — Graphics Designer, Kozhikode, Kerala">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="{meta['title']}">
  <meta name="twitter:description" content="{meta['desc']}">
  <meta name="twitter:image" content="/assets/imgProfilePicture.jpg">
  <script type="application/ld+json">
  {{"@context":"https://schema.org","@graph":[{{"@type":"Person","@id":"#person","name":"Ajay K K","jobTitle":"Graphics Designer","url":"/","image":"/assets/imgProfilePicture.jpg","address":{{"@type":"PostalAddress","addressLocality":"Kozhikode","addressRegion":"Kerala","addressCountry":"India"}},"sameAs":["https://www.behance.net/ajayk14"],"knowsAbout":["Graphic Design","Packaging Design","Brand Identity","Typography","Poster Design","Illustration"],"description":"Independent graphic designer in Kozhikode, Kerala — specializing in branding, packaging, poster design, and visual identity."}}]}}
  </script>
  <!--SEO:END-->'''

# Ensure index.html has home SEO
home_seo = make_seo(route_meta['home'])
index_content = re.sub(r'<!--SEO:START-->[\s\S]*?<!--SEO:END-->', home_seo, base_text)
with open(index_path, 'w', encoding='utf-8') as f:
    f.write(index_content)

# Sync to all route folders
routes = ['playground', 'about', 'work', 'work/hatcha', 'work/fireflut', 'work/existence', 'work/jumpable']
for r in routes:
    d = os.path.join(web_dir, r)
    os.makedirs(d, exist_ok=True)
    meta = route_meta.get(r, route_meta['home'])
    r_seo = make_seo(meta)
    page_content = re.sub(r'<!--SEO:START-->[\s\S]*?<!--SEO:END-->', r_seo, index_content)
    with open(os.path.join(d, 'index.html'), 'w', encoding='utf-8') as f:
        f.write(page_content)

# Also sync playground.html
pg_seo = make_seo(route_meta['playground'])
with open(os.path.join(web_dir, 'playground.html'), 'w', encoding='utf-8') as f:
    f.write(re.sub(r'<!--SEO:START-->[\s\S]*?<!--SEO:END-->', pg_seo, index_content))

print('Cleaned SEO and synced all subpages with proper portfolio & route metadata!')
