const Pool = require('pg').Pool
const pool = new Pool({
  user: 'tofts',
  host: 'localhost',
  database: 'checkyourcar',
// When moving this to production, put into a separate
// and secure file
  password: 'odette21',
  port: 5432,
})

// More functions to come!

// Return a list of issues
const getIssues = (request, response) => {
  pool.query('SELECT description FROM safety_issues', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

// Enter a new user into the table reg_users
const registerUser = (request, response) => {
  const { last_name, first_name, state, email, ntf_method, pwd } = request.body

  pool.query('INSERT INTO reg_users (last_name, first_name, state, email, ntf_method, pwd) VALUES ($1, $2, $3, $4, $5, $6)', [last_name, first_name, state, email, ntf_method, pwd], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(`User registered with ID: ${result.insertId}`)
  })
}

module.exports = {
  getIssues,
  registerUser
}
