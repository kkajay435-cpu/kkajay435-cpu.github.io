import re, os, shutil

index_path = '/Users/mac/Documents/web/index.html'
with open(index_path, 'r', encoding='utf-8') as f:
    text = f.read()

new_seo = '''  <!--SEO:START-->
  <title>Playground — Design &amp; Graphic Experiments | Ajay K K</title>
  <meta name="description" content="Interactive visual experiments, packaging design, branding studies, and typography — where design meets impact. A graphic designer's playground by Ajay K K.">
  <link rel="canonical" href="/playground">
  <meta name="theme-color" content="#fff9f1">
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="Ajay K K">
  <meta property="og:title" content="Playground — Design &amp; Graphic Experiments | Ajay K K">
  <meta property="og:description" content="Interactive visual experiments, packaging design, branding studies, and typography — where design meets impact. A graphic designer's playground by Ajay K K.">
  <meta property="og:url" content="/playground">
  <meta property="og:image" content="/assets/imgProfilePicture.jpg">
  <meta property="og:image:width" content="856">
  <meta property="og:image:height" content="1024">
  <meta property="og:image:alt" content="Ajay K K — Graphics Designer, Kozhikode, Kerala">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="Playground — Design &amp; Graphic Experiments | Ajay K K">
  <meta name="twitter:description" content="Interactive visual experiments, packaging design, branding studies, and typography — where design meets impact. A graphic designer's playground by Ajay K K.">
  <meta name="twitter:image" content="/assets/imgProfilePicture.jpg">
  <script type="application/ld+json">
  {"@context":"https://schema.org","@graph":[{"@type":"Person","@id":"#person","name":"Ajay K K","jobTitle":"Graphics Designer","url":"/","image":"/assets/imgProfilePicture.jpg","address":{"@type":"PostalAddress","addressLocality":"Kozhikode","addressRegion":"Kerala","addressCountry":"India"},"sameAs":["https://www.behance.net/ajayk14"],"knowsAbout":["Graphic Design","Packaging Design","Brand Identity","Typography","Poster Design","Illustration"],"description":"Independent graphic designer in Kozhikode, Kerala — specializing in branding, packaging, poster design, and visual identity."}]}
  </script>
  <!--SEO:END-->'''

text = re.sub(r'<!--SEO:START-->[\s\S]*?<!--SEO:END-->', new_seo, text)
text = re.sub(r'href="https://www\.awwwards\.com[^"]*"', 'href="https://www.behance.net/ajayk14"', text)

with open(index_path, 'w', encoding='utf-8') as f:
    f.write(text)

web_dir = '/Users/mac/Documents/web'
routes = ['playground', 'about', 'work/hatcha', 'work/fireflut', 'work/existence', 'work/jumpable']
for r in routes:
    d = os.path.join(web_dir, r)
    shutil.copy2(index_path, os.path.join(d, 'index.html'))
shutil.copy2(index_path, os.path.join(web_dir, 'playground.html'))

print('Cleaned SEO and synced all subpages!')
