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

const ImageStyleEditor = () => {
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
    width: removeCSSvalues(style?.width),
    height: removeCSSvalues(style?.height),
    borderRadius: removeCSSvalues(style?.borderRadius),
    borderColor: removeCSSvalues(style?.borderColor),
    borderWidth: removeCSSvalues(style?.borderColor),
    paddingTop: removeCSSvalues(style?.paddingTop),
    paddingRight: removeCSSvalues(style?.paddingRight),
    paddingBottom: removeCSSvalues(style?.paddingBottom),
    paddingLeft: removeCSSvalues(style?.paddingLeft),
    marginTop: removeCSSvalues(style?.marginTop),
    marginRight: removeCSSvalues(style?.marginRight),
    marginBottom: removeCSSvalues(style?.marginBottom),
    marginLeft: removeCSSvalues(style?.marginLeft),
  });
  const [link, setlink] = React.useState<string>(
    activeBlock?.configs?.content?.link || ""
  );

  useEffect(() => {
    setNames({
      width: removeCSSvalues(style?.width),
      height: removeCSSvalues(style?.height),
      borderRadius: removeCSSvalues(style?.borderRadius),
      borderColor: removeCSSvalues(style?.borderColor),
      borderWidth: removeCSSvalues(style?.borderWidth),
      paddingTop: removeCSSvalues(style?.paddingTop),
      paddingRight: removeCSSvalues(style?.paddingRight),
      paddingBottom: removeCSSvalues(style?.paddingBottom),
      paddingLeft: removeCSSvalues(style?.paddingLeft),
      marginTop: removeCSSvalues(style?.marginTop),
      marginRight: removeCSSvalues(style?.marginRight),
      marginBottom: removeCSSvalues(style?.marginBottom),
      marginLeft: removeCSSvalues(style?.marginLeft),
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
      name.includes("letterSpaci") ||
      name.includes("width") ||
      name.includes("height")
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
      <h3 className="text-base font-semibold text-gray-800">Image Styles</h3>

      {/* Source */}
      <Section title="Source">
        <div>
          <Label text="Image URL" />
          <div className="flex gap-1 ">
            <TextInput
              name="imageUrl"
              placeholder="https://example.com/image.png"
              value={link}
              onChange={(e) => setlink(e.target.value)}
            />
            <button
              className="bg-blue-600 p-1 cursor-pointer text-white text-[10px] font-bold rounded  "
              onClick={() => {
                if (activeBlock?.id && link) {
                  dispatch(
                    updateContent({ content: link, block_id: activeBlock?.id, type:"link" })
                  );
                }
              }}
            >
              {" "}
              Appy
            </button>
          </div>
        </div>
        {/* <div>
          <Label text="Alt Text" />
          <TextInput
            name="altText"
            placeholder="Descriptive alt text"
            value={names.altText}
            onChange={handleChange}
          />
        </div> */}
      </Section>

      {/* Size */}
      <Section title="Size">
        <div>
          <Label text="Width (px or %)" />
          <NumberInput
            name="width"
            placeholder="eg 200px"
            value={names.width}
            onChange={handleChange}
          />
        </div>
        <div>
          <Label text="Height (px or auto)" />
          <NumberInput
            name="height"
            placeholder="100px"
            value={names.height}
            onChange={handleChange}
          />
        </div>
      </Section>

      {/* Border */}
      <Section title="Border">
        <div>
          <Label text="Border Radius (px)" />
          <NumberInput
            name="borderRadius"
            placeholder="0"
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

      {/* Link
      <Section title="Link (Optional)">
        <div>
          <Label text="Image Link (URL)" />
          <TextInput
            name="imageLink"
            placeholder="https://example.com"
            value={names.imageLink}
            onChange={handleChange}
          />
        </div>
      </Section> */}

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

export default ImageStyleEditor;
