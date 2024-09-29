export function getImageUrl(product) {
  // Assuming product has an id or similar attribute to differentiate images
  const images = ['https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTo5flQxAAy7pQkV-h3-u6lkkGl_WCAY7ukbOvk0sSfnwb1x9ysbbY9j3XfSXYwd9f9iBm0BDMJ6vndtQjiOMMLrRxciSsy5Mv1qXCHQiWU6S5s4bR6j5yn-HQ&usqp=CAc'
    , 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQhFzgsWA8vC3hSY58QPJoX_PKHifmrHaE-wjtJsvPeHu8296nnoA5SmKed231gSUzD8C_uxMSHNVjK88ZODID3IFNK6xEDKX8jerBADcmHUfbk_uXFJu_l07HCmKJEvJvxd7Mc4ftTDQc&usqp=CAc',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhIWljm0sG-WS1QH-ZIjwwH4mW9eU5LwmNgg&s',
    'https://marah5g.com/wp-content/uploads/2021/03/smiling-cat-keychain-k004_7.jpg',
    'https://down-th.img.susercontent.com/file/th-11134207-7r990-lx6bex671ozz41',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9KBANaDEjbv416Z9oCEXLucmxUqInYQGcRg&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShm1Ob48LV5g-Ssn7QaZTIOs5iLCM4iV0lVQ&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr5wVDcPFlqfhknT9QUF_GVvyzhwYChZCAfA&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR6gpd2LHk6Wj0HpU_Jz_Wiv-7Mn5H3EEvTg&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYnNQNSEheyTnXuv0KYSuY8y30CKCfS3GhbA&s']; // Correctly formatted image names

  // You can use the product ID to select an image. Here is a simple example:
  const imageIndex = product.id % images.length; // Ensures the index is within the bounds of the images array
  return images[imageIndex]; // Return the corresponding image URL
}
