import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import {
  cn,
  shadowDepthSoft,
  shadowDepthMedium,
  shadowDepthPrimary,
} from "@/lib/utils";

export default function StyleGuide() {
  const colors = [
    { label: "Heading", class: "bg-heading" },
    { label: "Subheading", class: "bg-subheading" },
    { label: "Text", class: "bg-text" },
    { label: "Muted", class: "bg-muted" },
    { label: "Accent", class: "bg-accent" },
    { label: "Accent Hover", class: "bg-accent-hover" },
    { label: "Accent Secondary", class: "bg-accent-secondary" },
    { label: "Accent Secondary Hover", class: "bg-accent-secondary-hover" },
    { label: "Border", class: "bg-border" },
    { label: "Surface", class: "bg-surface" },
    { label: "Surface Alt", class: "bg-surface-alt" },
    { label: "Glass", class: "bg-glass" },
  ];

  return (
    <div className="min-h-screen space-y-16 px-8 py-16 sm:px-16 lg:px-32">
      <section className="space-y-6">
        <h2 className="mb-6 text-3xl font-bold text-heading">
          Dummy Page Layout
        </h2>

        <div className="space-y-16 rounded-xl border border-border bg-surface p-8 sm:p-12 lg:p-16">
          {/* PAGE TITLE */}
          <header className="space-y-4 text-center">
            <h1 className="text-5xl font-bold leading-tight text-heading">
              Page Title — Building a Consistent Design System
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-muted">
              This mock page demonstrates real-world content hierarchy, spacing,
              and component rhythm inside your base layout.
            </p>
          </header>

          {/* SECTION 1 */}
          <section className="space-y-8 rounded-lg border border-border bg-surface-alt/10 p-8">
            <header>
              <h2 className="mb-2 text-3xl font-semibold text-heading">
                Section Title — Overview
              </h2>
              <p className="max-w-prose text-sm text-muted">
                Each section maintains <code className="rounded bg-surface px-1 py-0.5 text-xs text-text">mt-16</code> spacing from the
                previous one, with internal <code className="rounded bg-surface px-1 py-0.5 text-xs text-text">p-8</code> padding. The goal
                is clear separation without breaking rhythm.
              </p>
            </header>

            <article className="space-y-4">
              <h3 className="text-2xl font-semibold text-subheading">
                Subsection Heading — Context
              </h3>
              <p className="max-w-prose text-base leading-relaxed text-text">
                Consistent vertical rhythm allows your interface to feel
                structured. In this example, headings, paragraphs, and cards
                align to an 8px spacing grid, with larger blocks expanding to
                16px or 32px increments.
              </p>
              <p className="max-w-prose text-base leading-relaxed text-text">
                Notice how visual weight flows from bold titles → subheadings →
                body content. This maintains clarity even with mixed text and
                interactive elements.
              </p>
            </article>

            {/* CARD GRID */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="space-y-3 rounded-xl border border-border bg-surface p-6"
                >
                  <Skeleton className="h-40 w-full rounded-md" />
                  <h4 className="text-lg font-medium text-heading">
                    Card Title {i + 1}
                  </h4>
                  <p className="text-sm text-muted">
                    This card simulates component-level spacing with{" "}
                    <code className="rounded bg-surface-alt/20 px-1 py-0.5 text-xs text-text">p-6</code> padding.
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* SECTION 2 */}
          <section className="space-y-8 rounded-lg border border-border bg-surface-alt/10 p-8">
            <header>
              <h2 className="mb-2 text-3xl font-semibold text-heading">
                Section Title — Analytics
              </h2>
              <p className="max-w-prose text-sm text-muted">
                Larger data-heavy or dashboard sections may contain graphs,
                tables, or stat blocks. The same spacing logic applies here.
              </p>
            </header>

            <article className="space-y-6">
              <h3 className="text-2xl font-semibold text-subheading">
                Subsection Heading — Metrics Overview
              </h3>
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="flex flex-col gap-3 rounded-xl border border-border bg-surface p-6"
                  >
                    <Skeleton className="h-8 w-16 rounded-md" />
                    <h4 className="text-lg font-medium text-heading">
                      Stat Label
                    </h4>
                    <p className="text-sm leading-snug text-text">
                      Small supporting text or description for this metric.
                    </p>
                  </div>
                ))}
              </div>
            </article>

            <article className="space-y-4">
              <h3 className="text-2xl font-semibold text-subheading">
                Subsection Heading — Insights
              </h3>
              <p className="max-w-prose text-base leading-relaxed text-text">
                The goal is to simulate realistic content hierarchy — long-form
                text paired with data blocks and UI modules. Every block uses
                consistent padding (<code className="rounded bg-surface px-1 py-0.5 text-xs text-text">p-6</code> to <code className="rounded bg-surface px-1 py-0.5 text-xs text-text">p-8</code>) and
                vertical spacing (<code className="rounded bg-surface px-1 py-0.5 text-xs text-text">space-y-4</code> or{" "}
                <code className="rounded bg-surface px-1 py-0.5 text-xs text-text">space-y-6</code>).
              </p>
            </article>
          </section>

          {/* SECTION 3 */}
          <section className="border-border space-y-8 rounded-lg border p-8">
            <header>
              <h2 className="text-heading mb-2 text-3xl font-semibold">
                Section Title — Testimonials
              </h2>
              <p className="text-muted text-sm">
                Example of longer-form, mixed-content layout: text, avatars, and
                quotes.
              </p>
            </header>

            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              {[...Array(2)].map((_, i) => (
                <div
                  key={i}
                  className="border-border bg-surface flex flex-col gap-4 rounded-xl border p-8"
                >
                  <Skeleton className="h-20 w-20 rounded-full" />
                  <p className="text-text text-base leading-relaxed">
                    “Using a structured spacing system simplified our design
                    handoff and made every page feel consistent — from
                    dashboards to marketing sites.”
                  </p>
                  <div>
                    <h4 className="text-heading text-lg font-medium">
                      Jane Doe
                    </h4>
                    <p className="text-muted text-sm">
                      Lead Designer, Example Co.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* FOOTER */}
          <footer className="space-y-3 border-t border-border pt-12 text-center">
            <h5 className="text-lg font-semibold text-subheading">
              Footer Section
            </h5>
            <p className="text-sm text-muted">
              Footer aligns with the same <code className="rounded bg-surface px-1 py-0.5 text-xs text-text">px</code> and <code className="rounded bg-surface px-1 py-0.5 text-xs text-text">py</code>{" "}
              rhythm as page sections.
            </p>
          </footer>
        </div>
      </section>

      <section>
        <h2 className="mb-6 text-6xl font-bold text-heading">Scale System</h2>

        {/* Spacing Scale */}
        <div className="mb-12">
          <h3 className="mb-4 text-xl font-semibold text-subheading">
            Spacing Scale
          </h3>
          <div className="flex flex-wrap gap-4">
            {[2, 4, 6, 8, 10, 12, 16, 20, 24, 32, 40, 48, 56, 64, 80, 96].map(
              (px) => (
                <div key={px} className="flex flex-col items-center text-sm">
                  <div
                    className="rounded-md bg-accent"
                    style={{ width: `${px}px`, height: "12px" }}
                  ></div>
                  <span className="mt-1 text-muted">{px}px</span>
                </div>
              ),
            )}
          </div>
        </div>

        {/* Font Sizes */}
        <div className="mb-12">
          <h3 className="mb-4 text-xl font-semibold text-subheading">
            Font Size Scale
          </h3>
          <div className="space-y-4">
            {[
              { label: "xs / 12px", class: "text-xs" },
              { label: "sm / 14px", class: "text-sm" },
              { label: "base / 16px", class: "text-base" },
              { label: "lg / 18px", class: "text-lg" },
              { label: "xl / 20px", class: "text-xl" },
              { label: "2xl / 24px", class: "text-2xl" },
              { label: "3xl / 30px", class: "text-3xl" },
              { label: "4xl / 36px", class: "text-4xl" },
              { label: "5xl / 48px", class: "text-5xl" },
              { label: "6xl / 60px", class: "text-6xl" },
            ].map(({ label, class: sizeClass }) => (
              <div
                key={label}
                className={cn(
                  "flex items-center justify-between rounded-lg border border-border bg-surface-alt/5 px-4 py-2",
                )}
              >
                <span className={cn(sizeClass, "font-medium text-text")}>
                  The quick brown fox jumps over the lazy dog.
                </span>
                <span className="text-xs text-text">{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Font Weights */}
        <div className="mb-12">
          <h3 className="mb-4 text-xl font-semibold text-subheading">
            Font Weights
          </h3>
          <div className="space-y-3">
            {[
              { label: "Light (300)", weight: "font-light" },
              { label: "Normal (400)", weight: "font-normal" },
              { label: "Medium (500)", weight: "font-medium" },
              { label: "Semibold (600)", weight: "font-semibold" },
              { label: "Bold (700)", weight: "font-bold" },
              { label: "Extrabold (800)", weight: "font-extrabold" },
            ].map(({ label, weight }) => (
              <div
                key={label}
                className="flex items-center justify-between rounded-lg border border-border bg-surface-alt/5 px-4 py-2"
              >
                <span className={cn("text-lg text-text", weight)}>
                  The quick brown fox
                </span>
                <span className="text-xs text-text">{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Typography Hierarchy */}
        <div>
          <h3 className="mb-4 text-xl font-semibold text-subheading">
            Typography Hierarchy
          </h3>
          <div className="space-y-4">
            <div>
              <h1 className="text-5xl font-bold leading-tight text-heading">
                Page Title
              </h1>
              <p className="mt-1 text-sm text-muted">
                Used for top-level pages and hero sections
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-semibold leading-snug text-heading">
                Section Heading
              </h2>
              <p className="mt-1 text-sm text-muted">
                Used for major sections within a page
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-subheading">
                Subsection Heading
              </h3>
              <p className="mt-1 text-sm text-muted">
                Used for grouping related content or components
              </p>
            </div>

            <div>
              <h4 className="text-lg font-medium text-subheading">
                Caption / Label
              </h4>
              <p className="mt-1 text-sm text-muted">
                Used for metadata, captions, or supporting labels
              </p>
            </div>

            <div>
              <p className="text-base leading-relaxed text-text">
                Body text – this is your standard paragraph styling, optimized
                for readability.
              </p>
            </div>

            <div>
              <p className="text-sm leading-normal text-muted">
                Muted text – helper text, form hints, or secondary info.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="mb-6 text-3xl font-bold text-heading">
          Layout & Spacing Guide
        </h2>

        {/* Vertical Rhythm */}
        <div className="mb-12">
          <h3 className="mb-4 text-xl font-semibold text-subheading">
            Vertical Spacing System
          </h3>
          <ul className="space-y-2 text-sm text-text">
            <li>
              <strong>Page padding:</strong> <code className="rounded bg-surface px-1 py-0.5 text-xs text-text">px-8 py-16</code> (→
              <code className="rounded bg-surface px-1 py-0.5 text-xs text-text">sm:px-16</code>, <code className="rounded bg-surface px-1 py-0.5 text-xs text-text">lg:px-32</code>) — consistent across
              top-level pages.
            </li>
            <li>
              <strong>Section spacing:</strong> <code className="rounded bg-surface px-1 py-0.5 text-xs text-text">mt-16</code> between major
              sections; inside a section, use <code className="rounded bg-surface px-1 py-0.5 text-xs text-text">mb-8</code> between title
              and content.
            </li>
            <li>
              <strong>Subsection spacing:</strong> <code className="rounded bg-surface px-1 py-0.5 text-xs text-text">mt-8</code> to separate
              smaller groups or cards.
            </li>
            <li>
              <strong>Component spacing:</strong> <code className="rounded bg-surface px-1 py-0.5 text-xs text-text">gap-4</code> for most
              grids,
              <code className="rounded bg-surface px-1 py-0.5 text-xs text-text">gap-6</code> for larger UI (cards, dashboards).
            </li>
            <li>
              <strong>Text spacing:</strong> <code className="rounded bg-surface px-1 py-0.5 text-xs text-text">mb-1</code> for label →
              input,
              <code className="rounded bg-surface px-1 py-0.5 text-xs text-text">mt-2</code> for helper text.
            </li>
            <li>
              <strong>Button groups:</strong> <code className="rounded bg-surface px-1 py-0.5 text-xs text-text">gap-3</code> or{" "}
              <code className="rounded bg-surface px-1 py-0.5 text-xs text-text">gap-4</code>.
            </li>
            <li>
              <strong>Form field groups:</strong> <code className="rounded bg-surface px-1 py-0.5 text-xs text-text">space-y-4</code>.
            </li>
          </ul>
        </div>

        {/* Component Padding */}
        <div className="mb-12">
          <h3 className="mb-4 text-xl font-semibold text-subheading">
            Component Padding System
          </h3>
          <ul className="space-y-2 text-sm text-text">
            <li>
              <strong>Card / Panel:</strong> <code className="rounded bg-surface px-1 py-0.5 text-xs text-text">p-6</code> (→{" "}
              <code className="rounded bg-surface px-1 py-0.5 text-xs text-text">sm:p-8</code> for feature blocks)
            </li>
            <li>
              <strong>Button:</strong> <code className="rounded bg-surface px-1 py-0.5 text-xs text-text">px-4 py-2</code> (→{" "}
              <code className="rounded bg-surface px-1 py-0.5 text-xs text-text">px-6 py-3</code> for large)
            </li>
            <li>
              <strong>Input / Select:</strong> <code className="rounded bg-surface px-1 py-0.5 text-xs text-text">px-3 py-2</code>
            </li>
            <li>
              <strong>Dialog / Modal:</strong> inner padding <code className="rounded bg-surface px-1 py-0.5 text-xs text-text">p-8</code>,
              outer margin <code className="rounded bg-surface px-1 py-0.5 text-xs text-text">m-6</code>
            </li>
            <li>
              <strong>Navbar / Header:</strong> vertical <code className="rounded bg-surface px-1 py-0.5 text-xs text-text">py-4</code>,
              horizontal <code className="rounded bg-surface px-1 py-0.5 text-xs text-text">px-8</code>
            </li>
            <li>
              <strong>Section Containers:</strong> use{" "}
              <code className="rounded bg-surface px-1 py-0.5 text-xs text-text">max-w-7xl mx-auto px-8</code> for alignment.
            </li>
          </ul>
        </div>

        {/* Responsive adjustments */}
        <div>
          <h3 className="mb-4 text-xl font-semibold text-subheading">
            Responsive Adjustments
          </h3>
          <ul className="space-y-2 text-sm text-text">
            <li>
              <strong>Small screens:</strong> reduce <code className="rounded bg-surface px-1 py-0.5 text-xs text-text">px</code> padding by
              50% and tighten vertical rhythm.
            </li>
            <li>
              <strong>Large screens:</strong> increase section spacing to{" "}
              <code className="rounded bg-surface px-1 py-0.5 text-xs text-text">mt-24</code> or <code className="rounded bg-surface px-1 py-0.5 text-xs text-text">py-24</code>.
            </li>
            <li>
              <strong>Maintain rhythm:</strong> always base multiples on{" "}
              <code className="rounded bg-surface px-1 py-0.5 text-xs text-text">4px</code> or <code className="rounded bg-surface px-1 py-0.5 text-xs text-text">8px</code> grid.
            </li>
          </ul>
        </div>
      </section>

      {/* Color Tokens */}
      <section>
        <h2 className="mb-6 text-3xl font-bold text-heading">Color Tokens</h2>
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
          {colors.map(({ label, class: bgClass }) => (
            <div key={label} className="flex flex-col items-center">
              <div className={cn("h-16 w-16 rounded-lg border border-border", bgClass)} />
              <span className="mt-2 text-sm text-text">{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Buttons */}
      <section>
        <h2 className="mb-6 text-3xl font-bold text-heading">Buttons</h2>
        <div className="flex flex-wrap gap-4">
          <Button variant="default">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="link">Link</Button>
          <Button size="sm">Small</Button>
          <Button size="default">Default</Button>
          <Button size="lg">Large</Button>
        </div>
      </section>

      {/* Inputs */}
      <section>
        <h2 className="mb-6 text-3xl font-bold text-heading">Inputs</h2>
        <div className="max-w-sm space-y-4">
          <div>
            <label className="mb-1 block text-sm font-medium text-text">
              Label
            </label>
            <Input type="text" placeholder="Input field" />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-text">
              Disabled
            </label>
            <Input type="text" placeholder="Disabled input" disabled />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-text">
              Invalid
            </label>
            <Input type="text" placeholder="Invalid input" aria-invalid />
          </div>
        </div>
      </section>

      {/* Shadows */}
      <section>
        <h2 className="mb-6 text-3xl font-bold text-heading">Shadows</h2>
        <div className="flex flex-wrap gap-8">
          <div
            className={cn(
              "rounded-xl bg-glass/60 p-6 backdrop-blur-md",
              shadowDepthSoft,
            )}
          >
            <span className="font-medium text-text">Soft Shadow</span>
          </div>
          <div
            className={cn(
              "rounded-xl bg-glass/60 p-6 backdrop-blur-md",
              shadowDepthMedium,
            )}
          >
            <span className="font-medium text-text">Medium Shadow</span>
          </div>
          <div
            className={cn(
              "rounded-xl bg-glass/60 p-6 backdrop-blur-md",
              shadowDepthPrimary,
            )}
          >
            <span className="font-medium text-text">Primary Shadow</span>
          </div>
        </div>
      </section>
    </div>
  );
}
