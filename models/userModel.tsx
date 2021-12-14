import db from '../database/db';

//Getting all users from the database
const alluserquery = `SELECT * FROM users`
export const getAllUsers = db.query(alluserquery)
