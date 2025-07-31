import { updateStyle } from "@/redux/emailTemplateSlice";
import { RootState } from "@/redux/store";
import React, { ChangeEvent } from "react";
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

const ContainerStyleEditor = () => {
  const activeBlock = useSelector(
    (state: RootState) => state.email.activeBlock
  );

  const activeKey = useSelector(
    (state: RootState) => state.email.currentElementKey
  );

  // central state object named "names"
  const [names, setNames] = React.useState<Record<string, string>>({
    width: "100%",
    height: "auto",
    paddingTop: "0",
    paddingRight: "0",
    paddingBottom: "0",
    paddingLeft: "0",
    marginTop: "0",
    marginRight: "0",
    marginBottom: "0",
    marginLeft: "0",
    backgroundColor: "#000000",
    backgroundImage: "",
    borderWidth: "1",
    borderColor: "#000000",
    borderRadius: "4",
    textAlign: "left",
    fontSize: "14",
    fontWeight: "normal",
    fontColor: "#000000",
  });
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
      name.includes("borderRadi")
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

  // array of all name values (formerly "values")
  // const namesArray = useMemo(() => Object.values(names), [names]);

  return (
    <div className="w-full max-w-sm bg-white p-4 rounded-xl shadow border space-y-5 text-sm">
      <h3 className="text-base font-semibold text-gray-800">
        Container Styles
      </h3>

      {/* Dimensions */}
      <Section title="Dimensions (px or %)">
        <div className="grid grid-cols-2 gap-2">
          <div>
            <Label text="Width" />
            <TextInput
              name="width"
              placeholder="100%"
              value={names.width}
              onChange={handleChange}
            />
          </div>
          <div>
            {/* <Label text="Height" /> */}

            {/* <TextInput
              name="height"
              placeholder="auto"
              value={names.height}
              onChange={handleChange}
            /> */}
          </div>
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

      {/* Background */}
      <Section title="Background">
        <div className="space-y-1">
          <Label text="Background Color" />
          <ColorInput
            name="backgroundColor"
            value={names.backgroundColor}
            onChange={(e) => handleChange(e as any)}
          />
        </div>
        <div className="space-y-1">
          <Label text="Background Image URL" />
          <TextInput
            name="backgroundImage"
            placeholder="https://..."
            value={names.backgroundImage}
            onChange={handleChange}
          />
        </div>
      </Section>

      {/* Border */}
      <Section title="Border">
        <div className="grid grid-cols-3 gap-2">
          <div>
            <Label text="Width" />
            <NumberInput
              name="borderWidth"
              placeholder="1"
              value={names.borderWidth}
              onChange={handleChange}
            />
          </div>
          <div>
            <Label text="Color" />
            <ColorInput
              name="borderColor"
              value={names.borderColor}
              onChange={(e) => handleChange(e as any)}
            />
          </div>
          <div>
            <Label text="Radius" />
            <NumberInput
              name="borderRadius"
              placeholder="4"
              value={names.borderRadius}
              onChange={handleChange}
            />
          </div>
        </div>
      </Section>

      {/* Text Alignment */}
      <Section title="Text Alignment">
        <div className="space-y-1">
          <Label text="Align" />
          <SelectInput
            name="textAlign"
            value={names.textAlign}
            onChange={(e) => handleChange(e as any)}
            options={[
              { label: "Left", value: "left" },
              { label: "Center", value: "center" },
              { label: "Right", value: "right" },
              { label: "Justify", value: "justify" },
            ]}
          />
        </div>
      </Section>

      {/* Debug / usage example */}
      {/* <div className="mt-2">
        <Label text="Current names object (all values)" />
        <pre className="text-[10px] bg-gray-100 p-2 rounded">
          {JSON.stringify(namesArray, null, 2)}
        </pre>
      </div> */}
    </div>
  );
};

export default ContainerStyleEditor;
