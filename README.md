# react-tab-component-pure-js

A customizable React tab component with no pre-defined CSS, allowing you to style it as you see fit using classes or inline styles.

## Installation

To install the component, use npm or yarn:

```sh
npm install react-tab-component-pure-js

or

yarn add react-tab-component-pure-js
```

Usage

Here’s a basic example of how to use the react-tab-component-pure-js in your React project:

```sh
import React, { useState } from 'react';
import { Tab } from 'react-tab-component-pure-js';

const Tab1 = () => <div>Content for Tab 1</div>;
const Tab2 = () => <div>Content for Tab 2</div>;

const App = () => {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  const tabList = [
    { name: 'Tab 1', Component: Tab1 },
    { name: 'Tab 2', Component: Tab2 },
  ];

  const handleTabClick = (index: number) => {
    setCurrentTabIndex(index);
  };

  return (
    <Tab
      tabList={tabList}
      currentTabIndex={currentTabIndex}
      tabClickHandler={handleTabClick}
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

## Props
### Required Props
- tabList: An array of objects representing each tab.Each object should have:
  - name: The name of the tab (string).
  - Component: The component to render when the tab is selected (React.FC).
- currentTabIndex: The index of the currently selected tab (number).

### Optional Props
  - tabClickHandler: A function to handle tab clicks. It receives the index of the clicked tab (function).
  - selectTabClass: The CSS class for the selected tab (string).
  - unselectedTabClass: The CSS class for the unselected tabs (string).
  - tabContainerClass: The CSS class for the tab container (string).
  - tabOptionsClass: The CSS class for the tab options container (string).

### Inline Style Support (Optional Props)
- selectTabStyle: Inline styles for the selected tab (React.CSSProperties).
- unselectedTabStyle: Inline styles for the unselected tabs (React.CSSProperties).
- tabContainerStyle: Inline styles for the tab container (React.CSSProperties).
- tabOptionsStyle: Inline styles for the tab options container (React.CSSProperties).


## Example Styles

Here is an example of how you can style the tabs:
```sh
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

## Contributing
### Contributions are welcome! Please open an issue or submit a pull request on [github](https://github.com/anup-agarwal/react-tab-component-pure-js)


## License
### This project is licensed under the MIT License.
