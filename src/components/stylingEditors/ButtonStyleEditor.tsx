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
    defaultValue="#000000"
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

const ButtonStyleEditor = () => {
  return (
    <div className="w-full max-w-sm bg-white p-4 rounded-xl shadow border space-y-5 text-sm">
      <h3 className="text-base font-semibold text-gray-800">Button Styles</h3>

      {/* Text */}
      <Section title="Text">
        <div>
          <Label text="Button Label" />
          <Input placeholder="Click Me" />
        </div>
        <div>
          <Label text="Font Size (px)" />
          <NumberInput placeholder="16" />
        </div>
        <div>
          <Label text="Font Color" />
          <ColorInput />
        </div>
        <div>
          <Label text="Font Weight" />
          <select className="w-full px-2 py-1 border rounded text-sm">
            <option value="normal">Normal</option>
            <option value="bold">Bold</option>
            <option value="lighter">Light</option>
          </select>
        </div>
      </Section>

      {/* Background and Border */}
      <Section title="Button Design">
        <div>
          <Label text="Background Color" />
          <ColorInput />
        </div>
        <div>
          <Label text="Border Radius (px)" />
          <NumberInput placeholder="4" />
        </div>
        <div>
          <Label text="Border Color" />
          <ColorInput />
        </div>
        <div>
          <Label text="Border Width (px)" />
          <NumberInput placeholder="1" />
        </div>
      </Section>

      {/* Padding */}
      <Section title="Padding (px)">
        <Grid4>
          {["Top", "Right", "Bottom", "Left"].map((pos) => (
            <div key={pos}>
              <Label text={pos} />
              <NumberInput placeholder="8" />
            </div>
          ))}
        </Grid4>
      </Section>

      {/* Margin */}
      <Section title="Margin (px)">
        <Grid4>
          {["Top", "Right", "Bottom", "Left"].map((pos) => (
            <div key={pos}>
              <Label text={pos} />
              <NumberInput placeholder="0" />
            </div>
          ))}
        </Grid4>
      </Section>

      {/* Link */}
      <Section title="Link">
        <div>
          <Label text="Href / URL" />
          <Input placeholder="https://example.com" />
        </div>
      </Section>
    </div>
  );
};

export default ButtonStyleEditor;
