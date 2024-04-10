import React from "react";
import CardComponent from "../../../components/CardComponent";
import SettingsEditForm from "./EditForm";
import SettingsDisplayOnly from "./DisplayOnly";

function Settings() {
  const formRef = React.useRef<HTMLFormElement>(null);
  const [isEditing, setIsEditing] = React.useState<boolean>(false);

  return (
    <CardComponent
      hasHeader
      headerTitle="Settings"
      headerBackgroundColor={(theme) => theme.palette.divider}
    >
      {isEditing ? (
        <SettingsEditForm setIsEditing={setIsEditing} formRef={formRef} />
      ) : (
        <SettingsDisplayOnly setIsEditing={setIsEditing} />
      )}
    </CardComponent>
  );
}

export default Settings;
