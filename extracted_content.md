# TransUnion AssistDesk - Content Extraction

## Page Overview
- **Title**: TransUnion - AssistDesk
- **Language**: English
- **Purpose**: Browse and deploy assistants, agents, and squads for workflow automation

## HTML Elements Used

### Document Structure
- `<!DOCTYPE html>` - HTML5 document type
- `<html lang="en">` - Root element with language attribute
- `<head>` - Document metadata section
- `<body>` - Main content section

### Meta Elements
- `<meta charset="UTF-8">` - Character encoding
- `<meta name="viewport" content="width=device-width, initial-scale=1.0">` - Responsive viewport
- `<title>` - Page title
- `<link>` - External stylesheets (Google Fonts, Material Icons)

### Semantic HTML Elements
- `<nav>` - Navigation sidebar
- `<main>` - Main content area
- `<section>` - Content sections (implicit in structure)
- `<header>` - Page and section headers
- `<h1>`, `<h2>`, `<h3>` - Heading hierarchy
- `<p>` - Paragraph text
- `<div>` - Generic containers
- `<span>` - Inline text containers

### Interactive Elements
- `<button>` - Tab buttons and deploy buttons
- `<input>` - Search input field
- `<a>` - Navigation links

### Icon Elements
- `<span class="material-icons">` - Material Design icons

## Content Data

### Navigation Structure
**Sidebar Navigation:**
- Dashboard
- AssistDesk (active)
- Analytics
- Settings

### Main Content

#### Page Header
- **Title**: AssistDesk
- **Subtitle**: Browse and deploy assistants, agents, and squads for your workflow
- **Search Placeholder**: "Search assistants, agents, and squads…"

#### Tab Structure
1. **Assistants** (active)
2. **Task-based Agents**
3. **Goal-based Agents**
4. **Squads**

### Assistants Tab Content

#### Section Header
- **Title**: Assistants
- **Subtitle**: Specialized assistants for data management and exploration tasks

#### Assistant Cards

**1. Data Onboarding Assistant**
- **Type**: Assistant
- **Icon**: cloud_upload
- **Description**: Streamlines data import, validation, and initial setup processes. Handles multiple data formats and provides intelligent mapping suggestions.
- **Setup Time**: ~15 min setup
- **Action**: Deploy button

**2. Data Exploration Assistant**
- **Type**: Assistant
- **Icon**: analytics
- **Description**: Provides intelligent data analysis, pattern recognition, and visualization suggestions. Generates insights and recommendations automatically.
- **Setup Time**: ~10 min setup
- **Action**: Deploy button

**3. Content Creation Assistant**
- **Type**: Assistant
- **Icon**: edit_note
- **Description**: Generates high-quality content including documents, reports, and presentations with brand consistency and tone matching.
- **Setup Time**: ~5 min setup
- **Action**: Deploy button

### Task-based Agents Tab Content

#### Section Header
- **Title**: Task-based Agents
- **Subtitle**: Specialized agents designed to execute specific tasks efficiently

#### Task Agent Cards

**1. Email Marketing Agent**
- **Type**: Task Agent
- **Icon**: email
- **Description**: Automates email campaign creation, A/B testing, and performance optimization based on audience segmentation.
- **Badge**: High automation
- **Action**: Deploy button

**2. Social Media Scheduler**
- **Type**: Task Agent
- **Icon**: schedule
- **Description**: Schedules and publishes content across multiple social media platforms with optimal timing and engagement analysis.
- **Badge**: Real-time scheduling
- **Action**: Deploy button

**3. Lead Generation Agent**
- **Type**: Task Agent
- **Icon**: person_search
- **Description**: Identifies and qualifies potential customers using advanced web scraping and data enrichment techniques.
- **Badge**: Smart qualification
- **Action**: Deploy button

### Goal-based Agents Tab Content

#### Section Header
- **Title**: Goal-based Agents
- **Subtitle**: Strategic agents focused on achieving long-term business outcomes

#### Goal Agent Cards

**1. Revenue Growth Agent**
- **Type**: Goal Agent
- **Icon**: trending_up
- **Description**: Analyzes market trends, customer behavior, and competitive landscape to develop revenue optimization strategies.
- **Badge**: Strategic planning
- **Action**: Deploy button

**2. Customer Retention Agent**
- **Type**: Goal Agent
- **Icon**: favorite
- **Description**: Monitors customer satisfaction, predicts churn risk, and develops personalized retention strategies.
- **Badge**: Predictive insights
- **Action**: Deploy button

**3. Market Expansion Agent**
- **Type**: Goal Agent
- **Icon**: public
- **Description**: Identifies new market opportunities, analyzes competitive landscapes, and develops expansion strategies.
- **Badge**: Market analysis
- **Action**: Deploy button

### Squads Tab Content

#### Section Header
- **Title**: Squads
- **Subtitle**: Collaborative teams of agents working together to achieve complex objectives

#### Squad Cards

**1. Marketing Automation Squad**
- **Type**: Squad
- **Icon**: groups
- **Description**: A coordinated team of agents handling email marketing, social media scheduling, and lead generation for comprehensive marketing automation.
- **Badge**: Multi-agent coordination
- **Action**: Deploy button

## Styling and Design Elements

### CSS Variables (Custom Properties)
- **Primary Colors**: #03A9F4 (primary), #0288D1 (dark), #B3E5FC (light)
- **Accent Color**: #00BCD4
- **Background**: #F5F5F5
- **Surface**: #FFFFFF
- **Text Colors**: #212121 (primary), #757575 (secondary)
- **Divider**: #E0E0E0
- **Shadows**: Light, medium, and heavy variants

### Typography
- **Font Family**: Roboto (Google Fonts)
- **Weights**: 300, 400, 500, 700
- **Icon Font**: Material Icons

### Layout Structure
- **Sidebar**: Fixed 280px width
- **Main Content**: Flexible with 280px left margin
- **Grid System**: CSS Grid with responsive breakpoints
- **Cards**: 350px minimum width, auto-fit columns

### Responsive Design
- **Mobile**: < 768px (sidebar hidden, single column)
- **Tablet**: 769px - 1024px (2 columns)
- **Desktop**: > 1025px (3 columns)

## Interactive Features

### JavaScript Functionality
1. **Tab Switching**: Click handlers for tab navigation
2. **Search Filtering**: Real-time search across card titles and descriptions
3. **Responsive Behavior**: Mobile sidebar toggle (CSS-only)

### Accessibility Features
- **ARIA Attributes**: `role="tablist"`, `role="tab"`, `aria-selected`
- **Semantic HTML**: Proper heading hierarchy, navigation structure
- **Keyboard Navigation**: Tab-accessible buttons and inputs

## External Dependencies
- **Google Fonts**: Roboto font family
- **Material Icons**: Icon font library
- **No external JavaScript libraries**: Vanilla JavaScript only

## Data Summary
- **Total Cards**: 10 (3 assistants + 3 task agents + 3 goal agents + 1 squad)
- **Navigation Items**: 4 main sections
- **Tabs**: 4 content categories
- **Interactive Elements**: 10 deploy buttons, 1 search input, 4 tab buttons
- **Icons Used**: 10 different Material Icons
- **Setup Times**: 5-15 minutes for assistants
- **Badge Types**: 6 different capability badges
