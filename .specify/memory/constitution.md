# CV Portfolio Constitution

<!--
  SYNC IMPACT REPORT
  ==================
  Version: 1.0.0 (Initial Creation)
  Added Principles:
    - I. Code Quality First
    - II. Testing Standards (NON-NEGOTIABLE)
    - III. User Experience Consistency
    - IV. Performance Requirements
    - V. Build Process Discipline
  Added Sections:
    - Performance Standards (load time targets, image optimization, code performance)
    - Development Workflow (review process, testing gate, branching strategy)
    - Governance (authority, amendment procedure, versioning, compliance)
  Templates Status (no changes required - templates are generic):
    - ✅ plan-template.md: Line 30 includes Constitution Check gate
    - ✅ spec-template.md: Line 114 includes Success Criteria measurables
    - ✅ tasks-template.md: Lines 47-160 show test-first phases
  Follow-up TODOs: None
-->

## Core Principles

### I. Code Quality First

Every commit MUST maintain or improve code quality. Code quality is measured by:
- **Consistent formatting**: Uses established linters (CSS/JS standards)
- **DRY principle**: No duplicate logic across files
- **Clear naming**: Functions and variables have self-documenting names
- **Limited complexity**: Functions do one thing well
- **Documentation**: Non-obvious logic includes inline comments explaining the why

**Rationale**: High code quality reduces bugs, maintenance burden, and onboarding
friction. Quality is established upfront to prevent technical debt accumulation.

### II. Testing Standards (NON-NEGOTIABLE)

Testing is mandatory for new features and significant changes:
- **Unit tests**: Critical business logic MUST have unit tests
- **Integration tests**: User journeys that cross components MUST have integration tests
- **Contract tests**: API endpoints MUST validate request/response contracts
- **Performance tests**: Critical paths MUST meet performance thresholds
- **Manual testing**: Accessibility and UX flow validation required before merge

Test coverage MUST not decrease. New code should reach 80%+ coverage for critical paths.

**Rationale**: Tests prevent regressions, document expected behavior, and enable
confident refactoring. Manual testing ensures real-world usability beyond automation.

### III. User Experience Consistency

All user-facing features MUST maintain visual and interaction consistency:
- **Design system adherence**: Use established color palette, typography, spacing
- **Responsive design**: Features work on mobile, tablet, and desktop without layout breaking
- **Accessibility compliance**: WCAG 2.1 AA minimum (keyboard navigation, color contrast, semantic HTML)
- **Loading states**: Every async operation shows clear feedback (spinners, disabled states)
- **Error messaging**: User-friendly messages that explain what went wrong and how to fix it

**Rationale**: Consistent UX builds user trust and reduces cognitive load. Accessibility
ensures the site serves all users regardless of ability.

### IV. Performance Requirements

Performance is non-negotiable for user satisfaction:
- **Page load**: Initial page load < 3 seconds on 4G (Lighthouse standard)
- **Time to Interactive**: TTI < 5 seconds on 4G
- **Images**: Optimized with proper formats (WebP with fallbacks, responsive srcsets)
- **CSS/JS bundles**: Minified and properly split (critical CSS inlined)
- **Caching**: Static assets cached with far-future expires headers
- **Metrics monitoring**: Core Web Vitals tracked (LCP, FID, CLS)

**Rationale**: Fast sites reduce bounce rate, improve SEO, and enhance user
experience. Performance targets are based on industry standards for portfolio sites.

### V. Build Process Discipline

Every build MUST validate quality before deployment:
- **Linting passes**: CSS and JS must pass linters with no warnings
- **Minification**: CSS, JavaScript, and HTML minified for production
- **Image optimization**: All images run through imagemin pipeline
- **CSS purification**: Unused CSS removed (PureCSS workflow)
- **Asset versioning**: Built assets have content hashes for cache busting

**Rationale**: Automated checks prevent manual mistakes. Consistent process ensures
reproducible, optimized builds suitable for production deployment.

## Performance Standards

### Load Time Targets

- **First Contentful Paint (FCP)**: < 1.5s on 4G
- **Largest Contentful Paint (LCP)**: < 2.5s on 4G
- **Cumulative Layout Shift (CLS)**: < 0.1
- **Total Bundle Size**: < 200KB (gzipped) for initial page load

### Image Optimization

- **Format**: WebP primary, PNG/JPEG fallbacks
- **Responsive**: Use `srcset` and `<picture>` elements
- **Lazy loading**: Off-screen images use native `loading="lazy"`
- **Compression**: All images compressed via imagemin (target: 80%+ reduction)

### Code Performance

- **CSS**: Critical path CSS inlined, deferred CSS async-loaded
- **JavaScript**: Non-critical scripts deferred or async-loaded
- **Fonts**: System fonts preferred; custom fonts limited to 1-2 families max
- **HTTP Requests**: Minimize external requests; use DNS prefetch for essential externals

## Development Workflow

### Review Process

All changes require review before merge:
- **Code review checklist**: Verify code quality, testing, and constitution compliance
- **Performance impact**: Test bundle size changes with `npm run ugli`
- **Visual regression**: Check responsive design on 3+ screen sizes (mobile/tablet/desktop)
- **Accessibility audit**: Run Lighthouse accessibility check (target: 90+)

### Testing Gate

Before deploying to production:
- [ ] All unit/integration tests pass locally
- [ ] `npm run test` passes (future: automated test suite)
- [ ] `npm run build` succeeds without warnings
- [ ] Lighthouse scores (Performance, Accessibility, Best Practices) ≥ 90
- [ ] Manual smoke test on target devices

### Branching Strategy

- **main**: Production-ready code only
- **feature branches**: Follow `###-feature-name` convention
- **WIP commits**: Allowed; squash before merge if needed

## Governance

### Constitution Authority

This constitution supersedes all other development guidance. When conflicts arise,
this document is the source of truth for engineering decisions.

### Amendment Procedure

Changes to this constitution require:
1. **Proposal**: Documented rationale for change (which principle, why)
2. **Review**: Discussion of impact on templates, tools, and existing code
3. **Migration**: Plan for applying changes to in-flight features
4. **Recording**: Document in Sync Impact Report before merging

### Versioning Policy

Constitution versions follow semantic versioning:
- **MAJOR**: Principle removal or backward-incompatible redefinition
- **MINOR**: New principle added or significant expansion of existing guidance
- **PATCH**: Clarifications, wording improvements, non-semantic refinements

Increment `LAST_AMENDED_DATE` whenever changes are made, regardless of version bump.

### Compliance Review

- **PR reviews**: Every PR must include checklist verifying constitution compliance
- **Build checks**: CI pipeline enforces testing, linting, and minification gates
- **Quarterly audit**: Review constitution relevance; update if project goals shift

### Development Guidance

Runtime development guidance is documented in separate files:
- `.specify/templates/commands/`: Command-specific workflows
- `.specify/templates/`: Feature specification, planning, and task templates
- `package.json` scripts: Build, optimization, and deployment processes

**Version**: 1.0.0 | **Ratified**: 2026-01-09 | **Last Amended**: 2026-01-09
