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

const TextStyleEditor = () => {
  return (
    <div className="w-full max-w-sm bg-white p-4 rounded-xl shadow border space-y-5 text-sm">
      <h3 className="text-base font-semibold text-gray-800">Text Styles</h3>

      {/* Font settings */}
      <Section title="Typography">
        <div>
          <Label text="Font Size (px)" />
          <NumberInput placeholder="16" />
        </div>
        <div>
          <Label text="Font Weight" />
          <select className="w-full px-2 py-1 border rounded text-sm">
            <option value="normal">Normal</option>
            <option value="bold">Bold</option>
            <option value="lighter">Light</option>
          </select>
        </div>
        <div>
          <Label text="Font Color" />
          <ColorInput />
        </div>
      </Section>

      {/* Text alignment */}
      <Section title="Text Alignment">
        <div>
          <Label text="Align" />
          <select className="w-full px-2 py-1 border rounded text-sm">
            <option value="left">Left</option>
            <option value="center">Center</option>
            <option value="right">Right</option>
            <option value="justify">Justify</option>
          </select>
        </div>
      </Section>

      {/* Line height & spacing */}
      <Section title="Spacing">
        <div className="grid grid-cols-2 gap-2">
          <div>
            <Label text="Line Height" />
            <NumberInput placeholder="1.5" />
          </div>
          <div>
            <Label text="Letter Spacing" />
            <NumberInput placeholder="0" />
          </div>
        </div>
      </Section>

      {/* Padding */}
      <Section title="Padding (px)">
        <Grid4>
          {["Top", "Right", "Bottom", "Left"].map((pos) => (
            <div key={pos}>
              <Label text={pos} />
              <NumberInput placeholder="0" />
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
    </div>
  );
};

export default TextStyleEditor;
