import React, { useState } from "react";
import { IndexPath, Layout, Select, SelectItem } from "@ui-kitten/components";

interface RoleSelectDropdownProps {
  selectedRole: "Donor" | "Volunteer";
  onSelectRole: (role: "Donor" | "Volunteer") => void;
}

const RoleSelectDropdown: React.FC<RoleSelectDropdownProps> = ({
  selectedRole,
  onSelectRole,
}) => {
  const roles = ["Donor", "Volunteer"];
  const initialIndex =
    roles.indexOf(selectedRole) >= 0 ? roles.indexOf(selectedRole) : -1;
  const [selectedIndex, setSelectedIndex] = useState<IndexPath>(
    new IndexPath(initialIndex)
  );

  const displayValue = selectedIndex.row >= 0 ? roles[selectedIndex.row] : "";

  const handleSelect = (index: IndexPath) => {
    setSelectedIndex(index);
    onSelectRole(roles[index.row]);
  };

  return (
    <Layout style={{ minHeight: 128 }}>
      <Select
        value={displayValue}
        selectedIndex={selectedIndex}
        onSelect={handleSelect}
        placeholder="Select user role"
      >
        {roles.map((role, index) => (
          <SelectItem key={index} title={role} />
        ))}
      </Select>
    </Layout>
  );
};

export default RoleSelectDropdown;
