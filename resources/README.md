# AssamStudyHub Resources

## Folder Structure

This folder contains organized resources for AssamStudyHub project:

### 📁 Folders

- **`html/`** - Static HTML UI file
  - `index.html` - Complete standalone HTML page with embedded CSS and JavaScript for SEBA board solutions

- **`nextjs-app/`** - Next.js application files
  - `app/` - Next.js app directory with page components
  - `components/` - Reusable React components
  - `lib/` - Utility functions and data structures
  - Configuration files (jsconfig.json, next.config.mjs)

## File Descriptions

### HTML Resources
- **index.html** - A complete, self-contained educational portal UI featuring:
  - Class selection sidebar (Classes 1-10)
  - Subject cards with interactive Q&A sections
  - Sample content for Science, English, Mathematics, Assamese, Hindi, and Social Studies
  - Fully responsive design with mobile optimization

### Next.js Application

#### Pages
- **page.js** - Homepage with featured chapters and class browsing
- **class/[classSlug]/page.js** - Class landing page with subject list
- **class/[classSlug]/subject/[subjectSlug]/page.js** - Subject page with chapters
- **class/[classSlug]/subject/[subjectSlug]/chapter/[chapterSlug]/page.js** - Individual chapter with Q&A
- **search/page.js** - Search results page

#### Components
- **Header.js** - Navigation header with class links
- **Footer.js** - Footer with site information
- **SectionTitle.js** - Reusable section title component
- **Card.js** - Reusable card component for classes and chapters

#### Configuration
- **jsconfig.json** - Base URL configuration for imports
- **next.config.mjs** - Next.js configuration
- **lib/siteData.js** - Site structure data (classes, subjects, chapters)

## How to Use

### Static HTML
1. Open `html/index.html` in any modern web browser
2. Interactive class and subject selection works without any build process

### Next.js Application
1. Copy all files from `nextjs-app/` to your project
2. Install dependencies: `npm install`
3. Run development server: `npm run dev`
4. Visit `http://localhost:3000`

## Features

✅ Class-wise organization (Classes 1-10)
✅ Subject-based navigation
✅ Chapter-wise solutions with Q&A format
✅ Responsive design for mobile and desktop
✅ Search functionality
✅ PDF download indicators
✅ Related chapters linking
✅ SEO-friendly structure

## Technologies Used

- **Frontend**: HTML5, CSS3, JavaScript (vanilla)
- **Framework**: Next.js 14+
- **Styling**: CSS Grid, Flexbox
- **Data Structure**: Static JSON-like structure (can be connected to CMS/Database)

## Customization

All text, images, and data can be easily customized by modifying:
- Content in `lib/siteData.js` for Next.js
- Inline HTML and JavaScript in `index.html` for static version

---

**Made for free public education (SEBA Curriculum Mapping)**
