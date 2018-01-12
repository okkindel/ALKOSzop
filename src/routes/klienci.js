exports.list = function (req, res) {

    req.getConnection(function (err, connection) {
        var nazwa = req.query.user;

        var filter = "";
        if (nazwa) {
            filter = 'WHERE nazwisko = ?';
        }

        var query = connection.query('SELECT * FROM Klient ' + filter, nazwa, function (err, rows) {
            if (err) {
                console.log("Error Selecting : %s ", err);
            }

            res.render('klienci', {page_title: 'AlkoSZOP - Klienci', data: rows, user: nazwa});
        });
    });
};