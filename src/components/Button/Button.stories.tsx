import Button from "./Button";
import "../../index.css"

export default {
  title: "Button",
  component: Button,
};

export const main = (args: any) => (
    <Button {...args}>Log in</Button>
);
