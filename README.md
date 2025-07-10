# EduManage - Teacher Management System

A modern, fully responsive teacher management interface built with Next.js, TypeScript, and Tailwind CSS. Features separate mobile drawer navigation, horizontal scrolling schedule grid, and complete mobile optimization.

![EduManage Preview](https://via.placeholder.com/800x400/3B82F6/FFFFFF?text=EduManage+Teacher+Management+System)

## 🚀 Features

### 📱 Mobile-First Design
- **Separate Mobile Drawer**: Sheet-based navigation with backdrop overlay
- **Horizontal Schedule Scrolling**: All 7 days visible with sticky time column
- **Touch-Optimized UI**: 44px+ tap targets and smooth interactions
- **Responsive Typography**: Adaptive text sizes across all screen sizes
- **Mobile-Specific Components**: Optimized layouts for small screens

### 🎯 Core Functionality
- **Teacher Profile Management**: Complete teacher information display and editing
- **Qualifications Management**: Private and group qualifications with CRUD operations
- **Schedule Calendar**: Interactive weekly schedule with availability tracking
- **Payment Interface**: Payment scheduling with form validation and history
- **Real-time Updates**: Toast notifications for user feedback

### 🎨 UI/UX Excellence
- **Modern Design**: Clean, professional interface with shadcn/ui components
- **Accessibility**: WCAG 2.1 AA compliant with screen reader support
- **Performance**: Optimized loading and smooth animations
- **Cross-Platform**: Works seamlessly on desktop, tablet, and mobile

## 📋 Table of Contents

- [Installation](#installation)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Features Deep Dive](#features-deep-dive)
- [Design Decisions](#design-decisions)
- [Mobile Responsiveness](#mobile-responsiveness)
- [API Integration](#api-integration)
- [Customization](#customization)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## 🛠️ Installation

### Prerequisites

- **Node.js**: Version 18.0 or higher
- **npm**: Version 8.0 or higher (or yarn/pnpm equivalent)
- **Git**: For version control

### Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/edumanage-teacher-system.git
   cd teacher-management
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Environment Setup

Create a `.env.local` file in the root directory:

```env
# Application Configuration
NEXT_PUBLIC_APP_NAME=EduManage
NEXT_PUBLIC_APP_VERSION=1.0.0

# API Configuration (when backend is integrated)
NEXT_PUBLIC_API_URL=http://localhost:3001/api
API_SECRET_KEY=your-secret-key-here

# Database Configuration (for future integration)
DATABASE_URL=postgresql://username:password@localhost:5432/edumanage
```

## 🚀 Getting Started

### Development Workflow

1. **Start the development server**
   ```bash
   npm run dev
   ```

2. **View the application**
   - Desktop: Full sidebar navigation with collapsible functionality
   - Mobile: Hamburger menu with slide-out drawer navigation

3. **Test responsiveness**
   - Use browser dev tools to test different screen sizes
   - Test touch interactions on mobile devices
   - Verify horizontal scrolling on schedule grid

### Building for Production

```bash
# Build the application
npm run build

# Start production server
npm start

# Run linting
npm run lint

# Run type checking
npm run type-check
```

## 📁 Project Structure

```
edumanage-teacher-system/
├── app/                          # Next.js App Router
│   ├── globals.css              # Global styles and Tailwind CSS
│   ├── layout.tsx               # Root layout with metadata
│   └── page.tsx                 # Main application page
├── components/                   # React components
│   ├── ui/                      # shadcn/ui base components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   ├── sheet.tsx
│   │   ├── tabs.tsx
│   │   └── ...
│   ├── desktop-sidebar.tsx      # Desktop navigation sidebar
│   ├── mobile-drawer.tsx        # Mobile navigation drawer
│   ├── teacher-header.tsx       # Teacher profile header
│   ├── qualifications-section.tsx # Qualifications management
│   ├── schedule-calendar.tsx    # Schedule grid with horizontal scroll
│   └── payment-interface.tsx    # Payment management interface
├── types/                       # TypeScript type definitions
│   └── teacher.ts              # Teacher-related interfaces
├── lib/                        # Utility functions
│   └── utils.ts               # Common utilities (cn function)
├── hooks/                      # Custom React hooks
│   └── use-toast.ts           # Toast notification hook
├── public/                     # Static assets
├── .env.local                  # Environment variables
├── next.config.js             # Next.js configuration
├── tailwind.config.js         # Tailwind CSS configuration
├── tsconfig.json              # TypeScript configuration
└── package.json               # Dependencies and scripts
```

## 🎯 Features Deep Dive

### 1. Mobile Navigation System

#### Desktop Sidebar (`desktop-sidebar.tsx`)
```typescript
// Collapsible sidebar with smooth transitions
const [collapsed, setCollapsed] = useState(false)

// Hidden on mobile, visible on desktop
className="hidden md:flex bg-slate-900 text-white"
```

**Features:**
- Collapsible with chevron toggle
- Smooth width transitions (64px collapsed, 256px expanded)
- Active state highlighting
- Professional dark theme

#### Mobile Drawer (`mobile-drawer.tsx`)
```typescript
// Sheet-based drawer with backdrop
<Sheet open={open} onOpenChange={setOpen}>
  <SheetContent side="left" className="w-80 bg-slate-900">
    {/* Navigation content */}
  </SheetContent>
</Sheet>
```

**Features:**
- Slide-out animation from left
- Backdrop overlay with click-to-close
- Touch-friendly navigation items
- Auto-close on navigation

### 2. Schedule Management System

#### Horizontal Scrolling Grid
```typescript
// Responsive schedule grid with sticky time column
<ScrollArea className="w-full">
  <div className="min-w-[800px]">
    {/* Sticky time column */}
    <div className="sticky left-0 z-10 bg-white">
      {timeSlot}
    </div>
    {/* Scrollable day columns */}
  </div>
</ScrollArea>
```

**Features:**
- **22 time slots**: 7:30am to 6:00pm in 30-minute intervals
- **7-day week view**: Monday through Sunday
- **Status indicators**: Available (green), Booked (blue), Unavailable (gray)
- **Sticky time column**: Always visible during horizontal scroll
- **Touch-optimized**: Smooth scrolling with proper touch targets

#### Schedule Status System
```typescript
interface ScheduleSlot {
  id: string
  day: string
  startTime: string
  endTime: string
  status: "available" | "booked" | "unavailable"
  subject?: string
}
```

### 3. Teacher Profile Management

#### Responsive Header Design
```typescript
// Adaptive layout: stacked on mobile, side-by-side on desktop
<div className="flex flex-col xs:flex-row items-center xs:items-start">
  <Avatar className="h-16 w-16 sm:h-20 sm:w-20" />
  <div className="text-center xs:text-left">
    {/* Profile information */}
  </div>
</div>
```

**Features:**
- **Responsive avatar**: 64px mobile, 80px desktop
- **Contact information cards**: Email, phone, address
- **Role badges**: Visual role identification
- **Edit functionality**: Profile modification interface

### 4. Qualifications Management

#### CRUD Operations Interface
```typescript
interface Qualification {
  id: string
  name: string
  rate: number
  type: "private" | "group"
}
```

**Features:**
- **Dual tables**: Separate private and group qualifications
- **Horizontal scrolling**: Mobile-optimized table display
- **Action buttons**: Edit and delete with confirmation
- **Rate management**: Hourly rate tracking
- **Add functionality**: New qualification creation

### 5. Payment Management System

#### Form Validation & Processing
```typescript
const validateForm = (): boolean => {
  const newErrors: FormErrors = {}
  
  if (!formData.amount || parseFloat(formData.amount) <= 0) {
    newErrors.amount = "Please enter a valid amount"
  }
  // Additional validation...
  
  return Object.keys(newErrors).length === 0
}
```

**Features:**
- **Payment scheduling**: Date-based payment planning
- **Multiple payment types**: Salary, bonus, commission
- **Payment methods**: Bank transfer, PayPal, check, cash
- **Status tracking**: Pending, processing, completed, failed
- **Form validation**: Real-time error feedback
- **Payment history**: Comprehensive transaction log

## 🎨 Design Decisions

### 1. Mobile-First Architecture

**Decision**: Build mobile experience first, then enhance for desktop
**Rationale**: 
- 60%+ of users access educational platforms on mobile
- Ensures core functionality works on all devices
- Prevents desktop-centric design limitations

**Implementation**:
```css
/* Mobile-first CSS approach */
.component {
  /* Mobile styles (default) */
  @apply text-sm p-2;
}

@media (min-width: 768px) {
  .component {
    /* Desktop enhancements */
    @apply text-base p-4;
  }
}
```

### 2. Separate Navigation Components

**Decision**: Create distinct mobile and desktop navigation components
**Rationale**:
- Different interaction patterns (touch vs. mouse)
- Optimized performance (load only needed component)
- Cleaner code organization and maintenance

**Trade-offs**:
- ✅ Better user experience per platform
- ✅ Optimized performance
- ❌ Slightly more code to maintain

### 3. Horizontal Schedule Scrolling

**Decision**: Implement horizontal scrolling for schedule grid on mobile
**Rationale**:
- Preserves all 7 days visibility
- Maintains time slot granularity
- Natural mobile interaction pattern

**Alternative Considered**: Vertical day stacking
**Why Rejected**: Would require excessive scrolling and lose weekly overview

### 4. Component-Based Architecture

**Decision**: Modular component structure with clear separation of concerns
**Rationale**:
- Reusability across different views
- Easier testing and maintenance
- Clear data flow and state management

**Structure**:
```
Components/
├── Layout Components (Sidebar, Drawer, Header)
├── Feature Components (Schedule, Qualifications, Payments)
├── UI Components (shadcn/ui primitives)
└── Utility Components (Toast, Loading states)
```

### 5. TypeScript Integration

**Decision**: Full TypeScript implementation with strict type checking
**Rationale**:
- Prevents runtime errors in production
- Better developer experience with IntelliSense
- Self-documenting code with interface definitions

**Type System**:
```typescript
// Comprehensive type definitions
interface TeacherProfile {
  teacher: Teacher
  privateQualifications: Qualification[]
  groupQualifications: Qualification[]
  schedule: ScheduleSlot[]
}
```

### 6. Styling Strategy

**Decision**: Tailwind CSS with shadcn/ui component library
**Rationale**:
- Rapid development with utility classes
- Consistent design system
- Excellent mobile responsiveness utilities
- Professional component library

**Custom CSS**: Limited to specific mobile optimizations and animations

## 📱 Mobile Responsiveness

### Breakpoint System

```css
/* Custom breakpoint strategy */
xs: 475px   /* Extra small devices (large phones) */
sm: 640px   /* Small devices (tablets) */
md: 768px   /* Medium devices (small laptops) */
lg: 1024px  /* Large devices (desktops) */
xl: 1280px  /* Extra large devices (large desktops) */
```

### Touch Optimization

#### Minimum Tap Targets
```css
/* WCAG 2.1 AA compliance */
button, a, [role="button"] {
  min-height: 44px;
  min-width: 44px;
}
```

#### iOS Safari Optimizations
```css
/* Prevent zoom on form inputs */
input, select, textarea {
  font-size: 16px;
}

/* Smooth scrolling */
.scroll-container {
  -webkit-overflow-scrolling: touch;
  scroll-behavior: smooth;
}
```

### Responsive Typography

```css
/* Adaptive text sizing */
@media (max-width: 640px) {
  h1 { @apply text-lg; }    /* 18px */
  h2 { @apply text-base; }  /* 16px */
  h3 { @apply text-sm; }    /* 14px */
  body { @apply text-sm; }  /* 14px */
}

@media (min-width: 641px) {
  h1 { @apply text-2xl; }   /* 24px */
  h2 { @apply text-xl; }    /* 20px */
  h3 { @apply text-lg; }    /* 18px */
  body { @apply text-base; } /* 16px */
}
```

### Layout Adaptations

#### Grid Systems
```typescript
// Responsive grid layouts
className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"

// Flexible layouts
className="flex flex-col md:flex-row items-start md:items-center"
```

#### Spacing System
```typescript
// Mobile-first spacing
className="p-2 sm:p-4 md:p-6"  // 8px -> 16px -> 24px
className="space-y-2 sm:space-y-4 md:space-y-6"  // Vertical spacing
```

## 🔌 API Integration

### Current State: Mock Data

The application currently uses mock data for demonstration purposes:

```typescript
// Mock teacher profile data
const mockTeacherProfile: TeacherProfile = {
  teacher: {
    id: "1",
    name: "Alynia Allan",
    role: "Teacher",
    // ... additional fields
  },
  privateQualifications: [
    { id: "1", name: "Vocal Contemporary", rate: 50.0, type: "private" },
    // ... additional qualifications
  ],
  schedule: [
    {
      id: "1",
      day: "Tuesday",
      startTime: "3pm",
      status: "available",
      subject: "Vocal Jazz",
    },
    // ... additional schedule slots
  ],
}
```

### Future API Integration

#### Recommended API Structure

```typescript
// API endpoints structure
const API_ENDPOINTS = {
  teachers: {
    get: '/api/teachers/:id',
    update: '/api/teachers/:id',
    create: '/api/teachers',
    delete: '/api/teachers/:id'
  },
  qualifications: {
    get: '/api/teachers/:id/qualifications',
    create: '/api/teachers/:id/qualifications',
    update: '/api/qualifications/:id',
    delete: '/api/qualifications/:id'
  },
  schedule: {
    get: '/api/teachers/:id/schedule',
    update: '/api/teachers/:id/schedule',
    bulk: '/api/teachers/:id/schedule/bulk'
  },
  payments: {
    get: '/api/teachers/:id/payments',
    create: '/api/payments',
    update: '/api/payments/:id',
    history: '/api/teachers/:id/payments/history'
  }
}
```

#### Integration Steps

1. **Replace mock data with API calls**
   ```typescript
   // Example API integration
   const fetchTeacherProfile = async (id: string): Promise<TeacherProfile> => {
     const response = await fetch(`/api/teachers/${id}`)
     return response.json()
   }
   ```

2. **Add loading states**
   ```typescript
   const [loading, setLoading] = useState(true)
   const [error, setError] = useState<string | null>(null)
   ```

3. **Implement error handling**
   ```typescript
   try {
     const data = await fetchTeacherProfile(teacherId)
     setTeacherProfile(data)
   } catch (err) {
     setError('Failed to load teacher profile')
   } finally {
     setLoading(false)
   }
   ```

## 🎨 Customization

### Theme Customization

#### Colors
```css
/* Customize in globals.css */
:root {
  --primary: 221.2 83.2% 53.3%;        /* Blue primary */
  --secondary: 210 40% 96%;             /* Light gray */
  --accent: 210 40% 96%;                /* Accent color */
  --destructive: 0 84.2% 60.2%;         /* Red for errors */
}
```

#### Typography
```javascript
// Customize in tailwind.config.js
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
}
```

### Component Customization

#### Adding New Schedule Status
```typescript
// 1. Update type definition
type ScheduleStatus = "available" | "booked" | "unavailable" | "tentative"

// 2. Add color mapping
const getSlotColor = (status: string) => {
  switch (status) {
    case "tentative":
      return "bg-orange-100 border-orange-300 text-orange-800"
    // ... existing cases
  }
}

// 3. Add badge variant
const getStatusBadge = (status: string) => {
  if (status === "tentative") {
    return <Badge className="bg-orange-100 text-orange-800">Tentative</Badge>
  }
  // ... existing logic
}
```

#### Custom Payment Types
```typescript
// Add new payment type
interface PaymentForm {
  type: "salary" | "bonus" | "commission" | "reimbursement"
  // ... other fields
}

// Update form options
<SelectItem value="reimbursement">Reimbursement</SelectItem>
```

### Responsive Breakpoint Customization

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    screens: {
      'xs': '475px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      // Add custom breakpoints
      'tablet': '900px',
      'desktop': '1200px',
    },
  },
}
```

## 🚀 Deployment

### Vercel Deployment (Recommended)

1. **Connect to Vercel**
   ```bash
   npm install -g vercel
   vercel login
   vercel
   ```

2. **Environment Variables**
   Set in Vercel dashboard:
   ```
   NEXT_PUBLIC_APP_NAME=EduManage
   NEXT_PUBLIC_API_URL=https://your-api.com
   ```

3. **Build Configuration**
   ```javascript
   // next.config.js
   module.exports = {
     output: 'standalone',
     images: {
       domains: ['your-image-domain.com'],
     },
   }
   ```

### Docker Deployment

```dockerfile
# Dockerfile
FROM node:18-alpine AS base

# Install dependencies
FROM base AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

# Build application
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Production image
FROM base AS runner
WORKDIR /app
ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs
EXPOSE 3000
ENV PORT 3000

CMD ["node", "server.js"]
```

### Static Export (Optional)

```javascript
// next.config.js
module.exports = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
}
```

## 🧪 Testing

### Unit Testing Setup

```bash
# Install testing dependencies
npm install --save-dev @testing-library/react @testing-library/jest-dom jest jest-environment-jsdom
```

```javascript
// jest.config.js
module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapping: {
    '^@/(.*)$': '<rootDir>/$1',
  },
}
```

### Example Tests

```typescript
// __tests__/components/teacher-header.test.tsx
import { render, screen } from '@testing-library/react'
import { TeacherHeader } from '@/components/teacher-header'

const mockTeacher = {
  id: '1',
  name: 'John Doe',
  role: 'Teacher',
  // ... other fields
}

describe('TeacherHeader', () => {
  it('renders teacher name correctly', () => {
    render(<TeacherHeader teacher={mockTeacher} />)
    expect(screen.getByText('John Doe')).toBeInTheDocument()
  })

  it('displays edit button', () => {
    render(<TeacherHeader teacher={mockTeacher} />)
    expect(screen.getByText('Edit Profile')).toBeInTheDocument()
  })
})
```

### Mobile Testing

```typescript
// Mobile viewport testing
import { render } from '@testing-library/react'

// Mock mobile viewport
Object.defineProperty(window, 'innerWidth', {
  writable: true,
  configurable: true,
  value: 375,
})

// Test mobile-specific behavior
describe('Mobile Navigation', () => {
  it('shows mobile drawer on small screens', () => {
    // Test implementation
  })
})
```

## 🔧 Performance Optimization

### Bundle Analysis

```bash
# Analyze bundle size
npm install --save-dev @next/bundle-analyzer

# Add to next.config.js
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer({
  // ... your config
})

# Run analysis
ANALYZE=true npm run build
```

### Image Optimization

```typescript
// Use Next.js Image component
import Image from 'next/image'

<Image
  src="/teacher-avatar.jpg"
  alt="Teacher Avatar"
  width={80}
  height={80}
  priority={true}
  placeholder="blur"
  blurDataURL="data:image/jpeg;base64,..."
/>
```

### Code Splitting

```typescript
// Dynamic imports for large components
import dynamic from 'next/dynamic'

const PaymentInterface = dynamic(
  () => import('@/components/payment-interface'),
  { 
    loading: () => <PaymentSkeleton />,
    ssr: false 
  }
)
```

## 🔒 Security Considerations

### Input Validation

```typescript
// Client-side validation
const validatePaymentForm = (data: PaymentForm): FormErrors => {
  const errors: FormErrors = {}
  
  // Amount validation
  if (!data.amount || parseFloat(data.amount) <= 0) {
    errors.amount = 'Invalid amount'
  }
  
  // XSS prevention
  if (data.description.includes('<script>')) {
    errors.description = 'Invalid characters detected'
  }
  
  return errors
}
```

### Environment Variables

```bash
# .env.local (never commit to version control)
DATABASE_URL=postgresql://...
API_SECRET_KEY=your-secret-key
NEXTAUTH_SECRET=your-nextauth-secret
```

### Content Security Policy

```javascript
// next.config.js
module.exports = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-eval'; style-src 'self' 'unsafe-inline';"
          }
        ]
      }
    ]
  }
}
```

## 📚 Assumptions Made

### 1. User Behavior Assumptions

**Mobile Usage Patterns**:
- Users primarily access the system on mobile devices during teaching hours
- Quick schedule checks are more common than detailed editing
- Touch interactions are preferred over keyboard input on mobile

**Desktop Usage Patterns**:
- Administrative tasks (payments, detailed editing) primarily done on desktop
- Multiple tabs/windows may be open simultaneously
- Keyboard shortcuts and hover states are expected

### 2. Data Structure Assumptions

**Teacher Profile**:
- Each teacher has a unique ID
- Contact information is always available
- Profile pictures are optional (fallback to initials)

**Schedule System**:
- 30-minute time slot granularity is sufficient
- Week view (7 days) is the primary scheduling interface
- Time slots from 7:30 AM to 6:00 PM cover all teaching hours

**Payment System**:
- Three payment types (salary, bonus, commission) cover all scenarios
- Payment methods are predefined (bank transfer, PayPal, check, cash)
- USD currency is the primary/only currency

### 3. Technical Assumptions

**Browser Support**:
- Modern browsers with ES2020+ support
- CSS Grid and Flexbox support
- Touch event support for mobile devices

**Performance Requirements**:
- Initial page load under 3 seconds on 3G networks
- Smooth 60fps animations on mobile devices
- Offline functionality not required (online-first approach)

**Screen Size Support**:
- Minimum supported width: 320px (iPhone 5/SE)
- Maximum optimized width: 1920px (standard desktop)
- Primary breakpoints: 475px, 640px, 768px, 1024px, 1280px

### 4. Business Logic Assumptions

**Qualification Management**:
- Private and group qualifications are mutually exclusive categories
- Hourly rates are in USD with 2 decimal precision
- Qualification names are unique per teacher

**Schedule Management**:
- Teachers can have multiple subjects per time slot
- Schedule conflicts are handled at the UI level (visual indicators)
- Historical schedule data is maintained for reporting

**Payment Processing**:
- Payments are scheduled, not processed immediately
- Payment status tracking is essential for accounting
- Multiple payment methods per teacher are supported

### 5. Integration Assumptions

**Future API Integration**:
- RESTful API with JSON responses
- Standard HTTP status codes for error handling
- JWT or session-based authentication

**Database Structure**:
- Relational database (PostgreSQL assumed)
- Normalized data structure with foreign key relationships
- Audit trails for payment and schedule changes

**Third-Party Services**:
- Payment processing through external gateway (Stripe/PayPal)
- Email notifications for payment confirmations
- Calendar integration (Google Calendar/Outlook) for schedule sync

## 🤝 Contributing

### Development Setup

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Make your changes**
4. **Run tests**
   ```bash
   npm run test
   npm run lint
   npm run type-check
   ```

5. **Submit a pull request**

### Code Standards

#### TypeScript
- Use strict type checking
- Define interfaces for all data structures
- Avoid `any` type usage

#### React
- Use functional components with hooks
- Implement proper error boundaries
- Follow React best practices for performance

#### CSS/Styling
- Use Tailwind utility classes
- Avoid custom CSS unless necessary
- Maintain responsive design principles

#### Git Workflow
```bash
# Commit message format
feat: add mobile drawer navigation
fix: resolve schedule grid scrolling issue
docs: update README with deployment instructions
style: improve mobile button spacing
refactor: extract payment validation logic
test: add unit tests for teacher header
```

### Pull Request Guidelines

1. **Clear description** of changes made
2. **Screenshots** for UI changes (desktop + mobile)
3. **Test coverage** for new features
4. **Documentation updates** if applicable
5. **Performance impact** assessment for large changes

## 📄 License

MIT License

Copyright (c) 2024 EduManage

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## 📞 Support

### Getting Help

- **Documentation**: Check this README and inline code comments
- **Issues**: Create a GitHub issue for bugs or feature requests
- **Discussions**: Use GitHub Discussions for questions and ideas

### Reporting Issues

When reporting issues, please include:

1. **Environment details** (OS, browser, screen size)
2. **Steps to reproduce** the issue
3. **Expected vs actual behavior**
4. **Screenshots** (especially for mobile issues)
5. **Console errors** if applicable

### Feature Requests

For new features, please provide:

1. **Use case description** and user story
2. **Mockups or wireframes** if applicable
3. **Technical considerations** you've thought of
4. **Priority level** and business justification

---

**Built with ❤️ for modern education management**

*EduManage - Empowering educators with intuitive, mobile-first management tools*
