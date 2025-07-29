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

const Grid4 = ({ children }: { children: React.ReactNode }) => (
  <div className="grid grid-cols-4 gap-2">{children}</div>
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

const StyleEditor = () => {
  return (
    <div className="w-full max-w-sm bg-white p-4 rounded-xl shadow border space-y-5 text-sm">
      <h3 className="text-base font-semibold text-gray-800">Style Panel</h3>

      {/* Typography */}
      <Section title="Typography">
        <div className="space-y-1">
          <Label text="Font Size (px)" />
          <NumberInput placeholder="14" />
        </div>
        <div className="space-y-1">
          <Label text="Font Weight" />
          <select className="w-full px-2 py-1 border rounded text-sm">
            <option value="normal">Normal</option>
            <option value="bold">Bold</option>
            <option value="lighter">Light</option>
          </select>
        </div>
        <div className="space-y-1">
          <Label text="Font Color" />
          <ColorInput />
        </div>
        <div className="space-y-1">
          <Label text="Text Align" />
          <select className="w-full px-2 py-1 border rounded text-sm">
            <option>Left</option>
            <option>Center</option>
            <option>Right</option>
            <option>Justify</option>
          </select>
        </div>
      </Section>

      {/* Padding */}
      <Section title="Padding (px)">
        <Grid4>
          <div>
            <Label text="Top" />
            <NumberInput placeholder="10" />
          </div>
          <div>
            <Label text="Right" />
            <NumberInput placeholder="10" />
          </div>
          <div>
            <Label text="Bottom" />
            <NumberInput placeholder="10" />
          </div>
          <div>
            <Label text="Left" />
            <NumberInput placeholder="10" />
          </div>
        </Grid4>
      </Section>

      {/* Margin */}
      <Section title="Margin (px)">
        <Grid4>
          <div>
            <Label text="Top" />
            <NumberInput placeholder="0" />
          </div>
          <div>
            <Label text="Right" />
            <NumberInput placeholder="0" />
          </div>
          <div>
            <Label text="Bottom" />
            <NumberInput placeholder="0" />
          </div>
          <div>
            <Label text="Left" />
            <NumberInput placeholder="0" />
          </div>
        </Grid4>
      </Section>

      {/* Background */}
      <Section title="Background">
        <div className="space-y-1">
          <Label text="Background Color" />
          <ColorInput />
        </div>
        <div className="space-y-1">
          <Label text="Background Image URL" />
          <Input placeholder="https://..." />
        </div>
      </Section>

      {/* Border */}
      <Section title="Border">
        <div className="space-y-1">
          <Label text="Border Width (px)" />
          <NumberInput placeholder="1" />
        </div>
        <div className="space-y-1">
          <Label text="Border Color" />
          <ColorInput />
        </div>
        <div className="space-y-1">
          <Label text="Border Radius (px)" />
          <NumberInput placeholder="4" />
        </div>
      </Section>
    </div>
  );
};

export default StyleEditor;
