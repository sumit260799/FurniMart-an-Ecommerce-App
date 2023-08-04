export const handler = async function () {
  const item = [
    { name: "sumit", age: 20 },
    { name: "rik", age: 24 },
  ];
  return {
    statusCode: 200,
    body: JSON.stringify(item),
  };
};
