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
});
