import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';

function TableCripto() {
  const [cotizaciones, setCotizaciones] = useState([]);

  useEffect(() => {
    const ws = new WebSocket('wss://stream.binance.com:9443/stream?streams=btcusdt@ticker/ethusdt@ticker/solusdt@ticker/maticusdt@ticker/cakeusdt@ticker');

    ws.onmessage = (event) => {
      const objeto = JSON.parse(event.data);
      const nombreCripto = objeto.data.s;
      const precioActual = parseFloat(objeto.data.c).toFixed(4);
      const cambioActual = objeto.data.P;

      setCotizaciones(cotizaciones => {
        const cotizacionExistente = cotizaciones.find(cotizacion => cotizacion.nombreCripto === nombreCripto);
        if (cotizacionExistente) {
          return cotizaciones.map(cotizacion => {
            if (cotizacion.nombreCripto === nombreCripto) {
              const precioAnterior = cotizacion.precioActual;
              const cambioAnterior = cotizacion.cambioActual;
              let colorPrecio, colorCambio;
              if (precioAnterior > precioActual) {
                colorPrecio = 'red';
              } else if (precioAnterior < precioActual) {
                colorPrecio = '#5DB142';
              }
              if (cambioAnterior > cambioActual) {
                colorCambio = 'red';
              } else if (cambioAnterior < cambioActual) {
                colorCambio = '#5DB142';
              }
              return { nombreCripto, precioActual, cambioActual, colorPrecio, colorCambio };
            } else {
              return cotizacion;
            }
          });
        } else {
          return [...cotizaciones, { nombreCripto, precioActual, cambioActual, colorPrecio: '', colorCambio: '' }];
        }
      });
    };

    return () => {
      ws.close();
    };
  }, []);

  return (
    <div>
      <h1>Cotizaciones de criptomonedas</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Criptomoneda</th>
            <th>Cotización</th>
            <th>Variación</th>
          </tr>
        </thead>
        <tbody>
          {cotizaciones.map((cotizacion, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{cotizacion.nombreCripto}</td>
              <td style={{ color: cotizacion.colorPrecio }}>{`USD ${cotizacion.precioActual}`}</td>
              <td style={{ color: cotizacion.colorCambio }}>{`${cotizacion.cambioActual}%`}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default TableCripto;


/* import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';

function TableCripto() {
  const [nombreCripto, setNombreCripto] = useState('');
  const [precio, setPrecio] = useState('');
  const [cambio, setCambio] = useState('');
  const [precioAnterior, setPrecioAnterior] = useState(0);
  const [cambioAnterior, setCambioAnterior] = useState(0);

  useEffect(() => {
    const ws = new WebSocket('wss://stream.binance.com:9443/ws/btcusdt@ticker');

    ws.onmessage = (event) => {
      const objeto = JSON.parse(event.data);

      const precioActual = parseFloat(objeto.c).toFixed(2);
      const cambioActual = objeto.P;

      setNombreCripto(objeto.s);
      setPrecio(`USD ${precioActual}`);
      setCambio(`${cambioActual}%`);

      if (precioAnterior > precioActual) {
        setPrecioAnterior(precioActual);
        setPrecio(<span style={{ color: 'red' }}>{`USD ${precioActual}`}</span>);
      } else if (precioAnterior < precioActual) {
        setPrecioAnterior(precioActual);
        setPrecio(<span style={{ color: '#5DB142' }}>{`USD ${precioActual}`}</span>);
      }

      if (cambioAnterior > cambioActual) {
        setCambioAnterior(cambioActual);
        setCambio(<span style={{ color: 'red' }}>{`${cambioActual}%`}</span>);
      } else if (cambioAnterior < cambioActual) {
        setCambioAnterior(cambioActual);
        setCambio(<span style={{ color: '#5DB142' }}>{`${cambioActual}%`}</span>);
      }
    };

    return () => {
      ws.close();
    };
  }, []);

  return (
    <div>
      <h1>Cotizaciones de criptomonedas</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Criptomoneda</th>
            <th>Cotización</th>
            <th>Variación</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td id="nombre-cripto">{nombreCripto}</td>
            <td id="precio">{precio}</td>
            <td id="cambio">{cambio}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default TableCripto; */



