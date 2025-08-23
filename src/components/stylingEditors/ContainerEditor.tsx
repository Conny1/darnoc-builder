import { removeCSSvalues } from "@/lib/uiconfigs";
import { updateStyle } from "@/redux/emailTemplateSlice";
import { RootState } from "@/redux/store";
import React, { ChangeEvent, useEffect } from "react";
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
    value={value || 0}
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
  let style: Record<string, string> = {};
  let width = "70%";
  if (activeKey) {
    if (activeBlock?.configs?.styles) {
      style = activeBlock?.configs?.styles[activeKey] as Record<string, string>;
      width = (activeBlock?.configs?.styles["parent"].maxWidth ||
        activeBlock?.configs?.styles[activeKey].width) as string;
    }
  }

  // central state object named "names"
  const [names, setNames] = React.useState<Record<string, string>>({
    width: removeCSSvalues(width),
    height: removeCSSvalues(style?.height),
    paddingTop: removeCSSvalues(style?.paddingTop),
    paddingRight: removeCSSvalues(style?.paddingRight),
    paddingBottom: removeCSSvalues(style?.paddingBottom),
    paddingLeft: removeCSSvalues(style?.paddingLeft),
    marginTop: removeCSSvalues(style?.marginTop),
    marginRight: removeCSSvalues(style?.marginRight),
    marginBottom: removeCSSvalues(style?.margingBottom),
    marginLeft: removeCSSvalues(style?.marginLeft),
    backgroundColor: removeCSSvalues(style?.backgroundColor),
    backgroundImage: removeCSSvalues(style?.backgroundImage),
    borderWidth: removeCSSvalues(style?.borderWidth),
    borderColor: removeCSSvalues(style?.borderColor),
    borderRadius: removeCSSvalues(style?.borderRadius),
    textAlign: removeCSSvalues(style?.textAlign),
    fontSize: removeCSSvalues(style?.fontSize),
    fontWeight: removeCSSvalues(style?.fontWeight),
    fontColor: removeCSSvalues(style?.color),
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
      name.includes("height") ||
      name.includes("borderRadi") ||
      name.includes("width")
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
  useEffect(() => {
    setNames({
      width: removeCSSvalues(width),
      height: removeCSSvalues(style?.height),
      paddingTop: removeCSSvalues(style?.paddingTop),
      paddingRight: removeCSSvalues(style?.paddingRight),
      paddingBottom: removeCSSvalues(style?.paddingBottom),
      paddingLeft: removeCSSvalues(style?.paddingLeft),
      marginTop: removeCSSvalues(style?.marginTop),
      marginRight: removeCSSvalues(style?.marginRight),
      marginBottom: removeCSSvalues(style?.marginBottom),
      marginLeft: removeCSSvalues(style?.marginLeft),
      backgroundColor: removeCSSvalues(style?.backgroundColor),
      backgroundImage: removeCSSvalues(style?.backgroundImage),
      borderWidth: removeCSSvalues(style?.borderWidth),
      borderColor: removeCSSvalues(style?.borderColor),
      borderRadius: removeCSSvalues(style?.borderRadius),
      textAlign: removeCSSvalues(style?.textAlign),
      fontSize: removeCSSvalues(style?.fontSize),
      fontWeight: removeCSSvalues(style?.fontWeight),
      fontColor: removeCSSvalues(style?.color),
    });
  }, [activeBlock]);

  return (
    <div className="w-full max-w-sm bg-white p-4 rounded-xl shadow border space-y-5 text-sm">
      <h3 className="text-base font-semibold text-gray-800">
        Container Styles
      </h3>

      {/* Dimensions */}
      {activeBlock?.name !== "section" && (
        <Section title="Dimensions">
          <div className="grid grid-cols-2 gap-2">
            {activeKey !== "section" && (
              <div>
                <Label text="Width" />
                <NumberInput
                  name="width"
                  placeholder="eg 350"
                  value={names.width || ""}
                  onChange={handleChange}
                />
              </div>
            )}
            <div>
              <Label text="Height" />

              <NumberInput
                name="height"
                placeholder="eg 350"
                value={names.height || ""}
                onChange={handleChange}
              />
            </div>
          </div>
        </Section>
      )}

      {/* Padding */}
      {/* <Section title="Padding">
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
      </Section> */}

      {/* Margin */}
      <Section title="Margin ">
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
            onChange={(e) => handleChange(e)}
          />
        </div>
        {/* <div className="space-y-1">
          <Label text="Background Image URL" />
          <TextInput
            name="backgroundImage"
            placeholder="https://..."
            value={names.backgroundImage}
            onChange={handleChange}
          />
        </div> */}
      </Section>

      {/* Border */}
   { activeBlock?.name !=="divider" && <Section title="Border">
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
              onChange={(e) => handleChange(e)}
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
      </Section>}

      {/* Text Alignment */}
      <Section title="Text Alignment">
        <div className="space-y-1">
          <Label text="Align" />
          <SelectInput
            name="textAlign"
            value={names.textAlign}
            onChange={(e) => handleChange(e)}
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
