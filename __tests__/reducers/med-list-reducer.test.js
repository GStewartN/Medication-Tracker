import medicineList from './../../src/reducers/med-list-reducer';
import c from './../../src/constants/constants';

describe("Med list reducer", () => {
  let action;
  const medInfo = {
    name: "Aspirin",
    pillDescription: "white pill",
    doctorsOrders: "take once a day before bed",
    id: 0
  };

  const medInfo2 = {
    name: "Tylenol",
    pillDescription: "long white pill",
    doctorsOrders: "take once a day before bed",
    id: 1
  };

  test('should return equivalent state if no action type is recognized', () => {
      action = { type: null };
      expect(medicineList([], action)).toEqual([]);
    });

    test('should add medicine to list array', () => {
      const { name, pillDescription, doctorsOrders, id } = medInfo;
      action = {
        type: c.ADD_MEDICINE,
        name: name,
        pillDescription: pillDescription,
        doctorsOrders: doctorsOrders,
        id: id
      };
      const futureState = [ medInfo ];
      expect(medicineList([], action)).toEqual([ medInfo ]);
    });

    test('should remove medicine from array', () => {
    const { id } = medInfo2;
    action = {
      type: c.REMOVE_MEDICINE,
      id: id
    };
    const previousState = [ medInfo, medInfo2 ];
    const futureState = [ medInfo ];
    expect(medicineList(previousState, action)).toEqual(futureState);
  });
});
