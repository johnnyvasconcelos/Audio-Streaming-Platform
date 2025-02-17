import React from 'react'
import MusicItem from './MusicItem.jsx';
import { useLocation } from 'react-router-dom'
const ItemsArea = ({items, title, itemsArray, pathId}) => {
  const { pathname } = useLocation();
  const isHome = pathname === '/';
  let finalItems = isHome ? items : 120
  return (
    <>
              <div className="items-area  flex">
                {itemsArray.filter((currentValue, index) => index < finalItems).map((current, id) => (
                    <MusicItem
                    pathId={pathId}
                    {...current}
                    key={`${title}-${id}`}
                    />
                ))}
              </div>
    </>
  )
};
export default ItemsArea