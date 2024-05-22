import { client } from "../db/db.js";

export const GetEmployees = (req, res) => {
  const q = "select * from employee";
  client.query(q, (err, data) => {
    if (err) {
      console.error(err);
      return res.json(err);
    }
    return res.status(200).json(data);
  });
};
export const GetEmployee = (req, res) => {
  res.end("Logout");
};
export const AddEmployee = (req, res) => {
  res.end("Logout");
};
export const UpdateEmployee = (req, res) => {
  res.end("Logout");
};
export const DeleteEmployee = (req, res) => {
  res.end("Logout");
};
