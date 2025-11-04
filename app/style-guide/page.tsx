import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
    <div className="space-y-16 px-8 py-16 sm:px-16 lg:px-32">
      <section>
        <h2 className="text-heading mb-6 text-6xl font-bold">Scale System</h2>

        {/* Spacing Scale */}
        <div className="mb-12">
          <h3 className="text-subheading mb-4 text-xl font-semibold">
            Spacing Scale
          </h3>
          <div className="flex flex-wrap gap-4">
            {[2, 4, 6, 8, 10, 12, 16, 20, 24, 32, 40, 48, 56, 64, 80, 96].map(
              (px) => (
                <div key={px} className="flex flex-col items-center text-sm">
                  <div
                    className="bg-accent rounded-md"
                    style={{ width: `${px}px`, height: "12px" }}
                  ></div>
                  <span className="text-muted mt-1">{px}px</span>
                </div>
              ),
            )}
          </div>
        </div>

        {/* Font Sizes */}
        <div className="mb-12">
          <h3 className="text-subheading mb-4 text-xl font-semibold">
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
                  "border-border flex items-center justify-between rounded-lg border px-4 py-2",
                )}
              >
                <span className={cn(sizeClass, "text-text font-medium")}>
                  The quick brown fox jumps over the lazy dog.
                </span>
                <span className="text-text text-xs">{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Font Weights */}
        <div className="mb-12">
          <h3 className="text-subheading mb-4 text-xl font-semibold">
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
                className="border-border flex items-center justify-between rounded-lg border px-4 py-2"
              >
                <span className={cn("text-text text-lg", weight)}>
                  The quick brown fox
                </span>
                <span className="text-text text-xs">{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Typography Hierarchy */}
        <div>
          <h3 className="text-subheading mb-4 text-xl font-semibold">
            Typography Hierarchy
          </h3>
          <div className="space-y-4">
            <div>
              <h1 className="text-heading text-5xl leading-tight font-bold">
                Page Title
              </h1>
              <p className="text-muted mt-1 text-sm">
                Used for top-level pages and hero sections
              </p>
            </div>

            <div>
              <h2 className="text-heading text-3xl leading-snug font-semibold">
                Section Heading
              </h2>
              <p className="text-muted mt-1 text-sm">
                Used for major sections within a page
              </p>
            </div>

            <div>
              <h3 className="text-subheading text-2xl font-semibold">
                Subsection Heading
              </h3>
              <p className="text-muted mt-1 text-sm">
                Used for grouping related content or components
              </p>
            </div>

            <div>
              <h4 className="text-subheading text-lg font-medium">
                Caption / Label
              </h4>
              <p className="text-muted mt-1 text-sm">
                Used for metadata, captions, or supporting labels
              </p>
            </div>

            <div>
              <p className="text-text text-base leading-relaxed">
                Body text – this is your standard paragraph styling, optimized
                for readability.
              </p>
            </div>

            <div>
              <p className="text-muted text-sm leading-normal">
                Muted text – helper text, form hints, or secondary info.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Buttons */}
      <section>
        <h2 className="text-heading mb-6 text-3xl font-bold">Buttons</h2>
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
        <h2 className="text-heading mb-6 text-3xl font-bold">Inputs</h2>
        <div className="max-w-sm space-y-4">
          <div>
            <label className="text-text mb-1 block text-sm font-medium">
              Label
            </label>
            <Input type="text" placeholder="Input field" />
          </div>
          <div>
            <label className="text-text mb-1 block text-sm font-medium">
              Disabled
            </label>
            <Input type="text" placeholder="Disabled input" disabled />
          </div>
          <div>
            <label className="text-text mb-1 block text-sm font-medium">
              Invalid
            </label>
            <Input type="text" placeholder="Invalid input" aria-invalid />
          </div>
        </div>
      </section>

      {/* Shadows */}
      <section>
        <h2 className="text-heading mb-6 text-3xl font-bold">Shadows</h2>
        <div className="flex gap-8">
          <div
            className={cn(
              "rounded-xl bg-white/60 p-6 backdrop-blur-md",
              shadowDepthSoft,
            )}
          >
            Soft Shadow
          </div>
          <div
            className={cn(
              "rounded-xl bg-white/60 p-6 backdrop-blur-md",
              shadowDepthMedium,
            )}
          >
            Medium Shadow
          </div>
          <div
            className={cn(
              "rounded-xl bg-white/60 p-6 backdrop-blur-md",
              shadowDepthPrimary,
            )}
          >
            Primary Shadow
          </div>
        </div>
      </section>

      {/* Color Tokens */}
      <section>
        <h2 className="text-heading mb-6 text-3xl font-bold">Color Tokens</h2>
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
          {colors.map(({ label, class: bgClass }) => (
            <div key={label} className="flex flex-col items-center">
              <div className={cn("h-16 w-16 rounded-lg border", bgClass)} />
              <span className="text-text mt-2 text-sm">{label}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
