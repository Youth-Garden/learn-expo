---
description: Global Coding Standards and Conventions for all Agents
---

# Coding Standards

1. **Language**: All code, documentation, and comments MUST be written in English. Do NOT use Vietnamese comments anywhere in the codebase.
2. **Self-Documenting Code**: Prefer clean, readable code with descriptive variable/function names over adding comments.
3. **Module Structure**: Use Kebab-case for module folders (e.g., `feature-name`), and simple names for files inside (`service.ts`, `types.ts`, `mappers.ts`, `registry.ts`).
4. **Exporting**: Always expose the module's public interface through a root `index.ts`.
