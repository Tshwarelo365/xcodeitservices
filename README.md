# Xcode IT Services Website

Marketing and demonstration website for **Xcode**, a technology solutions business offering software engineering, cloud and infrastructure, cybersecurity, and IT services.

**Live site:** https://xcodeitservices.vercel.app/

> **Project status:** Xcode is not yet officially launched as a commercial business. This website is a demonstration and development project. Services shown on it are planned or demonstrated capabilities, not formal offers. See the [Terms of Use](https://xcodeitservices.vercel.app/terms) and [Privacy Policy](https://xcodeitservices.vercel.app/privacy).

## Overview

The site presents Xcode's planned services and technology partner ecosystem, and gives visitors a way to start a conversation through the contact page, email, or WhatsApp.

### Pages

| Route | Purpose |
| --- | --- |
| `/` | Home: hero, capabilities, core services, partner technologies, why Xcode, call to action |
| `/services` | Detailed services |
| `/projects` | Solutions / projects |
| `/about` | About Xcode |
| `/contact` | Contact and enquiries |
| `/privacy` | Privacy Policy |
| `/terms` | Terms of Use |

### Services presented

- **Software Engineering:** custom web applications, backend and API development, system integrations, database architecture
- **Cloud & Infrastructure:** cloud architecture, infrastructure deployment, AWS solutions, scalability and reliability
- **Cybersecurity:** security assessments, endpoint and network security, identity and access, security monitoring
- **IT & Technical Services:** IT support and troubleshooting, network and systems support, infrastructure management, technical consulting

### Technology partners featured

Sophos, SentinelOne, Veeam, Commvault, Amazon Web Services, IBM, Nokia, and RSA.

## Tech Stack

- [Next.js](https://nextjs.org/) (App Router) with React and TypeScript
- Hosted on [Vercel](https://vercel.com/)

## Getting Started

### Prerequisites

- Node.js 18.18 or later
- npm (or yarn / pnpm)

### Installation

```bash
git clone <your-repository-url>
cd <project-folder>
npm install
```

### Run locally

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

### Build for production

```bash
npm run build
npm run start
```

## Project Structure

A typical layout for this site (adjust to match your repository):

```
app/
  page.tsx            # Home
  services/page.tsx
  projects/page.tsx
  about/page.tsx
  contact/page.tsx
  privacy/page.tsx    # Privacy Policy
  terms/page.tsx      # Terms of Use
public/
  Hero.jpg
  services.png
  call.png
  xcode_logo.png
  partners/           # Partner logos
```

## Deployment

The site is deployed on Vercel. Pushing to the main branch triggers a new deployment when the repository is connected to a Vercel project.

To deploy your own copy:

1. Push the repository to GitHub.
2. Import the project in Vercel.
3. Keep the default Next.js settings and deploy.

## Contact

- **Email:** xcodeitservices@gmail.com
- **Website:** https://xcodeitservices.vercel.app/

## Legal

- Privacy Policy: `/privacy`
- Terms of Use: `/terms`

Third-party names and logos (Sophos, SentinelOne, Veeam, Commvault, AWS, IBM, Nokia, RSA) remain the property of their respective owners.

## License

All rights reserved. © 2026 Xcode. The website's design, branding, text, graphics, and source code may not be copied, reproduced, modified, or redistributed without permission.
