# Sidebar Collapse Assignment

## Description
This assignment demonstrates a responsive sidebar that can be collapsed and expanded using **only CSS**. The sidebar includes navigation items and a toggle button (☰) to show or hide the full sidebar content.

## Features
- **Collapsible Sidebar**: Click the ☰ button to expand or collapse the sidebar.
- **Navigation Items**: Includes `Home` and `Settings` with icons.
- **CSS Only**: No JavaScript is used; the collapse functionality relies on a hidden checkbox and CSS selectors.
- **Responsive Layout**: Main content adjusts automatically when the sidebar width changes.
- **Footer**: A simple footer at the bottom of the page.

## Files
- `index.html` – Main HTML file containing the sidebar and content.
- `style.css` – CSS styling for the sidebar, main content, and toggle functionality.

## How to Use
1. Open `index.html` in a web browser.
2. Click the ☰ button to toggle the sidebar between collapsed and expanded states.

## Preview
- Collapsed sidebar shows only icons.
- Expanded sidebar displays both icons and text for navigation items.

## Notes
- Sidebar transitions are smooth using CSS `transition`.
- Hover-expand functionality is included but commented out. It can be enabled if needed.

## Functionality Using CSS
The sidebar collapse is implemented purely with CSS:

```css
#toggle:checked ~ .sidebar {
  width: var(--sidebar);
}
#toggle:checked ~ .sidebar .text {
  display: inline; /* Show text when toggled open */
}
