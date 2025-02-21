import React from 'react';
import MusicItem from './MusicItem.jsx';
import { useLocation } from 'react-router-dom';
const ItemsArea = ({ items, title, itemsArray, pathId }) => {
  const { pathname } = useLocation();
  const isHome = pathname === '/';
  let finalItems = isHome ? items : 120;
  const safeItemsArray = Array.isArray(itemsArray) ? itemsArray : [];
  return (
    <div className="items-area flex">
      {safeItemsArray
        .filter((currentValue, index) => index < finalItems)
        .map((current, id) => (
          <MusicItem
            pathId={pathId}
            {...current}
            key={`${title}-${id}`}
          />
        ))}
    </div>
  );
};
export default ItemsArea;