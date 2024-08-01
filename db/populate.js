const { Client } = require("pg");

const dbUrl = process.argv[2];

if (!dbUrl) {
  console.error("Please provide the database URL as an argument");
  process.exit(1);
}

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  username VARCHAR (20) NOT NULL,
  text VARCHAR(255) NOT NULL,
  added TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO messages (text, username) VALUES
  ('Hi there!', 'Amando'),
  ('Hello World!', 'Charles')
`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: dbUrl,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
