import React, { ChangeEvent, useMemo } from "react";

const Label = ({ text }: { text: string }) => (
  <label className="text-xs text-gray-600">{text}</label>
);

type InputProps = {
  name: string;
  placeholder?: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
};

const TextInput = ({ name, placeholder, value, onChange }: InputProps) => (
  <input
    name={name}
    type="text"
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    className="w-full border rounded px-2 py-1 text-sm"
  />
);

const NumberInput = ({ name, placeholder, value, onChange }: InputProps) => (
  <input
    name={name}
    type="number"
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    className="w-full border rounded px-2 py-1 text-sm"
  />
);

const ColorInput = ({
  name,
  value,
  onChange,
}: {
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}) => (
  <input
    name={name}
    type="color"
    className="w-full h-8 border rounded p-0"
    value={value}
    onChange={onChange}
  />
);

const SelectInput = ({
  name,
  value,
  onChange,
  options,
}: {
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  options: { label: string; value: string }[];
}) => (
  <select
    name={name}
    value={value}
    onChange={onChange}
    className="w-full border rounded px-2 py-1 text-sm"
  >
    {options.map((o) => (
      <option key={o.value} value={o.value}>
        {o.label}
      </option>
    ))}
  </select>
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
  const [names, setNames] = React.useState<Record<string, string>>({
    url: "",
    linkText: "Click here",
    fontSize: "14",
    fontWeight: "normal",
    textAlign: "left",
    textColor: "#0000ee",
    backgroundColor: "#0000ee",
    textDecoration: "none",
    paddingTop: "0",
    paddingRight: "0",
    paddingBottom: "0",
    paddingLeft: "0",
    marginTop: "0",
    marginRight: "0",
    marginBottom: "0",
    marginLeft: "0",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setNames((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const namesArray = useMemo(() => Object.values(names), [names]);

  return (
    <div className="w-full max-w-sm bg-white p-4 rounded-xl shadow border space-y-5 text-sm">
      <h3 className="text-base font-semibold text-gray-800">Link Styles</h3>

      {/* Content */}
      <Section title="Content">
        <div>
          <Label text="URL" />
          <TextInput
            name="url"
            placeholder="https://example.com"
            value={names.url}
            onChange={handleChange}
          />
        </div>
        <div>
          <Label text="Link Text" />
          <TextInput
            name="linkText"
            placeholder="Click here"
            value={names.linkText}
            onChange={handleChange}
          />
        </div>
      </Section>

      {/* Typography */}
      <Section title="Typography">
        <div>
          <Label text="Font Size (px)" />
          <NumberInput
            name="fontSize"
            placeholder="14"
            value={names.fontSize}
            onChange={handleChange}
          />
        </div>
        <div>
          <Label text="Font Weight" />
          <SelectInput
            name="fontWeight"
            value={names.fontWeight}
            onChange={handleChange}
            options={[
              { label: "Normal", value: "normal" },
              { label: "Bold", value: "bold" },
              { label: "Lighter", value: "lighter" },
            ]}
          />
        </div>
        <div>
          <Label text="Text Align" />
          <SelectInput
            name="textAlign"
            value={names.textAlign}
            onChange={handleChange}
            options={[
              { label: "Left", value: "left" },
              { label: "Center", value: "center" },
              { label: "Right", value: "right" },
            ]}
          />
        </div>
      </Section>

      {/* Colors */}
      <Section title="Colors">
        <div>
          <Label text="Text Color" />
          <ColorInput
            name="textColor"
            value={names.textColor}
            onChange={(e) => handleChange(e )}
          />
        </div>
        <div>
          <Label text="Background Color" />
          <ColorInput
            name="backgroundColor"
            value={names.backgroundColor}
            onChange={(e) => handleChange(e)}
          />
        </div>
      </Section>

      {/* Decoration */}
      <Section title="Decoration">
        <div>
          <Label text="Text Decoration" />
          <SelectInput
            name="textDecoration"
            value={names.textDecoration}
            onChange={handleChange}
            options={[
              { label: "None", value: "none" },
              { label: "Underline", value: "underline" },
              { label: "Overline", value: "overline" },
              { label: "Line Through", value: "line-through" },
            ]}
          />
        </div>
      </Section>

      {/* Padding */}
      <Section title="Padding (px)">
        <Grid4>
          {["Top", "Right", "Bottom", "Left"].map((side) => {
            const key = `padding${side}` as const;
            return (
              <div key={side}>
                <Label text={side} />
                <NumberInput
                  name={key}
                  placeholder="0"
                  value={names[key] || ""}
                  onChange={handleChange}
                />
              </div>
            );
          })}
        </Grid4>
      </Section>

      {/* Margin */}
      <Section title="Margin (px)">
        <Grid4>
          {["Top", "Right", "Bottom", "Left"].map((side) => {
            const key = `margin${side}` as const;
            return (
              <div key={side}>
                <Label text={side} />
                <NumberInput
                  name={key}
                  placeholder="0"
                  value={names[key] || ""}
                  onChange={handleChange}
                />
              </div>
            );
          })}
        </Grid4>
      </Section>

      {/* Debug / usage */}
      <div className="mt-2">
        <Label text="Current names object (all values)" />
        <pre className="text-[10px] bg-gray-100 p-2 rounded">
          {JSON.stringify(namesArray, null, 2)}
        </pre>
      </div>
    </div>
  );
};

export default LinkStyleEditor;
