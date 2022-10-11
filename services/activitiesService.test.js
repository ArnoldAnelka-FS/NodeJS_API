const { activitiesService, activitiesServiceById } = require('./activitiesService');

jest.mock("./activitiesService");

describe('Activities Service Tests', () => {
 test('As a user I should return an Activity as an object', async () => {
  const result = await activitiesService();
//   expect(result.data).toHaveProperty('activity');
//   expect(result.data).toHaveProperty('type');
//   expect(result.data).toHaveProperty('participants');
 });

    test('As a user I should return an Activity as an object by Key', async () => {
     const result = await activitiesServiceById(5881028);
    //  expect(result.data.key).toEqual(5881028);
    // expect(result.data.type).toEqual('education);
    // expect(result.data.participants).toEqual(1);
    });
});