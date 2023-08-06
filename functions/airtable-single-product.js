const axios = require("axios");
const Airtable = require("airtable-node");
const apiKey = process.env.AIRTABLE_API_KEY;
const baseId = process.env.AIRTABLE_BASE;
const tableName = process.env.AIRTABLE_TABLE;
const airtable = new Airtable({ apiKey }).base(baseId).table(tableName);
export const handler = async function (event, context, cb) {
  const { id } = event.queryStringParameters;
  if (id) {
    try {
      let product = await airtable.retrieve(id);
      if (product.error) {
        return {
          statusCode: 404,
          body: `no product with id: ${id}`,
        };
      }
      product = { id: product.id, ...product.fields };
      return {
        statusCode: 200,
        body: JSON.stringify(product),
      };
    } catch (error) {
      console.log(error);
    }
  }
  return {
    statusCode: 400,
    body: JSON.stringify("please provide product id"),
  };
};
