import React from "react";

const Label = ({ text }: { text: string }) => (
  <label className="text-xs text-gray-600">{text}</label>
);

const Input = ({ placeholder }: { placeholder?: string }) => (
  <input
    type="text"
    placeholder={placeholder}
    className="w-full border rounded px-2 py-1 text-sm"
  />
);

const NumberInput = ({ placeholder }: { placeholder?: string }) => (
  <input
    type="number"
    placeholder={placeholder}
    className="w-full border rounded px-2 py-1 text-sm"
  />
);

const ColorInput = () => (
  <input
    type="color"
    className="w-full h-8 border rounded p-0"
    defaultValue="#0000ee"
  />
);

const Section = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <div className="space-y-2 pb-5 border-b">
    <h4 className="text-xs uppercase tracking-wide text-gray-500 font-medium">
      {title}
    </h4>
    <div className="space-y-2">{children}</div>
  </div>
);

const Grid4 = ({ children }: { children: React.ReactNode }) => (
  <div className="grid grid-cols-4 gap-2">{children}</div>
);

const LinkStyleEditor = () => {
  return (
    <div className="w-full max-w-sm bg-white p-4 rounded-xl shadow border space-y-5 text-sm">
      <h3 className="text-base font-semibold text-gray-800">Link Styles</h3>

      {/* URL & Text */}
      <Section title="Content">
        <div>
          <Label text="URL" />
          <Input placeholder="https://example.com" />
        </div>
        <div>
          <Label text="Link Text" />
          <Input placeholder="Click here" />
        </div>
      </Section>

      {/* Typography */}
      <Section title="Typography">
        <div>
          <Label text="Font Size (px)" />
          <NumberInput placeholder="14" />
        </div>
        <div>
          <Label text="Font Weight" />
          <select className="w-full border rounded px-2 py-1 text-sm">
            <option value="normal">Normal</option>
            <option value="bold">Bold</option>
            <option value="lighter">Lighter</option>
          </select>
        </div>
        <div>
          <Label text="Text Align" />
          <select className="w-full border rounded px-2 py-1 text-sm">
            <option value="left">Left</option>
            <option value="center">Center</option>
            <option value="right">Right</option>
          </select>
        </div>
      </Section>

      {/* Colors */}
      <Section title="Colors">
        <div>
          <Label text="Text Color" />
          <ColorInput />
        </div>
        <div>
          <Label text="Background Color" />
          <ColorInput />
        </div>
      </Section>

      {/* Text Decoration */}
      <Section title="Decoration">
        <div>
          <Label text="Text Decoration" />
          <select className="w-full border rounded px-2 py-1 text-sm">
            <option value="none">None</option>
            <option value="underline">Underline</option>
            <option value="overline">Overline</option>
            <option value="line-through">Line Through</option>
          </select>
        </div>
      </Section>

      {/* Padding */}
      <Section title="Padding (px)">
        <Grid4>
          {["Top", "Right", "Bottom", "Left"].map((side) => (
            <div key={side}>
              <Label text={side} />
              <NumberInput placeholder="0" />
            </div>
          ))}
        </Grid4>
      </Section>

      {/* Margin */}
      <Section title="Margin (px)">
        <Grid4>
          {["Top", "Right", "Bottom", "Left"].map((side) => (
            <div key={side}>
              <Label text={side} />
              <NumberInput placeholder="0" />
            </div>
          ))}
        </Grid4>
      </Section>
    </div>
  );
};

export default LinkStyleEditor;
