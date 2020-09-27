const pool = require('./pool');

const getSVG = (request, response) => {
    const municipios = request.params.nome;
  
    pool.query('SELECT ST_AsSVG(geom) FROM municipios WHERE nome ilike $1', [municipios], (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    });
  };
  
  const getViewBox = (request, response) => {
    const municipios = request.params.nome;
  
    pool.query('SELECT getViewBox($1)', [municipios], (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    });
  };

  

module.exports = {getSVG, getViewBox};