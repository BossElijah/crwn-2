const INITIAL_STATE = {
  sections: [
    {
      title: 'hats',
      // imageUrl: 'https://images.vexels.com/media/users/3/163862/isolated/preview/8d1c3e1bb466607b9f8b27766f668595-cowboy-hat-side-view-cartoon-by-vexels.png',
      imageUrl: 'https://source.unsplash.com/weekly?mountain',
      id: 1,
      linkUrl: 'shop/hats'
    },
    {
      title: 'jackets',
      // imageUrl: 'https://image.freepik.com/free-vector/jacket-cartoon_119631-180.jpg',
      imageUrl: 'https://source.unsplash.com/daily?mountain',
      id: 2,
      linkUrl: 'shop/jackets'
    },
    {
      title: 'shoes',
      // imageUrl: 'https://lh3.googleusercontent.com/proxy/TtunhWpMTxA6d1Qlz2RayWrkS5nQT_x-3aikjFw774ZFMkfMFf6xNUysWMDzshk-2xvvZSa4WaTUcGwdyCDRfuw',
      imageUrl: 'https://source.unsplash.com/daily?cliff',
      id: 3,
      linkUrl: 'shop/shoes'
    },
    {
      title: 'women',
      // imageUrl: 'https://image.freepik.com/free-vector/woman-profile-cartoon_18591-58480.jpg',
      imageUrl: 'https://source.unsplash.com/daily?water',
      size: 'large',
      id: 4,
      linkUrl: 'shop/women'
    },
    {
      title: 'men',
      // imageUrl: 'https://image.freepik.com/free-vector/man-profile-cartoon_18591-58482.jpg',
      imageUrl: 'https://source.unsplash.com/weekly?cliff',
      size: 'large',
      id: 5,
      linkUrl: 'shop/men'
    }
  ]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
