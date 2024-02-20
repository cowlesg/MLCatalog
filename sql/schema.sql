CREATE TABLE modelruns (
    runid INTEGER PRIMARY KEY AUTOINCREMENT,
    datasetname VARCHAR(20) NOT NULL,
    rundatetime DATETIME  NOT NULL,
    modelmetric VARCHAR(40) NOT NULL,
    modelpath VARCHAR(40) NOT NULL,
    trainingloss INTEGER NOT NULL,
    validationloss INTEGER NOT NULL,
    notes VARCHAR(256),
    isfavorite BOOLEAN NOT NULL,
);