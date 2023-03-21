export function Datos({nombre, edad, estatura, comida_favorita}) {
  console.log(nombre, edad, estatura, comida_favorita);
  return (
    <div>
      <h1>{nombre}</h1>
      <h1>{edad}</h1>
      <h1>{estatura}</h1>
      <h1>{comida_favorita}</h1>
    </div>
  );
}
