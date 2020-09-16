const pgp = require("pg-promise")({
  query: function (e) {
    console.log("QUERY:", e.query);
  },
});

const options = {
  host: "drona.db.elephantsql.com",
  database: "dmnyhceu",
  user: "dmnyhceu",
  password: "mwnd-9cn7N6xnkh7SLkNSh5fBU-LCaqF",
};

const db = pgp(options);

module.exports = db;
