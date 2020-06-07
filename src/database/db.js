const sqlite3 = require("sqlite3").verbose()

const db = new sqlite3.Database("./src/database/database.db")
module.exports = db

/*
 db.serialize(() => {

    const createTablePlacesQuery = `
    CREATE TABLE IF NOT EXISTS places (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        image TEXT,
        name TEXT,
        address TEXT,
        address2 TEXT,
        state TEXT,
        city TEXT,
        items TEXT
    );
    `

       const insertQuery = 
        `
        INSERT INTO places(image, name, address, address2, state, city, items)
        VALUES (?,?,?,?,?,?,?);
        `
        
        const values = [
            "https://images.unsplash.com/photo-1528323273322-d81458248d40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1101&q=80",
            "Colectoria",
            "Guilherme Gemballa, Jardim América",
            "número 260",
            "Santa Catarina",
            "Rio do Sul",
            "Resíduos Eletronicos, Lampadas"
        ]



    db.run(insertQuery, values)
   
    db.run(createTablePlacesQuery)

    db.all('SELECT * FROM places', (err, rows) => {
        rows.forEach(element => {
            console.log(element)
        })
    })

    

})
*/