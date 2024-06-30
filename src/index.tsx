import React from "react"

interface TabProps {
  tabList: {
    name: string
    Component: React.FC
  }[]
  currentTabIndex: number
  tabClickHandler: (index: number) => void
  selectTabClass: string
  unselectedTabClass: string
  tabContainerClass: string
}

export const Tab: React.FC<TabProps> = ({
  tabList,
  currentTabIndex,
  tabClickHandler,
  selectTabClass,
  unselectedTabClass,
  tabContainerClass,
}) => {
  return (
    <div className={tabContainerClass}>
      {tabList.map(({ name }, index) => (
        <div
          key={name}
          className={
            currentTabIndex === index ? selectTabClass : unselectedTabClass
          }
          onClick={() => tabClickHandler(index)}
        >
          {name}
        </div>
      ))}
      {tabList.map(({ Component }, index) => {
        return index === currentTabIndex ? <Component key={index} /> : null
      })}
    </div>
  )
}
