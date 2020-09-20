require('dotenv').config()

const database = {
	development: {
		username: process.env.DB_USERNAME,
		password: process.env.DB_PASSWORD,
		database: process.env.DB_DATABASE,
		dialect: "mysql",
		options: {
			host: process.env.DB_HOST,
			dialect: "mysql",
			pool: {
				max: 5,
				min: 0,
				idle: 10000
			}
		}
	}
}

module.exports = database['development'];
