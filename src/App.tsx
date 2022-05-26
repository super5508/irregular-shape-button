import {
  Divider,
  IconButton,
  OutlinedButton,
  FilledButton,
} from "./components";
import { ReactComponent as EditSvg } from "./assets/edit.svg";
import { ReactComponent as CopySvg } from "./assets/copy.svg";
import { ReactComponent as EyeSvg } from "./assets/eye.svg";
import { ReactComponent as TrashSvg } from "./assets/trash.svg";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <p>Hello World</p>
      <Divider />
      <div className="buttons-bar">
        <IconButton variant={1} onClick={() => alert("Button 1")}>
          <EditSvg />
        </IconButton>
        <IconButton variant={2} onClick={() => alert("Button 2")}>
          <CopySvg />
        </IconButton>
        <IconButton variant={3} onClick={() => alert("Button 3")}>
          <EyeSvg />
        </IconButton>
        <IconButton variant={4} onClick={() => alert("Button 4")}>
          <TrashSvg />
        </IconButton>
      </div>
      <Divider />
      <div className="buttons-bar">
        <OutlinedButton>Normal</OutlinedButton>
        <OutlinedButton leftIcon={<EditSvg />}>Edit</OutlinedButton>
        <OutlinedButton rightIcon={<TrashSvg />}>Delete</OutlinedButton>
        <OutlinedButton rightIcon={<TrashSvg />}>
          Lorem Ipsum Dolor Sit
        </OutlinedButton>
      </div>
      <Divider />
      <div className="buttons-bar-2">
        <OutlinedButton block>Normal</OutlinedButton>
        <OutlinedButton block leftIcon={<EditSvg />}>
          Edit
        </OutlinedButton>
        <OutlinedButton block rightIcon={<TrashSvg />}>
          Delete
        </OutlinedButton>
      </div>
      <Divider />
      <div className="buttons-bar">
        <FilledButton>Button</FilledButton>
        <FilledButton left={<EditSvg />}>Very Long Button</FilledButton>
        <FilledButton right={<EyeSvg />}>Button</FilledButton>
        <FilledButton>Button</FilledButton>
      </div>
    </div>
  );
}

export default App;
