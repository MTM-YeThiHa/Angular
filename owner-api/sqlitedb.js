var sqlite3 = require('sqlite3').verbose()
const DBSOURCE = "ownerdb.sqlite"

let db = new sqlite3.Database(DBSOURCE, (err) => {
    if(err) {
        console.log(err.message)
        throw err
    } else {
        console.log('Connected to the SQLite database...')
        db.run(`CREATE TABLE owner(
            id INT (11) NOT NULL PRIMARY KEY AUTOINCREMENT,
            id VARCHAR (255) NOT NULL,
            name VARCHAR (255) NOT NULL,
            dateOfBirth VARCHAR (255) NOT NULL,
            address VARCHAR (255) NOT NULL,
        )`,
            (err) => {
                if (err) {
                    console.log(err);
                }else{
                    var insert = 'INSERT INTO owner (id, name, dateOfBirth, address) VALUES (?,?,?,?)'
                    db.run(insert, ['1', 'Anna Bosh', 'Nov 14, 1974', '27 Colored Row'])
                    db.run(insert, ['2', 'Daniel Batista', 'Apr 19, 2000', '27 congress Avenue 56'])
                    db.run(insert, ['3', ' Dave', 'Mar 29, 2009', 'Dave Street 23'])
                    db.run(insert, ['4', 'John Keen', 'Dec 30, 1980', ' 61 Wellfield Road'])
                    db.run(insert, ['5', 'Martin Miller', 'May 21, 1954', '3 Edger Buildings'])
                    db.run(insert, ['6', 'Sam Query', 'Apr 22, 1990', '91 Western Roads'])
                    db.run(insert, ['7', 'Anna Bosh', 'Nov 14, 1974', '27 Colored Row'])
                    db.run(insert, ['8', 'Anna Bosh', 'Nov 14, 1974', '27 Colored Row'])
                    db.run(insert, ['9', 'Anna Bosh', 'Nov 14, 1974', '27 Colored Row'])
                    db.run(insert, ['10', 'Anna Bosh', 'Nov 14, 1974', '27 Colored Row'])
                    db.run(insert, ['1', 'Anna Bosh', 'Nov 14, 1974', '27 Colored Row'])
                    db.run(insert, ['1', 'Anna Bosh', 'Nov 14, 1974', '27 Colored Row'])
                    db.run(insert, ['1', 'Anna Bosh', 'Nov 14, 1974', '27 Colored Row'])
                    db.run(insert, ['1', 'Anna Bosh', 'Nov 14, 1974', '27 Colored Row'])
                    db.run(insert, ['1', 'Anna Bosh', 'Nov 14, 1974', '27 Colored Row'])
                    db.run(insert, ['1', 'Anna Bosh', 'Nov 14, 1974', '27 Colored Row'])
                    db.run(insert, ['1', 'Anna Bosh', 'Nov 14, 1974', '27 Colored Row'])
                    db.run(insert, ['1', 'Anna Bosh', 'Nov 14, 1974', '27 Colored Row'])
                    db.run(insert, ['1', 'Anna Bosh', 'Nov 14, 1974', '27 Colored Row'])
                    db.run(insert, ['1', 'Anna Bosh', 'Nov 14, 1974', '27 Colored Row'])
                    db.run(insert, ['1', 'Anna Bosh', 'Nov 14, 1974', '27 Colored Row'])
                }
            }
        );
    }
});

module.exports = db