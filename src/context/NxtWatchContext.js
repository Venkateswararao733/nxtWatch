import React from 'react'

const NxtWatchContext = React.createContext({
  isDark: false,
  onClickThemeBtn: () => {},
  savedVideos: [],
  onClickSaveBtn: () => {},
  isLiked: false,
  onCLickLikeBtn: () => {},
  isDisLiked: false,
  onClickDisLikeBtn: () => {},
  activeMenu: 'HOME',
  changeActiveMenu: () => {},
})

export default NxtWatchContext
