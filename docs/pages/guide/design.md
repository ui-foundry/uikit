---
title: Design
layout: page
---

### Design Methodology

Our UIkit library is primarily based on the principles of [Atomic Design](https://atomicdesign.bradfrost.com/chapter-2/). This methodology emphasizes building UI components from the ground up, starting with small, independent elements—referred to as _atoms_.

These atoms are then composed into more complex, reusable structures known as _molecules_ and beyond, promoting scalability, consistency, and modularity throughout the design system.

![Atomic Design](/uikit/assets/images/atomic_design.png 'Atomic Design')

1. Atoms include basic HTML elements like [icons](), [inputs](), [buttons](),...
2. Molecules are simple groups of UI elements functioning together as a unit. Label, input and
   button can join together to create a search form molecule.
3. Organisms are complex UI components composed of groups of molecules and/or atoms and/or other organisms. Example: [header]()
4. Templates are page-level objects that place components into a [layout]() and articulate the design’s underlying content structure.
5. Pages are specific instances of templates that show what a UI looks like with real representative content in place.

Being able to **reuse** basic components is a huge advantage in atomic web design. Recycling atoms saves designers time while upholding consistent habits across all website pages.
