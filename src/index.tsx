import React from "react"

interface TabProps {
  tabList?: {
    name: string
    Component: React.FC
  }[]
  currentTabIndex?: number
  tabClickHandler?: (index: number) => void
  selectTabClass?: string
  unselectedTabClass?: string
  tabContainerClass?: string
  tabOptionsClass?: string
  selectTabStyle?: React.CSSProperties
  unselectedTabStyle?: React.CSSProperties
  tabContainerStyle?: React.CSSProperties
  tabOptionsStyle?: React.CSSProperties
}

export const Tab: React.FC<TabProps> = ({
  tabList = [],
  currentTabIndex = 0,
  tabClickHandler = () => {},
  selectTabClass = "",
  unselectedTabClass = "",
  tabContainerClass = "",
  tabOptionsClass = "",
  selectTabStyle = {},
  unselectedTabStyle = {},
  tabContainerStyle = {},
  tabOptionsStyle = {},
}) => {
  return (
    <div className={tabContainerClass} style={tabContainerStyle}>
      <div
        className={tabOptionsClass}
        style={tabOptionsStyle}
        role="tablist"
        aria-label="Tabs"
      >
        {tabList.map(({ name }, index) => (
          <button
            key={name}
            className={
              currentTabIndex === index ? selectTabClass : unselectedTabClass
            }
            style={
              currentTabIndex === index ? selectTabStyle : unselectedTabStyle
            }
            role="tab"
            aria-selected={currentTabIndex === index}
            aria-controls={`tabpanel-${index}`}
            id={`tab-${index}`}
            onClick={() => tabClickHandler(index)}
          >
            {name}
          </button>
        ))}
      </div>
      {tabList.map(({ Component }, index) => (
        <div
          key={index}
          role="tabpanel"
          id={`tabpanel-${index}`}
          aria-labelledby={`tab-${index}`}
          hidden={currentTabIndex !== index}
        >
          {currentTabIndex === index && <Component />}
        </div>
      ))}
    </div>
  )
}
