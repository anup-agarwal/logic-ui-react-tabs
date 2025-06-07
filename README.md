# @logicblocks/react-tabs

A customizable React tab component with **no built-in CSS** — completely style-agnostic and perfect for logic-only UI builds.

---

## 🚀 Installation

Using npm:

```bash
npm install @logicblocks/react-tabs
```

Using yarn:

```bash
yarn add @logicblocks/react-tabs
```

---

## 💡 Usage Examples

---

### 1️⃣ With CSS Classes

### 📦 Example CSS
```css
/* tabs.css */

.tabs {
  display: flex;
  flex-direction: column;
  border: 1px solid #ccc;
  padding: 12px;
}

.tab-options {
  display: flex;
  gap: 10px;
  border-bottom: 1px solid #ccc;
  margin-bottom: 10px;
}

.selected {
  background-color: #007bff;
  color: white;
  padding: 8px 16px;
  border-radius: 4px 4px 0 0;
  border: 1px solid #007bff;
  border-bottom: none;
  cursor: pointer;
}

.unselected {
  background-color: #f1f1f1;
  color: #333;
  padding: 8px 16px;
  border-radius: 4px 4px 0 0;
  border: 1px solid #ccc;
  cursor: pointer;
}
```

```tsx
import React, { useState } from 'react';
import { Tab } from '@logicblocks/react-tabs';
import './tabs.css'; // Your own CSS file

const Tab1 = () => <div>Tab 1 content</div>;
const Tab2 = () => <div>Tab 2 content</div>;

const App = () => {
  const [index, setIndex] = useState(0);

  const tabList = [
    { name: 'Tab 1', Component: Tab1 },
    { name: 'Tab 2', Component: Tab2 }
  ];

  return (
    <Tab
      tabList={tabList}
      currentTabIndex={index}
      tabClickHandler={setIndex}
      selectTabClass="selected"
      unselectedTabClass="unselected"
      tabContainerClass="tabs"
      tabOptionsClass="tab-options"
    />
  );
};

export default App;
```

---

### 2️⃣ With Inline Styles

```tsx
import React, { useState } from 'react';
import { Tab } from '@logicblocks/react-tabs';

const Tab1 = () => <div>Tab 1 content</div>;
const Tab2 = () => <div>Tab 2 content</div>;

const App = () => {
  const [index, setIndex] = useState(0);

  const tabList = [
    { name: 'Tab 1', Component: Tab1 },
    { name: 'Tab 2', Component: Tab2 }
  ];

  return (
    <Tab
      tabList={tabList}
      currentTabIndex={index}
      tabClickHandler={setIndex}
      selectTabStyle={{ color: 'white', backgroundColor: 'blue' }}
      unselectedTabStyle={{ color: 'black', backgroundColor: '#f0f0f0' }}
      tabContainerStyle={{ padding: '12px', border: '1px solid #ddd' }}
      tabOptionsStyle={{ display: 'flex', gap: '8px' }}
    />
  );
};

export default App;
```

---

### 3️⃣ With Tailwind CSS (v3.4+)

> 💡 Ensure Tailwind is set up and you're using at least **v3.4.0**

```tsx
import React, { useState } from 'react';
import { Tab } from '@logicblocks/react-tabs';

const Tab1 = () => <div className="p-4 text-gray-700">Tab 1 content</div>;
const Tab2 = () => <div className="p-4 text-gray-700">Tab 2 content</div>;

const App = () => {
  const [index, setIndex] = useState(0);

  const tabList = [
    { name: 'Tab 1', Component: Tab1 },
    { name: 'Tab 2', Component: Tab2 }
  ];

  return (
    <Tab
      tabList={tabList}
      currentTabIndex={index}
      tabClickHandler={setIndex}
      selectTabClass="bg-blue-600 text-white px-4 py-2 rounded-t"
      unselectedTabClass="bg-gray-100 text-gray-700 px-4 py-2"
      tabContainerClass="border border-gray-300 p-4 rounded"
      tabOptionsClass="flex gap-2 border-b border-gray-300"
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
