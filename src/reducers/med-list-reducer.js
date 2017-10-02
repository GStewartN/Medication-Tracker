const medicineList = (state = [], action) => {
    switch (action.type) {
    case 'ADD_MEDICINE':
      const { name, pillDescription, doctorsOrders, id } = action;
      return [
        ...state,
        {
          name: name,
          pillDescription: pillDescription,
          doctorsOrders: doctorsOrders,
          id: id
        }
      ]
    default:
      return state;
  }
}

export default medicineList;
