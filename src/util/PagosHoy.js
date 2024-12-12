/*
    Esta funcion recibe un array y verifica si el objeto tiene la propiedad date 
    y si lo tiene compara si ese date corresponde al dia de hoy. y retorna los elementos
    que tenga como valor de date el dia de hoy.
*/
export default function obtenerElementosDeHoy(arrayDeObjetos) {
  const hoy = new Date();
  const anioHoy = hoy.getFullYear();
  const mesHoy = hoy.getMonth() + 1; // Los meses en JavaScript comienzan en 0
  const diaHoy = hoy.getDate();

  return arrayDeObjetos.filter((objeto) => {
    const fechaObjeto = new Date(objeto.date);
    const anioObjeto = fechaObjeto.getFullYear();
    const mesObjeto = fechaObjeto.getMonth() + 1;
    const diaObjeto = fechaObjeto.getDate();

    return (
      anioObjeto === anioHoy && mesObjeto === mesHoy && diaObjeto === diaHoy
    );
  });
}
