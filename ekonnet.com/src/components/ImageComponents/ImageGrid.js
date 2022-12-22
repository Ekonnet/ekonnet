import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
// import ImageListItemBar from '@mui/material/ImageListItemBar';

export default function ImageGrid() {
  return (
   <>
   <ImageList
  sx={{ width: 500, height: 450 }}
  variant="quilted"
  cols={4}
  rowHeight={121}
>
  {itemData.map((item) => (
    <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
      <img
        {...srcset(item.img, 121, item.rows, item.cols)}
        alt={item.title}
        loading="lazy"
      />
    </ImageListItem>
  ))}
</ImageList>
   
   
   </>
  );
}




