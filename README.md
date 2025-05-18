# @logic-ui/react-tabs

A customizable React tab component with **no built-in CSS** — completely style-agnostic and perfect for logic-only UI builds.

---

## 🚀 Installation

Using npm:

```bash
npm install @logic-ui/react-tabs
```

Using yarn:

```bash
yarn add @logic-ui/react-tabs
```

---

## 💡 Usage

Here's a basic example of how to use `@logic-ui/react-tabs`:

```tsx
import React, { useState } from 'react';
import { Tab } from '@logic-ui/react-tabs';

const Tab1 = () => <div>Content for Tab 1</div>;
const Tab2 = () => <div>Content for Tab 2</div>;

const App = () => {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  const tabList = [
    { name: 'Tab 1', Component: Tab1 },
    { name: 'Tab 2', Component: Tab2 },
  ];

  return (
    <Tab
      tabList={tabList}
      currentTabIndex={currentTabIndex}
      tabClickHandler={setCurrentTabIndex}
      selectTabClass="selected-tab"
      unselectedTabClass="unselected-tab"
      tabContainerClass="tab-container"
      tabOptionsClass="tab-options"
      selectTabStyle={{ color: 'white', backgroundColor: 'blue' }}
      unselectedTabStyle={{ color: 'gray', backgroundColor: 'lightgray' }}
      tabContainerStyle={{ border: '1px solid black', padding: '10px' }}
      tabOptionsStyle={{ display: 'flex', gap: '10px' }}
    />
  );
};

export default App;
```

---

## 📦 Props

### ✅ Required Props

- `tabList`: Array of tab configs:
  - `name` (string): Tab label
  - `Component` (React.FC): Component rendered for the tab
- `currentTabIndex` (number): Currently active tab index

### ⚙️ Optional Props

- `tabClickHandler`: Callback when a tab is clicked — receives index (function)
- `selectTabClass`: CSS class for the selected tab (string)
- `unselectedTabClass`: CSS class for unselected tabs (string)
- `tabContainerClass`: Class for tab wrapper (string)
- `tabOptionsClass`: Class for tab selector container (string)

### 🎨 Style Props (Optional Inline Styles)

- `selectTabStyle`: Inline style for selected tab
- `unselectedTabStyle`: Inline style for unselected tabs
- `tabContainerStyle`: Inline style for outer tab container
- `tabOptionsStyle`: Inline style for the tab options container

---

## 🎨 Example CSS

Use your own styles, or start with this:

```css
.tab-container {
  display: flex;
  flex-direction: column;
}

.tab-options {
  display: flex;
  border-bottom: 1px solid #ccc;
}

.selected-tab {
  padding: 10px 20px;
  border: 1px solid #ccc;
  border-bottom: none;
  cursor: pointer;
  background-color: #f9f9f9;
}

.unselected-tab {
  padding: 10px 20px;
  cursor: pointer;
}
```

---

## 🤝 Contributing

Contributions are welcome!  
Feel free to [open an issue](https://github.com/anup-agarwal/logic-ui-react-tabs/issues) or submit a pull request on [GitHub](https://github.com/anup-agarwal/logic-ui-react-tabs).

---

## 📄 License

MIT License © [Anup Agarwal](https://github.com/anup-agarwal)
