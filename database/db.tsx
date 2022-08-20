// To be used with a Managed PostgreSQL database

const { Pool } = require('pg')
const connectionString = process.env.DATABASE_URL //Not sure if this is the best way to do this, but it works too. But i'd rather go with the step below

const pool = new Pool({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT,
  ssl: { rejectUnauthorized: false },
})

//This is the function that will be called to get the data from the database. It can house a callback function to be called when adding the data to the database.


export default {
  query: (sql: any) => {
    return pool.query(sql)
  },
}
