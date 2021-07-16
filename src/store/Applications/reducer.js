import image from "../../img/a.jpg";

const INITIAL_STATE = {
  items: [
    {
      id: 1,
      itemname: "Purse",
      itemimage: image,
      itemprice: "120 $",
      owner: "Milli",
    },
    {
      id: 2,
      itemname: "Shoe",
      itemimage: image,
      itemprice: "1250 $",
      owner: "Milli",
    },
  ],
  loading: false,
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;
