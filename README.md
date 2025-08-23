# VoiceCake.io - Next.js Landing Page

This is a Next.js conversion of the VoiceCake.io HTML landing page, providing a modern, component-based architecture with enhanced functionality and performance.

## 🚀 Features

### ✅ Completed Features
- **Complete HTML to Next.js Conversion**: All HTML pages converted to React components
- **Responsive Design**: Mobile-first responsive design using Tailwind CSS
- **Component Architecture**: Modular, reusable React components
- **SEO Optimized**: Meta tags, structured data, and proper semantic HTML
- **Performance Optimized**: Next.js image optimization and static generation
- **Interactive Elements**: 
  - Tab navigation for Features and Pricing sections
  - Audio player for voice samples
  - Contact form with validation
  - Language selector (framework ready)
- **Multiple Pages**: Home, FAQ, Privacy Policy, Terms & Conditions
- **Modern Styling**: Custom CSS with Tailwind integration
- **TypeScript Support**: Full TypeScript implementation
- **Accessibility**: ARIA labels and semantic HTML

### 🎯 Key Components

#### Core Components
- `Header.tsx` - Navigation with language selector
- `Hero.tsx` - Main landing section with animated particles
- `Benefits.tsx` - Key benefits showcase
- `Features.tsx` - Interactive tabs for Empth/Conversa features
- `AudioPlayer.tsx` - Voice sample player with controls
- `Comparison.tsx` - Feature comparison table
- `Pricing.tsx` - Interactive pricing tabs
- `Resources.tsx` - Documentation and FAQ links
- `Contact.tsx` - Contact form with validation
- `Footer.tsx` - Site footer with links

#### Pages
- `/` - Main landing page
- `/faq` - Frequently Asked Questions
- `/privacy-policy` - Privacy Policy
- `/terms-conditions` - Terms & Conditions

#### Context & Utilities
- `LanguageContext.tsx` - Internationalization support
- `globals.css` - Custom styles and animations

## 🛠️ Technical Stack

- **Framework**: Next.js 15.4.7
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4 + Custom CSS
- **Fonts**: Google Fonts (Inter, Noto Serif, Roboto, Cairo)
- **Build Tool**: Turbopack
- **Linting**: ESLint with Next.js config

## 📁 Project Structure

```
voicecake-nextjs/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with metadata
│   │   ├── page.tsx            # Home page
│   │   ├── globals.css         # Global styles
│   │   ├── faq/                # FAQ page
│   │   ├── privacy-policy/     # Privacy Policy page
│   │   └── terms-conditions/   # Terms & Conditions page
│   ├── components/             # React components
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Benefits.tsx
│   │   ├── Features.tsx
│   │   ├── AudioPlayer.tsx
│   │   ├── Comparison.tsx
│   │   ├── Pricing.tsx
│   │   ├── Resources.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   └── contexts/
│       └── LanguageContext.tsx # Internationalization
├── public/
│   ├── images/                 # Optimized images
│   └── voices/                 # Audio samples
└── html-version/              # Original HTML files
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd voicecake-nextjs
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 🎨 Design System

### Colors
- Primary: `#09ae9b` (Teal)
- Background: `#102321` (Dark Green)
- Cards: `#183431` (Medium Green)
- Borders: `#316862` (Light Green)
- Text: `#90cbc4` (Light Teal)

### Typography
- **Inter**: Headings and display text
- **Noto Serif**: Serif text elements
- **Roboto**: Body text and UI elements
- **Cairo**: Arabic language support

### Animations
- Floating particles in hero section
- Hover effects on cards and buttons
- Smooth transitions and transforms
- Fade-in and slide-up animations

## 🔧 Customization

### Adding New Pages
1. Create a new directory in `src/app/`
2. Add a `page.tsx` file
3. Import and use existing components as needed

### Modifying Styles
- Global styles: Edit `src/app/globals.css`
- Component styles: Use Tailwind classes or add custom CSS
- Responsive design: Built-in Tailwind breakpoints

### Adding Translations
1. Extend the `LanguageContext.tsx`
2. Add translation objects
3. Update components to use translated text

## 📱 Responsive Design

The application is fully responsive with breakpoints:
- Mobile: `< 768px`
- Tablet: `768px - 1024px`
- Desktop: `> 1024px`

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels on interactive elements
- Keyboard navigation support
- Screen reader friendly
- High contrast color scheme

## 🚀 Performance

- Static site generation (SSG)
- Optimized images with Next.js Image component
- Lazy loading for audio files
- Minimal JavaScript bundle
- Efficient CSS with Tailwind

## 🔍 SEO Features

- Meta tags for all pages
- Open Graph and Twitter Card support
- Structured data (Schema.org)
- Semantic HTML markup
- Optimized page titles and descriptions

## 🧪 Testing

The application has been tested for:
- ✅ Build compilation
- ✅ TypeScript type checking
- ✅ ESLint compliance
- ✅ Responsive design
- ✅ Interactive functionality
- ✅ Cross-browser compatibility

## 📄 License

This project is part of the VoiceCake.io platform conversion.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For support or questions about this conversion:
- Email: kamran@voicecake.co.uk
- Documentation: See `/faq` page for more information

---

**Conversion Status**: ✅ **COMPLETE**

All HTML pages have been successfully converted to Next.js with enhanced functionality, improved performance, and modern development practices.
