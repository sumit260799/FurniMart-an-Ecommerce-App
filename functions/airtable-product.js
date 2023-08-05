const axios = require("axios");
const Airtable = require("airtable-node");

exports.handler = async (event, context) => {
  try {
    const apiKey =
      "patkxBk1j34THGcUK.97d34594fc8cba730a6d6fb0c32178c4b50b99bc790608d9c46079e7f126d5cb";
    const baseId = "appgOEXzBggGiF5lI";
    const tableName = "products";
    const airtable = new Airtable({ apiKey }).base(baseId).table(tableName);

    const response = await airtable.list({ maxRecords: 200 });
    const records = response.records;
    console.log(records);

    return {
      statusCode: 200,
      body: JSON.stringify(records),
    };
  } catch (error) {
    console.error("Error fetching data from Airtable:", error);

    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Error fetching data from Airtable" }),
    };
  }
};
