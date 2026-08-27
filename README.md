# Autoevaluación GRD

Lista de autoevaluación de aspectos legales de la Gestión del Riesgo de Desastres (GRD) en centros de trabajo, como app web.

Estándar, aplicable a cualquier empresa. Backend Firebase (Auth + Firestore) en el proyecto `prev-riegos`.

**En línea:** https://prev-riegos.web.app

- 56 preguntas oficiales (Dirección del Trabajo · SUSESO · SENAPRED · organismos administradores Ley 16.744).
- Multi-empresa y multi-auditoría: cada empresa guarda su historial; una auditoría nueva muestra, pregunta por pregunta, lo registrado en la última auditoría cerrada.
- Acceso con cuenta (evaluadores + administrador). Responsive para celular/tablet, con soporte offline de Firestore.

Deploy: `firebase deploy --only firestore:rules,hosting --project prev-riegos`
