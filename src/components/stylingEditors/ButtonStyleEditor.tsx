import { removeCSSvalues } from "@/lib/uiconfigs";
import { updateContent, updateStyle } from "@/redux/emailTemplateSlice";
import { RootState } from "@/redux/store";
import React, { ChangeEvent, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

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
    className="w-full px-2 py-1 border rounded text-sm"
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

const ButtonStyleEditor = () => {
  const activeBlock = useSelector(
    (state: RootState) => state.email.activeBlock
  );

  const activeKey = useSelector(
    (state: RootState) => state.email.currentElementKey
  );
  let style: Record<string, string> = {};
  if (activeKey) {
    if (activeBlock?.configs?.styles) {
      style = activeBlock?.configs?.styles[activeKey] as Record<string, string>;
    }
  }

  const [names, setNames] = React.useState<Record<string, string>>({
    fontSize: removeCSSvalues(style.fontSize),
    color: removeCSSvalues(style.color),
    fontWeight: removeCSSvalues(style.fontWeight),
    backgroundColor: removeCSSvalues(style.backgroundColor),
    borderRadius: removeCSSvalues(style.borderRadius),
    borderColor: removeCSSvalues(style.borderColor),
    borderWidth: removeCSSvalues(style.borderWidth),
    paddingTop: removeCSSvalues(style.paddingTop),
    paddingRight: removeCSSvalues(style.paddingRight),
    paddingBottom: removeCSSvalues(style.paddingRight),
    paddingLeft: removeCSSvalues(style.paddingLeft),
    marginTop: removeCSSvalues(style.marginTop),
    marginRight: removeCSSvalues(style.marginRight),
    marginBottom: removeCSSvalues(style.marginBottom),
    marginLeft: removeCSSvalues(style.marginBottom),
    textTransform: removeCSSvalues(style?.textTransform),
  });

  const [text, settext] = React.useState<string>(
    activeBlock?.configs?.content?.text || ""
  );

  useEffect(() => {
    setNames({
      fontSize: removeCSSvalues(style.fontSize),
      color: removeCSSvalues(style.color),
      fontWeight: removeCSSvalues(style.fontWeight),
      backgroundColor: removeCSSvalues(style.backgroundColor),
      borderRadius: removeCSSvalues(style.borderRadius),
      borderColor: removeCSSvalues(style.borderColor),
      borderWidth: removeCSSvalues(style.borderWidth),
      paddingTop: removeCSSvalues(style.paddingTop),
      paddingRight: removeCSSvalues(style.paddingRight),
      paddingBottom: removeCSSvalues(style.paddingRight),
      paddingLeft: removeCSSvalues(style.paddingLeft),
      marginTop: removeCSSvalues(style.marginTop),
      marginRight: removeCSSvalues(style.marginRight),
      marginBottom: removeCSSvalues(style.marginBottom),
      marginLeft: removeCSSvalues(style.marginBottom),
      textTransform: removeCSSvalues(style?.textTransform),
    });
  }, [activeBlock]);

  const dispatch = useDispatch();
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    let newVal = value;
    if (
      name.includes("padding") ||
      name.includes("margin") ||
      name.includes("borderWid") ||
      name.includes("borderRadi") ||
      name.includes("fontSi") ||
      name.includes("letterSpaci")
    ) {
      newVal += "px";
    }
    setNames((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (activeBlock && activeKey && value !== "") {
      dispatch(
        updateStyle({
          block_id: activeBlock?.id,
          key: activeKey,
          styleKey: name,
          styleValue: newVal,
        })
      );
    }
  };

  // const namesArray = useMemo(() => Object.values(names), [names]);

  return (
    <div className="w-full max-w-sm bg-white p-4 rounded-xl shadow border space-y-5 text-sm">
      <h3 className="text-base font-semibold text-gray-800">Button Styles</h3>

      {/* Text */}
      <Section title="Text">
        <div>
          <Label text="Button Label" />
          <TextInput
            name="text"
            placeholder="Click Me"
            value={text}
            onChange={(e) => {
              let val = e.target.value as string;
              if (val.length === 0) return;

              settext(() => val);

              if (activeBlock?.id) {
                dispatch(
                  updateContent({ content: val, block_id: activeBlock?.id, type:"text" })
                );
              }
            }}
          />
        </div>
        <div>
          <Label text="Font Size (px)" />
          <NumberInput
            name="fontSize"
            placeholder="16"
            value={names.fontSize}
            onChange={handleChange}
          />
        </div>
        <div>
          <Label text="Font Color" />
          <ColorInput
            name="color"
            value={names.color}
            onChange={(e) => handleChange(e as any)}
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
              { label: "Light", value: "lighter" },
            ]}
          />
        </div>
        <div>
          <Label text="Text Case" />
          <SelectInput
            name="textTransform"
            value={names.textTransform}
            onChange={handleChange}
            options={[
              { label: "Normal", value: "none" },
              { label: "UPPERCASE", value: "uppercase" },
              { label: "lowercase", value: "lowercase" },
              { label: "Capitalize", value: "capitalize" },
            ]}
          />
        </div>
      </Section>

      {/* Background and Border */}
      <Section title="Button Design">
        <div>
          <Label text="Background Color" />
          <ColorInput
            name="backgroundColor"
            value={names.backgroundColor}
            onChange={(e) => handleChange(e as any)}
          />
        </div>
        <div>
          <Label text="Border Radius (px)" />
          <NumberInput
            name="borderRadius"
            placeholder="4"
            value={names.borderRadius}
            onChange={handleChange}
          />
        </div>
        <div>
          <Label text="Border Color" />
          <ColorInput
            name="borderColor"
            value={names.borderColor}
            onChange={(e) => handleChange(e as any)}
          />
        </div>
        <div>
          <Label text="Border Width (px)" />
          <NumberInput
            name="borderWidth"
            placeholder="1"
            value={names.borderWidth}
            onChange={handleChange}
          />
        </div>
      </Section>

      {/* Padding */}
      <Section title="Padding (px)">
        <Grid4>
          {["Top", "Right", "Bottom", "Left"].map((pos) => {
            const key = `padding${pos}` as const;
            return (
              <div key={pos}>
                <Label text={pos} />
                <NumberInput
                  name={key}
                  placeholder="8"
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
          {["Top", "Right", "Bottom", "Left"].map((pos) => {
            const key = `margin${pos}` as const;
            return (
              <div key={pos}>
                <Label text={pos} />
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

      {/* Link */}
      <Section title="Link">
        <div>
          <Label text="Href / URL" />
          <TextInput
            name="href"
            placeholder="https://example.com"
            value={names.href}
            onChange={handleChange}
          />
        </div>
      </Section>

      {/* Debug
      <div className="mt-2">
        <Label text="Current names object (all values)" />
        <pre className="text-[10px] bg-gray-100 p-2 rounded">
          {JSON.stringify(namesArray, null, 2)}
        </pre>
      </div> */}
    </div>
  );
};

export default ButtonStyleEditor;
