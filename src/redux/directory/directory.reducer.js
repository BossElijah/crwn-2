const INITIAL_STATE = {
  sections: [
    {
      title: 'hats',
      imageUrl: 'https://thumblr.uniid.it/product/207929/53c57f256bce.jpg',
      id: 1,
      linkUrl: 'shop/hats'
    },
    {
      title: 'jackets',
      imageUrl: 'https://thumblr.uniid.it/product/210017/360f028e205b.jpg',
      id: 2,
      linkUrl: 'shop/jackets'
    },
    {
      title: 'shoes',
      imageUrl: 'https://thumblr.uniid.it/product/217103/329dd9987986.jpg',
      id: 3,
      linkUrl: 'shop/shoes'
    },
    {
      title: 'women',
      imageUrl:
        'https://images.unsplash.com/photo-1445452916036-9022dfd33aa8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1353&q=80',
      size: 'large',
      id: 4,
      linkUrl: 'shop/women'
    },
    {
      title: 'men',
      imageUrl:
        'https://images.unsplash.com/photo-1527954133293-2b42a5f5ffd2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1778&q=80',
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
