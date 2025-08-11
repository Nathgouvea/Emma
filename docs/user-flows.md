# User Flows (Draft)

## Flow A: Brand Manager → Inquiry

```mermaid
flowchart LR
  A[Home] -->|CTA/Portfolio| B[Portfolio]
  B --> C[Work With Me]
  C --> D[Audience & Impact]
  D --> E[Contact]
  E --> F{Submit?}
  F -- Yes --> G[Confirmation]
  F -- No --> H[Direct Email]
```

## Flow B: Follower → Social Engage

```mermaid
flowchart LR
  A[Home] --> B[About]
  B --> C[Portfolio]
  C --> D[Lightbox]
  D --> E[Instagram Profile]
```

## Flow C: PR Editor → Contact

```mermaid
flowchart LR
  A[Home] --> B[Press & Features]
  B --> C[Logos/Links]
  C --> D[Contact]
```

Notes

- Sticky nav and footer provide cross-links at every step.
- Ensure visible focus and logical tab order throughout.
