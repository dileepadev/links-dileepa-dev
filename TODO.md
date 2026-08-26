# TODO

This file tracks tasks, improvements, and features planned for upcoming updates or releases of this repository.  

>[!Note]
> This list is **not exhaustive** and may change over time. Items are not necessarily in priority order.

## Upcoming Tasks

### v2.0.0 — platform migration

Full scope: [#2](https://github.com/dileepadev/links-dileepa-dev/issues/2). Cross-repository
sequencing lives in [`dileepadev/TODO.md`](https://github.com/dileepadev/dileepadev/blob/main/TODO.md).

- [ ] **Repoint the Blog link at `https://dileepa.dev/blog`.** `src/data/links.json` still names
      `blog.dileepa.dev`, which is being retired rather than redirected — once it is switched off
      this entry is a dead link on the most-shared page on the platform, and no redirect will
      catch it. Update the `handle` to `dileepa.dev/blog` too, since it is displayed.
- [ ] Astro 5.17.1 → 7.x
- [ ] Import the brand tokens; rebuild against the shared design system

<!-- Example Task List Format

- [x] Task 1: Description of task 1.
- [ ] Task 2: Description of task 2. -->
