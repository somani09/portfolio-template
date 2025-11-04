import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Label } from "@/components/ui/label";
import { Loader } from "@/components/ui/loader";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { Progress } from "@/components/ui/progress";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
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
        <h2 className="text-heading mb-6 text-3xl font-bold">
          Dummy Page Layout
        </h2>

        <div className="border-border bg-surface space-y-16 rounded-xl border p-8 sm:p-12 lg:p-16">
          {/* PAGE TITLE */}
          <header className="space-y-4 text-center">
            <h1 className="text-heading text-5xl leading-tight font-bold">
              Page Title — Building a Consistent Design System
            </h1>
            <p className="text-muted mx-auto max-w-2xl text-lg">
              This mock page demonstrates real-world content hierarchy, spacing,
              and component rhythm inside your base layout.
            </p>
          </header>

          {/* SECTION 1 */}
          <section className="border-border bg-surface-alt/10 space-y-8 rounded-lg border p-8">
            <header>
              <h2 className="text-heading mb-2 text-3xl font-semibold">
                Section Title — Overview
              </h2>
              <p className="text-muted max-w-prose text-sm">
                Each section maintains{" "}
                <code className="bg-surface text-text rounded px-1 py-0.5 text-xs">
                  mt-16
                </code>{" "}
                spacing from the previous one, with internal{" "}
                <code className="bg-surface text-text rounded px-1 py-0.5 text-xs">
                  p-8
                </code>{" "}
                padding. The goal is clear separation without breaking rhythm.
              </p>
            </header>

            <article className="space-y-4">
              <h3 className="text-subheading text-2xl font-semibold">
                Subsection Heading — Context
              </h3>
              <p className="text-text max-w-prose text-base leading-relaxed">
                Consistent vertical rhythm allows your interface to feel
                structured. In this example, headings, paragraphs, and cards
                align to an 8px spacing grid, with larger blocks expanding to
                16px or 32px increments.
              </p>
              <p className="text-text max-w-prose text-base leading-relaxed">
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
                  className="border-border bg-surface space-y-3 rounded-xl border p-6"
                >
                  <Skeleton className="h-40 w-full rounded-md" />
                  <h4 className="text-heading text-lg font-medium">
                    Card Title {i + 1}
                  </h4>
                  <p className="text-muted text-sm">
                    This card simulates component-level spacing with{" "}
                    <code className="bg-surface-alt/20 text-text rounded px-1 py-0.5 text-xs">
                      p-6
                    </code>{" "}
                    padding.
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* SECTION 2 */}
          <section className="border-border bg-surface-alt/10 space-y-8 rounded-lg border p-8">
            <header>
              <h2 className="text-heading mb-2 text-3xl font-semibold">
                Section Title — Analytics
              </h2>
              <p className="text-muted max-w-prose text-sm">
                Larger data-heavy or dashboard sections may contain graphs,
                tables, or stat blocks. The same spacing logic applies here.
              </p>
            </header>

            <article className="space-y-6">
              <h3 className="text-subheading text-2xl font-semibold">
                Subsection Heading — Metrics Overview
              </h3>
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="border-border bg-surface flex flex-col gap-3 rounded-xl border p-6"
                  >
                    <Skeleton className="h-8 w-16 rounded-md" />
                    <h4 className="text-heading text-lg font-medium">
                      Stat Label
                    </h4>
                    <p className="text-text text-sm leading-snug">
                      Small supporting text or description for this metric.
                    </p>
                  </div>
                ))}
              </div>
            </article>

            <article className="space-y-4">
              <h3 className="text-subheading text-2xl font-semibold">
                Subsection Heading — Insights
              </h3>
              <p className="text-text max-w-prose text-base leading-relaxed">
                The goal is to simulate realistic content hierarchy — long-form
                text paired with data blocks and UI modules. Every block uses
                consistent padding (
                <code className="bg-surface text-text rounded px-1 py-0.5 text-xs">
                  p-6
                </code>{" "}
                to{" "}
                <code className="bg-surface text-text rounded px-1 py-0.5 text-xs">
                  p-8
                </code>
                ) and vertical spacing (
                <code className="bg-surface text-text rounded px-1 py-0.5 text-xs">
                  space-y-4
                </code>{" "}
                or{" "}
                <code className="bg-surface text-text rounded px-1 py-0.5 text-xs">
                  space-y-6
                </code>
                ).
              </p>
            </article>
          </section>

          {/* SECTION 3 */}
          <section className="border-border bg-surface-alt/10 space-y-8 rounded-lg border p-8">
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
          <footer className="border-border space-y-3 border-t pt-12 text-center">
            <h5 className="text-subheading text-lg font-semibold">
              Footer Section
            </h5>
            <p className="text-muted text-sm">
              Footer aligns with the same{" "}
              <code className="bg-surface text-text rounded px-1 py-0.5 text-xs">
                px
              </code>{" "}
              and{" "}
              <code className="bg-surface text-text rounded px-1 py-0.5 text-xs">
                py
              </code>{" "}
              rhythm as page sections.
            </p>
          </footer>
        </div>
      </section>

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

      <section>
        <h2 className="text-heading mb-6 text-3xl font-bold">
          Layout & Spacing Guide
        </h2>

        {/* Vertical Rhythm */}
        <div className="mb-12">
          <h3 className="text-subheading mb-4 text-xl font-semibold">
            Vertical Spacing System
          </h3>
          <ul className="text-text space-y-2 text-sm">
            <li>
              <strong>Page padding:</strong>{" "}
              <code className="bg-surface text-text rounded px-1 py-0.5 text-xs">
                px-8 py-16
              </code>{" "}
              (→
              <code className="bg-surface text-text rounded px-1 py-0.5 text-xs">
                sm:px-16
              </code>
              ,{" "}
              <code className="bg-surface text-text rounded px-1 py-0.5 text-xs">
                lg:px-32
              </code>
              ) — consistent across top-level pages.
            </li>
            <li>
              <strong>Section spacing:</strong>{" "}
              <code className="bg-surface text-text rounded px-1 py-0.5 text-xs">
                mt-16
              </code>{" "}
              between major sections; inside a section, use{" "}
              <code className="bg-surface text-text rounded px-1 py-0.5 text-xs">
                mb-8
              </code>{" "}
              between title and content.
            </li>
            <li>
              <strong>Subsection spacing:</strong>{" "}
              <code className="bg-surface text-text rounded px-1 py-0.5 text-xs">
                mt-8
              </code>{" "}
              to separate smaller groups or cards.
            </li>
            <li>
              <strong>Component spacing:</strong>{" "}
              <code className="bg-surface text-text rounded px-1 py-0.5 text-xs">
                gap-4
              </code>{" "}
              for most grids,
              <code className="bg-surface text-text rounded px-1 py-0.5 text-xs">
                gap-6
              </code>{" "}
              for larger UI (cards, dashboards).
            </li>
            <li>
              <strong>Text spacing:</strong>{" "}
              <code className="bg-surface text-text rounded px-1 py-0.5 text-xs">
                mb-1
              </code>{" "}
              for label → input,
              <code className="bg-surface text-text rounded px-1 py-0.5 text-xs">
                mt-2
              </code>{" "}
              for helper text.
            </li>
            <li>
              <strong>Button groups:</strong>{" "}
              <code className="bg-surface text-text rounded px-1 py-0.5 text-xs">
                gap-3
              </code>{" "}
              or{" "}
              <code className="bg-surface text-text rounded px-1 py-0.5 text-xs">
                gap-4
              </code>
              .
            </li>
            <li>
              <strong>Form field groups:</strong>{" "}
              <code className="bg-surface text-text rounded px-1 py-0.5 text-xs">
                space-y-4
              </code>
              .
            </li>
          </ul>
        </div>

        {/* Component Padding */}
        <div className="mb-12">
          <h3 className="text-subheading mb-4 text-xl font-semibold">
            Component Padding System
          </h3>
          <ul className="text-text space-y-2 text-sm">
            <li>
              <strong>Card / Panel:</strong>{" "}
              <code className="bg-surface text-text rounded px-1 py-0.5 text-xs">
                p-6
              </code>{" "}
              (→{" "}
              <code className="bg-surface text-text rounded px-1 py-0.5 text-xs">
                sm:p-8
              </code>{" "}
              for feature blocks)
            </li>
            <li>
              <strong>Button:</strong>{" "}
              <code className="bg-surface text-text rounded px-1 py-0.5 text-xs">
                px-4 py-2
              </code>{" "}
              (→{" "}
              <code className="bg-surface text-text rounded px-1 py-0.5 text-xs">
                px-6 py-3
              </code>{" "}
              for large)
            </li>
            <li>
              <strong>Input / Select:</strong>{" "}
              <code className="bg-surface text-text rounded px-1 py-0.5 text-xs">
                px-3 py-2
              </code>
            </li>
            <li>
              <strong>Dialog / Modal:</strong> inner padding{" "}
              <code className="bg-surface text-text rounded px-1 py-0.5 text-xs">
                p-8
              </code>
              , outer margin{" "}
              <code className="bg-surface text-text rounded px-1 py-0.5 text-xs">
                m-6
              </code>
            </li>
            <li>
              <strong>Navbar / Header:</strong> vertical{" "}
              <code className="bg-surface text-text rounded px-1 py-0.5 text-xs">
                py-4
              </code>
              , horizontal{" "}
              <code className="bg-surface text-text rounded px-1 py-0.5 text-xs">
                px-8
              </code>
            </li>
            <li>
              <strong>Section Containers:</strong> use{" "}
              <code className="bg-surface text-text rounded px-1 py-0.5 text-xs">
                max-w-7xl mx-auto px-8
              </code>{" "}
              for alignment.
            </li>
          </ul>
        </div>

        {/* Responsive adjustments */}
        <div>
          <h3 className="text-subheading mb-4 text-xl font-semibold">
            Responsive Adjustments
          </h3>
          <ul className="text-text space-y-2 text-sm">
            <li>
              <strong>Small screens:</strong> reduce{" "}
              <code className="bg-surface text-text rounded px-1 py-0.5 text-xs">
                px
              </code>{" "}
              padding by 50% and tighten vertical rhythm.
            </li>
            <li>
              <strong>Large screens:</strong> increase section spacing to{" "}
              <code className="bg-surface text-text rounded px-1 py-0.5 text-xs">
                mt-24
              </code>{" "}
              or{" "}
              <code className="bg-surface text-text rounded px-1 py-0.5 text-xs">
                py-24
              </code>
              .
            </li>
            <li>
              <strong>Maintain rhythm:</strong> always base multiples on{" "}
              <code className="bg-surface text-text rounded px-1 py-0.5 text-xs">
                4px
              </code>{" "}
              or{" "}
              <code className="bg-surface text-text rounded px-1 py-0.5 text-xs">
                8px
              </code>{" "}
              grid.
            </li>
          </ul>
        </div>
      </section>

      {/* Color Tokens */}
      <section>
        <h2 className="text-heading mb-6 text-3xl font-bold">Color Tokens</h2>
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
          {colors.map(({ label, class: bgClass }) => (
            <div key={label} className="flex flex-col items-center">
              <div
                className={cn(
                  "border-border h-16 w-16 rounded-lg border",
                  bgClass,
                )}
              />
              <span className="text-text mt-2 text-sm">{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Components */}
      <section>
        <h2 className="text-heading mb-6 text-3xl font-bold">Components</h2>
      </section>

      {/* Buttons */}
      <section>
        <h3 className="text-subheading mb-4 text-xl font-semibold">Buttons</h3>
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
        <h3 className="text-subheading mb-4 text-xl font-semibold">Inputs</h3>
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

      {/* Accordion */}
      <section>
        <h3 className="text-subheading mb-4 text-xl font-semibold">
          Accordion
        </h3>
        <div className="max-w-md">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>What is this project?</AccordionTrigger>
              <AccordionContent>
                A reusable portfolio template with a clean component system.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>How do I use components?</AccordionTrigger>
              <AccordionContent>
                Import from{" "}
                <code className="bg-surface rounded px-1 py-0.5 text-xs">
                  @/components/ui
                </code>{" "}
                and compose.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Alert */}
      <section>
        <h3 className="text-subheading mb-4 text-xl font-semibold">Alert</h3>
        <Alert>
          <AlertTitle>Heads up!</AlertTitle>
          <AlertDescription>This is a simple alert message.</AlertDescription>
        </Alert>
      </section>

      {/* Avatar */}
      <section>
        <h3 className="text-subheading mb-4 text-xl font-semibold">Avatar</h3>
        <div className="flex items-center gap-4">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@user" />
            <AvatarFallback>VS</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarFallback>NA</AvatarFallback>
          </Avatar>
        </div>
      </section>

      {/* Badge */}
      <section>
        <h3 className="text-subheading mb-4 text-xl font-semibold">Badge</h3>
        <div className="flex flex-wrap gap-2">
          <Badge>Default</Badge>
        </div>
      </section>

      {/* Card */}
      <section>
        <h3 className="text-subheading mb-4 text-xl font-semibold">Card</h3>
        <Card className="max-w-md">
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Short description lives here.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-text text-sm">Body content for the card.</p>
          </CardContent>
          <CardFooter>
            <Button size="sm">Action</Button>
          </CardFooter>
        </Card>
      </section>

      {/* Checkbox & Label */}
      <section>
        <h3 className="text-subheading mb-4 text-xl font-semibold">
          Checkbox & Label
        </h3>
        <div className="flex items-center gap-2">
          <Checkbox id="terms" />
          <Label htmlFor="terms">Accept terms and conditions</Label>
        </div>
      </section>

      {/* Dialog */}
      <section>
        <h3 className="text-subheading mb-4 text-xl font-semibold">Dialog</h3>
        <Dialog>
          <DialogTrigger asChild>
            <Button>Open Dialog</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Dialog Title</DialogTitle>
              <DialogDescription>
                Short helper text for this dialog.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Button variant="secondary">Cancel</Button>
              <Button>Confirm</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </section>

      {/* Dropdown Menu */}
      <section>
        <h3 className="text-subheading mb-4 text-xl font-semibold">
          Dropdown Menu
        </h3>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button>Open Menu</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Menu</DropdownMenuLabel>
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Settings</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </section>

      {/* Loader */}
      <section>
        <h3 className="text-subheading mb-4 text-xl font-semibold">Loader</h3>
        <div className="flex items-center gap-4">
          <Loader size="sm" />
          <Loader size="md" />
          <Loader size="lg" />
        </div>
      </section>

      {/* Popover */}
      <section>
        <h3 className="text-subheading mb-4 text-xl font-semibold">Popover</h3>
        <Popover>
          <PopoverTrigger asChild>
            <Button>Open Popover</Button>
          </PopoverTrigger>
          <PopoverContent className="w-64">
            <p className="text-text text-sm">Some helpful content.</p>
          </PopoverContent>
        </Popover>
      </section>

      {/* Progress */}
      <section>
        <h3 className="text-subheading mb-4 text-xl font-semibold">Progress</h3>
        <div className="max-w-md">
          <Progress value={33} />
        </div>
      </section>

      {/* Select */}
      <section>
        <h3 className="text-subheading mb-4 text-xl font-semibold">Select</h3>
        <div className="w-56">
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select an option" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Fruits</SelectLabel>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
              </SelectGroup>
              <SelectSeparator />
              <SelectGroup>
                <SelectLabel>More</SelectLabel>
                <SelectItem value="grapes">Grapes</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </section>

      {/* Separator */}
      <section>
        <h3 className="text-subheading mb-4 text-xl font-semibold">
          Separator
        </h3>
        <div className="max-w-md">
          <Separator className="my-4" />
        </div>
      </section>

      {/* Skeleton */}
      <section>
        <h3 className="text-subheading mb-4 text-xl font-semibold">Skeleton</h3>
        <div className="flex items-center gap-4">
          <Skeleton className="h-6 w-32" />
          <Skeleton className="h-10 w-48 rounded-lg" />
        </div>
      </section>

      {/* Switch */}
      <section>
        <h3 className="text-subheading mb-4 text-xl font-semibold">Switch</h3>
        <div className="flex items-center gap-2">
          <Switch id="notifications" />
          <Label htmlFor="notifications">Enable notifications</Label>
        </div>
      </section>

      {/* Tabs */}
      <section>
        <h3 className="text-subheading mb-4 text-xl font-semibold">Tabs</h3>
        <div className="w-[400px] max-w-full">
          <Tabs defaultValue="account">
            <TabsList>
              <TabsTrigger value="account">Account</TabsTrigger>
              <TabsTrigger value="password">Password</TabsTrigger>
            </TabsList>
            <TabsContent value="account">
              <p className="text-text text-sm">
                Make changes to your account here.
              </p>
            </TabsContent>
            <TabsContent value="password">
              <p className="text-text text-sm">Change your password here.</p>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Textarea */}
      <section>
        <h3 className="text-subheading mb-4 text-xl font-semibold">Textarea</h3>
        <div className="max-w-md">
          <Textarea placeholder="Write something..." />
        </div>
      </section>

      {/* Tooltip */}
      <section>
        <h3 className="text-subheading mb-4 text-xl font-semibold">Tooltip</h3>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline">Hover me</Button>
            </TooltipTrigger>
            <TooltipContent>
              <p className="text-text text-xs">Tooltip content</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </section>

      {/* Shadows */}
      <section>
        <h2 className="text-heading mb-6 text-3xl font-bold">Shadows</h2>
        <div className="flex flex-wrap gap-8">
          <div
            className={cn(
              "bg-glass/60 rounded-xl p-6 backdrop-blur-md",
              shadowDepthSoft,
            )}
          >
            <span className="text-text font-medium">Soft Shadow</span>
          </div>
          <div
            className={cn(
              "bg-glass/60 rounded-xl p-6 backdrop-blur-md",
              shadowDepthMedium,
            )}
          >
            <span className="text-text font-medium">Medium Shadow</span>
          </div>
          <div
            className={cn(
              "bg-glass/60 rounded-xl p-6 backdrop-blur-md",
              shadowDepthPrimary,
            )}
          >
            <span className="text-text font-medium">Primary Shadow</span>
          </div>
        </div>
      </section>
    </div>
  );
}
