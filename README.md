# Architecture Sample

## Structure: DDD NestJS

```text
src/
├── modules/
│   ├── user/                         <-- Bounded Context: "User"
│   │   ├── application/             <-- Use cases (business logic orchestration)
│   │   │   ├── commands/
│   │   │   └── services/
│   │   ├── domain/                  <-- Domain layer (Entities, Interfaces, Events)
│   │   │   ├── entities/
│   │   │   ├── value-objects/
│   │   │   ├── interfaces/
│   │   │   └── events/
│   │   ├── infrastructure/          <-- Data access, database adapters
│   │   │   ├── postgres/
│   │   │   │   ├── user.entity.ts
│   │   │   │   └── user.repository.ts
│   │   │   ├── mongodb/
│   │   │   │   ├── user.schema.ts
│   │   │   │   └── user.mongo.repository.ts
│   │   │   └── services/            <-- Adapters for third-party integrations
│   │   ├── presentation/            <-- REST, GraphQL, etc.
│   │   │   ├── controllers/
│   │   │   ├── dtos/
│   │   │   └── interceptors/
│   │   └── user.module.ts
│   └── ...
├── shared/                          <-- Shared modules, constants, base classes
│   ├── kernel/                      <-- Base repositories, base entities
│   ├── config/
│   ├── exceptions/
│   └── utils/
├── main.ts
└── app.module.ts


src/
├── modules/
│   └── user/
│       ├── domain/                  <-- Entity, ValueObject, Domain Event
│       │   ├── entities/
│       │   ├── value-objects/
│       │   ├── events/
│       │   └── repositories/        <-- Interfaces
│       ├── application/            <-- Use cases (or "services" orchestrating logic)
│       │   └── use-cases/
│       │       └── create-user.use-case.ts
│       ├── infrastructure/         <-- Repositories, ORM, API, external services
│       │   ├── persistence/        <-- Mongo/Postgres adapters
│       │   ├── services/           <-- Adapter external service (e.g., Email)
│       │   └── mappers/            <-- Map from entity <-> db schema
│       ├── presentation/           <-- Controllers, DTOs
│       │   ├── rest/
│       │   └── graphql/
│       └── user.module.ts
├── shared/                          <-- Base classes, interfaces, config
├── main.ts
└── app.module.ts


/microservices-app/
│
├── /services/             # All microservices live here
│   ├── /auth-service/
│   ├── /user-service/
│   ├── /order-service/
│   └── /inventory-service/
│
├── /libs/                 # Shared libraries (DTOs, utilities, configs)
│   ├── /common/
│   ├── /logger/
│   └── /constants/
│
├── /gateway/              # API Gateway (optional, for BFF or GraphQL aggregation)
│
├── /infra/                # Infrastructure code (docker, k8s, terraform, etc.)
│   ├── /k8s/
│   ├── /docker/
│   └── /helm/
│
├── /scripts/              # CLI scripts, data migration, seeding, etc.
│
├── docker-compose.yml     # Local orchestration
├── README.md
└── .env                   # Global/local environment config


