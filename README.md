# WorkflowAI AssistDesk

A modern, responsive web interface for browsing and deploying AI assistants, agents, and squads. Built with Material Design principles and a sky blue theme.

## Features

### 🎨 Design
- **Material Design**: Clean, modern interface following Google's Material Design guidelines
- **Sky Blue Theme**: Professional color scheme with primary blue (#03A9F4) and complementary colors
- **Responsive Layout**: Adapts seamlessly from desktop (3-column) to tablet (2-column) to mobile (1-column)
- **TransUnion Branding**: Company attribution in the sidebar

### 🧭 Navigation
- **Persistent Sidebar**: Fixed navigation with Dashboard, AssistDesk, Analytics, and Settings
- **Active State**: Visual indication of current page (AssistDesk highlighted)
- **Tab System**: Four main categories - Assistants, Task-based Agents, Goal-based Agents, and Squads

### 🔍 Functionality
- **Global Search**: Real-time search across all assistants, agents, and squads
- **Interactive Tabs**: Smooth transitions between different agent types
- **Card Components**: Consistent layout for all agent types with hover effects
- **Deploy Actions**: Primary action buttons for each agent/assistant

### 📱 Responsive Design
- **Desktop**: 3-column card grid with full sidebar
- **Tablet**: 2-column card grid with full sidebar
- **Mobile**: 1-column card grid with collapsible sidebar

## Content Structure

### Assistants Tab
- **Data Onboarding Assistant**: Streamlines data import and validation (~15 min setup)
- **Data Exploration Assistant**: Intelligent data analysis and visualization (~10 min setup)
- **Content Creation Assistant**: High-quality content generation (~5 min setup)

### Task-based Agents Tab
- **Email Marketing Agent**: Campaign automation with A/B testing
- **Social Media Scheduler**: Multi-platform content scheduling
- **Lead Generation Agent**: Customer identification and qualification

### Goal-based Agents Tab
- **Revenue Growth Agent**: Market analysis and revenue optimization
- **Customer Retention Agent**: Churn prediction and retention strategies
- **Market Expansion Agent**: New market opportunity identification

### Squads Tab
- **Marketing Automation Squad**: Coordinated multi-agent marketing team

## Technical Implementation

### CSS Features
- **CSS Custom Properties**: Consistent color scheme and spacing
- **Flexbox & Grid**: Modern layout techniques
- **Smooth Transitions**: Hover effects and state changes
- **Material Icons**: Google's icon font for consistent iconography

### JavaScript Features
- **Tab Navigation**: Dynamic content switching
- **Search Functionality**: Real-time filtering of cards
- **Accessibility**: ARIA attributes for screen readers
- **Event Handling**: Clean, modern JavaScript without frameworks

### Browser Support
- Modern browsers with CSS Grid and Flexbox support
- Responsive design works on all screen sizes
- Progressive enhancement for older browsers

## Usage

1. Open `index.html` in a web browser
2. Navigate between tabs to explore different agent types
3. Use the search bar to filter agents by name or description
4. Click "Deploy" buttons to initiate agent deployment (placeholder functionality)

## File Structure

```
/
├── index.html          # Main HTML file with embedded CSS and JavaScript
└── README.md          # This documentation file
```

## Customization

The design uses CSS custom properties for easy theming:

```css
:root {
    --primary-color: #03A9F4;      /* Main brand color */
    --primary-dark: #0288D1;       /* Darker variant */
    --primary-light: #B3E5FC;      /* Lighter variant */
    --accent-color: #00BCD4;       /* Accent color */
    /* ... other variables */
}
```

Modify these values to change the color scheme while maintaining the Material Design aesthetic.

## Future Enhancements

- Backend integration for actual agent deployment
- User authentication and preferences
- Advanced filtering and sorting options
- Agent performance metrics and analytics
- Custom agent creation interface
