# EduManage - Teacher Management System

A modern, fully responsive teacher management interface built with Next.js, TypeScript, and Tailwind CSS. Features mobile-optimized navigation, horizontal scrolling schedule grid, and comprehensive teacher profile management.

![EduManage Preview](https://via.placeholder.com/800x400/3B82F6/FFFFFF?text=EduManage+Teacher+Management+System)

## Live Demo URL - https://edu-manage-delta.vercel.app/

## Loom Video Link
https://www.loom.com/share/8561cd1987094af78052ed85945d3ab1?sid=528ea6c9-e932-41b4-beac-3e6c63f7e203

## 🚀 Features

### 📱 Mobile-First Design
- **Responsive Navigation**: Adaptive sidebar with mobile drawer functionality
- **Horizontal Schedule Scrolling**: All 7 days visible with sticky time column
- **Touch-Optimized UI**: 44px+ tap targets and smooth interactions
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
   git clone https://github.com/EduManage/teacher-management.git
   cd teacher-management
   ```

2. **Install dependencies**
   ```bash
   npm install --legacy-peer-deps
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
teacher-management/
├── components/
│   ├── sidebar.tsx             # Navigation sidebar with mobile support
│   ├── teacher-header.tsx      # Teacher profile header component
│   ├── qualifications-section.tsx # Qualifications management
│   ├── schedule-calendar.tsx   # Schedule grid with mobile scroll
│   └── payment-interface.tsx   # Payment management system
├── app/
│   ├── page.tsx               # Main application page
│   ├── layout.tsx             # Root layout with metadata
│   └── globals.css            # Global styles and responsive utilities
├── public/                    # Static assets
├── next.config.js            # Next.js configuration
├── tailwind.config.js        # Tailwind CSS configuration
├── tsconfig.json             # TypeScript configuration
└── package.json              # Dependencies and scripts
```

### Core Files Explanation

#### `components/sidebar.tsx`
Responsive navigation component with mobile/desktop adaptation:

```typescript
// Features:
// - Collapsible desktop sidebar (64px ↔ 256px)
// - Mobile drawer with backdrop overlay
// - Active state management
// - Touch-friendly navigation items
// - Smooth transitions and animations
```

#### `components/teacher-header.tsx`
Teacher profile display with responsive layout:

```typescript
// Features:
// - Responsive avatar sizing (64px mobile, 80px desktop)
// - Adaptive layout (stacked mobile, side-by-side desktop)
// - Contact information cards
// - Edit profile functionality
// - Role badges and status indicators
```

#### `components/qualifications-section.tsx`
CRUD interface for teacher qualifications:

```typescript
// Features:
// - Dual tables (private/group qualifications)
// - Horizontal scrolling on mobile
// - Add/Edit/Delete operations
// - Rate management with currency formatting
// - Responsive table design
```

#### `components/schedule-calendar.tsx`
Interactive weekly schedule with mobile optimization:

```typescript
// Features:
// - 22 time slots (7:30am - 6:00pm)
// - 7-day week view with horizontal scroll
// - Sticky time column for mobile
// - Status indicators (Available/Booked/Unavailable)
// - Touch-optimized grid interactions
// - Mobile legend for status colors
```

#### `components/payment-interface.tsx`
Payment management with form validation:

```typescript
// Features:
// - Payment scheduling form with validation
// - Multiple payment types and methods
// - Payment history with status tracking
// - Loading states and error handling
// - Mobile-optimized form layout
// - Horizontal scrolling payment table
```

#### `app/page.tsx`
Main application orchestration:

```typescript
// Features:
// - Tab-based navigation (Profile/Qualifications/Schedule/Payments)
// - State management for teacher profile
// - Toast notifications for user feedback
// - Responsive tab layout
// - Mock data integration
```

#### `app/layout.tsx`
Root application layout and metadata:

```typescript
// Features:
// - Global font configuration (Inter)
// - SEO metadata setup
// - Toast provider integration
// - HTML structure and accessibility
```

#### `app/globals.css`
Comprehensive styling system:

```css
/* Features:
 * - Tailwind CSS integration
 * - Custom responsive utilities
 * - Mobile-specific optimizations
 * - Touch interaction improvements
 * - Custom scrollbar styling
 * - Animation definitions
 */
```

## 🎯 Features Deep Dive

### 1. Responsive Navigation System

#### Desktop Sidebar
- **Collapsible Design**: Toggles between 64px (icons only) and 256px (full labels)
- **Smooth Transitions**: CSS transitions for width changes
- **Active State**: Visual highlighting of current page
- **Professional Theme**: Dark slate background with white text

#### Mobile Navigation
- **Drawer Pattern**: Slides in from left with backdrop overlay
- **Touch-Friendly**: Large tap targets (48px minimum height)
- **Auto-Close**: Closes automatically after navigation
- **Hamburger Menu**: Fixed position button for easy access

### 2. Schedule Management System

#### Time Grid Layout
```typescript
// 22 time slots covering full teaching day
const timeSlots = [
  "7:30am", "8am", "8:30am", "9am", "9:30am", "10am",
  "10:30am", "11am", "11:30am", "12pm", "12:30pm", "1pm",
  "1:30pm", "2pm", "2:30pm", "3pm", "3:30pm", "4pm",
  "4:30pm", "5pm", "5:30pm", "6pm"
]

// 7-day week view
const days = ["Monday", "Tuesday", "Wednesday", "Thursday", 
              "Friday", "Saturday", "Sunday"]
```

#### Mobile Optimization
- **Horizontal Scrolling**: All days visible with smooth touch scrolling
- **Sticky Time Column**: Time slots remain visible during horizontal scroll
- **Compact Status Badges**: "Free", "Busy", "N/A" for mobile screens
- **Touch Targets**: 40px minimum height for schedule slots
- **Visual Legend**: Color-coded status indicators below grid

#### Status System
```typescript
interface ScheduleSlot {
  status: "available" | "booked" | "unavailable"
  // Color mapping:
  // available → green (bg-green-100, border-green-300)
  // booked → blue (bg-blue-100, border-blue-300)
  // unavailable → gray (bg-gray-100, border-gray-300)
}
```

### 3. Teacher Profile Management

#### Responsive Header Design
```typescript
// Mobile: Stacked layout with centered content
// Desktop: Side-by-side with left-aligned content
<div className="flex flex-col xs:flex-row items-center xs:items-start">
  <Avatar className="h-16 w-16 sm:h-20 sm:w-20" />
  <div className="text-center xs:text-left">
    {/* Profile information */}
  </div>
</div>
```

#### Contact Information Cards
- **Email Card**: With mail icon and break-word for long emails
- **Phone Card**: With phone icon and formatted number
- **Address Card**: With map pin icon and city/country display
- **Responsive Grid**: Stacks on mobile, side-by-side on desktop

### 4. Qualifications Management

#### Dual Table System
```typescript
// Separate tables for different qualification types
<QualificationTable 
  qualifications={privateQualifications} 
  title="Private Qualifications" 
  type="private" 
/>
<QualificationTable 
  qualifications={groupQualifications} 
  title="Group Qualifications" 
  type="group" 
/>
```

#### Mobile Table Optimization
- **Horizontal Scrolling**: Tables scroll horizontally on mobile
- **Minimum Width**: 300px minimum ensures proper column spacing
- **Compact Actions**: 8x8px action buttons for mobile
- **Responsive Text**: xs on mobile, sm on desktop

### 5. Payment Management System

#### Form Validation System
```typescript
const validateForm = (): boolean => {
  const newErrors: FormErrors = {}
  
  // Amount validation
  if (!formData.amount || parseFloat(formData.amount) <= 0) {
    newErrors.amount = "Please enter a valid amount"
  }
  
  // Required field validation
  if (!formData.description.trim()) {
    newErrors.description = "Description is required"
  }
  
  // Selection validation
  if (!formData.paymentMethod) {
    newErrors.paymentMethod = "Please select a payment method"
  }
  
  return Object.keys(newErrors).length === 0
}
```

#### Payment Status Tracking
```typescript
// Visual status indicators with icons
const getStatusIcon = (status: string) => {
  switch (status) {
    case "completed": return <CheckCircle className="text-green-600" />
    case "failed": return <XCircle className="text-red-600" />
    case "processing": return <Loader2 className="text-blue-600 animate-spin" />
    default: return <Clock className="text-yellow-600" />
  }
}
```

## 🎨 Design Decisions

### 1. Mobile-First Architecture

**Decision**: Build mobile experience first, then enhance for desktop

**Rationale**: 
- 60%+ of educational platform users access on mobile devices
- Ensures core functionality works on all screen sizes
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

### 2. Unified Sidebar Component

**Decision**: Single sidebar component with responsive behavior

**Rationale**:
- Reduces code duplication
- Consistent navigation experience
- Easier maintenance and updates

**Implementation**:
```typescript
// Responsive behavior within single component
const [mobileOpen, setMobileOpen] = useState(false)
const [isMobile, setIsMobile] = useState(false)

// Adaptive rendering based on screen size
{isMobile ? (
  <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
    {/* Mobile drawer content */}
  </Sheet>
) : (
  <div className={collapsed ? "w-16" : "w-64"}>
    {/* Desktop sidebar content */}
  </div>
)}
```

### 3. Horizontal Schedule Scrolling

**Decision**: Implement horizontal scrolling for schedule grid on mobile

**Rationale**:
- Preserves weekly overview context
- Maintains time slot granularity (30-minute intervals)
- Natural mobile interaction pattern
- Sticky time column keeps reference point visible

**Alternative Considered**: Vertical day stacking
**Why Rejected**: Would require excessive scrolling and lose weekly context

### 4. Tab-Based Main Navigation

**Decision**: Use tabs for primary content sections

**Rationale**:
- Clear content organization
- Mobile-friendly navigation pattern
- Reduces cognitive load
- Easy to implement with keyboard navigation

**Mobile Optimization**:
```typescript
// Vertical icon/text layout for mobile tabs
<TabsTrigger className="flex flex-col items-center space-y-1 text-xs py-2">
  <Icon size={14} />
  <span>Label</span>
</TabsTrigger>
```

### 5. TypeScript-First Development

**Decision**: Comprehensive TypeScript implementation with strict typing

**Rationale**:
- Prevents runtime errors in production
- Better developer experience with IntelliSense
- Self-documenting code with interface definitions
- Easier refactoring and maintenance

**Type System Architecture**:
```typescript
// Centralized type definitions in types/teacher.ts
export interface TeacherProfile {
  teacher: Teacher
  privateQualifications: Qualification[]
  groupQualifications: Qualification[]
  schedule: ScheduleSlot[]
}

// Strict typing throughout components
interface TeacherHeaderProps {
  teacher: Teacher
  onEdit?: () => void
}
```

## 📱 Mobile Responsiveness

### Breakpoint System

```css
/* Tailwind CSS breakpoint strategy */
/* Default: Mobile-first (0px+) */
sm: 640px   /* Small devices (large phones, small tablets) */
md: 768px   /* Medium devices (tablets, small laptops) */
lg: 1024px  /* Large devices (desktops) */
xl: 1280px  /* Extra large devices (large desktops) */
2xl: 1536px /* 2X large devices (very large screens) */

/* Custom breakpoint for extra small devices */
xs: 475px   /* Large phones in landscape */
```

### Touch Optimization

#### Minimum Tap Targets
```css
/* WCAG 2.1 AA compliance - 44px minimum */
@media (max-width: 768px) {
  button, a, [role="button"] {
    min-height: 44px;
    min-width: 44px;
  }
}
```

### Responsive Typography

```css
/* Adaptive text sizing system */
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

#### Responsive Grid Systems
```typescript
// Adaptive grid layouts
className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"

// Flexible container layouts
className="flex flex-col md:flex-row items-start md:items-center"

// Mobile-specific spacing
className="p-2 sm:p-4 md:p-6"  // 8px → 16px → 24px
className="space-y-2 sm:space-y-4 md:space-y-6"  // Vertical spacing
```

#### Component-Specific Adaptations

**Teacher Header**:
```typescript
// Mobile: Stacked layout, Desktop: Side-by-side
<div className="flex flex-col xs:flex-row items-center xs:items-start">
  <Avatar className="h-16 w-16 sm:h-20 sm:w-20" />
  <div className="text-center xs:text-left">
    {/* Content adapts to layout */}
  </div>
</div>
```

**Schedule Calendar**:
```typescript
// Mobile: Horizontal scroll, Desktop: Full width
<ScrollArea className="w-full">
  <div className="min-w-[800px] pb-4">
    {/* Sticky time column for mobile */}
    <div className="sticky left-0 z-10 bg-white">
      {timeSlot}
    </div>
  </div>
</ScrollArea>
```

**Payment Interface**:
```typescript
// Mobile: Stacked form, Desktop: Two-column grid
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
  {/* Form fields adapt to available space */}
</div>
```

2. **Add Loading States to Components**
```typescript
// Loading skeleton for teacher header
if (loading) {
  return (
    <div className="bg-white rounded-lg shadow-sm border p-6 mb-6">
      <div className="animate-pulse">
        <div className="flex items-center space-x-4">
          <div className="rounded-full bg-gray-300 h-20 w-20"></div>
          <div className="space-y-2">
            <div className="h-4 bg-gray-300 rounded w-48"></div>
            <div className="h-4 bg-gray-300 rounded w-32"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
```

3. **Implement Error Handling**
```typescript
// Error boundary for API failures
if (error) {
  return (
    <div className="text-center py-12">
      <div className="text-red-600 mb-4">
        <AlertCircle className="mx-auto h-12 w-12 mb-2" />
        <p className="text-lg font-medium">Failed to load teacher profile</p>
        <p className="text-sm">{error}</p>
      </div>
      <Button onClick={() => window.location.reload()}>
        Try Again
      </Button>
    </div>
  )
}
```

## 🎨 Customization

### Theme Customization

#### Color System
```css
/* Customize in app/globals.css */
:root {
  --primary: 221.2 83.2% 53.3%;        /* Blue primary */
  --secondary: 210 40% 96%;             /* Light gray */
  --accent: 210 40% 96%;                /* Accent color */
  --destructive: 0 84.2% 60.2%;         /* Red for errors */
  --muted: 210 40% 96%;                 /* Muted backgrounds */
  --border: 214.3 31.8% 91.4%;          /* Border color */
}

/* Dark mode support */
.dark {
  --primary: 217.2 91.2% 59.8%;
  --secondary: 217.2 32.6% 17.5%;
  /* ... additional dark mode colors */
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
      fontSize: {
        'xs': '0.75rem',    // 12px
        'sm': '0.875rem',   // 14px
        'base': '1rem',     // 16px
        'lg': '1.125rem',   // 18px
        'xl': '1.25rem',    // 20px
        '2xl': '1.5rem',    // 24px
      }
    },
  },
}
```

### Component Customization

#### Adding New Schedule Status
```typescript
// 1. Update type definition in types/teacher.ts
type ScheduleStatus = "available" | "booked" | "unavailable" | "tentative"

// 2. Add color mapping in components/schedule-calendar.tsx
const getSlotColor = (status: string) => {
  switch (status) {
    case "tentative":
      return "bg-orange-100 border-orange-300 text-orange-800"
    case "available":
      return "bg-green-100 border-green-300 text-green-800"
    // ... existing cases
  }
}

// 3. Add badge variant
const getStatusBadge = (status: string) => {
  if (status === "tentative") {
    return (
      <Badge className="bg-orange-100 text-orange-800 text-xs">
        Tentative
      </Badge>
    )
  }
  // ... existing logic
}
```

#### Custom Payment Types
```typescript
// 1. Update interface in types/teacher.ts
interface PaymentForm {
  type: "salary" | "bonus" | "commission" | "reimbursement"
  // ... other fields
}

// 2. Add form option in components/payment-interface.tsx
<SelectContent>
  <SelectItem value="salary">Salary</SelectItem>
  <SelectItem value="bonus">Bonus</SelectItem>
  <SelectItem value="commission">Commission</SelectItem>
  <SelectItem value="reimbursement">Reimbursement</SelectItem>
</SelectContent>
```

### Responsive Breakpoint Customization

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    screens: {
      'xs': '475px',      // Extra small devices
      'sm': '640px',      // Small devices
      'md': '768px',      // Medium devices
      'lg': '1024px',     // Large devices
      'xl': '1280px',     // Extra large devices
      '2xl': '1536px',    // 2X large devices
      
      // Custom breakpoints
      'tablet': '900px',   // Custom tablet breakpoint
      'desktop': '1200px', // Custom desktop breakpoint
      'wide': '1600px',    // Ultra-wide screens
    },
  },
}
```

## 🚀 Deployment

### Vercel Deployment (Recommended)

1. **Connect Repository to Vercel**
   ```bash
   # Install Vercel CLI
   npm install -g vercel
   
   # Login and deploy
   vercel login
   vercel --prod
   ```

2. **Environment Variables**
   Set in Vercel dashboard or via CLI:
   ```bash
   vercel env add NEXT_PUBLIC_APP_NAME
   vercel env add DATABASE_URL
   vercel env add API_SECRET_KEY
   ```

3. **Build Configuration**
   ```javascript
   // next.config.js
   /** @type {import('next').NextConfig} */
   const nextConfig = {
     output: 'standalone',
     images: {
       domains: ['your-cdn-domain.com'],
     },
     experimental: {
       optimizeCss: true,
     },
   }
   
   module.exports = nextConfig
   ```

### Static Export (GitHub Pages)

```javascript
// next.config.js for static export
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
```

```bash
# Build and export
npm run build
npm run export

# Deploy to GitHub Pages
# (files will be in 'out' directory)
```

## 🧪 Testing

### Unit Testing Setup

```bash
# Install testing dependencies
npm install --save-dev @testing-library/react @testing-library/jest-dom jest jest-environment-jsdom @types/jest
```

```javascript
// jest.config.js
const nextJest = require('next/jest')

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files
  dir: './',
})

// Add any custom config to be passed to Jest
const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapping: {
    // Handle module aliases (this will be automatically configured for you based on your tsconfig.json paths)
    '^@/(.*)$': '<rootDir>/$1',
  },
  testEnvironment: 'jest-environment-jsdom',
}

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig)
```

```javascript
// jest.setup.js
import '@testing-library/jest-dom'
```

### Example Tests

```typescript
// __tests__/components/teacher-header.test.tsx
import { render, screen } from '@testing-library/react'
import { TeacherHeader } from '@/components/teacher-header'
import type { Teacher } from '@/types/teacher'

const mockTeacher: Teacher = {
  id: '1',
  name: 'John Doe',
  role: 'Teacher',
  birthDate: '1985-01-01',
  email: 'john.doe@example.com',
  phone: '(555) 123-4567',
  address: {
    street: '123 Main St',
    city: 'Toronto',
    country: 'Canada'
  }
}

describe('TeacherHeader', () => {
  it('renders teacher name correctly', () => {
    render(<TeacherHeader teacher={mockTeacher} />)
    expect(screen.getByText('John Doe')).toBeInTheDocument()
  })

  it('displays teacher role badge', () => {
    render(<TeacherHeader teacher={mockTeacher} />)
    expect(screen.getByText('Teacher')).toBeInTheDocument()
  })

  it('shows contact information', () => {
    render(<TeacherHeader teacher={mockTeacher} />)
    expect(screen.getByText('john.doe@example.com')).toBeInTheDocument()
    expect(screen.getByText('(555) 123-4567')).toBeInTheDocument()
  })

  it('displays edit button', () => {
    render(<TeacherHeader teacher={mockTeacher} />)
    expect(screen.getByText('Edit Profile')).toBeInTheDocument()
  })
})
```

### Mobile Testing

```typescript
// __tests__/mobile/responsive.test.tsx
import { render } from '@testing-library/react'
import { Sidebar } from '@/components/sidebar'

// Mock window.innerWidth for mobile testing
const mockInnerWidth = (width: number) => {
  Object.defineProperty(window, 'innerWidth', {
    writable: true,
    configurable: true,
    value: width,
  })
  window.dispatchEvent(new Event('resize'))
}

describe('Mobile Responsiveness', () => {
  it('shows mobile drawer on small screens', () => {
    mockInnerWidth(375) // iPhone SE width
    render(<Sidebar />)
    
    // Test mobile-specific behavior
    expect(screen.getByRole('button', { name: /menu/i })).toBeInTheDocument()
  })

  it('shows desktop sidebar on large screens', () => {
    mockInnerWidth(1024) // Desktop width
    render(<Sidebar />)
    
    // Test desktop-specific behavior
    expect(screen.queryByRole('button', { name: /menu/i })).not.toBeInTheDocument()
  })
})
```

## 🔧 Performance Optimization

### Bundle Analysis

```bash
# Install bundle analyzer
npm install --save-dev @next/bundle-analyzer

# Add to next.config.js
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer({
  // ... your existing config
})

# Run analysis
ANALYZE=true npm run build
```

### Code Splitting

```typescript
// Dynamic imports for large components
import dynamic from 'next/dynamic'

const PaymentInterface = dynamic(
  () => import('@/components/payment-interface'),
  { 
    loading: () => <div className="animate-pulse h-96 bg-gray-200 rounded" />,
    ssr: false 
  }
)

const ScheduleCalendar = dynamic(
  () => import('@/components/schedule-calendar'),
  { 
    loading: () => <div className="animate-pulse h-64 bg-gray-200 rounded" />
  }
)
```

### Image Optimization

```typescript
// Use Next.js Image component for avatars
import Image from 'next/image'

<Image
  src="/teacher-avatar.jpg"
  alt="Teacher Avatar"
  width={80}
  height={80}
  priority={true}
  className="rounded-full"
  placeholder="blur"
  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+Sh7tZdZhZhMvqX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+Sh7tZdZhZhMvqX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+Sh7tZdZhZhMvqX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+Sh7tZdZhZhMvqX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+Sh7tZdZhZhMvqX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+Sh7tZdZhZhMvqX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+Sh7tZdZhZhMvqX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+Sh7tZdZhZhMvqX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+Sh7tZdZhZhMvqX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+Sh7tZdZhZhMvqX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+Sh7tZdZhZhMvqX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+Sh7tZdZhZhMvqX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+Sh7tZdZhZhMvqX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+Sh7tZdZhZhMvqX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+Sh7tZdZhZhMvqX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+Sh7tZdZhZhMvqX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+Sh7tZdZhZhMvqX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+Sh7tZdZhZhMvqX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+Sh7tZdZhZhMvqX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+Sh7tZdZhZhMvqX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+Sh7tZdZhZhMvqX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+Sh7tZdZhZhMvqX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+Sh7tZdZhZhMvqX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+Sh7tZdZhZhMvqX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+Sh7tZdZhZhMvqX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+Sh7tZdZhZhMvqX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+Sh7tZdZhZhMvqX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+Sh7tZdZhZhMvqX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+Sh7tZdZhZhMvqX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+Sh7tZdZhZhMvqX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+Sh7tZdZhZhMvqX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+Sh7tZdZhZhMvqX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+Sh7tZdZhZhMvqX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+Sh7tZdZhZhMvqX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+Sh7tZdZhZhMvqX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+Sh7tZdZhZhMvqX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+Sh7tZdZhZhMvqX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+Sh7tZdZhZhMvqX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+Sh7tZdZhZhMvqX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+Sh7tZdZhZhMvqX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+Sh7tZdZhZhMvqX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+Sh7tZdZhZhMvqX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+Sh7tZdZhZhMvqX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+Sh7tZdZhZhMvqX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+Sh7tZdZhZhMvqX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+Sh7tZdZhZhMvqX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+Sh7tZdZhZhMvqX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+Sh7tZdZhZhMvqX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+Sh7tZdZhZhMvqX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+Sh7tZdZhZhMvqX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+Sh7tZdZhZhMvqX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+Sh7tZdZhZhMvqX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+Sh7tZdZhZhMvqX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+Sh7tZdZhZhMvqX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+Sh7tZdZhZhMvqX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+Sh7tZdZhZhMvqX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+Sh7tZdZhZhMvqX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+Sh7tZdZhZhMvqX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+Sh7tZdZhZhMvqX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+Sh7tZdZhZhMvqX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+Sh7tZdZhZhMvqX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+Sh7tZdZhZhMvqX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+Sh7tZdZhZhMvqX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+Sh7tZdZhZhMvqX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+Sh7tZdZhZhMvqX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+Sh7tZdZhZhMvqX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+Sh7tZdZhZhMvqX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+Sh7tZdZhZhMvqX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+Sh7tZdZhZhMvqX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+Sh7tZdZhZhMvqX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+Sh7tZdZhZhMvqX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+Sh7tZdZhZhMvqX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+Sh7tZdZhZhMvqX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+Sh7tZdZhZhMvqX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+Sh7tZdZhZhMvqX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+Sh7tZdZhZhMvqX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+Sh7tZdZhZhMvqX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+Sh7tZdZhZhMvqX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+Sh7tZdZhZhMvqX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+Sh7tZdZhZhMvqX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+Sh7tZdZhZhMvqX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+Sh7tZdZhZhMvqX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+Sh7tZdZhZhMvqX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+Sh7tZdZhZhMvqX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+Sh7tZdZhZhMvqX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+Sh7tZdZhZhMvqX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+Sh7tZdZhZhMvqX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+Sh7tZdZhZhMvqX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+Sh7tZdZhZhMvqX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+Sh7tZdZhZhMvqX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+Sh7tZdZhZhMvqX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+Sh7tZdZhZhMvqX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+Sh7tZdZhZhMvqX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+Sh7tZdZhZhMvqX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+Sh7tZdZhZhMvqX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+Sh7tZdZhZhMvqX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+Sh7tZdZhZhMvqX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+Sh7tZdZhZhMvqX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+Sh7tZdZhZhMvqX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+Sh7tZdZhZhMvqX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+Sh7tZdZhZhMvqX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+Sh7tZdZhZhMvqX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+Sh7tZdZhZhMvqX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+Sh7tZdZhZhMvqX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+Sh7tZdZhZhMvqX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+Sh7tZdZhZhMvqX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+Sh7tZdZhZhMvqX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+Sh7tZdZhZhMvqX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+Sh7tZdZhZhMvqX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+Sh7tZdZhZhMvqX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+Sh7tZdZhZhMvqX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+Sh7tZdZhZhMvqX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+Sh7tZdZhZhMvqX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+Sh7tZdZhZhMvqX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+Sh7tZdZhZhMvqX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+Sh7tZdZhZhMvqX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+Sh7tZdZhZhMvqX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+Sh7tZdZhZhMvqX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+Sh7tZdZhZhMvqX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+Sh7tZdZhZhMvqX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+Sh7tZdZhZhMvqX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+Sh7tZdZhZhMvqX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+Sh7tZdZhZhMvqX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+Sh7tZdZhZhMvqX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+Sh7tZdZhZhMvqX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+Sh7tZdZhZhMvqX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+Sh7tZdZhZhMvqX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+Sh7tZdZhZhMvqX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+Sh7tZdZhZhMvqX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+Sh7tZdZhZhMvqX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+Sh7tZdZhZhMvqX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+Sh7tZdZhZhMvqX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+Sh7tZdZhZhMvqX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+Sh7tZdZhZhMvqX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+Sh7tZdZhZhMvqX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+Sh7tZdZhZhMvqX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+Sh7tZdZhZhMvqX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+Sh7tZdZhZhMvqX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+
