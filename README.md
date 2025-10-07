# 📚 NYYU Documentation

<div align="center">

![NYYU Banner](https://via.placeholder.com/1200x300/0a0a0a/10b981?text=NYYU+Documentation)

**Official documentation for NYYU - The Decentralized Investment Banking Platform**

[![Next.js](https://img.shields.io/badge/Next.js-15.5.4-black?style=flat&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.1.1-61dafb?style=flat&logo=react)](https://reactjs.org/)
[![Fumadocs](https://img.shields.io/badge/Fumadocs-15.8.2-0ea5e9?style=flat)](https://fumadocs.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9.2-3178c6?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/License-MIT-green.svg?style=flat)](LICENSE)

[🌐 Live Site](https://docs.nyyu.io) • [📖 Documentation](https://docs.nyyu.io/docs) • [🚀 NYYU Platform](https://nyyu.io)

</div>

---

## 🎯 About NYYU

**NYYU** is an innovative decentralized investment banking platform transforming the financial landscape through sustainability, energy-based currency innovation, and decentralization. Founded in 2022, NYYU provides comprehensive solutions for broker-dealers, financial institutions, businesses, and individuals.

### 🌟 Business Scope

NYYU offers a full suite of financial services:

- **💱 Digital & Fiat Exchange** - User-friendly trading platform for cryptocurrencies and fiat currencies
- **🔄 Decentralized Exchange (DEX)** - Secure peer-to-peer trading without intermediaries
- **👛 Wallet Services** - Reliable and secure digital asset storage solutions
- **💰 Staking & Loan Services** - Passive income opportunities and liquidity access
- **🏪 Marketplaces** - Trading platforms for real estate, commodities, and startups
- **🎨 White-Label Solutions** - Customizable API-as-a-Service for businesses
- **📋 Token Listing Services** - Professional listing and de-listing services
- **🔒 Compliance & Security** - Highest standards of regulatory compliance

### 🎯 Mission

To democratize access to diverse investment opportunities by building a transparent, user-centric, and decentralized financial platform that integrates sustainability and energy-based economic principles.

---

## 🛠️ Tech Stack

This documentation site is built with modern web technologies:

- **Framework:** [Next.js 15.5.4](https://nextjs.org/) with App Router
- **Documentation:** [Fumadocs 15.8.2](https://fumadocs.dev/) - Modern documentation framework
- **UI Library:** [React 19.1.1](https://react.dev/)
- **Styling:** [Tailwind CSS 4.1.13](https://tailwindcss.com/)
- **Content:** [MDX](https://mdxjs.com/) with Fumadocs MDX
- **Animations:** [Framer Motion 12.23.22](https://www.framer.com/motion/)
- **Language:** [TypeScript 5.9.2](https://www.typescriptlang.org/)
- **Components:** [Radix UI](https://www.radix-ui.com/) primitives
- **Deployment:** [Azure Static Web Apps](https://azure.microsoft.com/services/app-service/static/)

---

## ✨ Features

- 📝 **MDX-Powered Content** - Write documentation with components
- 🔍 **Full-Text Search** - Quick navigation through docs with Orama search
- 🎨 **Beautiful UI** - Modern, responsive design with dark mode support
- 📱 **Mobile-Friendly** - Optimized for all devices
- ⚡ **Fast Performance** - Built with Next.js for optimal speed
- 🎯 **Type-Safe** - Full TypeScript support
- 🔗 **API Documentation** - Comprehensive API references with system diagrams
- 📚 **Tutorials** - Step-by-step guides for platform features
- 🏢 **Corporate Information** - About us, media kit, and company resources

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18.18.0 or higher
- npm, pnpm, or yarn package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-org/docs.nyyu.io.git
   cd docs.nyyu.io
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   pnpm install
   # or
   yarn install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   # or
   pnpm dev
   # or
   yarn dev
   ```

4. **Open your browser**

   Navigate to [http://localhost:3000](http://localhost:3000) to see the documentation site.

### Build for Production

```bash
npm run build
npm start
```

---

## 📁 Project Structure

```
docs.nyyu.io/
├── app/                      # Next.js App Router
│   ├── (home)/              # Landing page routes
│   ├── docs/                # Documentation pages
│   │   └── [[...slug]]/     # Dynamic docs routing
│   └── api/                 # API routes (search, etc.)
├── content/                  # MDX content files
│   └── docs/                # Documentation content
│       ├── api/             # API documentation
│       ├── corporate/       # Company information
│       ├── services/        # Service documentation
│       ├── tutorial/        # Getting started guides
│       └── changelog/       # Version history
├── lib/                     # Utility functions
│   ├── source.ts            # Content source adapter
│   └── layout.shared.tsx    # Shared layout config
├── .github/                 # GitHub workflows
│   └── workflows/           # CI/CD pipelines
├── public/                  # Static assets
├── source.config.ts         # Fumadocs configuration
├── next.config.mjs          # Next.js configuration
├── tailwind.config.ts       # Tailwind CSS configuration
└── tsconfig.json           # TypeScript configuration
```

---

## 📖 Documentation Sections

### 🔧 API Documentation

- System architecture diagrams
- Real estate marketplace models
- Integration guides

### 🏢 Corporate

- About NYYU
- Media kit and brand assets
- Company vision and mission

### 🛎️ Services

- Token listing process
- De-listing policies
- Service requirements

### 🎓 Tutorials

- Getting started guide
- Platform walkthroughs
- Best practices

### 📋 Changelog

- Version history
- Feature updates
- Platform improvements

---

## 🤝 Contributing

We welcome contributions to improve the documentation! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/amazing-docs`)
3. **Make your changes** to the MDX files in `content/docs/`
4. **Commit your changes** (`git commit -m 'Add amazing documentation'`)
5. **Push to the branch** (`git push origin feature/amazing-docs`)
6. **Open a Pull Request**

### Writing Guidelines

- Use clear, concise language
- Follow the existing MDX structure
- Include code examples where applicable
- Add images and diagrams to clarify complex concepts
- Test your changes locally before submitting

---

## 🔗 Useful Links

- 🌐 **NYYU Platform:** [https://nyyu.io](https://nyyu.io)
- 📚 **Documentation:** [https://docs.nyyu.io](https://docs.nyyu.io)
- 📝 **Token Listing Form:** [https://nyyu.io/token-listing-form](https://nyyu.io/token-listing-form)
- 💬 **Support:** Check our documentation or contact support
- 🐛 **Report Issues:** Use GitHub Issues for bug reports

---

## 📝 Customization

### Adding New Documentation Pages

1. Create a new `.mdx` file in `content/docs/`
2. Add frontmatter with `title` and `description`
3. Write your content using MDX syntax
4. The page will automatically appear in the navigation

Example:

```mdx
---
title: My New Page
description: Description of my new page
---

# My New Page

Your content here...
```

### Fumadocs Configuration

Customize the documentation behavior in `source.config.ts`:

- Frontmatter schema validation
- MDX processing options
- Post-processing hooks

---

## 🔐 Security

Security is a top priority at NYYU. If you discover a security vulnerability, please email security@nyyu.io instead of using the issue tracker.

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- Built with [Fumadocs](https://fumadocs.dev/) - Modern documentation framework
- Powered by [Next.js](https://nextjs.org/) - The React Framework
- UI components from [Radix UI](https://www.radix-ui.com/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)

---

<div align="center">

**Made with ❤️ by the NYYU Team**

[Website](https://nyyu.io) • [Documentation](https://docs.nyyu.io) • [Twitter](https://twitter.com/nyyu) • [LinkedIn](https://linkedin.com/company/nyyu)

</div>
