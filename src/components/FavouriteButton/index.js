import React from 'react';
import { Tooltip, Icon } from 'antd';

const FavouriteButton = ({ isFavourite, handleFavourite }) => {
  const iconView =
     isFavourite ?
       (
         <Tooltip title="点击取消收藏">
           <Icon
             type="star"
             onClick={() => handleFavourite(false)}
             style={{ fontSize: 25, color: '#FFCF11' }}
           />
         </Tooltip>
       )
       :
       (
         <Tooltip title="点击收藏">
           <Icon
             type="star-o"
             onClick={() => handleFavourite(true)}
             style={{ fontSize: 25 }}
           />
         </Tooltip>
       );

  return (
    <div>
      {iconView}
    </div>
  );
};

export default FavouriteButton;
