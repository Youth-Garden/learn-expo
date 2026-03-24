---
description: Create a new API service module
---

1. Create a new directory in `services/` using kebab-case (e.g., `services/user-profile`).
2. Create `types.ts` for domain interfaces.
3. Create `mappers.ts` for API response mappers.
4. Create `registry.ts` and export `registry` of type `MapperRegistry`.
5. Create `service.ts` that extends `BaseRequest` and passes `registry` to `super(registry)`.
6. Create `index.ts` to export everything from the module.
7. Use `pathParams` for path variables and `params` (or payload) for query string variables in `_get` and `_post`.
8. Do not use Vietnamese comments. Code should be self-documenting.
