---
name: AgroPulse Control
colors:
  surface: '#f9f9ff'
  surface-dim: '#cfdaf2'
  surface-bright: '#f9f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f0f3ff'
  surface-container: '#e7eeff'
  surface-container-high: '#dee8ff'
  surface-container-highest: '#d8e3fb'
  on-surface: '#111c2d'
  on-surface-variant: '#5b403d'
  inverse-surface: '#263143'
  inverse-on-surface: '#ecf1ff'
  outline: '#8f6f6c'
  outline-variant: '#e4beba'
  surface-tint: '#ba1a20'
  primary: '#af101a'
  on-primary: '#ffffff'
  primary-container: '#d32f2f'
  on-primary-container: '#fff2f0'
  inverse-primary: '#ffb3ac'
  secondary: '#006e2d'
  on-secondary: '#ffffff'
  secondary-container: '#7cf994'
  on-secondary-container: '#007230'
  tertiary: '#7c4d00'
  on-tertiary: '#ffffff'
  tertiary-container: '#9d6300'
  on-tertiary-container: '#fff2e8'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdad6'
  primary-fixed-dim: '#ffb3ac'
  on-primary-fixed: '#410003'
  on-primary-fixed-variant: '#930010'
  secondary-fixed: '#7ffc97'
  secondary-fixed-dim: '#62df7d'
  on-secondary-fixed: '#002109'
  on-secondary-fixed-variant: '#005320'
  tertiary-fixed: '#ffddb8'
  tertiary-fixed-dim: '#ffb95f'
  on-tertiary-fixed: '#2a1700'
  on-tertiary-fixed-variant: '#653e00'
  background: '#f9f9ff'
  on-background: '#111c2d'
  surface-variant: '#d8e3fb'
typography:
  headline-xl:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 22px
    fontWeight: '700'
    lineHeight: 30px
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 26px
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '600'
    lineHeight: 24px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
  label-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 10px
    fontWeight: '700'
    lineHeight: 14px
    letterSpacing: 0.05em
  telemetry-num:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '700'
    lineHeight: 26px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 0.75rem
  margin: 1rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 0.75rem
  space-lg: 1rem
  space-xl: 1.5rem
---

## Brand & Style

This design system is engineered for industrial and agricultural automation, specifically mobile remote monitoring and control of heavy irrigation pumps, borewells, and smart motors. The visual language balances mission-critical operational clarity with modern consumer utility simplicity, targeted at farm owners, field engineers, and agribusiness managers operating in varied field and sunlight conditions.

The design movement adheres to **Modern Industrial Utility**—grounded in clear modular surfaces, high-contrast typography, large touch targets, tactile action states, and instantaneous status communication. High-stakes field operations (starting high-voltage 3-phase machinery) demand unambiguous visual confirmation, zero ambiguity in state transitions, and distinct safety indicators. The emotional response is one of dependable control, absolute reliability, and rapid, frictionless oversight.

## Colors

The palette establishes strict operational signifiers derived from agricultural telemetry standards:

- **Primary Red (`#D32F2F` / `#E31B23`):** Applied to the brand top app header, emergency actions, destructive confirmations, active tab indicator highlights, and critical stops or alarm states.
- **Operational Green (`#16A34A` / `#22C55E`):** Represents live online telemetry, active running pumps, normal phase balance, and successful operations.
- **Alert Amber (`#F59E0B`):** Signifies warning boundaries, pending schedules, timed executions, and high temperature or low water warnings.
- **Slate Text & Neutrals (`#1E293B`, `#64748B`, `#94A3B8`):** Deep slate ensures maximum contrast outdoors without harsh pure black.
- **Base Canvas & Cards (`#F8FAFC`, `#FFFFFF`, `#E2E8F0`):** Crisp white cards sit cleanly over an off-white industrial canvas (`#F8FAFC`) with structural containment provided by neutral slate borders (`#E2E8F0`).

## Typography

The design system uses **Plus Jakarta Sans** across all typography levels. Its clean geometric construction, wide apertures, and robust counters guarantee extreme legibility on mobile viewports under intense outdoor sunlight.

- **Headlines (`headline-xl`, `headline-lg`, `headline-md`):** High-weight anchors for device titles, screen headers, and critical modal confirmations.
- **Telemetry Readouts (`telemetry-num`):** Specialized semi-condensed, tabular figures used within metric tiles to display operational ratings (current in Amperes, voltage in Volts, frequency in Hz).
- **Body & Labels (`body-md`, `label-md`, `label-sm`):** Micro-labels maintain strict readability with slightly increased tracking (`0.05em`) when capitalized in status pills or hardware specs.

## Layout & Spacing

Layouts are constructed around a mobile-first 4-column fluid container system that scales to 8 columns on tablet viewports:

- **Outer Margins:** Fixed at `1rem` (16px) on mobile, ensuring edge-to-edge breathing room while maximizing functional horizontal area for dual-column control pads and metric tiles.
- **Component Padding:** Standard card padding is strictly `1rem` (16px). Secondary micro-tiles (e.g., Quick Run time selectors, telemetry cards) use `0.75rem` (12px) internal padding to preserve high information density.
- **Rhythm & Stacking:** Vertical stacks follow an 8pt modular interval: `space-sm` (8px) separates paired labels and values, `space-md` (12px) separates grouped tiles, and `space-xl` (24px) partitions primary operational sections (e.g., Header -> Live Status -> Controls -> Schedule).

## Elevation & Depth

To sustain sharp readability and avoid muddy interfaces in bright sunlight, visual separation relies primarily on crisp surface tones and subtle, diffused ambient elevation:

- **Flat Surface Tier (`level-0`):** Base canvas in `#F8FAFC`.
- **Card & Tile Surface (`level-1`):** Pure `#FFFFFF` containers bounded by a 1px solid `#E2E8F0` border. Shadow is subtle and neutral: `0 1px 3px rgba(15, 23, 42, 0.05)`.
- **Raised & Active Controls (`level-2`):** Primary action buttons, floating add triggers, and active segmented controls utilize a targeted depth shadow: `0 4px 6px -1px rgba(211, 47, 47, 0.15)` for primary actions or `0 4px 6px -1px rgba(15, 23, 42, 0.08)` for secondary cards.
- **Critical Action Modals & Overlays (`level-3`):** Critical confirmation dialogs sit atop a dimmed backdrop (`rgba(15, 23, 42, 0.6)`) with high-elevation soft shadowing: `0 20px 25px -5px rgba(0, 0, 0, 0.15), 0 8px 10px -6px rgba(0, 0, 0, 0.1)`.

## Shapes

The design system implements a **Rounded (Level 2)** shape standard:

- **Cards & Containers:** `0.75rem` (12px) to `1rem` (16px) corner radiuses produce friendly, sturdy module blocks that feel tactile and structured.
- **Interactive Buttons & Badges:** Primary operation buttons (Start / Stop / Timed Run) use `0.75rem` (12px) border radiuses for maximum finger tap ergonomics.
- **Status Pills & Chips:** Micro-pills and segmented category headers apply fully rounded pill boundaries (`9999px`) for quick glanceable categorization.
- **Metric Tiles:** Square or dual-grid telemetry boxes retain uniform `0.75rem` (12px) corner curvature, seamlessly nested within section groups.

## Components

### Buttons & Action Tiles
- **Primary Control Tiles (Start / Stop):** Large 2-column tactical action blocks with a minimum touch area of 80px height. "Start" uses full emerald green (`#16A34A`) with white icon and bold text; "Stop" uses rich crimson red (`#DC2626`).
- **Secondary Function Tiles (Timed Run / Reset Fault):** Tinted neutral surfaces (`#F1F5F9` or `#EFF6FF`) with primary colored vector icons, delivering instant response without overwhelming the primary power triggers.
- **Primary Bottom Action Buttons:** Full-width rounded-lg bars in brand red (`#D32F2F`) for "Start Timed Run" and critical commit actions.

### Telemetry & Reading Tiles
- Modular grid cards displaying electrical metrics (Current `8.4 A`, Voltage `415 V`, Frequency `50 Hz`, Supply `3 Phase`).
- Structure: Left icon in brand/accent color tint, followed by bold numerical data (`18px` / `20px` bold) and muted caption (`12px` slate).

### Status Indicators & Badges
- **Running / Online:** Pill badge with `#DCFCE7` background, `#16A34A` text, and a glowing green dot indicator.
- **Stopped / Offline:** Pill badge with `#F1F5F9` background and `#64748B` text.
- **Fault / Tripped:** Pill badge with `#FEE2E2` background and `#DC2626` text.

### Segmented Tabs & Category Filters
- Horizontally scrollable pill pills. Active state uses high-contrast brand fill (`#D32F2F` with white text), while inactive states use transparent backgrounds with `#64748B` text.

### List Items & Navigation Rows
- Clean white rows with 1px border bottoms or enclosed card shells (`#FFFFFF`, border `#E2E8F0`).
- Left-aligned icon in rounded square backdrop (`#EFF6FF`), strong title, and right chevron indicator (`#94A3B8`).

### Modals & Dialogs
- High-priority confirmation modal for hazardous motor operations (e.g., "Confirm Motor Start").
- Features a centered warning amber/red badge icon (`48px`), concise confirmation prompt, live preview of current electrical parameters (Current, Voltage, Mode), and two distinct side-by-side action buttons: neutral "Cancel" and bold "Start".

### Bottom Navigation Bar
- Fixed bottom tab bar elevated with top border `#E2E8F0` and clean background `#FFFFFF`. Active item highlighted in brand primary red (`#D32F2F`) with distinct filled iconography.