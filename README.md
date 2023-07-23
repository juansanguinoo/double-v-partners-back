# Prueba Técnica Backend Para Double V Partners

Pasos para ejecutar el proyecto:

1. Clonar el repositorio.
2. Ejecutar el comando "docker compose up" dentro del directorio del proyecto.
3. Dependiendo de la configuración específica del proyecto y el tiempo que tome la base de datos en iniciarse, es posible que debas ejecutar nuevamente el comando docker compose up
   para permitir que la base de datos se conecte correctamente a la API.


# Descripción

En el desarrollo de esta API, enfatizé en lograr una arquitectura robusta y de alta calidad que cumpla con los principios fundamentales de un diseño de software sólido. 
Mi enfoque se ha centrado en seguir las mejores prácticas del desarrollo backend, lo que ha resultado en una estructura modular y altamente mantenible. Adoptando los principios SOLID, 
busque minimizar el acoplamiento y maximizar la cohesión entre los diferentes componentes del sistema. Asimismo, implemente el patrón de arquitectura Clean Architecture, que permite 
separar claramente las responsabilidades de cada capa del sistema, manteniendo la lógica de negocio aislada de los detalles de implementación y tecnologías utilizadas.

Las tecnologías manejadas fueron NodeJS, un entorno altamente eficiente y ágil, permitiendo aprovechar al máximo el tiempo de respuesta. 
GraphQL para el sistema de consulta de datos, ya que proporciona flexibilidad y eficiencia al permitir a los usuarios obtener solo la información que necesitan, 
evitando problemas de sobre o subconsulta. Además, Apollo Server ha sido utilizado para la implementación del servidor GraphQL, brindando herramientas para facilitar la comunicación con el frontend.
TypeORM como ORM para establecer una comunicación efectiva y optimizada con la base de datos MySQL. Finalmente, Docker, que permite encapsular la aplicación, la base de datos y 
sus dependencias en contenedores independientes.
