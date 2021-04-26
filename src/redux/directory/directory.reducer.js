const INITIAL_STATE = {
  sections: [
    {
      title: 'hats',
      imageUrl: 'https://images.unsplash.com/photo-1484593068577-0b446a79ed33?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      id: 1,
      linkUrl: 'shop/hats'
    },
    {
      title: 'jackets',
      imageUrl: 'https://images.unsplash.com/photo-1600271772470-bd22a42787b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80',
      id: 2,
      linkUrl: 'shop/jackets'
    },
    {
      title: 'sneakers',
      imageUrl: 'https://images.unsplash.com/photo-1444090542259-0af8fa96557e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      id: 3,
      linkUrl: 'shop/sneakers'
    },
    {
      title: 'women',
      imageUrl: 'https://images.unsplash.com/photo-1445452916036-9022dfd33aa8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1353&q=80',
      size: 'large',
      id: 4,
      linkUrl: 'shop/women'
    },
    {
      title: 'men',
      imageUrl: 'https://images.unsplash.com/photo-1527954133293-2b42a5f5ffd2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1778&q=80',
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
